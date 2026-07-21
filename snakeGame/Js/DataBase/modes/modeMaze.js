// 
let historyForMaze = 
{
  levels: 
  {
    listOpen: [],
    total: 15
  },
  earnedStars: 
  {
    list: [],
    totalStars: 5
  }
};
function setInitialValuesForLvls()
{
  let totalLvls = historyForMaze.levels.total;

  for (let i = 0; i < totalLvls; i++)
  {
    historyForMaze.levels.listOpen[i] = (i==0?true:false);
    historyForMaze.earnedStars.list[i] = 0;
  }
}
setInitialValuesForLvls();


// Mode maze
class ModeMaze
{
  // valueScore = 10;

  // Элексир жизни 
  elixirHealth = 
  {
    n: 3,
    addN: 1,
    reduce: -1,
    imgSrc: "./GUI/modes/maze/elixir.png",
    active: false,
    gift: {n: 0, actv: false, nextLvl: null}
  };
  showBtnResume = (v="none") => { document.getElementById("blBtnResumeGOForMaze").style.display = v; };

  // Обратный отсчет перед запуском
  countingDown = { sec: 8, emoji: ":)" };

  // Время игрового процесса
  gameplayTime = 
  {
    gameTime: null,       // Реальное время игры
    downtimePoint: null,  // Зафиксировать точку простоя (при gameOver)
    downtimeTotal: 0      // Общее время простоя
  };

  showMaze = false;
  activeMaze = false;

  foundExit = false;

  mazeNumber = 0; 
  mazes = 
  {
    Exit: {k:"", directHead: ""},
    current: null,
    minPassingScore: 3  // Это минимальное кол-во звезд для того, чтобы разблокировать следующий уравень
  };

  pointEntrance = null;

  shortestWayToExit = null;

  pointExit = 
  [
    {x: -5, y: 18},            // [0] (Move snake left or up or down) - Point exit left
    {x: canvasWidth+5, y: 37}  // [1] (Move snake right) - Point exit right
  ];


  // 
  constructor() { }

  // 
  setValueForHealthSnake(n) { food.keepScore(n); }

  // 
  openSelectedMaze(n)
  {
    gui.showHideLevelsForMaze("none");
    gui.showHideCanvas("block");

    this.nextLevel(n);

    snake.reset();

    ctxData.hideShowBlAllValueScore("block");
    pauseON();

    ctxData.showBlValueScore();
    food.mainFood();
  }

  // 
  selectedMaze()
  {
    // Установка значения для здоровья
    if (!this.elixirHealth.active)
    {
      let elixir = this.elixirHealth.n;

      // Добавляем наш подарок к общей сумме
      if (this.elixirHealth.gift.actv && this.elixirHealth.gift.nextLvl == this.mazeNumber)
      {
        elixir += this.elixirHealth.gift.n;
        this.resetGift();
      }
      else if (this.elixirHealth.gift.nextLvl >= historyForMaze.levels.total)
      {
        this.resetGift();
      }

      this.setValueForHealthSnake(elixir);
      this.elixirHealth.active = true;
    }

    this.getMaze();

    this.mazes.Exit.k = "";
    this.mazes.Exit.directHead = "";

    obst.collectionMap.clear();

    this.createMaze();

    snake.resetCountingDown(this.countingDown.sec, this.countingDown.emoji);

    this.gameplayTime.downtimeTotal = 0;
  }

  // 
  showNextMaze()
  {
    if (!this.showMaze)
    {
      this.selectedMaze();
      this.startAtStartingPoint();

      this.showMaze = true;
    }

    if (snake.delayBeforeStart())
    {
      this.foundExit = false;

      snake.stopMove(false);

      this.gameplayTime.gameTime = Date.now();  // Зафиксируем время начала игры

      this.activeMaze = true;
    }
  }

  // 
  createMaze()
  {
    let imgSrc = new Map(
    [
      // ["border",   obst.wallImg],
      // ["wall",     obst.wallImg],
      ["entrance", "./img/modes/maze/entrance.png"],
      ["exit",     "./img/modes/maze/exit.png"]
    ]);

    let currentMaze = this.mazes.current;

    for (let obj of currentMaze.values())
    {
      let b = (obj.title === "border" || obj.title === "wall" ? true : false);

      obst.createObst(
       (b?"":imgSrc.get(obj.title)), 
       obj.x, 
       obj.y, 
       obj.direct, 
       {exit: obj.exit, title: (b?"wall":"")});
    }
  }

