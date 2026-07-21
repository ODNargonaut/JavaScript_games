document.addEventListener("keydown", press, false);
document.addEventListener("keyup", tearOff, false);


// 
function press(e) 
{
  if ( gui.checkingForAClosedGUI()   && 
      !gui.display.list["underMenu"] && 
       snake.countingDown.start      && 
      !gui.advRewardActv)
  {
    let newDirect = "";

    // Left
    if (e.keyCode == joystick.left.keyCode && !joystick.left.active && 
        !joystick.up.active                                         && 
        !joystick.right.active                                      && 
        !joystick.down.active)
    {
      newDirect = DLEFT;
      joystick.left.active = true;
    }

    // Up
    if (e.keyCode == joystick.up.keyCode && !joystick.up.active && 
        !joystick.left.active                                   && 
        !joystick.right.active                                  && 
        !joystick.down.active)
    {
      newDirect = DUP;
      joystick.up.active = true;
    }

    // Right
    if (e.keyCode == joystick.right.keyCode && !joystick.right.active && 
        !joystick.left.active                                         && 
        !joystick.up.active                                           && 
        !joystick.down.active)
    {
      newDirect = DRIGHT;
      joystick.right.active = true;
    }

    // Down
    if (e.keyCode == joystick.down.keyCode && !joystick.down.active && 
        !joystick.left.active                                       && 
        !joystick.up.active                                         && 
        !joystick.right.active)
    {
      newDirect = DDOWN;
      joystick.down.active = true;
    }

    if (newDirect !== "")
    {
      snake.checkDirect(newDirect);
    }

    // Hint
    if ( e.keyCode === joystick.hint.keyCode && 
        !joystick.hint.active                && 
         ctxData.checkSelectedMode("words")  && 
         ctxData.update.active)
    {
      ctxData.mode.current.o.activeHint();
      joystick.hint.active = true;
    }
  }
}


// 
function tearOff(e)
{
  if (gui.checkingForAClosedGUI(true) && !gui.display.list["documentation"] && !gui.advRewardActv)
  {
    // Pause
    if (e.keyCode == ctxData.pause.keyCode && gui.display.list["underMenu"])
    {
      gui.showHideUnderMenu("none", gui.display.list["gameOverForOther"] || gui.display.list["gameOverForWM"]
                                    ? 
                                    false
                                    :
                                    true);
    }
    else if ( e.keyCode == ctxData.pause.keyCode && !gui.display.list["underMenu"]
              && 
              !joystick.left.active  &&
              !joystick.up.active    && 
              !joystick.right.active &&
              !joystick.down.active  &&
              !mouse.active          &&
              (ctxData.checkSelectedMode("words") ? !joystick.hint.active : true))
    {
      gui.showHideCanvas("none");
      gui.showHideUnderMenu("block");
    }
  }

  // Left
  if (e.keyCode == joystick.left.keyCode && joystick.left.active)
  {
    joystick.left.active = false;
  }

  // Up
  if (e.keyCode == joystick.up.keyCode && joystick.up.active)
  {
    joystick.up.active = false;
  }

  // Right
  if (e.keyCode == joystick.right.keyCode && joystick.right.active)
  {
    joystick.right.active = false;
  }

  // Down
  if (e.keyCode == joystick.down.keyCode && joystick.down.active)
  {
    joystick.down.active = false;
  }

  // Hint
  if (e.keyCode === joystick.hint.keyCode && joystick.hint.active)
  {
    joystick.hint.active = false;
  }

  // open/close "Documentation for 'SNAKE 2D'"
  if (e.keyCode == joystick.manpage.keyCode && !joystick.manpage.active && !gui.advRewardActv &&
    (!gui.checkingForAClosedGUI() || gui.display.list["underMenu"])     && 
    !gui.display.list["mainGUI"]                                        && 
    !gui.display.list["language"]                                       && 
    !gui.display.list["documentation"]                                  && 
    !gui.display.list["warningForUser"]                                 && 
    !gui.display.list["initUser"])
  {
    gui.showHideDocumentation("block");

    joystick.manpage.active = true;
  }
  else if (e.keyCode == joystick.manpage.keyCode && gui.display.list["documentation"])
  {
    gui.showHideDocumentation("none");

    joystick.manpage.active = false;
  }
}


// 
function pauseON()
{
  ctxData.update.id = setInterval(Update, snake.speed);
  ctxData.update.active = true;
  document.getElementById("indicator").style.backgroundColor = "rgb(5, 255, 5)";
}

// 
function pauseOFF()
{
  clearInterval(ctxData.update.id);
  ctxData.update.active = false;
  document.getElementById("indicator").style.backgroundColor = "rgb(255, 21, 0)";
}
