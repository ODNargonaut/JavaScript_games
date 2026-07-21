/* Данный класс отвечает за хранение данных "Змейки", а также за управление. */



class Snake 
{
  err = {e:OK}

  // Обратный отсчет перед запуском игры
  countingDown = 
  {
    n: 0,
    start: false,
    second: 1000,
    nextPointTime: {n: null, active: true},
    byDefault: 3,
    color: {positive: "#2ceb0f", negative: "#eb0606"},
    emoji: "."
  };

  // Дополнительная жизнь
  extraLife = false;

  // Длина змейки по умолчанию
  lengthSnakeByDefault = 3;
  
  // Максимальная длина змеи
  // maxLengthSnake = 10;

  speed = 90;
  offset = 1;  // от 0.5 до 1.5 - самое приятное зрелище

  startPos = {x:0, y:0}

  // Куда смотрит змейка
  directedWhere = DRIGHT; 

  // Для перемещении змейки
  currentDirect = null;
  nextDirect = null;

  // запомнить, в каком направлении находился объект до столкновения
  // rememberDirectBeforeCollision = {v: null, actv: false};

  // Угол направления, в котором змейка поворачивает.
  cornerRot = null;

  // Части тела змейки
  headImg = {dir:"./img/snake/head/head-0.png", o: new Image()};
  bodyImg = {dir:"./img/snake/body/body-0.png", o: new Image()};
  cornerImg = {dir:"./img/snake/corner/corner-0.png", o: new Image()};
  tailImg = {dir:"./img/snake/tail/tail-0.png", o: new Image()};  

  // Здесь хранятся все части тела змейки 
  keysOrganism = [];
  organisms = new Map();

  activeStopMove = true;//null;

  // 
  history = 
  {
    design: 
    {
      listAvatars: [],
      listAvatarsOpn: [],
      total: 1201  // всего аватаров (закрытых и открытых)!
    }
  };


  // 
  constructor() 
  {
    this.unlockAvatar();
  }

