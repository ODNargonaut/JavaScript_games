/* Отвчает за весь GUI в игре */
/* Все, что касается GUI - оно должно находиться тут! */


class GUI
{
  // все интерфейсы
  interface =
  {
    current: {I: "", b: false},
    list: 
    {
      "language": false,
      "shop": false,
      "addCoins": false,
      "confirm": false,
      "game": false,
      "pause": false,
      "gameOver": false,
    }
  };

  language = "ru";
  LANGRU = "ru";
  LANGEN = "en";

  // отображение блока монет
  ADDCOINS = 1;
  CURCOINS = 2;
  NOCOINS = -1;

  sound = 
  {
    yes: "url('./img/yes_sound.svg')",
    no: "url('./img/not_sound.svg')",
    actv: true
  };

  // для условия в "clickFun()"
  zoomCam = false;
  canvasBl = false;

  prevClrElm = { id: "", cls: "" };  // запомнить предыдущий выбранный цвет у модели

  /* прокрутка пальцем */
  scrllFinger = 
  {
    posCur:     {x: 0, y: 0},
    nextPosCur: {x: 0, y: 0},
    prevPosCur: {x: 0, y: 0},
    offset: 8,
    actv: true
  };

  // используются при анимации кнопок
  idTime1 = null;
  idTime2 = null;

  /* Обучение */
  tutorial = 
  {
    t: 
    {
      ru: 'Нажми<span class="hideLine">_</span>и<span class="hideLine">_</span>двигай',
      en: 'Click<span class="hideLine">_</span>and<span class="hideLine">_</span>move'
    },
    actv: false
  };

  /* Game over */
  textGO = 
  {
    title: 
    {
      ru: 'Игра<span class="hideLine">_</span>закончена',
      en: 'Game<span class="hideLine">_</span>over'
    },
    title2: 
    {
      ru: 'Второй<span class="hideLine">_</span>шанс',
      en: 'Second<span class="hideLine">_</span>chance'
    },
    btnRH: 
    {
      ru: 'Вернуться<span class="hideLine">_</span>домой', 
      en: 'Return<span class="hideLine">_</span>home'
    }
  };

  /* Shop */
  TShop = 
  {
    ru: 'Магазин',
    en: 'Shop'
  };

  /* Confirm */
  confirmPFM = 
  {
    question:
    {
      ru: 'Оплатить<span class="hideLine">.</span>покупку?',
      en: 'Pay<span class="hideLine">.</span>for<span class="hideLine">.</span>your<span class="hideLine">.</span>purchase?'
    },
    pfm: -1
  };


  /* ... */
  constructor() { }

  /* /// */
  start()
  {
    this.ILanguage(true);
    this.selectionLock();
  }

  /* /// */
  setOpenI(s, b) 
  {
    this.interface.list[s] = b;
    if (b)
    {
      this.interface.current.I = s;
      this.interface.current.b = b;

      // console.log("Open: "+s[0].toUpperCase() + s.slice(1));
    }
    // else
    //   console.log("Close: "+s[0].toUpperCase() + s.slice(1));
  }

  /* /// */
  preventDefault(e)
  {
    if (!gui.zoomCam || !gui.canvasBl)
      e.preventDefault();
  }

  /* /// */
  clickFun(v, arr)
  {
    for (let i = 0; i < arr.length; ++i)
    {
      let o = arr[i];
      let id = null;

      if (o.btnID.c == '#')
        id = document.getElementById(o.btnID.s);
      else if (o.btnID.c == '.')
        id = document.getElementsByClassName(o.btnID.s)[0];
      
      if (v)
      {
        id.removeEventListener("click", o.fun, {passive: false});
        id.removeEventListener("touchstart", o.fun, {passive: false});

        id.addEventListener("click", o.fun, {passive: false});
        id.addEventListener("touchstart", o.fun, {passive: false});

        // console.log("add btnID: "+o.btnID.s);
      }
      else
      {
        id.removeEventListener("click", o.fun, {passive: false});
        id.removeEventListener("touchstart", o.fun, {passive: false});

        // console.log("remove btnID: "+o.btnID.s);
      }
    }
  }

  /* /// */
  atClickActv(o)
  {
    o.atActv.forEach((v) => { $(o.elm).css(v[0], v[1]); });

    gui.idTime1 = setTimeout(() => 
    {
      o.prev.forEach((v) => { $(o.elm).css(v[0], v[1]); });
      gui.idTime2 = setTimeout(() => 
        {
          clearTimeout(gui.idTime1);
          clearTimeout(gui.idTime2);
          o.fun();
        }, o.funSec);
    }, o.sec);
  }

