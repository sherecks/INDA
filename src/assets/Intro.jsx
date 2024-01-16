import React from "react";
import * as THREE from "../three.module";
import { OrbitControls } from "../OrbitControls";
import { useRef, useEffect } from "react";
import { GLTFLoader } from "../GLTFLoader";


export function Intro() {

    const containerRef = useRef();
    const rendererRef = useRef();
    const controlsRef = useRef();

    let scene, camera, renderer, controls;
    let ambientLight, directionalLight, directionalLight2

    useEffect(() => {

        //Camera
        scene = new THREE.Scene();

        scene.background = new THREE.Color( 0x060E2E );

        const size = 25;
        const divisions = 55;
        
        const gridHelper = new THREE.GridHelper(size, divisions);
        gridHelper.rotation.x = Math.PI / 2; 
        scene.add(gridHelper);

        camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
            camera.position.set(0, 0, 5);

        // Criar uma luz ambiente
        ambientLight = new THREE.AmbientLight(0x404040, 1);
        scene.add(ambientLight);

        directionalLight = new THREE.DirectionalLight(0xffffff, 3.8);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        directionalLight2 = new THREE.DirectionalLight(0xffffff, 3.8);
        directionalLight2.position.set(-3, -3, -3);
        scene.add(directionalLight2);
    
        function onWindowResize() {
            renderer.setSize(innerWidth, innerHeight);
            camera.aspect = (innerWidth) / (innerHeight);
            camera.updateProjectionMatrix();

            loadObjectBasedOnScreenSize();
        }

        window.addEventListener('resize', onWindowResize);

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
        renderer.setSize(innerWidth, innerHeight);
        camera.aspect = innerWidth / innerHeight;
        camera.updateProjectionMatrix();
        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;
        controlsRef.current = controls;

        function loadObjectTest(gltfPath, scaleFactor, position, initialRotation, scene) {
            const loader = new GLTFLoader().setPath('/tshirt/');
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

        let loadedMobileObject = false;
        function loadVideoFallback() {
          // Coloque aqui a lógica para carregar um vídeo de fallback
          console.log("Carregar um vídeo ou foto de fallback");
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

        // Screen Size!!!
        function loadObjectBasedOnScreenSize() {
          const screenSizeLimit = 768; // Define o limite de largura da tela para dispositivos móveis
          
          if (window.innerWidth < screenSizeLimit && !loadedMobileObject) {
            scene.children.forEach((object) => {
              if (object.type === 'Group') {
                scene.remove(object);
              }
            });
            // Carregue o objeto desejado para dispositivos móveis
            let loadedObject01 = loadObjectTest('./Imagens/outkast.gltf', 1.8, new THREE.Vector3(0, -1.4, 0), 0, scene);
            loadedMobileObject = true;
          } else if (window.innerWidth >= screenSizeLimit) {
            if (isGraphicsCapabilitySufficient()) {
              scene.children.forEach((object) => {
                if (object.type === 'Group') {
                  scene.remove(object);
                }
              });
        
              let loadedObject = loadObjectTest('./Imagens/outkast.gltf', 1.8, new THREE.Vector3(0, -2.1, 0), 0, scene);

              loadedMobileObject = false;
            } else {
              loadVideoFallback();
            }
          }
        }

        // Chame a função quando a página for carregada e redimensionada!!!
        window.addEventListener('load', loadObjectBasedOnScreenSize);
        window.addEventListener('resize', loadObjectBasedOnScreenSize);

        // Controles
        controls.enableRotate = false;
        controls.enableZoom = false;
  
        // Animate
        function animate() {

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
            <div className="flex items-center justify-center w-full h-full">
                <div ref={containerRef} className="mx-auto m-4"></div>
            </div>
        </div>
    );
}