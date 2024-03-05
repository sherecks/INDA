import React from "react";
import * as THREE from "../three.module";
import { OrbitControls } from "../OrbitControls";
import { useRef, useEffect } from "react";
import { GLTFLoader } from "../GLTFLoader";
import Stats from "../stats.module";
import '../style/Intro.css'

export function Intro() {

    const containerRef = useRef();
    const rendererRef = useRef();
    const controlsRef = useRef();

    let scene, camera, renderer, controls;
    let ambientLight, directionalLight, directionalLight2

    const stats = new Stats()
    stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom

    useEffect(() => {

        //Camera
        scene = new THREE.Scene();

        scene.background = new THREE.Color( 0x060E2E );

        const percentageWidth = 68; // 80% da largura da tela
        const percentageHeight = 68; // 60% da altura da tela

        const width = (window.innerWidth * percentageWidth) / 100;
        const height = (window.innerHeight * percentageHeight) / 100;

        const size = 25;
        const divisions = 55;
        
        const gridHelper = new THREE.GridHelper(size, divisions);
        gridHelper.rotation.x = Math.PI / 2; 
        scene.add(gridHelper);

        camera = new THREE.PerspectiveCamera(
            45,
            window.width / window.height,
            0.1,
            1000
        );
            camera.position.set(0, 2, 5);

        // Criar uma luz ambiente
        ambientLight = new THREE.AmbientLight(0x404040, 1);
        scene.add(ambientLight);

        directionalLight = new THREE.DirectionalLight(0xffffff, 3.8);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        directionalLight2 = new THREE.DirectionalLight(0xffffff, 3.8);
        directionalLight2.position.set(-3, -3, -3);
        scene.add(directionalLight2);

        // Renderer
        let pixelRatio = window.devicePixelRatio
        let AA = true
        if (pixelRatio > 1) {
            AA = false
        }

        renderer = new THREE.WebGLRenderer({
            antialias: AA,
            powerPreference: "high-performance",
        });

        controls = new OrbitControls(camera, renderer.domElement);
        
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;
        controlsRef.current = controls;

        function animateRotation(object) {
            const rotationSpeed = 0.004;
            let direction = 1;
          
            const animate = () => {
              object.rotation.y += direction * rotationSpeed;
          

              requestAnimationFrame(animate);
            };
          
            animate();
        }

        function loadObjectTest(gltfPath, scaleFactor, position, initialRotation, scene) {
            const loader = new GLTFLoader().setPath('./src/assets/Imagens/');
            loader.load(gltfPath, (gltf) => {
              const mesh = gltf.scene;
          
              // Configure a escala, posição e rotação com base nos parâmetros
              mesh.scale.set(scaleFactor, scaleFactor, scaleFactor);
              mesh.position.copy(position);
              mesh.rotation.set(0, initialRotation, 0); // Defina a rotação inicial no eixo Y
          
              scene.add(mesh);
          
              animateRotation(mesh);
            });
        }

        // Graphics!!!
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

        function isGraphicsCapabilitySufficient() {
          if (!gl) {
            console.log("WebGL não é suportado");
            return false;
          }
        
          const requiredExtension = 'OES_texture_float';
          const extensionSupported = gl.getExtension(requiredExtension) !== null;
        
          // Verifique a potência da GPU (neste exemplo, verifica o tamanho máximo de textura suportado)
          const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
          const minRequiredTextureSize = 512; // Tamanho mínimo de textura necessário
        
          if (extensionSupported && maxTextureSize >= minRequiredTextureSize) {
            console.log("OK - Capacidade gráfica é suficiente");
            return true;
          } else {
            console.log("A capacidade gráfica não é suficiente");
            return false;
          }
        }
        window.addEventListener('load', isGraphicsCapabilitySufficient);

        // Objeto
        loadObjectTest('outkast.gltf', 2, new THREE.Vector3(0, -2.1, 1.4), 0, scene);

        function onWindowResize() {
            const aspectRatio = window.width / window.height;
            renderer.setSize(window.width, window.height);
            camera.aspect = aspectRatio;
            camera.updateProjectionMatrix();
        }

        window.addEventListener('resize', onWindowResize);

        // Controles
        controls.enableRotate = false;
        controls.enableZoom = false;
        controls.enablePan = false;
  
        // Animate
        function animate() {

            controls.update();

            stats.begin(); 
            stats.end();

            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }

        animate();

    // Limpeza quando o componente é desmontado
    return () => {
        containerRef.current.removeChild(rendererRef.current.domElement);
        controlsRef.current.dispose();
    };
    }, []);
    

    return (
        <div>
            <div className="unico">
                <div ref={containerRef}></div>
            </div>
        </div>
    );
}