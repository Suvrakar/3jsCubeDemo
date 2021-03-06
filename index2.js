var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.shadowMapEnabled = true; //Shadow
renderer.shadowMapSoft = true; // Shadow
renderer.shadowMapType = THREE.PCFShadowMap; //Shadow

document.body.appendChild(renderer.domElement);

// Define Geometry
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshPhongMaterial({ // Required For Shadows
  color: 0xecebec,
  specular: 0x000000,
  shininess: 100
});

//Cube
var cube = new THREE.Mesh(geometry, material);
cube.position.y = 0.8;
cube.castShadow = true;
cube.receiveShadow = true;
scene.add(cube);
camera.position.z = 3;
camera.position.y = .8;
camera.position.x = 0;

// Floor
var floorGeometry = new THREE.PlaneGeometry(100, 100, 20, 20);
var floorMaterial = new THREE.MeshPhongMaterial({
  color: 0xecebec,
  specular: 0x000000,
  shininess: 0
});

var floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -0.5 * Math.PI;
floor.receiveShadow = true;
scene.add(floor);

// Lights
// Ambient light for general illumination
var ambientLight = new THREE.AmbientLight(0x090909, 5);
scene.add(ambientLight);

// pointlight for specific illumination
const light = new THREE.PointLight( 0xff0000, 1, 100 );
light.position.set( 50, 50, 50 );

light.castShadow = true;
// spotLight.shadowBias = 0.0001;
// spotLight.shadowDarkness = 0.2;
// spotLight.shadowMapWidth = 2048; // Shadow Quality
// spotLight.shadowMapHeight = 2048; // Shadow Quality
scene.add(light);

// Render Loop
function render() {
  requestAnimationFrame(render);

  cube.rotation.y += 0.02; //spin cube
  renderer.render(scene, camera);
}
render();
