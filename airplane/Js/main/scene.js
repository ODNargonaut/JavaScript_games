/* Создать сцену, камеру и рендерер */


class Scene
{
  scene = null;
  camera = null;
  renderer = null;

  ambientLight = 
  {
    o: null, 
    intensity: 0.3
  }

  countZoom = 0;


  /* ... */
  constructor() 
  {
    this.createScene();
    this.createLight();
  }

  /* /// */
  createScene()
  {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;

    this.scene = new THREE.Scene();
    
    this.scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);

    this.camera = new THREE.PerspectiveCamera(60, WIDTH/HEIGHT, 1, 1e4);
    this.camera.position.x = 0;
    this.camera.position.y = 100;
    this.camera.position.z = 200;

    this.renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
    this.renderer.setSize(WIDTH, HEIGHT);
    this.renderer.shadowMap.enabled = true;

    document.getElementById("scene").appendChild(this.renderer.domElement);
  }

  /* Обновить размеры при изменении окна */
  updateSize()
  {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;

    scene.renderer.setSize(WIDTH, HEIGHT);

    scene.camera.aspect = WIDTH / HEIGHT;
    scene.camera.updateProjectionMatrix();

    scene.render();
    
    airplane.updateFuel();
  }

  /* Создние источника света */
  createLight()
  {
    let hemisphereLight = new THREE.HemisphereLight(0xAAAAAA, 0x000000, 0.9);
    let shadowLight = new THREE.DirectionalLight(0xFFFFFF, 0.9);
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
    this.ambientLight.o = new THREE.AmbientLight(0xDC8874, this.ambientLight.intensity);

    this.scene.add(hemisphereLight);
    this.scene.add(shadowLight);
    this.scene.add(this.ambientLight.o);
  }

  /* /// */
  render()
  {
    this.renderer.render(this.scene, this.camera);
  }

  /* /// */
  removeModel(model)
  {
    this.scene.remove(model);
  }

  /* /// */
  ambientLightByDefault() 
  {
    this.ambientLight.o.intensity = this.ambientLight.intensity;
  }

  /* /// */
  setScaleCam()
  {
    if (gui.zoomCam)
    {
      let nm = $(".sliderZoom").val();

      if (nm >= -1 && nm <= 1)
      {
        this.countZoom = nm;
        $(".countScale").html("countScale: "+this.countZoom);

        // отдаляем или приближаем камеру
        scene.camera.fov = normalize(this.countZoom, -1, 1, 40, 80);
        scene.camera.updateProjectionMatrix();

        this.render();
      }
    }
  }

  /* /// */
  addResizeWin() 
  {
    this.updateSize();
    window.addEventListener("resize", this.updateSize, false);
  }
  
  /* /// */
  removeResizeWin() { window.removeEventListener("resize", this.updateSize, false); }

  /* /// */
  reset()
  {
    this.ambientLightByDefault();
  }
}
