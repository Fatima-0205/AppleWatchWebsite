import * as THREE from 'https://esm.sh/three@0.160.0';
import { OrbitControls } from 'https://esm.sh/three@0.160.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://esm.sh/three@0.160.0/examples/jsm/loaders/GLTFLoader.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xf5f5f5, 1);
document.body.appendChild(renderer.domElement);
const light = new THREE.HemisphereLight(0xffffff, 0x444444, 2);
scene.add(light);
const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(5, 10, 7);
scene.add(directionalLight);
const loader = new GLTFLoader();
let watch = null;
loader.load('./SE.glb', (gltf) => {
    watch = gltf.scene;
    watch.scale.set(14, 14, 14);
    watch.position.set(0, 0, 0);
    scene.add(watch);
});
camera.position.set(0, 0, 3);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enableZoom = false;

function animate() {
    requestAnimationFrame(animate);
    if (watch) { watch.rotation.y += 0.01; }
    controls.update();
    renderer.render(scene, camera);
}
animate();
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
const selectedColorLabel = document.createElement('div');
selectedColorLabel.id = 'selected-color-label';
selectedColorLabel.innerText = 'Selected: None';
document.getElementById('color-panel').insertBefore(selectedColorLabel, document.querySelector('.colors-container'));
document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', () => {
        const selectedColor = option.getAttribute('data-color');
        const selectedName = option.getAttribute('data-name');
        document.querySelectorAll('.color-option').forEach(option =>
            option.classList.remove('selected'));
        option.classList.add('selected');
        selectedColorLabel.innerText = `Selected: ${selectedName}`;
        selectedColorLabel.style.color = selectedColor;
        if (watch) {
            watch.traverse((child) => {
                if (child.isMesh) {
                    child.material.color.set(selectedColor);
                }
            });
        }
    });
});