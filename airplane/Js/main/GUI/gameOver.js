/* Хранит ф-ии для кнопок в GUI конец игры */


class GameOver
{
  /* /// */
  btnHeartPlusOne(e)
  {
    gui.preventDefault(e);

    gui.display(".GO_blResults", false);
    gui.display(".GO_blRelife", true);

    let t = gui.textGO.title2;
  
    $(".GO_headerTitle").html(gui.language==gui.LANGRU?t.ru:t.en);
  }

  /* /// */
  btnBack(e)
  {
    gui.preventDefault(e);

    let o = 
    {
      elm: ".GO_blBack",
      atActv: 
      [
        ["transition", "0.2s"], 
        ["transform", "scale(0.8)"]
      ],
      prev: 
      [
        ["transition", "0.3s"], 
        ["transform", "scale(1)"]
      ],
      sec: 140,
      funSec: 120,
      fun: () => 
      {
        gui.display(".GO_blResults", true);
        gui.display(".GO_blRelife", false);

        let t = gui.textGO.title;
  
        $(".GO_headerTitle").html(gui.language==gui.LANGRU?t.ru:t.en);
      }
    };

    gui.atClickActv(o);
  }

  /* /// */
  btnReturnHome(e)
  {
    gui.preventDefault(e);

    let o = 
    {
      elm: ".GO_blBtnReturnHomeInternal",
      atActv: 
      [
        ["transition", "0.2s"], 
        ["margin", "3px 0px"]
      ],
      prev: 
      [
        ["transition", "0.3s"], 
        ["margin", "0px 0px"]
      ],
      sec: 140,
      funSec: 120,
      fun: () => 
      {
        gui.btnPlayPause();

        gui.IGameOver(false);
        gui.IShop(true);

        gui.bkgGUI(true);
  
        dtg.reset();
  
        gui.blSettings(false);
  
        sAir.show();
        gui.checkShBtnPrevNextModel();
      }
    };

    gui.atClickActv(o);
  }

  /* /// */
  btnRelifeForCoins(e)
  {
    gui.preventDefault(e);

    dtg.relife(dtg.payForRelife.COINS);
  
    if (dtg.checkRelife())
    {
      gui.display(".GO_blResults", true);
      gui.display(".GO_blRelife", false);

      gui.bkgGUI(false);

      gui.IGameOver(false);
      gui.IGame(true);
  
      gui.btnPlayPause();
  
      dtg.setRelife(false);
    }
  }

  /* /// */
  btnRelifeForAd(e)
  {
    gui.preventDefault(e);

    let o = 
    {
      elm: ".AnimRelifeForAd",
      atActv: [["transition", "0.2s"], ["background-size", "80%"]],
      prev: [["transition", "0.2s"], ["background-size", "100%"]],
      sec: 160,
      funSec: 160,
      fun: () => 
      {
        // Реклама..
  
        dtg.relife(dtg.payForRelife.AD);
  
        if (dtg.checkRelife())
        {
          gui.display(".GO_blResults", true);
          gui.display(".GO_blRelife", false);

          gui.bkgGUI(false);

          gui.IGameOver(false);
          gui.IGame(true);

          gui.btnPlayPause();

          dtg.setRelife(false);
        }
      }
    };

    gui.atClickActv(o);
  }
}
