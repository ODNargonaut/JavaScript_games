/* Модель 2 */


class Model_2
{
  name = "model_2"

  model = 
  [
    {color: "#FFFFFF", price: 9, buy: false},
    {color: "#FFFFFF", price: 99, buy: false},
    {color: "#FFFFFF", price: 999, buy: false},
    {color: "#FFFFFF", price: 9999, buy: false},
    {color: "#FFFFFF", price: 99999, buy: false},
  ];


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

    let geometry, material;

    geometry = new THREE.BoxGeometry(80, 50, 60, 1, 1, 1);
    material = new THREE.MeshPhongMaterial({color: color.red, shading: THREE.FlatShading});

    // geometry.vertices[0].z -= 30;
    // geometry.vertices[1].z += 30;

    geometry.vertices[0].y += 40;
    geometry.vertices[1].y += 40;
    
    let detail = new THREE.Mesh(geometry, material);
    detail.name = "detail";
    
    detail.castShadow = true;
    detail.receiveShadow = true;

    model.add(detail);

    return model;
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
    this.setColorForMaterial(model, 0, color.yellow);
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
