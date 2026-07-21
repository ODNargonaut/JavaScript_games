/* Отвечает за создание моря */


class Sea
{
  _sea;

  radius = 600;     // размер окружности
  h = 800;
  radiusSeg = 40;    // кол-во сегментов в окружности
  HSeg = 10;         // кол-во сегментов в высоте
  
  speedRot = 0.0015;

  wave = [];


  /* ... */
  constructor()
  {
    this.creatSea();

    this._sea.name = "sea";
    this._sea.position.y = -600;
    
    scene.scene.add(this._sea);
  }

  /* /// */
  setSpeed(n) { this.speedRot = n; }

  /* /// */
  getSpeed() { return this.speedRot; }

  /* /// */
  creatSea()
  {
    let geometry = new THREE.CylinderGeometry(this.radius, this.radius, this.h, this.radiusSeg, this.HSeg);
    let material = new THREE.MeshPhongMaterial(
      {
        color: color.blue,
        transparent: true,
        opacity: 0.8,
        shading: THREE.FlatShading
      });

    // объединяем вершины
    geometry.mergeVertices();
    
    // вращать геометрию по оси X
    geometry.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));

    for (let i = 0; i < geometry.vertices.length; ++i)
    {
      let vertice = geometry.vertices[i];

      this.wave.push(
        {
          x: vertice.x,
          y: vertice.y,
          z: vertice.z,
          angle: Math.random() * Math.PI * 2,
          dist: 5 + Math.random() * 15,
          speed: 0.016 + Math.random() * 0.032
        }
      );
    }
    
    this._sea = new THREE.Mesh(geometry, material);

    this._sea.receiveShadow = true;
  }

  /* /// */
  rotSea()
  {
    if (airplane.checkFuelAirplane() && gui.tutorial.actv && !loop.pause)
      this._sea.rotation.z += dtg.baseSpeed.n * this.speedRot * dtg.time.deltaTime * dtg.speed;
    
    if (this._sea.rotation.z > 2*Math.PI)
      this._sea.rotation.z -= 2*Math.PI;

    this.moveWave();
  }

  /* /// */
  moveWave()
  {
    let vertices = this._sea.geometry.vertices;
    let quantityVertices = vertices.length;

    for (let i = 0; i < quantityVertices; ++i)
    {
      let vertice = vertices[i];
      let wave = this.wave[i];

      // обновляем позицию вершин
      vertice.x = wave.x + Math.cos(wave.angle) * wave.dist;
      vertice.y = wave.y + Math.sin(wave.angle) * wave.dist;

      wave.angle += wave.speed * dtg.time.deltaTime * 0.09;
    }

    // сообщить рендереру, что геометрия моря изменилась
    this._sea.geometry.verticesNeedUpdate = true;
  }
}