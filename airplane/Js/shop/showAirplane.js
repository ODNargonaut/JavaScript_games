/* Отвечат за показ 3д моделей самолетов в магазине */


class showAirpane
{
  nSelectedModel2 = -1;
  nSelectedModel = 0;       // номер выбранной модели
  nSelectedColorModel = 1;  // номер выбранного цвета для модели

  nModel = 0;          // номер модели при переключении prev/next
  nColorModel = 0;     // номер цвета для модели при переключении

  patternAir = null;   // шаблон при переключении
  
  scene = null;
  camera = null;
  renderer = null;

  WIDTH = 0;
  HEIGHT = 0;

  ID_canvas = "";

  sizeModel = {x: 0, y: 0, z: 0, offset: 0.05};
  rotModel =  {x: 0, y: 0, z: 0, offset: 0.1 };

  keypadActv = false;

  nextPosCur = {x: 0, y: 0};
  prevPosCur = {x: 0, y: 0};

  models = [];         // массив моделей
  quantityModels = 3;  // кол-во всего моделей
  quantityColors = 5;  // кол-во всего окрасок для моделей


  /* ... */
  constructor(id, nSelModel=-1, nSelClrModel=-1)
  {
    this.ID_canvas = id;

    this.createScene();
    this.creteLight();

    this.initModels(nSelModel, nSelClrModel);
  }

  /* /// */
  createScene()
  {
    this.WIDTH = $('#'+this.ID_canvas).width();
    this.HEIGHT = $('#'+this.ID_canvas).height();

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);

    this.camera = new THREE.PerspectiveCamera(60, this.WIDTH/this.HEIGHT, 1, 1e4);
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 200;

    this.renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
    this.renderer.setSize(this.WIDTH, this.HEIGHT);
    this.renderer.shadowMap.enabled = true;

