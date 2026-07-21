/* Отвечает за создание самолетов */


class Airplane
{
  nameModel = "airplane";

  currentObj;  // текущий выбранный самолет

  speed = 0.006;

  speedY = 0.006;
  rotZ = 0.0128;
  rotX = 0.0064;

  fallSpeed = {byDefault: 0.001, n: 0};  // скорость падения

  offsetModel = {x: 0, y: 100};  // смещение модели
  sizeModel = 0.25;              // размер модели

  // min/max смещение мыши в пределах экрана
  offsetMouse = 
  {
    min: {x: -100, y: 25},
    max: {x: 100, y: 175}
  };

  ratioSpeedDist = 50;     // отношение скорости к расстоянию

  spaceForAirplane = 100;  // зазор для самолета между препятствиями

  collisionSpeed = {x: 0, y: 0};  // скорость столкновения

  collisionOffset = {x: 0, y: 0};  // cмещение при столкновении
  collisionActv = false;           // активируется, когда объект столкнется с препятствием

  fuel = 
  {
    idElm: ".fuel",
    idElmConst: ".constantFuel",
    total: 300, // 300
    current: 0,
    forHtmlElm: 0,
    forHtmlElmTotal: 0,
    pnm: 0,

    speedСonsumption: 0.01,  // скорость расхода топлива, // 0.01
    ratioSpeedDist: 3,       // отношение скорости к расстоянию

    color: 
    {
      many: "#3EDAE8",  // много
      half: "#dedb0d",  // половина
      few:  "#de290d"   // мало
    }
  };


  /* ... */
  constructor()
  {
    this.fallSpeed.n = this.fallSpeed.byDefault;
    this.collisionSpeed.x = this.collisionSpeed.y = 0;
    this.collisionOffset.x = this.collisionOffset.y = 0;

    this.initialFuel();
  }

  /* /// */
  start()
  {
    if (scene.scene.getObjectByName(this.nameModel) == undefined && this.checkFuelAirplane())
    {
      this.currentObj = sAir.getModel();

      this.currentObj.scale.set(this.sizeModel, this.sizeModel, this.sizeModel);
      this.currentObj.position.y = this.offsetModel.y;

      scene.scene.add(this.currentObj);
    }
  }

  /* /// */
  initialFuel()
  {
    this.fuel.current = this.fuel.total;
    this.fuel.forHtmlElmTotal = $(this.fuel.idElmConst).width();
    this.fuel.forHtmlElm = this.fuel.forHtmlElmTotal;

    // $(".Fuel").html("Fuel: "+this.fuel.current);
  }

  /* /// */
  updateFuel()
  {
    let pnm = this.fuel.pnm;

    let forHtmlElmTotal = $(this.fuel.idElmConst).width();

    this.fuel.forHtmlElmTotal = forHtmlElmTotal;
    let r = (forHtmlElmTotal + (forHtmlElmTotal * pnm) / 100);

    if (r > forHtmlElmTotal)
      r = forHtmlElmTotal;
    else if (r < 0)
      r = 0;

    this.fuel.forHtmlElm = r
        
    $(this.fuel.idElm).width(this.fuel.forHtmlElm);
  }

  /* /// */
  setSpeed(n) { this.speed = n; }

  /* /// */
  getSpeed() { return this.speed; }

  /* /// */
  moveAirplane()
  {
    if ( gui.interface.list["game"] && 
         scene.scene.getObjectByName(this.nameModel) && this.checkFuelAirplane() )
    {
      // перемещаем самолет, в зависимости от положения мыши 
      let x = 0;
      //x = normalize(mouse.x, -1, 1, this.offsetMouse.min.x, this.offsetMouse.max.x);
      let y = normalize(mouse.y, -0.75, 0.75, this.offsetMouse.min.y, this.offsetMouse.max.y);

      this.collisionOffset.x += this.collisionSpeed.x;
      this.collisionOffset.y += this.collisionSpeed.y;

      x += this.collisionOffset.x;
      y += this.collisionOffset.y;

      // перемещаем самолет на каждом кадре, добавляя часть оставшегося расстояния.
      this.currentObj.position.y += (y - this.currentObj.position.y) * dtg.time.deltaTime * this.speedY;
      this.currentObj.position.x += (x - this.currentObj.position.x) * dtg.time.deltaTime * this.speedY;

      // $(".airplaneX").html("airplaneX: "+this.currentObj.position.x);
      // $(".airplaneY").html("airplaneY: "+this.currentObj.position.y);

      // не много вращаем при перемещении по оси Y
      this.currentObj.rotation.z = (y - this.currentObj.position.y) * this.rotZ;
      this.currentObj.rotation.x = (this.currentObj.position.y - y) * this.rotX;

      // отдаляем или приближаем камеру
      // scene.camera.fov = normalize(mouse.x, -1, 1, 40, 80);
      // scene.camera.updateProjectionMatrix();

      // слежение камеры за объектом
      let camSensivity = 0.002;  // чувствительность камеры
      scene.camera.position.y += (this.currentObj.position.y - scene.camera.position.y) * dtg.time.deltaTime * camSensivity;

      // отскок по осям X/Y при столкновении с врагом
      this.collisionSpeed.x += (0 - this.collisionSpeed.x) * dtg.time.deltaTime * 0.03;
      this.collisionOffset.x += (0 - this.collisionOffset.x) * dtg.time.deltaTime * 0.01;

      this.collisionSpeed.y += (0 - this.collisionSpeed.y) * dtg.time.deltaTime * 0.03;
      this.collisionOffset.y += (0 - this.collisionOffset.y) * dtg.time.deltaTime * 0.01;
    }
  }