  /* /// */
  setLanguage(lang)
  {
    this.language = lang;

    let ID_selLRu = ".blSelLangRu";
    let ID_selLEn = ".blSelLangEn";

    let o = this.textGO.title;
    // let o2 = this.textGO.title2;
    let o3 = this.textGO.btnRH;

    let _lang = (lang==this.LANGRU?1:0);

    this.display(ID_selLRu, false);
    this.display(ID_selLEn, false);

    this.display(_lang?ID_selLRu:ID_selLEn, true);

    this.distTraveled(0, 0);

    $(".T_btnPlay").html(_lang?"Играть":"Play");
    $(".PlHmAgTitle").html(_lang?"Пауза":"Pause");
    $(".zoomCamT").html(_lang?"Масштаб":"Zoom");

    $(".GO_headerTitle").html(_lang?o.ru:o.en);
    $(".GO_blBtnReturnHome_T").html(_lang?o3.ru:o3.en);

    $(".blTTutorial").html(_lang?this.tutorial.t.ru:this.tutorial.t.en);
    
    $(".headerAddCoinsTitle").html(_lang?this.TShop.ru:this.TShop.en);
    $(".blСonfirmQuestionT").html(_lang?this.confirmPFM.question.ru:this.confirmPFM.question.en);
  }

  /* /// */
  bkgGUI(b)
  {
    $("#gui").css("background", b?"linear-gradient(#e4e0ba, #f7d9aa)":"none");
  }

  /* Tutorial */
  checkTutorial(actv)
  {
    this.tutorial.actv = actv;
    $(".blTutotial").hide();
  }

  /* language */
  ILanguage(v)
  {
    this.display(".blLanguage", v);
    this.setOpenI("language", v);
    this.ICurrentCoins(this.NOCOINS);

    let arr = 
    [
      {
        btnID: {c: '.', s: "blFlagRu"},
        fun: language.btnSetLangRu
      },
      {
        btnID: {c: '.', s: "blFlagEn"},
        fun: language.btnSetLangEn
      }
    ];

    this.clickFun(v, arr);
  }

  /* Shop */
  IShop(v)
  {
    this.display(".blShop", v);
    this.setOpenI("shop", v);
    this.ICurrentCoins(this.ADDCOINS);
    this.display(".btnBackSeeAd", false);

    let arr = 
    [
      {
        btnID: {c: '.', s: "blBtnPlay"},
        fun: shop.btnPlay
      },
      {
        btnID: {c: '.', s: "blBtnSettings"},
        fun: shop.btnSettingsOpen
      },
      {
        btnID: {c: '.', s: "blBtnCloseSettingFromShop"},
        fun: shop.btnSettingsClose
      },
      {
        btnID: {c: '.', s: "btnLangRu"},
        fun: shop.setLanguageRu
      },
      {
        btnID: {c: '.', s: "btnLangEn"},
        fun: shop.setLanguageEn
      },
      {
        btnID: {c: '.', s: "blAddCoins"},
        fun: shop.btnAddCoins
      },
      {
        btnID: {c: '.', s: "blBtnSound"},
        fun: shop.btnSound
      },
      {
        btnID: {c: '#', s: "buyModel"},
        fun: shop.btnBuyModel
      },
      {
        btnID: {c: '#', s: "selClr_0"},
        fun: shop.btnSelClr_0
      },
      {
        btnID: {c: '#', s: "selClr_1"},
        fun: shop.btnSelClr_1
      },
      {
        btnID: {c: '#', s: "selClr_2"},
        fun: shop.btnSelClr_2
      },
      {
        btnID: {c: '#', s: "selClr_3"},
        fun: shop.btnSelClr_3
      },
      {
        btnID: {c: '#', s: "selClr_4"},
        fun: shop.btnSelClr_4
      },
      {
        btnID: {c: '.', s: "btnNextAir"},
        fun: shop.btnNextAir
      },
      {
        btnID: {c: '.', s: "btnPrevisAir"},
        fun: shop.btnPrevisAir
      }
    ];

    this.clickFun(v, arr);
  }

  /* /// */
  blSettings(b, b2=-1)
  {
    this.display(".blBtnSettings", b2==-1 ? !b : b2);
    this.display(".blSettingFromShop", b);
  }

