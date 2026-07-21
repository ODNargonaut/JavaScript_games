// Рекорды для режимов
recordForModes = new Map(
[
  ["classic", 0],
  ["infinitely", 0],
  ["jumpFood", 0],
  ["feedMe", 0],
  ["words", 0],
  ["mathematics", 0],
  ["reverseMove", 0],
  ["narrowingOfZone", 0],
  ["portals", 0]
]);
function recordARecord(callfun)
{
  let mode = ctxData.mode.current.title;
  let num = food.score;

  if (recordForModes.has(mode) && num > recordForModes.get(mode))
  {
    recordForModes.set(mode, num);

    let sumAllValue = 0;
    for (let v of recordForModes.values())
      sumAllValue += v;

    callfun(sumAllValue);
  }
}


/* Данный класс отвечает за пищу для змейки */


class Food
{
  score = 0;
  valueScore = 0;

  // Кол-во еды
  numFood = 1;

  // Виды пищи
  appleImg = "./img/food/food-0.png";

  // Хранит данные пищи
  collectionMap = new Map();

  // 
  history = 
  {
    design: 
    {
      listAvatars: [],
      listAvatarsOpn: [],
      total: 522  // всего аватаров (закрытых и открытых)!
    }
  };


  // 
  constructor() 
  {
    this.unlockAvatar();
  }

  // 
  mainFood()
  {
    this.valueScore = 1;

    if (!ctxData.checkSelectedMode("maze"))
    {
      this.setNewScore(this.appleImg);

      if (ctxData.checkSelectedMode("portals"))
      {
        this.numFood = ctxData.mode.current.o.quantityObjInCouples;
        this.setNumFood();
      }
      else
        this.setNumFood();
    }
    else 
      this.setNewScore(ctxData.mode.current.o.elixirHealth.imgSrc);
  }

  // 
  unlockAvatar()
  {
    for (let i = 0; i < this.history.design.total; i++)
    {
      this.history.design.listAvatars[i] = (i==0?true:false);
      this.addNewAvatar(i);
    }
  }

  // 
  addNewAvatar(n)
  {
    if (this.history.design.listAvatars[n])
    {
      let total = this.history.design.listAvatarsOpn.length;

      $("#blockingDesignFood-"+n).css("display", "none");

      this.history.design.listAvatarsOpn[total] = n;
    }
  }

  // 
  setNewAvatar(design)
  {
    let dir = design.avatar.dir;
    let N = design.current;
    let format = design.avatar.format;

    this.appleImg = dir+design.avatar.food+N+format;
  }

  // 
  setNumFood(n=this.numFood)
  {
    for (let i = 0; i < n; i++)
      this.createFood(this.appleImg);
    
    if (ctxData.checkSelectedMode("portals"))
      ctxData.mode.current.o.linkingAPair(this);
  }

  // 
  createFood(imgSrc)
  {
    let pos = this.randomPos();
    let key = pos.x+"|"+pos.y;

    let o = {};
    let v = {};

    if (ctxData.checkSelectedMode("jumpFood"))
    {
      o = ctxData.mode.current.o.randomOffset();
    }
    if (ctxData.checkSelectedMode("portals"))
    {
      ctxData.mode.current.o.addValueInFood(key, pos);
      v.entrance = 1;
      v.couple = {};
    }
    
    this.collectionMap.set(key, 
      {
        block: new Block("food", pos.x, pos.y, DDOWN, o),
        img: imgSrc,
        v: v
      });
  }

  // 
  delFood(key)
  {
    if (this.collectionMap.has(key))
    {
      let o = this.collectionMap.get(key);
      let img = o.img;
      
      let coupleKey = null;
      let listKey = [key];

      let checkMode = ctxData.checkSelectedMode("portals");

      if (checkMode)
      {
        coupleKey = o.v.couple.key
        listKey[listKey.length] = coupleKey;
      }

      for (let i = 0; i < listKey.length; i++)
      {
        this.collectionMap.delete(listKey[i]);
        this.createFood(img);
      }

      if (checkMode)
      {
        ctxData.mode.current.o.linkingAPair(this);
      }
    }
  }

  // 
  drawFood()
  {
    for (let k of this.collectionMap.keys())
    {
      let iElem = this.collectionMap.get(k);
      iElem.block.drawImg(iElem.img);
    }
  }

  // Генерация случайных позиций
  randomPos()
  {
    let key;
    let pos = {x:0, y:0};

    while ( pos.x == 0 && pos.y == 0    || 
            this.collectionMap.has(key) || 
            obst.collectionMap.has(key) || 
            obst.arrBorder.has(key)     || 
            ctxData.checkSelectedMode("portals") && 
            (snake.organisms.has(key) || ctxData.mode.current.o.collectionMap.has(key)) )
    {
      pos.x = this.randomNum(2, canvasWidth-2);
      pos.y = this.randomNum(2, canvasHeight-2);
      key = pos.x+"|"+pos.y;
    }
    return pos;
  }

  randomNum(min, max)
  {
    let ntmp = Math.floor(Math.random() * max + min);
    return (ntmp > max ? max : ntmp);
  }

  // 
  keepScore(n=this.valueScore, reset=false)
  {
    if (!ctxData.checkSelectedMode("feedMe"))
    {
      if (reset)
        this.score = 0;
      else
        this.score += n;
    }
    
    if (ctxData.checkSelectedMode("classic"))              document.getElementById("scoreN").innerHTML = this.score;
    else if (ctxData.checkSelectedMode("infinitely"))      document.getElementById("scoreN").innerHTML = this.score;
    else if (ctxData.checkSelectedMode("jumpFood"))        document.getElementById("scoreN").innerHTML = this.score;
    else if (ctxData.checkSelectedMode("feedMe"))          document.getElementById("blIndicatorFeedMe").style.width = n;
    else if (ctxData.checkSelectedMode("words"))           document.getElementById("rewardApple").innerHTML = this.score;
    else if (ctxData.checkSelectedMode("mathematics"))     document.getElementById("rewardApple").innerHTML = this.score;
    else if (ctxData.checkSelectedMode("reverseMove"))     document.getElementById("scoreN").innerHTML = this.score;
    else if (ctxData.checkSelectedMode("narrowingOfZone")) document.getElementById("scoreN").innerHTML = this.score;
    else if (ctxData.checkSelectedMode("maze"))            document.getElementById("scoreN").innerHTML = "x"+(this.score>=0?this.score:0);
    else if (ctxData.checkSelectedMode("portals"))         document.getElementById("scoreN").innerHTML = this.score;
  }

  // 
  setNewScore(imgSrc="./img/food/food-0.png")
  {
    let bkImg = (img, id="#imgScoreFood") => { $(id).css("background-image", "url('"+img+"')"); };

    if (ctxData.checkSelectedMode("maze")) 
      bkImg(imgSrc);
    else
    {
      let arr = ["#imgScoreFood", ".imgCurrentScoreModeWordMath", ".blImgFeedMe"];
      for (let i = 0; i < arr.length; i++)
        bkImg(imgSrc, arr[i]);
    }
  }

  // 
  reset()
  {
    if (!ctxData.checkSelectedMode("feedMe"))
      this.keepScore(0, true);

    this.collectionMap.clear();
  }
}