  /* /// */
  flashLight()
  {
    if (this.collisionActv)
    {
      scene.ambientLight.o.intensity += (0.5 - scene.ambientLight.o.intensity) * dtg.time.deltaTime * 0.005;

      if (scene.ambientLight.o.intensity <= 0)
      {
        this.collisionActv = false;
        scene.ambientLightByDefault();
      }
    }
  }

  /* /// */
  updateDistTraveled()
  {
    if (this.checkFuelAirplane())
    {
      dtg.countDistTraveled += dtg.gameSpeed.n * dtg.time.deltaTime * this.ratioSpeedDist * this.speed;
      gui.distTraveled(dtg.countDistTraveled, dtg.passedDist);
    }
  }

  /* /// */
  fuelСonsumption(decr=dtg.gameSpeed.n*dtg.time.deltaTime*airplane.fuel.ratioSpeedDist*airplane.fuel.speedСonsumption*dtg.speed, b=false)
  {
    let nm = decr;

    let setWidth = (w) => { $(this.fuel.idElm).width(w); };

    if ((!b && this.fuel.current - nm >= 0) || (b && this.fuel.current + nm <= this.fuel.total))
    {
      let action = (b?1:-1);

      this.fuel.current += nm * action;
      // $(".Fuel").html("Fuel: "+this.fuel.current);

      let pnm = nm / this.fuel.total * 100;
      this.fuel.forHtmlElm += ((this.fuel.forHtmlElmTotal * pnm) / 100) * action;

      this.fuel.pnm += pnm * action;

      setWidth(this.fuel.forHtmlElm);
      this.bgFuel();
    }
    else if (scene.scene.getObjectByName(this.nameModel) != undefined)
    {
      this.fuel.current = (b?this.fuel.total:0);
      // $(".Fuel").html("Fuel: "+this.fuel.current);
      setWidth((this.fuel.forHtmlElm = (b?this.fuel.forHtmlElmTotal:0)));

      this.bgFuel();

      if (this.fuel.current <= 0)
      {
        game.showHideBtnPause(false);
        this.airplaneCrashed();
      }
    }
  }

  /* /// */
  bgFuel()
  {    
    let currFuel = this.fuel.current;
    let totalFuel = this.fuel.total;
    
    let manyFuel = totalFuel;
    let halfFuel = (totalFuel * 50) / 100;
    let fewFuel = totalFuel - ((totalFuel * 75) / 100);
    
    let setBgFuel = (clr) => { $(this.fuel.idElm).css("backgroundColor", clr); };

    if (currFuel > halfFuel && currFuel <= manyFuel)
      setBgFuel(this.fuel.color.many);
    else if (currFuel > fewFuel && currFuel <= halfFuel)
      setBgFuel(this.fuel.color.half);
    else if (currFuel <= fewFuel)
      setBgFuel(this.fuel.color.few);
  }

  /* самолет разбился */
  airplaneCrashed()
  {
    dtg.gameSpeed.n *= 0.99;
    
    let o = this.currentObj;
    
    o.rotation.z += (-Math.PI/2 - o.rotation.z) * 0.0002 * dtg.time.deltaTime;
    o.rotation.x += 0.0003 * dtg.time.deltaTime;
    this.fallSpeed.n *= 1.05;
    o.position.y -= this.fallSpeed.n * dtg.time.deltaTime;

    // $(".airplaneY").html("airplaneY: "+o.position.y);

    if (o.position.y <= -200)
    {
      this.removeAirplane(this.currentObj);
      dtg.saveRecord();
      gui.IGame(false);
      gui.IGameOver(true);

      // console.log(dtg.getRecord());
    }
  }

  /* /// */
  checkFuelAirplane() { return (this.fuel.current > 0); }

  /* /// */
  removeAirplane(model)
  {
    if (scene.scene.getObjectByName(this.nameModel) != undefined)
    {
      scene.removeModel(model);
      this.currentObj = null;
    }
  }

  /* /// */
  reset()
  {
    this.fuelСonsumption(this.fuel.total, true);

    this.fuel.pnm = 0;

    this.fallSpeed.n = this.fallSpeed.byDefault;
    this.collisionSpeed.x = this.collisionSpeed.y = 0;
    this.collisionOffset.x = this.collisionOffset.y = 0;
    this.collisionActv = false;

    this.removeAirplane(this.currentObj);
  }
}