  /* Game */
  IGame(v)
  {
    this.display(".blProcessGame", v);
    this.setOpenI("game", v);
    this.ICurrentCoins(this.NOCOINS);
    
    game.showHideBtnPause(true);

    let arr = 
    [
      {
        btnID: {c: '.', s: "blBtnPause"},
        fun: game.btnPause
      }
    ];

    this.clickFun(v, arr);
  }

  /* /// */
  indicatorsGame(b=false)
  {
    this.display(".blProcessGame", b);
    this.display(".blBtnPause", !b);

    if (!this.tutorial.actv)
      this.display(".blTutotial", !b);
  }

  /* Pause */
  IPause(v)
  {
    this.display(".blPause", v);
    this.setOpenI("pause", v);
    this.ICurrentCoins(this.NOCOINS);

    let arr = 
    [
      {
        btnID: {c: '.', s: "blBtnPlay2"},
        fun: pause.btnPlay2
      },
      {
        btnID: {c: '.', s: "blBtnAgain"},
        fun: pause.btnAgain
      },
      {
        btnID: {c: '.', s: "blBtnHome"},
        fun: pause.btnHome
      },
      {
        btnID: {c: '.', s: "blBtnSetCamera"},
        fun: pause.btnSetCamera
      },
      {
        btnID: {c: '.', s: "blBtnCloseSettingCam"},
        fun: pause.btnCloseSettingCam
      }
    ];

    this.clickFun(v, arr);
  }

  /* Game over */
  IGameOver(v)
  {
    this.display(".blGameOver", v);
    this.setOpenI("gameOver", v);
    this.ICurrentCoins(this.CURCOINS);

    if (v)
    {
      this.bkgGUI(true);

      this.btnPlayPause();

      this.display(".GO_blResults", true);
      this.display(".GO_blRelife", false);

      let o = this.textGO.title;
      let lang = (this.language==this.LANGRU?1:0);

      $(".GO_headerTitle").html(lang?o.ru:o.en);

      let currentDist = Math.floor(dtg.countDistTraveled);
      let recordDist = Math.floor(dtg.recordDist);

      let m = (lang?'<span style="font-family: Arial, Helvetica, sans-serif;">м</span>':"m");

      $(".GO_blNumPD").html(currentDist+m);
      $(".GO_blNumRD").html(recordDist+m);
    }


    let arr = 
    [
      {
        btnID: {c: '.', s: "heartPlusOne"},
        fun: gameOver.btnHeartPlusOne
      },
      {
        btnID: {c: '.', s: "GO_blBack"},
        fun: gameOver.btnBack
      },
      {
        btnID: {c: '.', s: "GO_blBtnReturnHome"},
        fun: gameOver.btnReturnHome
      },
      {
        btnID: {c: '.', s: "btnRelifeForCoins"},
        fun: gameOver.btnRelifeForCoins
      },
      {
        btnID: {c: '.', s: "btnRelifeForAd"},
        fun: gameOver.btnRelifeForAd
      }
    ];

    this.clickFun(v, arr);
  }

  /* Add coins */
  IAddCoins(v)
  {
    this.display(".blAddCoinsForAd", v);
    this.setOpenI("addCoins", v);
    this.ICurrentCoins(this.CURCOINS);
    this.display(".btnBackSeeAd", true);

    let arr = 
    [
      {
        btnID: {c: '.', s: "btnBackSeeAd"},
        fun: addCoins.btnBack
      },
      {
        btnID: {c: '.', s: "BtnImgAdCoins"},
        fun: addCoins.btnImgAdCoins
      },
      {
        btnID: {c: '.', s: "btnBFM_0"},
        fun: addCoins.btnBFM_0
      },
      {
        btnID: {c: '.', s: "btnBFM_1"},
        fun: addCoins.btnBFM_1
      },
      {
        btnID: {c: '.', s: "btnBFM_2"},
        fun: addCoins.btnBFM_2
      },
      {
        btnID: {c: '.', s: "btnBFM_3"},
        fun: addCoins.btnBFM_3
      },
      {
        btnID: {c: '.', s: "btnBFM_4"},
        fun: addCoins.btnBFM_4
      },
      {
        btnID: {c: '.', s: "btnBFM_5"},
        fun: addCoins.btnBFM_5
      },
      {
        btnID: {c: '.', s: "btnBFM_6"},
        fun: addCoins.btnBFM_6
      },
      {
        btnID: {c: '.', s: "btnBFM_7"},
        fun: addCoins.btnBFM_7
      },
      {
        btnID: {c: '.', s: "btnBFM_8"},
        fun: addCoins.btnBFM_8
      },
      {
        btnID: {c: '.', s: "btnBFM_9"},
        fun: addCoins.btnBFM_9
      },
      {
        btnID: {c: '.', s: "btnBFM_10"},
        fun: addCoins.btnBFM_10
      },
      {
        btnID: {c: '.', s: "btnBFM_11"},
        fun: addCoins.btnBFM_11
      },
      {
        btnID: {c: '.', s: "btnBFM_12"},
        fun: addCoins.btnBFM_12
      },
      {
        btnID: {c: '.', s: "btnBFM_13"},
        fun: addCoins.btnBFM_13
      },
      {
        btnID: {c: '.', s: "btnBFM_14"},
        fun: addCoins.btnBFM_14
      },
      {
        btnID: {c: '.', s: "btnBFM_15"},
        fun: addCoins.btnBFM_15
      }
    ];

    this.clickFun(v, arr);
  }

