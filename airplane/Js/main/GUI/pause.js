/* Хранит ф-ии для кнопок в GUI паузы */


class Pause
{
  /* /// */
  btnPlay2(e)
  {
    gui.preventDefault(e);

    let o = 
    {
      elm: ".blBtnPlay2",
      atActv: [["transition", "0.2s"], ["background-size", "66%"]],
      prev: [["transition", "0.2s"], ["background-size", "80%"]],
      sec: 140,
      funSec: 140,
      fun: () => 
      {
        gui.indicatorsGame();
        
        gui.IPause(false);
        gui.IGame(true);
        
        gui.btnPlayPause();
        keypad.setKeypadPause(false);
      }
    };

    gui.atClickActv(o);
  }

  /* /// */
  btnAgain(e)
  {
    gui.preventDefault(e);

    let o = 
    {
      elm: ".blBtnAgain",
      atActv: [["transition", "0.2s"], ["background-size", "85%"]],
      prev: [["transition", "0.2s"], ["background-size", "100%"]],
      sec: 140,
      funSec: 140,
      fun: () => 
      {
        gui.indicatorsGame();

        gui.IPause(false);
        gui.IGame(true);
        
        dtg.reset();

        gui.btnPlayPause();
        keypad.setKeypadPause(false);
      }
    };

    gui.atClickActv(o);
  }

  /* /// */
  btnHome(e)
  {
    gui.preventDefault(e);

    let o = 
    {
      elm: ".blBtnHome",
      atActv: [["transition", "0.2s"], ["background-size", "80%"]],
      prev: [["transition", "0.2s"], ["background-size", "95%"]],
      sec: 140,
      funSec: 140,
      fun: () => 
      {
        gui.indicatorsGame();

        gui.IPause(false);
        gui.IShop(true);
  
        gui.bkgGUI(true);

        gui.blSettings(false);
    
        dtg.reset();

        sAir.show();
        gui.checkShBtnPrevNextModel();
      }
    };

    gui.atClickActv(o);
  }

  /* /// */
  btnSetCamera(e)
  {
    gui.preventDefault(e);

    let o = 
    {
      elm: ".blBtnSetCamera",
      atActv: [["transition", "0.2s"], ["background-size", "85%"]],
      prev: [["transition", "0.2s"], ["background-size", "100%"]],
      sec: 140,
      funSec: 140,
      fun: () => 
      {
        pause.blSettingsCam(true);
      }
    };

    gui.atClickActv(o);
  }

  /* /// */
  btnCloseSettingCam(e)
  {
    gui.preventDefault(e);

    let o = 
    {
      elm: ".blBtnCloseSettingCam",
      atActv: [["transition", "0.2s"], ["background-size", "85%"]],
      prev: [["transition", "0.2s"], ["background-size", "100%"]],
      sec: 100,
      funSec: 100,
      fun: () => 
      {
        pause.blSettingsCam(false);
      }
    };

    gui.atClickActv(o);
  }


  /* /// */
  blSettingsCam(b, b2=-1)
  {
    gui.display(".blBtnSetCamera", b2==-1 ? !b : b2);
    gui.display(".blSettingCam", b);

    if (b)
    {
      gui.zoomCam = b;
      gui.display(".blPlHmAg", false);
      mouse.addNodesToMouseClick("sliderZoom", "zoomCam");
      mouse.addNodeToMouseMove(document.getElementById("sliderZoom"));
    }
    else
    {
      mouse.removeNodesFromMouseClick("sliderZoom", "zoomCam");
      mouse.removeNodeFromMouseMove(document.getElementById("sliderZoom"));
      mouse.reset();
      gui.display(".blPlHmAg", true);
      gui.zoomCam = b;
    }
  }
}
