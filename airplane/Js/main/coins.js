/* Отвечает за монеты в игре */


class Coins
{
  boxCoins;
  
  arrCoins = [];

  speedRot = 0.003;
  speed = 0.015;

  reward = 1;   // значение одной монеты
  fuel = 2;     // на сколько увеличится энергия

  minDistСollision = 15;     // минимальное расстояние до столкновения с объектом
  maxdistBetweenObjs = 100;  // максимальное расстояние между объектами

  startAngle = (5*Math.PI)/3;  // откуда объект будет появлятся
  endAngle = (3*Math.PI)/2;    // где объект будет изчезать

  count = 0;

  radiusDist = 300;
  lenVector = 80;

  distForDrawGrp = 100;  // расстояние между нарисованной группой монет
  lastCreateGrp = 0;    // последняя созданная группа препятствий
  ratioSpeedDist = 50;  // отношение скорости к расстоянию


  /* ... */
  constructor()
  {
    this.boxCoins = new THREE.Object3D();
    this.boxCoins.name = "boxCoins";
    
    this.boxCoins.position.y = -(sea.radius/2);
    
    scene.scene.add(this.boxCoins);
  }

  /* /// */
  // setSpeed(n) { this.speed = n; }

  // /* /// */
  // getSpeed() { return this.speed; }

  /* /// */
  randomNum(min, max) { return min + Math.floor(Math.random() * max); }

  /* /// */
  createCoin()
  {
    let geometry = new THREE.TorusGeometry(3, 1.2, 20, 20);
    let material = new THREE.MeshPhongMaterial(
      {
        color: color.yellow,
        shininess: 0,               // блеск
        specular: 0xffffff,         // зеркальный
        shading: THREE.FlatShading  // затенени
      }
    );

    // вращать геометрию по оси Z
    geometry.applyMatrix(new THREE.Matrix4().makeRotationZ(Math.PI));

    let coin = new THREE.Mesh(geometry, material);
    coin.name = "coin";
    coin.castShadow = true;

    return {
      o: coin,
      a: NONE,
      d: NONE
    }
  }

  /* /// */
  drawCoins()
  {
    let nCoins = 1 + Math.floor(Math.random() * 10);
    let dist = this.radiusDist + airplane.spaceForAirplane + (-1 + Math.random() * 2) * (airplane.spaceForAirplane-25);
    let amplitude = 10 + Math.round(Math.random() * 10);

    // $(".tt").html("tt: "+dist);

    for (let i = 0; i < nCoins; ++i)
    {
      let coin = this.createCoin();

      coin.d = dist - Math.cos(i * 0.5) * amplitude;
      coin.a = -(i * 0.05);

      coin.o.position.x = Math.cos(coin.a) * coin.d;
      coin.o.position.y = this.radiusDist + Math.sin(coin.a) * coin.d;

      this.arrCoins.push(coin);
      this.boxCoins.add(coin.o);
    }
  }

  /* /// */
  rotCoins()
  {
    $(".quantityCoins").html("quantityCoins: "+this.boxCoins.children.length);

    for (let i = 0; i < this.arrCoins.length; ++i)
    {
      let obj = this.arrCoins[i];

      let coin = obj.o;

      if (airplane.checkFuelAirplane() && gui.tutorial.actv && !loop.pause)
        obj.a += dtg.gameSpeed.n * dtg.time.deltaTime * this.speed * dtg.speed;

      coin.position.x = Math.cos(obj.a) * obj.d;
      coin.position.y = Math.sin(obj.a) * obj.d;

      obj.x = coin.position.x;
      obj.y = coin.position.y;

      coin.rotation.y += Math.random() * 0.12;

      // $(".coinX").html("coinX: "+coin.position.x);
      // $(".coinY").html("coinY: "+coin.position.y);
      // $(".coinAngle").html("coinAngle: "+obj.a);
      // $(".coinDist").html("coinDist: "+obj.d);

      let tmp = coin.position.clone();
      if (tmp.y > 0)
        tmp.y -= this.radiusDist;
      
      if (airplane.checkFuelAirplane())
      {
        let posXYZ = airplane.currentObj.position.clone().sub(tmp);
        let d = posXYZ.length();

        if (d < this.minDistСollision)
        {
          particle.generation(tmp, 15, color.yellow, 0.8);

          airplane.fuelСonsumption(this.fuel, true);

          dtg.addCoinsUser(this.reward);

          this.boxCoins.remove(coin);
          this.arrCoins.splice(i, 1);
          i--;
        }
        else if (obj.a >= this.endAngle && obj.a < this.startAngle)
        {
          this.boxCoins.remove(coin);
          this.arrCoins.splice(i, 1);
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
      this.drawCoins();
    }
  }

  /* /// */
  deleteCoins()
  {
    this.boxCoins.remove(...this.boxCoins.children);
    this.arrCoins.splice(0);
  }

  /* /// */
  reset()
  {
    this.deleteCoins();

    this.lastCreateGrp = 0;

    $(".quantityCoins").html("quantityCoins: "+this.boxCoins.children.length);
  }
}