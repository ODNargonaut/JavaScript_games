/* Отвечает за управление с клавиатуры */


class Keypad
{
  keys = 
  {
    rot: 
    {
      Q: 81, E: 69,     // rotationZ
      W: 87, S: 83,     // rotationY
      A: 65, D: 68,     // rotationX
      "1": 49, "2": 50  // set size
    },
    pause: 
    {
      Esc: 27, Space: 32,
      actv: false
    }
  };


  /* ... */
  constructor()
  {
    this.addNodeForKeypad();
  }

  /* /// */
  funKeypad(e)
  {
    let k = e.keyCode;

    keypad.rotKeypad(k);
    keypad.pauseGame(k);
  }

  /* /// */
  addNodeForKeypad()
  {
    document.addEventListener("keydown", this.funKeypad, false);
  }

  /* /// */
  setKeypadPause(b) { this.keys.pause.actv = b; }

  /* /// */
  pauseGame(k)
  {
    let key = this.keys.pause;

    if ((k == key.Esc || k == key.Space) && airplane.checkFuelAirplane() && !gui.zoomCam)
    {
      if (gui.interface.list["pause"] && key.actv)
      {
        gui.indicatorsGame();

        gui.IPause(false);
        gui.IGame(true);

        gui.btnPlayPause();
        
        this.setKeypadPause(false);
      }
      else if (gui.interface.list["game"] && !key.actv)
      {
        gui.IGame(false);
        gui.IPause(true);
        
        gui.indicatorsGame(true);

        loop.setLivingStatue(true);

        gui.btnPlayPause();
        this.setKeypadPause(true);
      }
    }
  }

  /* /// */
  rotKeypad(k)
  {
    if (gui.interface.list["shop"])
    {
      let key = this.keys.rot;

      let offsetRot = sAir.rotModel.offset;
      let offsetSz = sAir.sizeModel.offset;

      switch(k)
      {
        // rotation
        case key.W: sAir.rotX(-offsetRot); break;
        case key.S: sAir.rotX(offsetRot);  break;
        case key.A: sAir.rotY(offsetRot);  break;
        case key.D: sAir.rotY(-offsetRot); break;
        case key.Q: sAir.rotZ(offsetRot);  break;
        case key.E: sAir.rotZ(-offsetRot); break;

        // size
        case key["1"]: sAir.setSize(-offsetSz); break;
        case key["2"]: sAir.setSize(offsetSz);  break;
      }
    }
  }
}
