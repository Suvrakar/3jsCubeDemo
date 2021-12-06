<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>My first three.js app</title>
		<style>
			body { margin: 0; }
		</style>
	</head>
	<body>
		<script src="js/three.js"></script>
		<script>
			
			const texture = new THREE.TextureLoader();
			
			texture.load( 'https://3stech.com.bd/static/images/brand.png',
			(t) => {
				const scene = new THREE.Scene();
				const material = new THREE.MeshBasicMaterial({ map: t, side: THREE.DoubleSide});
			
				const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			const renderer = new THREE.WebGLRenderer({alpha: true});
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			const geometry = new THREE.BoxGeometry();
			
			material.opacity = 0.5;
			material.transparent = true;

			const cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 2;

			const animate = function () {
				requestAnimationFrame( animate );

				// cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render( scene, camera );
		 
				

			};




			animate();
			
			});

			
			
			
		</script>
	</body>
</html>