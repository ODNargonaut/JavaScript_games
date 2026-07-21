/* Анимация всех объектов в игре */


class Loop
{
  pause = false;

  requestID = null;

  livingStatue = false;


  /* ... */
  constructor() { }

  /* /// */
  start()
  {
    if (this.livingStatue)
    {
      cancelAnimationFrame(this.requestID);
      this.setLivingStatue();
    }

    this.pause = false;

    scene.addResizeWin();
    mouse.curEnterModelZone();
    mouse.addNodesToMouseClick(document, "game");
    mouse.addNodeToMouseMove(document);
    dtg.timeBegin();
    airplane.start();

    this.update();
  }

  /* /// */
  update()
  {
    dtg.setTime();
    dtg.checkDistForLvl();

    sky.rotSky();
    sea.rotSea();

    if (gui.tutorial.actv && !loop.livingStatue)
    {
      airplane.moveAirplane();
      
      airplane.updateDistTraveled();
      airplane.flashLight();
      airplane.fuelСonsumption();

      obst.checkDistForDrawObst();

      coins.checkDistForDrawObst();
    }

    obst.rotObsts();
    coins.rotCoins();

    scene.render();

    // Примечание:
    // Это условие нужно, потому что 'requestAnimationFrame' 
    // не останавливается, когда пытаешься остановить его 
    // в программе, а не по событию (mouse/keypad).
    if (!loop.pause || loop.livingStatue)
      loop.requestID = requestAnimationFrame(loop.update);
  }

  /* /// */
  stop()
  {
    mouse.removeNodesFromMouseClick(document, "game");
    mouse.removeNodeFromMouseMove(document);

    if (!this.livingStatue)
      cancelAnimationFrame(loop.requestID);
    
    this.pause = true;
  }

  /* /// */
  setLivingStatue(b=false)
  {
    this.livingStatue = b;
  }
}
