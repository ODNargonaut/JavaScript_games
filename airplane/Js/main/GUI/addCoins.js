/* Хранит ф-ии для кнопок в GUI добавить монет */


class AddCoins
{
  /* /// */
  btnBack(e)
  {
    gui.preventDefault(e);

    let o = 
    {
      elm: ".btnBackSeeAd",
      atActv: [["transition", "0.2s"], ["background-size", "80%"]],
      prev: [["transition", "0.2s"], ["background-size", "100%"]],
      sec: 140,
      funSec: 140,
      fun: () => 
      {
        sAirAddCoins.reset();
        gui.confirmPFM.pfm = -1;
        addCoins.removeScrollingFinger();

        gui.IAddCoins(false);
        gui.IShop(true);
  
        gui.blSettings(false);
        sAir.show();
        gui.checkShBtnPrevNextModel();
      }
    };

    gui.atClickActv(o);
  }

  /* /// */
  btnImgAdCoins(e)
  {
    gui.preventDefault(e);

    let o = 
    {
      elm: ".blImgAdCoins",
      atActv: [["transition", "0.2s"], ["background-size", "80%"]],
      prev: [["transition", "0.2s"], ["background-size", "100%"]],
      sec: 140,
      funSec: 140,
      fun: () => 
      {
        // Реклама..
        dtg.addCoinsUser(dtg.user.rewardAd);
      }
    };

    gui.atClickActv(o);
  }

  /* /// */
  getObjBFM()
  {
    return {
      elm: "",
      atActv: [["transition", "0.2s"], ["margin", "4px 0px"]],
      prev: [["transition", "0.3s"], ["margin", "0px 0px"]],
      sec: 140,
      funSec: 140,
      fun: () => 
      {
        if (gui.confirmPFM.pfm !== NaN)
        {
          gui.IAddCoins(false);
          gui.IConfirm(true); 
        }
      }
    };
  }

  /* /// */
  readAttrPFM(_this) { gui.confirmPFM.pfm = Number($(_this).attr("data-pfm")); }

  /* /// */
  btnBFM_0(e)
  {
    gui.preventDefault(e);

    addCoins.readAttrPFM(this);

    let o = addCoins.getObjBFM();
    o.elm = ".btnBFM_0";

    gui.atClickActv(o);
  }

  /* /// */
  btnBFM_1(e)
  {
    gui.preventDefault(e);

    addCoins.readAttrPFM(this);

    let o = addCoins.getObjBFM();
    o.elm = ".btnBFM_1";

    gui.atClickActv(o);
  }

  /* /// */
  btnBFM_2(e)
  {
    gui.preventDefault(e);

    addCoins.readAttrPFM(this);

    let o = addCoins.getObjBFM();
    o.elm = ".btnBFM_2";

    gui.atClickActv(o);
  }

  /* /// */
  btnBFM_3(e)
  {
    gui.preventDefault(e);

    addCoins.readAttrPFM(this);

    let o = addCoins.getObjBFM();
    o.elm = ".btnBFM_3";

    gui.atClickActv(o);
  }

  /* /// */
  btnBFM_4(e)
  {
    gui.preventDefault(e);

    addCoins.readAttrPFM(this);

    let o = addCoins.getObjBFM();
    o.elm = ".btnBFM_4";

    addCoins.atClickActv(o);
  }

  /* /// */
  btnBFM_5(e)
  {
    gui.preventDefault(e);

    addCoins.readAttrPFM(this);

    let o = addCoins.getObjBFM();
    o.elm = ".btnBFM_5";

    gui.atClickActv(o);
  }

  /* /// */
  btnBFM_6(e)
  {
    gui.preventDefault(e);

    addCoins.readAttrPFM(this);

    let o = addCoins.getObjBFM();
    o.elm = ".btnBFM_6";

    gui.atClickActv(o);
  }

  /* /// */
  btnBFM_7(e)
  {
    gui.preventDefault(e);

    addCoins.readAttrPFM(this);

    let o = addCoins.getObjBFM();
    o.elm = ".btnBFM_7";

    gui.atClickActv(o);
  }

  /* /// */
  btnBFM_8(e)
  {
    gui.preventDefault(e);

    addCoins.readAttrPFM(this);

    let o = addCoins.getObjBFM();
    o.elm = ".btnBFM_8";

    gui.atClickActv(o);
  }

  /* /// */
  btnBFM_9(e)
  {
    gui.preventDefault(e);

    addCoins.readAttrPFM(this);

    let o = addCoins.getObjBFM();
    o.elm = ".btnBFM_9";

    gui.atClickActv(o);
  }

  /* /// */
  btnBFM_10(e)
  {
    gui.preventDefault(e);

    addCoins.readAttrPFM(this);

    let o = addCoins.getObjBFM();
    o.elm = ".btnBFM_10";

    gui.atClickActv(o);
  }

  /* /// */
  btnBFM_11(e)
  {
    gui.preventDefault(e);

    addCoins.readAttrPFM(this);

    let o = addCoins.getObjBFM();
    o.elm = ".btnBFM_11";

    gui.atClickActv(o);
  }

  /* /// */
  btnBFM_12(e)
  {
    gui.preventDefault(e);

    addCoins.readAttrPFM(this);

    let o = addCoins.getObjBFM();
    o.elm = ".btnBFM_12";

    gui.atClickActv(o);
  }

  /* /// */
  btnBFM_13(e)
  {
    gui.preventDefault(e);

    addCoins.readAttrPFM(this);

    let o = addCoins.getObjBFM();
    o.elm = ".btnBFM_13";

    gui.atClickActv(o);
  }

  /* /// */
  btnBFM_14(e)
  {
    gui.preventDefault(e);

    addCoins.readAttrPFM(this);

    let o = addCoins.getObjBFM();
    o.elm = ".btnBFM_14";

    gui.atClickActv(o);
  }

  /* /// */
  btnBFM_15(e)
  {
    gui.preventDefault(e);

    addCoins.readAttrPFM(this);

    let o = addCoins.getObjBFM();
    o.elm = ".btnBFM_15";

    gui.atClickActv(o);
  }



  /* /// */
  setScrllFinger(b) { gui.scrllFinger.actv = b; }

  /* /// */
  fingerMove(e)
  {
    let o = gui.scrllFinger;

    if (o.actv)
    {
      o.posCur.y = mouse.cnvEPage(e.changedTouches[0], "Y");

      let moveningY = (offset) => 
      {
        let currenScroll = $(".blScrollProducts").scrollTop();
        $(".blScrollProducts").scrollTop(currenScroll+offset);
      };

      o.nextPosCur.x = o.posCur.x;
      o.nextPosCur.y = o.posCur.y;
        
      // top or bottom
      if (o.nextPosCur.y > o.prevPosCur.y)
        moveningY(-o.offset);

      // __
      else if (o.nextPosCur.y < o.prevPosCur.y)
        moveningY(o.offset);

      o.prevPosCur.y = o.nextPosCur.y;
    }
  }

  /* /// */
  addScrollingFinger()
  {
    document.addEventListener("touchmove", addCoins.fingerMove, {passive: false});
  }
  
  /* /// */
  removeScrollingFinger()
  {
    $(".blScrollProducts").scrollTop(0);
    document.addEventListener("touchmove", addCoins.fingerMove, {passive: false});
  }
}