  // 
  mainSnake()
  {
    // Обратный отсчет
    this.resetCountingDown();

    this.createOrganism();

    this.headImg.o.src = this.headImg.dir;
    this.bodyImg.o.src = this.bodyImg.dir;
    this.cornerImg.o.src = this.cornerImg.dir;
    this.tailImg.o.src = this.tailImg.dir;
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

      $("#blockingDesignSnake-"+n).css("display", "none");
      
      this.history.design.listAvatarsOpn[total] = n;
    }
  }

  // 
  setNewAvatar(design)
  {
    let dir = design.avatar.dir;
    let N = design.current;
    let format = design.avatar.format;

    this.headImg.o.src =   (this.headImg.dir   = dir+design.avatar.head+N+format);
    this.bodyImg.o.src =   (this.bodyImg.dir   = dir+design.avatar.body+N+format);
    this.cornerImg.o.src = (this.cornerImg.dir = dir+design.avatar.corner+N+format);
    this.tailImg.o.src =   (this.tailImg.dir   = dir+design.avatar.tail+N+format);
  }

  // 
  resetCountingDown(num=this.countingDown.byDefault, emoji=".")
  {
    this.countingDown.n = num;
    this.countingDown.start = false;
    this.countingDown.nextPointTime.n = null;
    this.countingDown.nextPointTime.active = true;
    this.countingDown.emoji = emoji;
    ctxData.getElemByIDCountingDown(this.countingDown.byDefault, this.countingDown.color.positive);
  }

  // 
  setValuesForSnake(directedWhere, x, y)
  {
    this.resetCountingDown()

    if (directedWhere == DRIGHT) this.directedWhere = DDOWN;     // Змейка смотрит вправо
    else if (directedWhere == DDOWN) this.directedWhere = DLEFT; // Змейка смотрит вниз
    else if (directedWhere == DLEFT) this.directedWhere = DUP;   // Змейка смотрит влево
    else if (directedWhere == DUP) this.directedWhere = DRIGHT;  // Змейка смотрит вверх

    this.currentDirect = directedWhere;
    this.nextDirect = directedWhere;

    // Чтобы хвоста не было видно при первом старте!
    if (ctxData.checkSelectedMode("maze")) x = -5;
    
    this.startPos.x = x;
    this.startPos.y = y;
  }

  // 
  createOrganism(length=this.lengthSnakeByDefault)
  {
    let x = this.startPos.x;
    let y = this.startPos.y;

    for (let i = 0; i < length; i++)
    {
      this.keysOrganism.push(x+"|"+y);
      this.organisms.set(x+"|"+y, new Block("snake", x, y, this.directedWhere));

      if (this.directedWhere == DDOWN) x -= this.offset;
      else if (this.directedWhere == DLEFT) y -= this.offset;
      else if (this.directedWhere == DUP) x += this.offset;
      else if (this.directedWhere == DRIGHT) y += this.offset;
    }
    // else
    // {
    //   this.err.e = EMAXSZ;
    //   console.log("Превышен максимальный размер змейки!");
    // }
  }

  // 
  drawOrganism()
  {
    if (this.err.e == OK)
    {
      this.organisms.get(this.keysOrganism[0]).drawImg(this.headImg.o, "", false);    

      for (let i = 1; i < this.organisms.size; i++)
      {
        let organism = this.organisms.get(this.keysOrganism[i]);
        
        // === Отслеживаем повороты змейки
        let corner = false;
        let previsOrgan = this.organisms.get(this.keysOrganism[i-1]);
        let previsRot = previsOrgan.rotation.current;

        if (organism.rotation.current == previsRot)
        {
          corner = false;
          previsRot = "";
        }
        else 
          corner = true;
        // ===

        if (i != this.organisms.size-1)
        {
          if (corner)
          {
            // =====
            if (previsRot == DUP && organism.rotation.current == DRIGHT)
            {
              // console.log("Повернуть против (-) -1");  // +
              this.cornerRot = DLEFT;
            }
            else if (previsRot == DDOWN && organism.rotation.current == DRIGHT)
            {
              // console.log("Повернуть по (+) +1");  // +
              this.cornerRot = DDOWN;
            }
            else if (previsRot == DLEFT && organism.rotation.current == DDOWN)
            {
              // console.log("Повернуть по (+) +2");  // +
              this.cornerRot = DLEFT;
            }
            else if (previsRot == DLEFT && organism.rotation.current == DUP)
            {
              // console.log("Повернуть против (-) -2");  // +
              this.cornerRot = DDOWN;
            }
            else if (previsRot == DUP && organism.rotation.current == DLEFT)
            {
              // console.log("Повернуть по (+) +3");  // +
              this.cornerRot = DUP;
            }
            else if (previsRot == DDOWN && organism.rotation.current == DLEFT)
            {
              // console.log("Повернуть против (-) -3");  // +
              this.cornerRot = DRIGHT;
            }
            else if (previsRot == DRIGHT && organism.rotation.current == DUP)
            {
              // console.log("Повернуть по (+) +4");  // +
              this.cornerRot = DRIGHT;
            }
            else if (previsRot == DRIGHT && organism.rotation.current == DDOWN)
            {
              // console.log("Повернуть против (-) -4");  // +
              this.cornerRot = DUP;
            }
            // =====

            organism.drawImg(this.cornerImg.o, this.cornerRot, false);
          }
          else 
            organism.drawImg(this.bodyImg.o, "", false);
        }
        else
        {
          organism.drawImg(this.tailImg.o, previsRot, false);
        }
      }
    }
  }

  // 
  stopMove(active)
  {
    this.activeStopMove = active;
  }

  // 
  movement()
  {
    if (this.err.e == OK)
    {
      this.extraLife = false;

      let head = this.organisms.get(this.keysOrganism[0]);
      let newHead = null;

      switch(this.nextDirect)
      {
        case DLEFT:  newHead = new Block("snake", head.x - this.offset, head.y, DUP);    break;  // Move left
        case DRIGHT: newHead = new Block("snake", head.x + this.offset, head.y, DDOWN);  break;  // Move right
        case DUP:    newHead = new Block("snake", head.x, head.y - this.offset, DRIGHT); break;  // Move up
        case DDOWN:  newHead = new Block("snake", head.x, head.y + this.offset, DLEFT);  break;  // Move down
      }      

      let collision = this.checkCollision(newHead);

      if (!collision && !this.activeStopMove)
      {
        document.getElementById("blMsgCollision").style.display = "none";

        // if (this.organisms.size >= this.maxLengthSnake) this.shortenSnake();

        // На заметку.
        // Object.hasOwn(obj, elem); - проверяет, что 'elem' есть в указанном 'obj'.

        let x = newHead.x;
        let y = newHead.y;
        
        let key = x+"|"+y;

        this.keysOrganism.unshift(key);
        this.organisms.set(key, newHead);

        if (!ctxData.checkSelectedMode("words") && !ctxData.checkSelectedMode("mathematics"))
          document.getElementById("posXY").innerHTML = "X: "+(x)+" Y: "+(y);

        key = newHead.checkCollisionObj(food);

        // 
        if (key)
        {
          if (ctxData.checkSelectedMode("words") || ctxData.checkSelectedMode("mathematics"))
          {
            ctxData.mode.current.o.showSymbol(key);
          }
          else if (!ctxData.checkSelectedMode("maze"))
          {
            food.delFood(key);

            if (ctxData.checkSelectedMode("narrowingOfZone"))
            {
              ctxData.mode.current.o.activeNarrowingOfZone();
            }

            if (ctxData.checkSelectedMode("feedMe"))
            {
              ctxData.mode.current.o.EliminateFeelingOfHunger();
            }
            else
              food.keepScore()
          }
        }
        else
        {
          let key = this.keysOrganism.pop();

          if (ctxData.checkSelectedMode("maze"))
            ctxData.mode.current.o.tipOfTailFountExit(key);
          else if (ctxData.checkSelectedMode("portals"))
            ctxData.mode.current.o.tipOfTailFountEntrance(key);

          this.organisms.delete(key);
        }
      }
      else if (collision && !this.extraLife)
      {
        this.stopOrGameOver();
      }
    }
  }

  // 
  stopOrGameOver()
  {
    if (this.checkHealth())
    {
      recordARecord((v) => 
      {
        gui.syncingRecordsForModes("one");
        gui.saveCommonResultUser(v);
      });
      gui.showHideGameOver("block", "off");
    }

    this.stopMove(true);
  }

  // 
  checkCollision(newHead)
  {
    let retunrValue = 0;

    if (!ctxData.checkSelectedMode("maze") && newHead.checkCollisionBoreder())
    {
      if (ctxData.checkSelectedMode("infinitely"))
        ctxData.mode.current.o.withoutBorders(newHead);
      else
      {
        retunrValue = 1;
      }
    }
    // Змейка столкнулась со своим хвостом
    if (newHead.checkCollisionTail())
    {
      retunrValue = 1;
    }
    // Змейка столкнулась с препятствием
    if (newHead.checkCollisionObj(obst))
    {
      retunrValue = 1;
    }
    // Змейка столкнулась с порталом
    if (ctxData.checkSelectedMode("portals") && newHead.checkCollisionObj(ctxData.mode.current.o))
    {
      retunrValue = 2;
    }

    if (retunrValue)
    {
      // if (retunrValue == 1 && !this.rememberDirectBeforeCollision.actv)
      // {
      //   this.rememberDirectBeforeCollision.v = this.currentDirect;
      //   this.rememberDirectBeforeCollision.actv = true;
      // }
      
      // Это нужно для того, чтобы не нажимать джестик по кругу, когда врезался в препятствие!
      // А сразу двигаться в желаемом направлении.
      this.currentDirect = "";

      return true;
    }
    else 
      return false;
  }

  // Проверка на не допустимое направление змейки
  checkDirect(newDirect)
  {
    if ( ctxData.checkSelectedMode("maze") && ctxData.mode.current.o.activeMaze || 
        !ctxData.checkSelectedMode("maze") && this.extraLife)
        
    {
      this.stopMove(false);
    }

    if (ctxData.checkSelectedMode("reverseMove"))
    {
      newDirect = ctxData.mode.current.o.activeReverseMove(newDirect);
    }

    // Заблокировать управление, если был найден выход
    if (ctxData.checkSelectedMode("maze") && ctxData.mode.current.o.foundExit);
    else if (!this.activeStopMove)
    {
      // Устраняет баг: движение в недопустимое направление!
      // if (!this.currentDirect)
      //   this.currentDirect = this.rememberDirectBeforeCollision.v;

      if (this.currentDirect == DLEFT && newDirect == DRIGHT) return 0;
      else if (this.currentDirect == DUP && newDirect == DDOWN) return 0;
      else if (this.currentDirect == DRIGHT && newDirect == DLEFT) return 0;
      else if (this.currentDirect == DDOWN && newDirect == DUP) return 0;

      // this.rememberDirectBeforeCollision.actv = false;

      // console.log("currentDirect: "+this.currentDirect);
      // console.log("newDirect: "+newDirect);
      // console.log("-----");

      this.currentDirect = newDirect;
      this.nextDirect = newDirect;

      if (!ctxData.update.active)
      {
        pauseON();
      }
    }
  }

  // 
  checkHealth()
  {
    if (ctxData.checkSelectedMode("maze"))
    {
      if (food.score > 0)
      {
        if (!this.activeStopMove)
          food.keepScore(ctxData.mode.current.o.elixirHealth.reduce);

        return false;
      }
      else
      {
        food.keepScore(food.score, true);
        ctxData.mode.current.o.gameplayTime.downtimePoint = Date.now();
      }
    }
    
    return true;
  }

  // Задержка перед началом игры
  delayBeforeStart()
  {
    if (this.countingDown.n >= 0)
    {
      if (!this.countingDown.nextPointTime.active)
      {
        this.countingDown.nextPointTime.n = Date.now() + this.countingDown.second;
        this.countingDown.nextPointTime.active = true;
      }

      if (Date.now() >= this.countingDown.nextPointTime.n)
      {
        let color = "";

        if (this.countingDown.n > 3)
          color = this.countingDown.color.positive;
        else
          color = this.countingDown.color.negative;

        ctxData.getElemByIDCountingDown(this.countingDown.n--, color);
        this.countingDown.nextPointTime.active = false;
      }
    }
    else
    {
      this.countingDown.start = true;
      ctxData.showHideBlMaps("block");
      ctxData.getElemByIDCountingDown(this.countingDown.emoji, this.countingDown.color.positive);
      return true;
    }

    ctxData.showHideBlMaps("none");

    return false;
  }

  // Вызывается только, когда хвост змеи достигает определенной длины!
  // Или при сбросе.
  // shortenSnake(length=this.lengthSnakeByDefault)
  // {
  //   this.keysOrganism = [];
  //   this.organisms.clear();

  //   ctx.setTransform(1, 0, 0, 1, 0, 0);
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);

  //   this.setValuesForSnake(DRIGHT, 5, 5);
  //   this.createOrganism(length);
  // }

  // 
  reset()
  {
    // console.clear();

    this.stopMove(ctxData.checkSelectedMode("maze")?true:false);

    this.resetCountingDown();

    this.extraLife = false;

    this.keysOrganism = [];
    this.organisms.clear();

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (ctxData.checkSelectedMode("maze"))
    {
      snake.setValuesForSnake(DRIGHT, 10, 10);
      snake.createOrganism(this.lengthSnakeByDefault+ctxData.mode.current.o.mazeNumber);
    }
  }
}
