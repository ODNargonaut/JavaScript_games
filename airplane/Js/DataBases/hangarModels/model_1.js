/* Модель 1 */


class Model_1
{
  name = "model_1";

  model = 
  [
    {color: "#000000", price: 9, buy: true},
    {color: "#000000", price: 99, buy: true},
    {color: "#000000", price: 999, buy: false},
    {color: "#000000", price: 9999, buy: false},
    {color: "#000000", price: 99999, buy: false},
  ];

  // axis = 
  // {
  //   color: 
  //   {
  //     X: 0xb22222,
  //     Y: 0x32cd32,
  //     Z: 0x1e90ff
  //   }
  // };


  /* ... */
  constructor() { }

  /* /// */
  getColor(n) { return this.model[n].color; }

  /* /// */
  getPrice(n) { return this.model[n].price; }

  /* /// */
  checkBuy(n) { return this.model[n].buy; }

  /* /// */
  buy(n) { this.model[n].buy = true; }

  /* /// */
  createModel()
  {
    let model = new THREE.Object3D();
    model.name = "airplane";  // если, изменишь имя то также добавь это сюда [airplane.js: fuelСonsumption(), start(),]

    let geometry, material, detail;

    let rotX = (d, n) => { d.rotation.x = n; };
    let rotY = (d, n) => { d.rotation.y = n; };
    let rotZ = (d, n) => { d.rotation.z = n; };

    let posX = (d, n) => { d.position.x = n; };
    let posY = (d, n) => { d.position.y = n; };
    let posZ = (d, n) => { d.position.z = n; };

    let tmpDetail = (name) => { detail = this.addDetail(name, geometry, material); };

    // Двигатель
    let engine = new THREE.Object3D();
    geometry = new THREE.CylinderGeometry(15, 20, 10, 8); 
    material = new THREE.MeshPhongMaterial({color: 0x4682B4, shading: THREE.FlatShading});
    tmpDetail("Engine_1");
    posX(detail, 20);
    rotZ(detail, -1.55);
    engine.add(detail);
    // ...
    geometry = new THREE.CylinderGeometry(21.5, 21.5, 20, 8); 
    material = new THREE.MeshPhongMaterial({color: 0x4682B4, shading: THREE.FlatShading});
    tmpDetail("Engine_2");
    posX(detail, 5);
    rotZ(detail, -1.55);
    engine.add(detail);
    // ...
    geometry = new THREE.CylinderGeometry(12, 12, 1, 8); 
    material = new THREE.MeshPhongMaterial({color: 0x000000, shading: THREE.FlatShading});
    tmpDetail("Engine_3");
    posX(detail, 25);
    rotZ(detail, -1.55);
    engine.add(detail);

    // Наконечник для пропеллера
    let tip = new THREE.Object3D();
    geometry = new THREE.CylinderGeometry(4, 10, 10, 8); 
    material = new THREE.MeshPhongMaterial({color: 0x696969, shading: THREE.FlatShading});
    tmpDetail("Tip_1");
    posX(detail, 25);
    rotZ(detail, -1.55);
    tip.add(detail);
    // ...
    geometry = new THREE.CylinderGeometry(2, 2, 5, 8); 
    material = new THREE.MeshPhongMaterial({color: 0x696969, shading: THREE.FlatShading});
    tmpDetail("Tip_2");
    posX(detail, 30);
    rotZ(detail, -1.55);
    tip.add(detail);

    // Пропеллер
    let propeller = new THREE.Object3D();
    geometry = new THREE.CylinderGeometry(2.5, 2.5, 2.5, 8); 
    material = new THREE.MeshPhongMaterial({color: 0x696969, shading: THREE.FlatShading});
    tmpDetail("Propeller_1");
    posX(detail, 33);
    rotZ(detail, -1.55);
    tip.add(detail);
    // ...

    // Отобразить border на геометрии
    let showBoxLine = (d, vr, border=false) => 
    {
      // Format: vr = [0, 0, 0, 0, [-1, -1, -1]] => [verti, x, y, z, [subX, subY, subZ]]

      let box = new THREE.Object3D();

      for (let i = 0; i < vr.length; ++i)
      {
        let verti = vr[i];
        let vertices = d.geometry.vertices[verti[0]];

        let subX = verti[4][0];
        let subY = verti[4][1];
        let subZ = verti[4][2];

        vertices.x += (verti[1]*subX);
        vertices.y += (verti[2]*subY);
        vertices.z += (verti[3]*subZ);
      }

      if (border)
      {
        let lineMaterial = new THREE.LineBasicMaterial( { color: 0xFFFFFF, transparent: true, opacity: 1 } );
        let lineDetail = new THREE.LineSegments(d.geometry, lineMaterial);
        
        posX(lineDetail, d.position.x);
        posY(lineDetail, d.position.y);
        posZ(lineDetail, d.position.z);
        
        rotX(lineDetail, d.rotation._x);
        rotY(lineDetail, d.rotation._y);
        rotZ(lineDetail, d.rotation._z);

        box.add(lineDetail);
      }

      box.add(detail);

      return box;
    };

    let createBlade = () => 
    {
      let blade = new THREE.Object3D();

      // ...
      geometry = new THREE.BoxGeometry(5, 30, 1);
      material = new THREE.MeshPhongMaterial({color: 0x383838, shading: THREE.FlatShading});

      tmpDetail("Blade_1");
      posX(detail, 35);
      rotY(detail, -1.55);

      blade.add(showBoxLine(detail, 
        [
          [2, 1, 0, 0, [-1, 1, 1]],
          [3, 1, 0, 0, [-1, 1, 1]],
          [6, 1, 0, 0, [1, 1, 1]],
          [7, 1, 0, 0, [1, 1, 1]]
        ]));

      // ...
      geometry = new THREE.BoxGeometry(5, 2, 1);
      material = new THREE.MeshPhongMaterial({color: 0xe78919, shading: THREE.FlatShading});

      tmpDetail("Blade_2");
      posX(detail, 35);
      posY(detail, 16);
      rotY(detail, -1.55);

      blade.add(showBoxLine(detail, 
        [
          [0, 0.5, 0, 0, [-1, 1, 1]],
          [1, 0.5, 0, 0, [-1, 1, 1]],
          [4, 0.5, 0, 0, [1, 1, 1]],
          [5, 0.5, 0, 0, [1, 1, 1]]
        ]));

      return blade;
    };

    let blade1 = createBlade();
    let blade2 = createBlade();
    let blade3 = createBlade();

    posY(blade1, 17);

    rotX(blade2, 2.1);
    posZ(blade2, 15);
    posY(blade2, -9);

    rotX(blade3, -2.1);
    posZ(blade3, -15);
    posY(blade3, -9);

    propeller.add(blade1);
    propeller.add(blade2);
    propeller.add(blade3);

    posX(propeller, -2);

    tip.add(propeller);
    // ...
    geometry = new THREE.CylinderGeometry(0.5, 2, 2.5, 8); 
    material = new THREE.MeshPhongMaterial({color: 0x696969, shading: THREE.FlatShading});
    tmpDetail("Tip_1");
    posX(detail, 35);
    rotZ(detail, -1.55);
    tip.add(detail);
    
    // Кабина
    let cabin = new THREE.Object3D();

    geometry = new THREE.CylinderGeometry(19.5, 17, 55, 8); 
    material = new THREE.MeshPhongMaterial({color: 0x4682B4, shading: THREE.FlatShading});
    tmpDetail("Cabin_1");
    posX(detail, -30);
    rotZ(detail, -1.55);
    cabin.add(detail);
    // ...
    geometry = new THREE.CylinderGeometry(17, 7, 25, 8); 
    material = new THREE.MeshPhongMaterial({color: 0x4682B4, shading: THREE.FlatShading});
    tmpDetail("Cabin_2");
    posX(detail, -70);
    posY(detail, -0.9);
    rotZ(detail, -1.55);

    cabin.add(showBoxLine(detail, []));

    // Крыло
    let wing = new THREE.Object3D();
    
    geometry = new THREE.BoxGeometry(38, 28, 6);
    material = new THREE.MeshPhongMaterial({color: 0x4682B4, shading: THREE.FlatShading});
    tmpDetail("Wing_1");
    posX(detail, -30);
    posY(detail, -15);
    posZ(detail, 27);
    rotX(detail, 2);
    wing.add(showBoxLine(detail, 
      [
        [1, 2, 0, 0, [-1, 1, 1]],
        [3, 2, 0, 0, [-1, 1, 1]],
        [4, 2, 0, 0, [1, 1, 1]],
        [6, 2, 0, 0, [1, 1, 1]]
      ]));
    // ...
    geometry = new THREE.BoxGeometry(38, 40, 6);
    material = new THREE.MeshPhongMaterial({color: 0x4682B4, shading: THREE.FlatShading});
    tmpDetail("Wing_2");
    posX(detail, -30);
    posY(detail, -20);
    posZ(detail, 60);
    rotX(detail, 1.55);
    wing.add(showBoxLine(detail, 
      [
        [0, 25, 0, 0, [-1, 1, 1]],
        [1, 25, 0, 0, [-1, 1, 1]],
        [3, 2, 0, 0, [-1, 1, 1]],
        [4, 2, 0, 0, [1, 1, 1]],
        [6, 2, 0, 0, [1, 1, 1]]
      ]));
    

    model.add(engine);
    model.add(tip);
    model.add(cabin);
    model.add(wing);

    return model;
  }

  /* /// */
  addDetail(name, geometry, material, o)
  {
    let detail = new THREE.Mesh(geometry, material);
    detail.name = name;
    
    detail.castShadow = true;
    detail.receiveShadow = true;

    return detail;
  }

  /* /// */
  setColorForModel(n, model)
  {
    switch(n)
    {
      case 0: this.color_1(model); break;
      case 1: this.color_2(model); break;
      case 2: this.color_3(model); break;
      case 3: this.color_4(model); break;
      case 4: this.color_5(model); break;
    }
  }

  /* /// */
  setColorForMaterial(model, nDetail, colorDetail)
  {
    model.children[nDetail].material.color = new THREE.Color(colorDetail);
    model.children[nDetail].material.needUpdate = true;
  }

  /* /// */
  color_1(model) 
  {
    // this.setColorForMaterial(model, 0, color.yellow);
  }

  /* /// */
  color_2(model) 
  {
    this.setColorForMaterial(model, 0, color.blue);
  }

  /* /// */
  color_3(model) {  }

  /* /// */
  color_4(model) {  }

  /* /// */
  color_5(model) {  }
}
