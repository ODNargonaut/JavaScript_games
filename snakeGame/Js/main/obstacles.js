/* Данный класс отвечает за препятствия в игре. */


class Obstacles
{
  // Из-за размера изображения (16x16), нулевая координата будет равна 0.5
  offset = 0.15;

  wallImg = "./img/obst/sprites/wall-409.png";
  
  history = 
  {
    list: [],
    listOpn: [409],
    totalImg: 501
  };

  // Порядковый номер выбраного поля
  selectedNumField = null;


  // Границы холста
  arrBorder = new Map();

  // Дополнительные препятствия
  collectionMap = new Map();


  // 
  constructor() 
  {
    this.setInitialValuesObst();
  }

  // 
  setInitialValuesObst()
  {
    let unlockedImg = this.history.listOpn;
    for (let i = 0; i < this.history.totalImg; i++)
    {
      let b = false;

      for (let j = 0; j < unlockedImg.length && !b; j++)
        if (i == unlockedImg[j]) b = true;

      this.history.list[i] = b?true:false;
    }
  }

  // Создаем границы холста
  createBorder(doINeedToCreate=true)
  {
    if ( ctxData.checkSelectedMode("jumpFood")        || 
         ctxData.checkSelectedMode("words")           || 
         ctxData.checkSelectedMode("mathematics")     || 
         ctxData.checkSelectedMode("narrowingOfZone") )
    {
      if (ctxData.checkSelectedMode("narrowingOfZone"))
        this.collectionMap.clear();

      if (doINeedToCreate)
      {
        let nX = 63;
        let nY = 39;

        let addElem = (x, y) =>
        {
          let key = x+"|"+y;
          this.arrBorder.set(key, new Block("obst", x, y, DDOWN));
        };

        for (let y = 0; y < nY; y++)
        {
          // Верхняя граница холста
          if (y == 0)
            for (let x = 0; x < nX; x++) addElem(x, y);

          // Левая граница холста
          addElem(0, y);

          // Правая граница холста
          addElem(ctxData.border.R, y);

          // Нижняя граница холста
          if (y == nY-1)
            for (let x = 0; x < nX; x++) addElem(x, y);
        }
      }

      snake.setValuesForSnake(DRIGHT, 10, 10);
    }
  }

  // 
  createAdditionalObstacles(doINeedToCreate=true)
  {
    if ( ctxData.checkSelectedMode("classic")     || 
         ctxData.checkSelectedMode("infinitely")  || 
         ctxData.checkSelectedMode("feedMe")      || 
         ctxData.checkSelectedMode("reverseMove") || 
         ctxData.checkSelectedMode("portals") )
    {      
      // let imgSrc = new Map(
      // [
      //   ["border", this.wallImg],
      //   ["wall",   this.wallImg],
      // ]);

      let mainField = new MainField();
      let obj = mainField.selectedField(true);
      
      if (doINeedToCreate)
      {
        let field = obj.get("arr")[this.selectedNumField];

        for (let i = 0; i < field.length; i++)
        {
          this.createObst("", field[i].x, field[i].y, DDOWN);  // 1-arg -> imgSrc.get(field[i].title)
        }
      }

      let startPoints = obj.get("startPoint")[this.selectedNumField];

      let startPoint = startPoints[this.randomNum(0, startPoints.length)];
      snake.setValuesForSnake(startPoint.direct, startPoint.x, startPoint.y);
    }
  }

  // Создать дополнительные препятствия
  createObst(imgSrc, x, y, direct, v=false)
  {
    let key = x+"|"+y;
    let obj = {block: new Block("obst", x, y, direct), img: imgSrc};

    if (v)
    {
      obj.v = v;
    }

    this.collectionMap.set(key, obj);
  }


  // 
  drawObst()
  {
    for (let k of this.arrBorder.keys())
    {
      this.arrBorder.get(k).drawImg(this.wallImg);
    }

    if (this.collectionMap.size > 0)
    {
      for (let k of this.collectionMap.keys())
      {
        let iElem = this.collectionMap.get(k); 
        let b = (ctxData.checkSelectedMode("narrowingOfZone") && !iElem.v.nextPosObst 
                 || 
                 ctxData.checkSelectedMode("maze") && iElem.v.title === "wall"
                 ? false : true);

        iElem.block.drawImg(Object.hasOwn(iElem, "v")&&b?iElem.img:this.wallImg);
      }
    }
  }

  // Генерация случайных чисел
  randomNum(min, max)
  {
    let ntmp = Math.floor(Math.random() * (max - 0) + min);
    return (ntmp > max ? max : ntmp);
  }

  // 
  reset()
  {
    this.arrBorder.clear();
    this.collectionMap.clear();
  }
}
