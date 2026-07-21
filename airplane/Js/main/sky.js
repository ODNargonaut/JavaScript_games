/* Создание неба */


class Sky
{
  boxClouds;  // контейнер с облоками
  
  speedRotSky = 0.0015;  // скорость вращения неба
  speedRotCl = 0.002;    // скорость вращения частей у облока

  quantityClunds = 22;


  /* ... */
  constructor()
  {
    this.createClounds();
    this.boxClouds.position.y = -600;
    scene.scene.add(this.boxClouds);
  }

  /* /// */
  setSpeed(n) { this.speedRotSky = n; }

  /* /// */
  getSpeed() { return this.speedRotSky; }

  /* /// */
  createCloud()
  {
    let boxCloud = new THREE.Object3D();
    boxCloud.name = "cloud";

    let geomenty = new THREE.BoxGeometry(20, 20, 20);
    let material = new THREE.MeshPhongMaterial({ color: color.white });
    
    let quantityCube = 3 + Math.floor(Math.random() * 4);

    for (let i = 0; i < quantityCube; ++i)
    {
      let cloud = new THREE.Mesh(geomenty, material);
      cloud.name = "cube";

      cloud.position.x = i*15;
      cloud.position.y = Math.random()*10;
      cloud.position.z = Math.random()*10;

      cloud.rotation.y = Math.random()*Math.PI/2;
      cloud.rotation.z = Math.random()*Math.PI/2;

      let sizeCube = 0.1 + Math.random() * 0.9;
      cloud.scale.set(sizeCube, sizeCube, sizeCube);

      cloud.castShadow = true;
      cloud.receiveShadow = true;

      boxCloud.add(cloud);
    }

    return boxCloud;
  }

  createClounds()
  {
    this.boxClouds = new THREE.Object3D();
    this.boxClouds.name = "boxClund";
    
    // чтобы равномерно распределить облока,
    // необходимо разместить их по одинаковым углом
    let angleCloud = Math.PI*2 / this.quantityClunds;

    for (let i = 0; i < this.quantityClunds; ++i)
    {
      let cloud = this.createCloud();

      // задаем поворот и положение каждого облока
      let angle = angleCloud * i;
      let dist = 750 + Math.random() * 200;  // расстояние между оси и самим облоком

      cloud.position.x = Math.cos(angle) * dist;
      cloud.position.y = Math.sin(angle) * dist;
      cloud.position.z = -400 - Math.random() * 400;

      cloud.rotation.z = angle + Math.PI/2;

      let sizeCloud = 1 + Math.random() * 2;
      cloud.scale.set(sizeCloud, sizeCloud, sizeCloud);

      this.boxClouds.add(cloud);
    }
  }

  /* /// */
  rotSky()
  {
    if (airplane.checkFuelAirplane() && gui.tutorial.actv && !loop.pause)
      this.boxClouds.rotation.z += dtg.baseSpeed.n * this.speedRotSky * dtg.time.deltaTime * dtg.speed;

    if (this.boxClouds.rotation.z > 2*Math.PI)
      this.boxClouds.rotation.z -= 2*Math.PI;

    this.rotCloud();
  }

  /* /// */
  rotCloud()
  {
    let quantityClouds = this.boxClouds.children.length;

    for (let cld = 0; cld < quantityClouds; ++cld)
    {
      let o = this.boxClouds.children[cld];
      let quantityCubes = o.children.length;

      for (let cb = 0; cb < quantityCubes; ++cb)
      {
        let cube = o.children[cb];
        cube.rotation.z += dtg.baseSpeed.n * Math.random() * this.speedRotCl * dtg.time.deltaTime;
        cube.rotation.y += dtg.baseSpeed.n * Math.random() * this.speedRotCl * dtg.time.deltaTime;
      }
    }
  }
}