  // 
  snakeFoundExit(newHead)
  {
    this.foundExit = true;

    this.gameplayTime.gameTime = +(((Date.now() - this.gameplayTime.gameTime) / 1e3) - (this.gameplayTime.downtimeTotal / 1e3)).toFixed(2);

    // console.log("Реальное время игры: "+this.gameplayTime.gameTime);
    // console.log("Общее время простоя: "+(this.gameplayTime.downtimeTotal / 1e3));

    // console.log("Поздравляем с прохождением лабиринта [Level-"+(this.mazeNumber+1)+"].");

    this.mazes.Exit.k = newHead.x+"|"+newHead.y;
    this.mazes.Exit.directHead = newHead.rotation.current;


    // Перемещаем змейку за пределы холста
    let o = null;
    switch(newHead.rotation.current)
    {
      case DUP:   o = this.pointExit[0];  break;  // Move left
      case DDOWN: o = this.pointExit[1];  break;  // Move right
      default: 
        o = this.pointExit[0]; break;  // Move up or down
    }

    newHead.x = o.x;
    newHead.y = o.y;
    // -----
  }

  // 
  tipOfTailFountExit(key)
  {
    let tipOfTail = snake.organisms.get(key);
    
    if (this.mazes.Exit.k !== "")
    {
      let side = this.mazes.current.get(this.mazes.Exit.k).pointExit;

      let pointExit = null;
      let b = false;

      if (side == SIDEPOINTL || (this.mazes.Exit.directHead == DRIGHT || this.mazes.Exit.directHead == DLEFT))
      {
        pointExit = this.pointExit[SIDEPOINTL];

        // Move left
        if (tipOfTail.x == pointExit.x && tipOfTail.y == pointExit.y) b = true;
        else
        {
          switch(this.mazes.Exit.directHead)
          {
            case DRIGHT:  // Move up
            {
              if (tipOfTail.y == pointExit.y && tipOfTail.x == pointExit.x) b = true;
              break;
            }
            case DLEFT:  // Move down
            {
              if (tipOfTail.y == pointExit.y && tipOfTail.x == pointExit.x) b = true;
              break;
            }
          }
        }
      }
      // Move right
      else if (side == SIDEPOINTR)
      {
        pointExit = this.pointExit[SIDEPOINTR];
        
        if (tipOfTail.x == pointExit.x && tipOfTail.y == pointExit.y) b = true;
      }

      if (b)
      {
        // console.log("Кончик хвоста перемеместился!");

        snake.stopMove(true);

        gui.showHideCountingResults("block", "off");
        this.countingResultsCurrentLvl();

        gui.syncingRecordsForModes("one");
      }
    }
  }

  // 
  startAtStartingPoint()
  {
    let o = this.pointEntrance;

    let headSnake = snake.organisms.get(snake.keysOrganism[0]);

    headSnake.x = o.x;
    headSnake.y = o.y;

    document.getElementById("posXY").innerHTML = "X: "+(o.x)+" Y: "+(o.y);

    snake.currentDirect = o.direct;
    snake.nextDirect = o.direct;
    
    switch(o.direct)
    {
      case DLEFT:  headSnake.rotation.current = DUP;    break;
      case DUP:    headSnake.rotation.current = DRIGHT; break;
      case DRIGHT: headSnake.rotation.current = DDOWN;  break;
      case DDOWN:  headSnake.rotation.current = DLEFT;  break;
    }
  }

  // Генерация случайных чисел
  randomNum(min, max)
  {
    let ntmp = Math.floor(Math.random() * (max - 0) + min);
    return (ntmp > max ? max : ntmp);
  }

