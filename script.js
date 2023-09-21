import { Mesh } from './node_modules/three/build/three.module.js';
import * as THREE from './node_modules/three/build/three.module.js';


let scene, camera, renderer, box, boxForm;
        
init();
function init(){
    // Create a scene
    scene = new THREE.Scene();

    //Create a Camera and set position
    camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight, 0.1 ,1000);
    camera.position.z = 8;
    camera.position.y = 2;
    camera.position.x = 1;
    //or set the positions all at once
    //camera.position.set(0, 2, 5);

    // CREATE X Y Z AXES and add to the scene
    const axes = new THREE.AxesHelper(5);
    scene.add(axes);

    //Create a box
    box = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), new THREE.MeshNormalMaterial({ vertexColors: THREE.FaceColors }));
    scene.add(box);

    //Create a renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //Run the renderer in a loop
    renderer.setAnimationLoop(animate);
}

function animate() {
    box.rotation.y += 0.01;
    box.rotation.x += 0.01;
    renderer.render(scene, camera);
}

