/* Хранит ф-ии для кнопок в GUI игры */


class Game
{
  /* /// */
  btnPause(e)
  {
    gui.preventDefault(e);

    let o = 
    {
      elm: ".blBtnPause",
      atActv: [["transition", "0.2s"], ["background-size", "80%"]],
      prev: [["transition", "0.3s"], ["background-size", "100%"]],
      sec: 140,
      funSec: 140,
      fun: () => 
      {
        // условие для клавиатурной 'pause' в режиме игра
        if (gui.interface.list["game"] && airplane.checkFuelAirplane())
        {
          gui.IGame(false);
          gui.IPause(true);

          gui.indicatorsGame(true);

          loop.setLivingStatue(true);

          gui.btnPlayPause();
          keypad.setKeypadPause(true);
        }
      }
    };

    gui.atClickActv(o);
  }

  /* /// */
  showHideBtnPause(b) { gui.display(".blBtnPause", b); }
}
