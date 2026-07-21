/* Данные класс создает блок */


class Block
{
  title = "";  // Название блока

  img = new Image();

  // Из-за размера изображения (16x16), нулевая координата будет равна 0.5
  x = 0;
  y = 0;

  // В каком направлении движется блок
  moveDirect = {x: null, y: null};

  // Для режима jumpFood
  offsetX = 1;
  offsetY = 1;
  
  scale = 1;
  // {
  //   current: "",
  //   "16x16": 1
  // };

  rotation = 
  {
    current: "",
    "left":  Math.PI  / 2,
    "up":    Math.PI  / 1,
    "right": -Math.PI / 2,
    "down":  Math.PI  / 0
  };

  
  // 
  constructor(title, x, y, direct, o="")
  {
    this.title = title;
    this.x = x;
    this.y = y;
    this.rotation.current = direct;
    // this.scale.current = "16x16";

    // Только, если вкл режим jumpFood
    if (ctxData.checkSelectedMode("jumpFood"))
    {
      this.offsetX = o.offsetX;
      this.offsetY = o.offsetY;
    }
  }

  // 
  drawImg(imgSrc, d="", b=true)
  {
    if (b)
      this.img.src = imgSrc;
    else 
      this.img = imgSrc;

    if (this.img.complete)
    {
      let x = this.x * SZCELL;
      let y = this.y * SZCELL;

      ctx.setTransform(
        this.scale, 
        0, 0, 
        this.scale, x, y); // устанавливает масштаб и начало координат
      
      ctx.rotate(d ? this.rotation[d] : this.rotation[this.rotation.current]);
      ctx.drawImage(this.img, -this.img.width / 2, -this.img.height / 2);
    }
  }

  // Уведомление о столкновении
  collisionNotification(str)
  {
    $("#blMsgCollision").css("display", "block");
    $("#collisionText").html(str);
  }

  // Проверка на границы холста
  checkCollisionBoreder()
  {
    let offset = (ctxData.checkSelectedMode("infinitely")?1:0);
    let borderLURD = {L:"", U:"", R:"", D:""};

    borderLURD.L = (this.x === ctxData.border.L-offset);
    borderLURD.U = (this.y === ctxData.border.U-offset);
    borderLURD.R = (this.x === ctxData.border.R+offset);
    borderLURD.D = (this.y === ctxData.border.D+offset);

    if (borderLURD.L || borderLURD.U || borderLURD.R || borderLURD.D)
    {
      let s = LANGUAGE=="ru"?"Змейка столкнулась с границей холста":"The snake collided with the border of the canvas";
      this.collisionNotification(s);
      return true;
    }
    else
      return false;
  }

  // Проверка на столкновение со своим хвостом
  checkCollisionTail()
  {
    if (snake.organisms.has(this.x+"|"+this.y)) 
    {
      let s = LANGUAGE=="ru"?"Змейка врезалась в свое тело":"The snake crashed into mine body";
      this.collisionNotification(s);
      return true;
    }
    else
      return false;
  }

  // Проверка на какой-то объект
  checkCollisionObj(obj)
  {
    if ( ctxData.checkSelectedMode("classic")         || 
         ctxData.checkSelectedMode("infinitely")      || 
         ctxData.checkSelectedMode("feedMe")          || 
         ctxData.checkSelectedMode("words")           || 
         ctxData.checkSelectedMode("mathematics")     || 
         ctxData.checkSelectedMode("reverseMove")     ||
         ctxData.checkSelectedMode("narrowingOfZone") || 
         ctxData.checkSelectedMode("maze")            || 
         ctxData.checkSelectedMode("portals") )
    {
      let key = this.x+"|"+this.y;

      if (obj.collectionMap.has(key))
      {
        if ( ctxData.checkSelectedMode("maze")                && 
             obj.collectionMap.get(key).block.title == "obst" &&  
             obj.collectionMap.get(key).v.exit )
        {
          ctxData.mode.current.o.snakeFoundExit(this);
          return false
        }

        if (obj.collectionMap.get(key).block.title != "food")
        {
          let s = LANGUAGE=="ru"?"Змейка столкнулась с препятствием":"The snake collided with an obstacle";
          this.collisionNotification(s);
        }
        else if (ctxData.checkSelectedMode("portals") && obj.collectionMap.get(key).v.entrance)
        {
          ctxData.mode.current.o.snakeFoundEntrance(this, obj.collectionMap.get(key));
        }

        if ( ctxData.checkSelectedMode("narrowingOfZone")     && 
             obj.collectionMap.get(key).block.title == "obst" && 
             obj.collectionMap.get(key).v.nextPosObst );
        else
          return key;
      }
      return false;
    }
    // Для режима jumpFood
    else 
    {
      for (let k of obj.collectionMap.keys())
      {
        let iElem = obj.collectionMap.get(k);

        let x = iElem.block.x;
        let y = iElem.block.y;

        if (this.x === x && this.y === y) return k;
      }
      return false;
    }
  }
}
