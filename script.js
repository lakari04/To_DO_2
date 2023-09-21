import * as THREE from './node_modules/three/build/three.module.js';


let scene, camera, renderer;
        
init();
function init(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight, 1 ,1000);
    camera.position.z = 1;
    camera.rotation.x = Math.PI/2;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    animate();
}
console.log(THREE);

function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