  /* Confirm */
  IConfirm(v)
  {
    this.display(".blСonfirmBuy", v);
    this.ICurrentCoins(this.CURCOINS);
    this.display(".btnBackSeeAd", false);

    let arr = 
    [
      {
        btnID: {c: '.', s: "blConfirmCloseImg"},
        fun: confirm.btnClose
      },
      {
        btnID: {c: '.', s: "blConfirmContinueImg"},
        fun: confirm.btnContinue
      }
    ];

    this.clickFun(v, arr);
  }

  /* /// */
  setFormatForBCM()
  {
    let o = dtg.user.shopCoins.buy;
    let space = '<span class="hideLine">.</span>';

    for (let i = 0; i < o.coins.length; ++i)
    {
      let o2 = o.coins[i];
      let coins = o2.n+"";
      let arr = [];
      let buyCFM = ".buyCFM_";
      let priceCFM = ".priceCFM_";

      switch(coins.length)
      {
        case 4: arr = [{pos:0, len:1}, {pos:1, len:4}]; break;
        case 5: arr = [{pos:0, len:2}, {pos:2, len:5}]; break;
        case 6: arr = [{pos:0, len:3}, {pos:3, len:6}]; break;
      }

      let format = this.readyFormatForPrice(o2.n+"", arr, ".");

      let N = (i+1);
      $(buyCFM+N).html(format);
      $(priceCFM+N).html(o2.price+space+"YAN");
    }

    for (let i = 0; i < o.bag.length; ++i)
    {
      let o2 = o.bag[i];
      let coins = o2.n+"";
      let arr = [];
      let buyBagCFM = ".buyBagCFM_";
      let priceBagCFM = ".priceBagCFM_";

      switch(coins.length)
      {
        case 7: arr = [{pos:0, len:1}, {pos:1, len:4}, {pos:4, len: 7}]; break;
      }

      let format = this.readyFormatForPrice(o2.n+"", arr, ".");

      let N = (i+1);
      $(buyBagCFM+N).html(format+space+"+");
      $(priceBagCFM+N).html(o2.price+space+"YAN");
    }
  }

  /* Current coins */
  ICurrentCoins(blCoins)
  {
    $("#blCurrentCoins_plus_add").css("display", blCoins==this.ADDCOINS?"block":"none");
    $("#blCurrentCoins").css("display", blCoins==this.CURCOINS?"block":"none");
  }

  /* /// */
  display(id, b) { $(id).css("display", b?"block":"none"); }

  /* /// */
  distTraveled(currentDist, passedDist)
  {
    let current = Math.floor(currentDist);
    let passed = Math.floor(passedDist);

    let m = (this.language==this.LANGRU?'<span style="font-family: Arial, Helvetica, sans-serif;">м</span>':"m");
    $(".blTextDist").html(current+"/"+passed+m);
  }

  /* /// */
  bonusForPassedDist()
  {
    let id = "#bonusForLvl";
    $(id).css("visibility", "visible");

    setTimeout(()=>{ $(id).css("visibility", "hidden"); }, 2000);
  }

  /* /// */
  btnPlayPause()
  {
    if (this.interface.list["game"])
    {
      loop.start();
    }
    else if (this.interface.list["pause"] || this.interface.list["gameOver"])
    {
      loop.stop();
    }
  }

