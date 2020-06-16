//Scene
var scene = new THREE.Scene();

//Camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 10;

//Renderer
var renderer = new THREE.WebGLRenderer({antialias: true}); 
renderer.setSize(window.innerWidth, window.innerHeight); document.body.appendChild(renderer.domElement);

//Textures
var starTexture1 = new THREE.TextureLoader().load("dyingstar.png");
var starTexture2 = new THREE.TextureLoader().load("bluestar.png");
var starTexture3 = new THREE.TextureLoader().load("dwarfstar.png");

//Stars
var stars1 = [];

for (let i = 0; i < 150; i++) {
  let geometry = new THREE.SphereGeometry(0.075, 0.075, 0.075);
  let material = new THREE.MeshBasicMaterial({map: starTexture1});
  let star = new THREE.Mesh(geometry, material);
  star.position.set(getRandom(), getRandom(), getRandom());
  star.material.side = THREE.DoubleSide;
  stars1.push(star);
}

for (let j = 0; j < stars1.length; j++) {
  scene.add( stars1[j] );
}

var stars2 = [];

for (let i = 0; i < 125; i++) {
  let geometry = new THREE.SphereGeometry(0.065, 0.065, 0.065);
  let material = new THREE.MeshBasicMaterial({map: starTexture2});
  let star = new THREE.Mesh(geometry, material);
  star.position.set(getRandom(), getRandom(), getRandom());
  star.material.side = THREE.DoubleSide;
  stars2.push(star);
}

for (let j = 0; j < stars2.length; j++) {
  scene.add( stars2[j] );
}

var stars3 = [];

for (let i = 0; i < 100; i++) {
  let geometry = new THREE.SphereGeometry(0.05, 0.05, 0.05);
  let material = new THREE.MeshBasicMaterial({map: starTexture3});
  let star = new THREE.Mesh(geometry, material);
  star.position.set(getRandom(), getRandom(), getRandom());
  star.material.side = THREE.DoubleSide;
  stars3.push(star);
}

for (let j = 0; j < stars3.length; j++) {
  scene.add( stars3[j] );
}

//Randomization
function getRandom() {
  var num = Math.floor(Math.random()*10) + 1;
  num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
  return num;
}

//Composer
var composer = new THREE.EffectComposer(renderer);

//Passes
var renderPass = new THREE.RenderPass(scene, camera);
composer.addPass(renderPass);

var pass1 = new THREE.BloomPass();
composer.addPass(pass1);
pass1.renderToScreen = true;

//Animation/Render
render();

function render() {
  composer.render();
  requestAnimationFrame(render);
}

render();