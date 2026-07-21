/* Отвечает за создание и управление препятствиями */


class Obst
{
  boxObsts;
  
  arrObst = [];

  speed = 0.02;

  damage = 20;

  minDistСollision = 15;  // минимальное расстояние до столкновения с объектом

  startAngle = 0;      // откуда объект будет появлятся
  endAngle = Math.PI;  // где объект будет изчезать

  radiusDist = sea.radius/2;  // радиус окружности

  distForDrawGrp = 30;    // расстояние между нарисованной группы препятствий
  lastCreateGrp = 0;      // последняя созданная группа препятствий


  /* ... */
  constructor()
  {
    this.boxObsts = new THREE.Object3D();
    this.boxObsts.name = "boxObsts";
    
    this.boxObsts.position.y = -(sea.radius/2);
    
    scene.scene.add(this.boxObsts);
  }

  /* /// */
  // setSpeed(n) { this.speed = n; }

  /* /// */
  // getSpeed() { return this.speed; }

  /* /// */
  randomNum(min, max) { return min + Math.floor(Math.random() * max); }

  /* /// */
  createObst()
  {
    let sz = this.randomNum(6, 4)
    let form = this.randomNum(1, 2)

    let geometry = new THREE.TetrahedronGeometry(sz, form);
    let material = new THREE.MeshPhongMaterial(
      {
        color: color.red,
        shininess: 0,               // блеск
        specular: 0xffffff,         // зеркальный
        shading: THREE.FlatShading  // затенени
      }
    );

    // вращать геометрию по оси Z
    geometry.applyMatrix(new THREE.Matrix4().makeRotationZ(Math.PI));

    let obst = new THREE.Mesh(geometry, material);
    obst.name = "obst";
    obst.castShadow = true;

    return {
      o: obst,
      a: NONE,
      d: NONE,
      smart: false,                                // умное препятствие
      posTargetY: airplane.currentObj.position.y,  // позиция для столкновения с целью
    }
  }

  /* /// */
  drawObsts()
  {
    let smartNum = Math.floor(Math.random() * dtg.level);

    for (let i = 0; i < dtg.level; ++i)
    {
      let obst = this.createObst();

      obst.d = this.radiusDist + airplane.spaceForAirplane + (-1 + Math.random() * 2) * (airplane.spaceForAirplane-20);
      obst.a = -(i * 0.2);

      obst.o.position.x = Math.cos(obst.a) * obst.d;
      obst.o.position.y = this.radiusDist + Math.sin(obst.a) * obst.d;

      if (i == smartNum)
        obst.smart = true;

      this.arrObst.push(obst);
      this.boxObsts.add(obst.o);
    }
  }

  /* /// */
  rotObsts()
  {
    $(".quantityObst").html("quantityObst: "+this.boxObsts.children.length);

    for (let i = 0; i < this.arrObst.length; ++i)
    {
      let obj = this.arrObst[i];

      let obst = obj.o;

      if (airplane.checkFuelAirplane() && gui.tutorial.actv && !loop.pause)
        obj.a += dtg.gameSpeed.n * dtg.time.deltaTime * this.speed * dtg.speed;

      if (obj.a > Math.PI*2)
        obj.a -= Math.PI*2;

      obst.position.x = Math.cos(obj.a) * obj.d;
      obst.position.y = Math.sin(obj.a) * obj.d;

      if (obj.smart && obj.a <= this.endAngle && obj.a >= this.startAngle)
        obst.position.y = obj.posTargetY + Math.sin(obj.a) * this.radiusDist;

      obst.rotation.z += Math.random() * 0.1;
      obst.rotation.y += Math.random() * 0.1;

      // $(".obstX").html("obstX: "+obst.position.x);
      // $(".obstY").html("obstY: "+obst.position.y);
      // $(".angle").html("angle: "+obj.a);
      // $(".dist").html("dist: "+obj.d);

      let tmp = obst.position.clone();
      if (tmp.y > 0)
        tmp.y -= this.radiusDist;

      if (airplane.checkFuelAirplane())
      {
        let posXYZ = airplane.currentObj.position.clone().sub(tmp);
        let d = posXYZ.length();

        if (d < this.minDistСollision)
        {        
          particle.generation(tmp, 15, color.red, 3);

          airplane.fuelСonsumption(this.damage);

          airplane.collisionActv = true;
          airplane.collisionSpeed.x = 100 * posXYZ.x / d;
          airplane.collisionSpeed.y = 100 * posXYZ.y / d;
          scene.ambientLight.o.intensity = 2;

          this.boxObsts.remove(obst);
          this.arrObst.splice(i, 1);
          i--;
        }
        else if (obj.a >= this.endAngle)
        {
          this.boxObsts.remove(obst);
          this.arrObst.splice(i, 1);
          i--;
        }
      }
    }
  }

  /* /// */
  checkDistForDrawObst()
  {
    let countDTr = Math.floor(dtg.countDistTraveled);
    if (countDTr % this.distForDrawGrp == 0 && countDTr > this.lastCreateGrp)
    {
      this.lastCreateGrp = countDTr;
      this.drawObsts();
    }
  }

  /* /// */
  deleteObsts()
  {
    this.boxObsts.remove(...this.boxObsts.children);
    this.arrObst.splice(0);
  }

  /* /// */
  reset()
  {
    this.deleteObsts();

    this.lastCreateGrp = 0;

    $(".quantityObst").html("quantityObst: "+this.boxObsts.children.length);
  }
}