  /* /// */
  notEnoughCoins()
  {
    $("#blCurrentCoins_plus_add").css("color", "red");
    setTimeout(()=>{ $("#blCurrentCoins_plus_add").css("color", "black"); }, 1000);
  }

  /* /// */
  checkPurchasedModel()
  {
    let o = sAir.models[sAir.nModel];
    let buy = o.checkBuy(sAir.nColorModel);

    let ID_btnPlay = ".blBtnPlay";
    let ID_btnBuy = ".blMainbtnBuyForCoins";

    this.display(ID_btnPlay, false);
    this.display(ID_btnBuy, false);

    if (buy)
    {
      this.display(ID_btnPlay, true);
    }
    else
    {
      this.display(ID_btnBuy, true);
      this.setFormatForPrice();
    }
  }

  /* /// */
  readyFormatForPrice(s, arr, c="..")
  {
    /* 
    
    9 (min)
    999 999 999 (max)
    
    */
    if (s.length >= 4)
    {
      let part1="", part2="", part3="";
      let len = arr.length;
      let space = '<span class="hideLine">'+c+'</span>';

      for (let i = 0; i < len; ++i)
      {
        let o = arr[i];
        switch(i)
        {
          case 0: part1 = s.slice(o.pos, o.len); break;
          case 1: part2 = s.slice(o.pos, o.len); break;
          case 2: part3 = s.slice(o.pos, o.len); break;
        }
      }

      switch(len)
      {
        case 2: return part1+space+part2;
        case 3: return part1+space+part2+space+part3;
      }
    }
    return s;
  };

  /* /// */
  setFormatForPrice(numCoins=-1)
  {
    let obj, price;
    if (numCoins == -1)
    {
      obj = sAir.models[sAir.nModel];
      price = obj.getPrice(sAir.nColorModel)+"";
    }
    else
      price = numCoins+"";

    let format = "";

    switch(price.length)
    {
      case 1: case 2: case 3: 
        format = price; 
        break;

      case 4: 
        format = this.readyFormatForPrice(price, [{pos:0,len:1}, {pos:1,len:4}]); 
        break;

      case 5: 
        format = this.readyFormatForPrice(price, [{pos:0,len:2}, {pos:2,len:5}]); 
        break;

      case 6: 
        format = this.readyFormatForPrice(price, [{pos:0,len:3}, {pos:3,len:6}]); 
        break;

      case 7: 
        format = this.readyFormatForPrice(price, [{pos:0,len:1}, {pos:1,len:4}, {pos:4,len:7}]); 
        break;

      case 8: 
        format = this.readyFormatForPrice(price, [{pos:0,len:2}, {pos:2,len:5}, {pos:5,len:8}]); 
        break;

      case 9: 
        format = this.readyFormatForPrice(price, [{pos:0,len:3}, {pos:3,len:6}, {pos:6,len:9}]); 
        break;
    }

    if (numCoins == -1)
    {
      $(".T_PriceAir").html(format);
    }
    else
      return format;
  }

  /* /// */
  setColoringForModel()
  {
    for (let n = 0; n < sAir.quantityColors; ++n)
    {
      let id = "#selClr_"+n;
      $(id).css("backgroundColor", sAir.models[sAir.nModel].getColor(n));
    }
  }

  /* /// */
  checkSwitchingBetweenClrsForMode()
  {
    if (this.prevClrElm.id.length > 0)
      this.prevClrElm.id.removeClass(this.prevClrElm.cls);
  }

  /* /// */
  selectedColorForModel(nColor)
  {
    this.setColoringForModel();

    let id = $("#selClr_"+nColor);
    let patternSelClr = "blSelectedClr_"+nColor;

    id.addClass(patternSelClr);
    
    this.prevClrElm.id = id;
    this.prevClrElm.cls = patternSelClr;
  }

  /* /// */
  checkShBtnPrevNextModel()
  {
    this.checkPurchasedModel();

    let b;

    // btn next
    if (sAir.nModel+1 <= sAir.getQuantityModels())
      b = true;
    else 
      b = false;

    this.display(".btnNextAir", b);

    // btn previous
    if (sAir.nModel-1 >= 0)
      b = true;
    else 
      b = false;

    this.display(".btnPrevisAir", b);
  }

  /* Для блокировки выделения текста */
  selectionLock()
  {
    document.ondragstart=noselect;
    document.onselectstart=noselect;
    document.oncontextmenu=noselect;
    function noselect(){return false;}
  }
}
