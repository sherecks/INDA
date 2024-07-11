import React from "react";
import * as THREE from "../three.module";
import { OrbitControls } from "../OrbitControls";
import { useRef, useEffect } from "react";
import { GLTFLoader } from "../GLTFLoader";
import Stats from "../stats.module";
import { useMediaQuery } from 'react-responsive';
import '../style/Intro.css'

export function Intro() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1024px)'
    });

    const containerRef = useRef();
    const rendererRef = useRef();
    const controlsRef = useRef();

    useEffect(() => {
        if (!isDesktopOrLaptop) {
            return; // Early return if it's not desktop or laptop
        }

        // Camera
        let scene = new THREE.Scene();
        scene.background = new THREE.Color(0x060E2E);

        const percentageWidth = 68; // 80% da largura da tela
        const percentageHeight = 68; // 60% da altura da tela

        const width = (window.innerWidth * percentageWidth) / 100;
        const height = (window.innerHeight * percentageHeight) / 100;

        const size = 25;
        const divisions = 55;
        
        const gridHelper = new THREE.GridHelper(size, divisions);
        gridHelper.rotation.x = Math.PI / 2;
        scene.add(gridHelper);

        let camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.set(0, 2, 5);

        // Criar uma luz ambiente
        let ambientLight = new THREE.AmbientLight(0x404040, 1);
        scene.add(ambientLight);

        let directionalLight = new THREE.DirectionalLight(0xffffff, 3.8);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        let directionalLight2 = new THREE.DirectionalLight(0xffffff, 3.8);
        directionalLight2.position.set(-3, -3, -3);
        scene.add(directionalLight2);

        // Renderer
        let pixelRatio = window.devicePixelRatio;
        let AA = true;
        if (pixelRatio > 1) {
            AA = false;
        }

        let renderer = new THREE.WebGLRenderer({
            antialias: AA,
            powerPreference: "high-performance",
        });

        let controls = new OrbitControls(camera, renderer.domElement);
        
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
          
              mesh.scale.set(scaleFactor, scaleFactor, scaleFactor);
              mesh.position.copy(position);
              mesh.rotation.set(0, initialRotation, 0);
          
              scene.add(mesh);
          
              animateRotation(mesh);
            });
        }

        // Graphics
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

        function isGraphicsCapabilitySufficient() {
          if (!gl) {
            console.log("WebGL não é suportado");
            return false;
          }
        
          const requiredExtension = 'OES_texture_float';
          const extensionSupported = gl.getExtension(requiredExtension) !== null;
        
          const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
          const minRequiredTextureSize = 512;
        
          if (extensionSupported && maxTextureSize >= minRequiredTextureSize) {
            console.log("OK - Capacidade gráfica é suficiente");
            return true;
          } else {
            console.log("A capacidade gráfica não é suficiente");
            return false;
          }
        }
        window.addEventListener('load', isGraphicsCapabilitySufficient);

        // Object
        loadObjectTest('outkast.gltf', 2, new THREE.Vector3(0, -2.1, 1.4), 0, scene);

        function onWindowResize() {
            const aspectRatio = window.innerWidth / window.innerHeight;
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = aspectRatio;
            camera.updateProjectionMatrix();
        }

        window.addEventListener('resize', onWindowResize);

        // Controls
        controls.enableRotate = false;
        controls.enableZoom = false;
        controls.enablePan = false;
  
        // Animate
        function animate() {
            controls.update();
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }

        animate();

        return () => {
            if (containerRef.current && rendererRef.current) {
                containerRef.current.removeChild(rendererRef.current.domElement);
            }
            if (controlsRef.current) {
                controlsRef.current.dispose();
            }
            window.removeEventListener('resize', onWindowResize);
            window.removeEventListener('load', isGraphicsCapabilitySufficient);
        };
    }, [isDesktopOrLaptop]);

    return isDesktopOrLaptop ? (
        <div>
            <div className="unico">
                <div ref={containerRef}></div>
            </div>
        </div>
    ) : null;
}