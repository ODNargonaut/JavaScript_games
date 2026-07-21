/* Хранит ф-ии для кнопок в GUI магазина */


class Shop
{  
  /* /// */
  btnPlay(e)
  {
    gui.preventDefault(e);

    gui.indicatorsGame();

    gui.IShop(false);
    gui.IGame(true);

    gui.bkgGUI(false);
  
    gui.blSettings(false, false);
  
    sAir.buyOrSelModel();
    gui.checkPurchasedModel();
  
    sAir.reset();
  
    gui.btnPlayPause();
  }

  /* /// */
  btnSettingsOpen(e) 
  {
    gui.preventDefault(e);

    let o = 
    {
      elm: ".blBtnSettings",
      atActv: [["transition", "0.2s"], ["background-size", "85%"]],
      prev: [["transition", "0.2s"], ["background-size", "100%"]],
      sec: 130,
      funSec: 130,
      fun: () => 
      {
        gui.blSettings(true);
      }
    };

    gui.atClickActv(o);
  }

  /* /// */
  btnSettingsClose(e) 
  {
    gui.preventDefault(e);

    let o = 
    {
      elm: ".blBtnCloseSettingFromShop",
      atActv: [["transition", "0.2s"], ["background-size", "85%"]],
      prev: [["transition", "0.2s"], ["background-size", "100%"]],
      sec: 100,
      funSec: 100,
      fun: () => 
      {
        gui.blSettings(false);
      }
    };

    gui.atClickActv(o);
  }

  /* /// */
  setLanguageRu(e) 
  {
    gui.preventDefault(e);

    let o = 
    {
      elm: ".btnLangRu",
      atActv: [["transition", "0.2s"], ["background-size", "85%"]],
      prev: [["transition", "0.2s"], ["background-size", "100%"]],
      sec: 140,
      funSec: 140,
      fun: () => 
      {
        gui.setLanguage(gui.LANGRU);
      }
    };

    gui.atClickActv(o);
  }

  /* /// */
  setLanguageEn(e)
  {
    gui.preventDefault(e);

    let o = 
    {
      elm: ".btnLangEn",
      atActv: [["transition", "0.2s"], ["background-size", "85%"]],
      prev: [["transition", "0.2s"], ["background-size", "100%"]],
      sec: 140,
      funSec: 140,
      fun: () => 
      {
        gui.setLanguage(gui.LANGEN);
      }
    };

    gui.atClickActv(o);
  }

  /* /// */
  btnAddCoins(e)
  {
    gui.preventDefault(e);

    let o = 
    {
      elm: ".blAddCoins",
      atActv: [["transition", "0.2s"], ["background-size", "82%"]],
      prev: [["transition", "0.2s"], ["background-size", "100%"]],
      sec: 140,
      funSec: 140,
      fun: () => 
      {
        gui.blSettings(false, false);
  
        sAir.reset();

        gui.IShop(false);
        gui.IAddCoins(true);
      
        addCoins.addScrollingFinger();
        gui.setFormatForBCM();
      
        let o = dtg.user.shopCoins.buy.bag[0];
      
        if (o.bl.actv)
          sAirAddCoins.show();
        else
          gui.display(o.id, false);
      }
    };

    gui.atClickActv(o);
  }

  /* /// */
  btnSound(e)
  {
    gui.preventDefault(e);

    let o = 
    {
      elm: ".blBtnSound",
      atActv: [["transition", "0.2s"], ["background-size", "80%"]],
      prev: [["transition", "0.2s"], ["background-size", "100%"]],
      sec: 120,
      funSec: 120,
      fun: () => 
      {
        let path = "";
        if (gui.sound.actv)
        {
          gui.sound.actv = false;
          path = gui.sound.no;
          // console.log("Звук выключен");
        }
        else
        {
          gui.sound.actv = true;
          path = gui.sound.yes;
          // console.log("Звук включен");
        }
      
        $(".blBtnSound").css("backgroundImage", path);
      }
    };

    gui.atClickActv(o);
  }

  /* /// */
  btnBuyModel(e)
  {
    gui.preventDefault(e);

    gui.blSettings(false, false);
    gui.IShop(false);
    gui.IConfirm(true);
  }

  /* /// */
  btnSelClr(e, _this)
  {
    gui.preventDefault(e);

    gui.blSettings(false);

    let id = $('#'+$(_this).attr("id"));
    let nClr = id.attr("data-selclr");
    let patternSelClr = "blSelectedClr_"+nClr;

    gui.checkSwitchingBetweenClrsForMode();

    id.addClass(patternSelClr);

    sAir.selectedColorForModel(+nClr);
    gui.checkPurchasedModel();

    gui.prevClrElm.id = id;
    gui.prevClrElm.cls = patternSelClr;
  }

  /* /// */
  btnSelClr_0(e) { shop.btnSelClr(e, this); }

  /* /// */
  btnSelClr_1(e) { shop.btnSelClr(e, this); }

  /* /// */
  btnSelClr_2(e) { shop.btnSelClr(e, this); }

  /* /// */
  btnSelClr_3(e) { shop.btnSelClr(e, this); }

  /* /// */
  btnSelClr_4(e) { shop.btnSelClr(e, this); }

  /* /// */
  btnNextAir(e)
  {
    gui.preventDefault(e);

    let o = 
    {
      elm: ".imgNextAir",
      atActv: [["transition", "0.2s"], ["background-size", "86%"]],
      prev: [["transition", "0.2s"], ["background-size", "100%"]],
      sec: 140,
      funSec: 140,
      fun: () => 
      {
        gui.blSettings(false);
  
        if (sAir.nModel+1 <= sAir.getQuantityModels())
        {
          sAir.selectedModel(++sAir.nModel);
          sAir.selectedColorForModel();
      
          gui.checkShBtnPrevNextModel();
        }
        else
          gui.display(".btnNextAir", false);
      }
    };

    gui.atClickActv(o);
  }

  /* /// */
  btnPrevisAir(e)
  {
    gui.preventDefault(e);

    let o = 
    {
      elm: ".imgPrevisAir",
      atActv: [["transition", "0.2s"], ["background-size", "86%"]],
      prev: [["transition", "0.2s"], ["background-size", "100%"]],
      sec: 140,
      funSec: 140,
      fun: () => 
      {
        gui.blSettings(false);

        if (sAir.nModel-1 >= 0)
        {
          sAir.selectedModel(--sAir.nModel);
          sAir.selectedColorForModel();
      
          gui.checkShBtnPrevNextModel();
        }
        else
          gui.display(".btnPrevisAir", false);
      }
    };

    gui.atClickActv(o);
  }
}