  // 
  countingResultsCurrentLvl()
  {
    /*
    
      Чтобы найти время, необходимое для преодоления расстояния, 
      можно использовать следующую формулу:

      время = расстояние / скорость

      В данном случае, расстояние равно 10 клеткам, а скорость 
      равна 1 клетке в 0.07 секунды. Подставляем значения в формулу:

      время = 10 клеток / (1 клетка / 0.07 секунды)
      время = 10 клеток * (0.07 секунды / 1 клетка)
      время = 0.7 секунды

      Таким образом, для преодоления расстояния в 10 клеток потребуется 0.7 секунды.
    
    */

    let necessaryTime = +(this.shortestWayToExit / (snake.offset / (snake.speed / 1e3))).toFixed(2);

    let gameTime = this.gameplayTime.gameTime;
    let stars = 0;
    let color = "";

    let timeFormat = (sec) =>
    {
      let secFull = Math.floor(sec);

      let time = {h: 0, m: 0, s: 0, frac: 0.0};

      time.frac = sec - secFull;
      time.s = secFull%60;
      time.m = (secFull - time.s) / 60;
      time.h = Math.floor(time.m / 60);
      time.m -= time.h * 60;

      time.frac = time.frac.toFixed(2);
      time.frac = time.frac.slice(time.frac.indexOf('.')+1);

      time.s += "";
      time.m += "";
      time.h += "";

      if (time.frac.length == 1) time.frac = time.frac+"0";
      if (time.s.length == 1) time.s = "0"+time.s;
      if (time.m.length == 1) time.m = "0"+time.m;
      if (time.h.length == 1) time.h = "0"+time.h; 
      else if (time.h.length > 2) time.h = "23";

      return (time.h+":"+time.m+":"+time.s+"."+time.frac);
    };

    let passingScore = 
    [
      {min: necessaryTime+6, max: necessaryTime+8},  // 1
      {min: necessaryTime+4, max: necessaryTime+6},  // 2
      {min: necessaryTime+3, max: necessaryTime+4},  // 3
      {min: necessaryTime,   max: necessaryTime+3},  // 4
      {min: 0,               max: necessaryTime},    // 5
    ];

    for (let i = 0; i < passingScore.length; i++)
    {
      if (passingScore[i].min < gameTime && gameTime <= passingScore[i].max)
      {
        stars = i+1;
        break;
      }
    }

    if (stars == 5) color = "#15C932";
    else color = "#D61919";
      
    $("#textCurrentTime").css("color", color);

    document.getElementById("textCurrentTime").innerHTML = timeFormat(gameTime);
    document.getElementById("textNecessaryTime").innerHTML = timeFormat(necessaryTime);

    gui.showEarnedStarsCurrentLvl(stars);

    if (stars > historyForMaze.earnedStars.list[this.mazeNumber])
      historyForMaze.earnedStars.list[this.mazeNumber] = stars;

    let btnLvlNext = (display) => { document.getElementById("blBtnNextLvlForMaze").style.display = display; };
    
    if (historyForMaze.earnedStars.list[this.mazeNumber] >= this.mazes.minPassingScore)
    {
      let opnLvl = this.mazeNumber+1;
      if (opnLvl <= historyForMaze.levels.total-1)
      {
        historyForMaze.levels.listOpen[opnLvl] = true;
        btnLvlNext("block");
      }
      else 
        btnLvlNext("none");
    }
    else 
      btnLvlNext("none");

    // Подарок за лучшее время
    if (gameTime < necessaryTime)
    {
      this.elixirHealth.gift.n = this.randomNum(1, 2);
      this.elixirHealth.gift.nextLvl = this.mazeNumber+1;
      gui.showHideBlGift("block", this.elixirHealth.gift.n);
    }
  }

  // 
  getGift() { this.elixirHealth.gift.actv = true; }

  // 
  resetGift()
  {
    this.elixirHealth.gift.n = 0;
    this.elixirHealth.gift.actv = false;
    this.elixirHealth.gift.nextLvl = null;
  }

  // 
  nextLevel(n=-1)
  {
    if (n >= 0)
      this.mazeNumber = n;
    else
      this.mazeNumber++;

    if (this.mazeNumber >= historyForMaze.levels.total)
    {
      this.mazeNumber = 0;
    }
  }

  // 
  getMaze()
  {
    let mainLevel = new MainLevel();

    let selectedMaze = mainLevel.selectedLevel(this.mazeNumber);

    this.mazes.current = selectedMaze.map;
    this.pointEntrance = selectedMaze.pointEntr;
    this.shortestWayToExit = selectedMaze.shortestWayToExit;
  }

  // Сброс 
  reset()
  {
    // console.clear();

    this.elixirHealth.active = false;
    this.showMaze = false;
    this.activeMaze = false;
  }
}