    document.getElementById(this.ID_canvas).appendChild(this.renderer.domElement);
  }

  /* /// */
  updateSize()
  {
    let _thisSAir = null;

    if (gui.interface.list["shop"])
      _thisSAir = sAir;
    else if (gui.interface.list["addCoins"])
      _thisSAir = sAirAddCoins;

    _thisSAir.WIDTH = $('#'+_thisSAir.ID_canvas).width();
    _thisSAir.HEIGHT = $('#'+_thisSAir.ID_canvas).height();

    _thisSAir.renderer.setSize(_thisSAir.WIDTH, _thisSAir.HEIGHT);

    _thisSAir.camera.aspect = _thisSAir.WIDTH/_thisSAir.HEIGHT;
    _thisSAir.camera.updateProjectionMatrix();

    _thisSAir.render();
  }

  /* /// */
  creteLight()
  {
    let hemisphereLight = new THREE.HemisphereLight(0xAAAAAA, 0x000000, 0.9);
    let shadowLight = new THREE.DirectionalLight(0xFFFFFF, 0.9)
    shadowLight.position.set(150, 350, 350);
    shadowLight.castShadow = true;

    // определить видимую облость проецируемой тени
    let shadowCam = shadowLight.shadow.camera;
    shadowCam.left = -400;
    shadowCam.right = 400;
    shadowCam.top = 400;
    shadowCam.bottom = -400;
    shadowCam.near = 1;
    shadowCam.far = 1e3;

    // определить разрешение тени; чем выше, тем лучше
    // но также дороже и менее производительно
    shadowLight.shadow.mapSize.width = 2096;
    shadowLight.shadow.mapSize.height = 2096;

    // окружающий свет изменяет глобальный цвет сцены и делает тени мягче
    let ambientLight = new THREE.AmbientLight(0xDC8874, 0.3);

    this.scene.add(hemisphereLight);
    this.scene.add(shadowLight);
    this.scene.add(ambientLight);
  }

  /* /// */
  render()
  {
    this.renderer.render(this.scene, this.camera);
  }

  /* /// */
  initModels(nSelModel, nSelClrModel)
  {
    let getObjModel = (n) => 
    {
      switch(n)
      {
        case 0: return new Model_1();
        case 1: return new Model_2();
        case 2: return new Model_3();
        // ...
      }
    };

    if (nSelModel > -1 && nSelClrModel > -1)
    {
      this.models.push(getObjModel(nSelModel));
      this.nSelectedModel = 0;
      this.nSelectedModel2 = nSelModel;
      this.nSelectedColorModel = nSelClrModel;
    }
    else
    {
      for (let i = 0; i < this.quantityModels; ++i)
        this.models.push(getObjModel(i));
    }
  }

  /* /// */
  getQuantityModels()
  {
    return this.models.length-1;
  }

  /* /// */
  initialization_nModel_nClr()
  {
    this.nModel = this.nSelectedModel;
    this.nColorModel = this.nSelectedColorModel;
  }

  /* /// */
  unlockSpecialAir(obj)
  {
    this.nSelectedModel = obj.nSelectedModel2;
    this.nSelectedColorModel = obj.nSelectedColorModel;

    this.nModel = this.nSelectedModel;
    this.nColorModel = this.nSelectedColorModel;

    this.buyOrSelModel(true);
  }

  /* /// */
  getModel()
  {
    let nModel = this.nSelectedModel;
    let nColor = this.nSelectedColorModel;

    let tmpPattern = this.models[nModel].createModel();
    this.models[nModel].setColorForModel(nColor, tmpPattern);

    return tmpPattern;
  }

  /* /// */
  show()
  {
    gui.canvasBl = true;
    this.addNodesToMouse();
    this.addResizeWin();
    this.updateSize();
    this.initialization_nModel_nClr();
    this.selectedModel();
    this.selectedColorForModel(this.nSelectedColorModel);
  }

  /* /// */
  buyOrSelModel(buy=false)
  {
    if (buy)
      this.models[this.nModel].buy(this.nColorModel);
        
    this.nSelectedModel = this.nModel;
    this.nSelectedColorModel = this.nColorModel;
  }

  /* /// */
  selectedModel(nModel=this.nSelectedModel)
  {
    this.removeModel();

    this.patternAir = this.models[nModel].createModel();
    this.initialSize();
    this.initialRotXYZ();

    this.scene.add(this.patternAir);

    this.render();
  }

  /* /// */
  removeModel()
  {
    if (this.patternAir != null)
    {
      this.scene.remove(this.patternAir);
      this.patternAir = null;
    }
  } 

  /* /// */
  selectedColorForModel(nColor=this.nColorModel)
  {
    if (this.ID_canvas == "canvasInShop")
      gui.selectedColorForModel(nColor);

    this.nColorModel = nColor;
    this.models[this.nModel].setColorForModel(nColor, this.patternAir);
    this.render();
  }

  /* /// */
  initialRotXYZ()
  {
    this.rotModel.x = this.patternAir.rotation.x;
    this.rotModel.y = this.patternAir.rotation.y;
    this.rotModel.z = this.patternAir.rotation.z;
  }

  /* /// */
  hand()
  {
    if (this.patternAir != null && (gui.interface.list["shop"] || gui.interface.list["addCoins"]))
    {
      this.nextPosCur.x = mouse.posCur.x;
      this.nextPosCur.y = mouse.posCur.y;
      
      // left or right
      if (this.nextPosCur.x > this.prevPosCur.x)
        this.rotY();

      // __
      else if (this.nextPosCur.x < this.prevPosCur.x)
        this.rotY(-this.rotModel.offset);

      if (this.keypadActv)
      {
        // up or down 
        if (this.nextPosCur.y > this.prevPosCur.y)
          this.rotX();
        // __
        else if (this.nextPosCur.y < this.prevPosCur.y)
          this.rotX(-this.rotModel.offset);
      }

      this.prevPosCur.x = this.nextPosCur.x;
      this.prevPosCur.y = this.nextPosCur.y;
    }
  }

  /* /// */
  rotX(offset=this.rotModel.offset)
  {
    this.rotModel.x += offset;
    this.patternAir.rotation.x += offset;
    this.render();
  }

  /* /// */
  rotY(offset=this.rotModel.offset)
  {
    this.rotModel.y += offset;
    this.patternAir.rotation.y += offset;
    this.render();
  }

  /* /// */
  rotZ(offset=this.rotModel.offset)
  {
    this.rotModel.z += offset;
    this.patternAir.rotation.z += offset;
    this.render();
  }

  /* /// */
  initialSize()
  {
    this.sizeModel.x = this.patternAir.scale.x;
    this.sizeModel.y = this.patternAir.scale.y;
    this.sizeModel.z = this.patternAir.scale.z;
  }

  /* /// */
  checkSetSz(v) { return (v > 0 && v < 2); }

  /* /// */
  setSize(n)
  {
    let x = this.sizeModel.x;
    let y = this.sizeModel.y;
    let z = this.sizeModel.z;

    if (this.checkSetSz(x+n) && this.checkSetSz(y+n) && this.checkSetSz(z+n))
    {
      this.sizeModel.x = this.sizeModel.y = this.sizeModel.z += n;

      this.patternAir.scale.set(x+n, y+n, z+n);
      this.render();
    }
  }

  /* /// */
  addResizeWin() { window.addEventListener("resize", this.updateSize, false); }
  
  /* /// */
  removeResizeWin() { window.removeEventListener("resize", this.updateSize, false); }

  /* /// */
  addNodesToMouse()
  {
    mouse.addNodesToMouseClick(this.ID_canvas, "canvas");
    mouse.addNodeToMouseMove(document.getElementById(this.ID_canvas));
  }
 
  /* /// */
  removeNodesFromMouse()
  {
    mouse.removeNodesFromMouseClick(this.ID_canvas, "canvas");
    mouse.removeNodeFromMouseMove(document.getElementById(this.ID_canvas));
  }

  /* /// */
  reset()
  {
    this.removeNodesFromMouse();
    this.removeResizeWin();

    mouse.reset();

    gui.canvasBl = false;

    this.nextPosCur.x = this.nextPosCur.y = 0;
    this.prevPosCur.x = this.prevPosCur.y = 0;

    this.removeModel()

    if (this.ID_canvas == "canvasInShop")
      gui.checkSwitchingBetweenClrsForMode();
  }
}
