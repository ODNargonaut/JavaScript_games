/* Хранит всю информацию об игре */


class DtGame
{
  level = 1;

  baseSpeed = {byDefault: 0.3, n: 0};   // общая скорость игры
  gameSpeed = {byDefault: 0.03, n: 0};  // текущая скорость игры

  user = 
  {
    coins: 999999,
    rewardLvl: {incr: 20, n: 0},
    rewardAd: 10,
    relife: {coins: 50, active: false},
    shopCoins:
    {
      buy: 
      {
        coins:
        [
          // grp-1
          {n: 50,    price: 5},
          {n: 250,   price: 7},
          {n: 500,   price: 10},
          {n: 1000,  price: 15},
          {n: 2500,  price: 20},
          {n: 7500,  price: 30},
          {n: 15000, price: 40},
          {n: 45000, price: 50},
          {n: 60000, price: 60},
          // grp-2
          {n: 100000, price: 65},
          {n: 150000, price: 75},
          {n: 250000, price: 85},
          {n: 400000, price: 100},
          {n: 550000, price: 125},
          {n: 750000, price: 150}
        ],
        bag:
        [
          {
            bl: {id: ".blBBFM", actv: true}, 
            n: 4500000, 
            price: 200
          }
        ],
        quantity: 16
      }
    }
  };

  payForRelife = {COINS: "coins", AD: "ad"};

  time = 
  {
    deltaTime: 0,
    newTime: 0,
    oldTime: 0
  };

  countDistTraveled = 0;  // счетчик пройденного расстояния
  nextDist = 400;         // на сколько увеличивается
  finishDist = 0;         // сколько нужно пройти, каждый раз начиная заново
  passedDist = 0;         // пройденное расстояние
  recordDist = 0;         // Рекордное расстояние

  speed = 0;
  constSpeed = 0.9;
  speedBeforeNextLevel = 
  {
    incrN: 0.1,
    max: 1.05,
    b: true
  }


  /* ... */
  constructor() 
  {
    QBTNB = this.user.shopCoins.buy.quantity;

    this.finishDist = this.passedDist = this.nextDist;
    
    this.speed = this.constSpeed;
    this.baseSpeed.n = this.baseSpeed.byDefault;
    this.gameSpeed.n = this.gameSpeed.byDefault;

    this.setPriceForRelife();
    this.setRewardForAd();

    $(".SpeedGame").html("SpeedGame: "+this.speed);
    // $(".lvl").html("Level: "+this.level);
  }

  /* /// */
  setPriceForRelife() { $(".relifeTextCoins").html(this.user.relife.coins); }

  /* /// */
  setRewardForAd() { $(".TCoinResultForAd").html(this.user.rewardAd); }

  /* /// */
  addCoinsUser(n, bonus=false)
  {
    this.user.coins += n;
    this.showCoinsUser(bonus);
    // $(".nCoins").html(this.user.coins);
  }

  /* /// */
  timeBegin()
  {
    this.time.oldTime = new Date().getTime();
  }

  /* /// */
  setTime()
  {
    this.time.newTime = new Date().getTime();
    this.time.deltaTime = this.time.newTime - this.time.oldTime;
    this.time.oldTime = this.time.newTime;
  }

  /* /// */
  setSpeedGame(n, b=true)
  {
    this.speed = (b?this.speed:0) + n;
    $(".SpeedGame").html("SpeedGame: "+this.speed);
  }

  /* /// */
  saveRecord() 
  {
    let countDist = Math.floor(this.countDistTraveled);
    
    if (countDist > this.recordDist)
      this.recordDist = Math.floor(this.countDistTraveled);
  }

  /* /// */
  getRecord() { return this.recordDist; }

  /* /// */
  checkDistForLvl()
  {
    let currentDist = this.countDistTraveled;

    if (this.speedBeforeNextLevel.b && 
        currentDist >= this.passedDist-150 && currentDist < this.passedDist)
    {
      let n = this.speedBeforeNextLevel.incrN * this.time.deltaTime * (this.constSpeed/10);

      this.setSpeedGame(n);

      let maxN = this.speedBeforeNextLevel.max;
      
      if (this.speed >= maxN)
      {
        this.setSpeedGame(maxN, false);
        this.speedBeforeNextLevel.b = false;
      }
    }

    if (currentDist >= this.finishDist)
    {
      this.finishDist += this.nextDist;
      this.level++;
    }

    if (currentDist >= this.passedDist)
    {
      this.setSpeedGame(this.constSpeed, false);
      this.speedBeforeNextLevel.b = true;

      this.passedDist += this.nextDist;
      this.user.rewardLvl.n += this.user.rewardLvl.incr;
      this.addCoinsUser(this.user.rewardLvl.n, true);
      gui.bonusForPassedDist();
    }
  }

  /* /// */
  showCoinsUser(b=false)
  {
    let format = gui.setFormatForPrice(this.user.coins);
    let s = (b?'<span id="bonusForLvl" class="blTextCoinLvlBonus t-khand-bold">+ '+this.user.rewardLvl.n+'</span>':"");

    let id = (b?".currentCoinsGame":".currentCoins");

    $(id).html(format+' '+s);
  }

  /* /// */
  setRelife(b) { this.user.relife.active = b; }

  /* /// */
  checkRelife() { return this.user.relife.active; }

  /* /// */
  relife(pay)
  {
    if (pay == this.payForRelife.COINS && this.user.coins >= this.user.relife.coins)
    {
      this.addCoinsUser(-this.user.relife.coins);
      this.setRelife(true);
      this.reset(true);
    }
    else if (pay == this.payForRelife.AD)
    {
      // Реклама..
      this.setRelife(true);
      this.reset(true);
    }
    else
      gui.notEnoughCoins();
  }

  /* /// */
  buyProduct(n)
  {
    let o = null

    if (n >= 0 && n < 15)
      o = this.user.shopCoins.buy.coins[n];
    else if (n == 15)
      o = this.user.shopCoins.buy.bag[0];

    if (o != null)
    {
      let price = o.price;
      // Оплачиваем товар за реальные деньги!
      
      // потом выполняем следующие действия:
      this.addCoinsUser(o.n);
      if (n == 15)
      {
        o.bl.actv = false;
        $(o.bl.id).css("display", o.bl.actv?"block":"none");

        sAir.unlockSpecialAir(sAirAddCoins);
      }
    }
  }

  /* /// */
  reset(relife=false)
  {
    if (!relife)
    {
      this.level = 1;
    
      this.countDistTraveled = 0;
      this.finishDist = this.nextDist;

      obst.reset();
      coins.reset();

      scene.removeResizeWin();
    }

    this.baseSpeed.n = this.baseSpeed.byDefault;
    this.gameSpeed.n = this.gameSpeed.byDefault;

    this.setSpeedGame(this.constSpeed, false);
    this.speedBeforeNextLevel.b = true;

    keypad.setKeypadPause(false);

    airplane.reset();
    particle.reset();
    scene.reset();

    mouse.reset();

    scene.render();
  }
}
