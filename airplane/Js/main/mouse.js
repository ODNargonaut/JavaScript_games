/* Отвечает за управление мыши */


class Mouse
{
  x = 0;
  y = 0;

  posCur = {x: 0, y: 0};

  handActv = false;
  curOnModelZone = true;  // курсор находится в зоне расположения модели


  /* ... */
  constructor()
  {    
    this.showHideCursor(true);
  }

  /* /// */
  turnOn() 
  {
    mouse.handActv = true; 
    scene.setScaleCam(); 
    addCoins.setScrllFinger(false);
  }

  /* /// */
  turnOff() 
  {
    mouse.handActv = false;
    addCoins.setScrllFinger(true);
  }

  /* /// */
  curEnterModelZone() { mouse.curOnModelZone = true;} 

  /* /// */
  curLeaveModelZone()
  {
    mouse.curOnModelZone = false;
    mouse.handActv = false;
  }

  /* /// */
  showHideCursor(action)
  {
    document.documentElement.style.cursor = action?"block":"none";
  }

  /* /// */
  move(e, b=false)
  {
    if (mouse.handActv && mouse.curOnModelZone)
    {
      if (gui.interface.list["game"] && !gui.tutorial.actv)
        gui.checkTutorial(true);

      // mi - method input
      let mi = (b?e.changedTouches[0]:e);

      mouse.x = -1 + (mi.clientX / WIDTH) * 2;
      mouse.y = 1 - (mi.clientY / HEIGHT) * 2;

      mouse.posCur.x = mouse.cnvEPage(mi, "X");
      mouse.posCur.y = mouse.cnvEPage(mi, "Y");

      sAir.hand();
      
      if (dtg.user.shopCoins.buy.bag[0].bl.actv)
        sAirAddCoins.hand();

      scene.setScaleCam();
    } 
  }

  /* /// */
  cnvEPage(e, axis)
  {
    if (axis == "X")
      return e.pageX - e.target.offsetLeft;
    else if (axis == "Y")
      return e.pageY - e.target.offsetTop;
  }

  /* /// */
  funTouchstart(e)
  {
    if (!gui.zoomCam)
      e.preventDefault();
    
    mouse.turnOn();
    mouse.curEnterModelZone();
  }
  /* /// */
  funTouchend(e)
  {
    e.preventDefault();
    mouse.turnOff();
  }

  /*

    [Descr-1]
    AddEventListenerOptions по умолчанию пассивный на false. С этим изменением 
    прослушиватели touchstart и touchmove, добавленные в документ, будут по 
    умолчанию иметь пассивный:true (так что вызовы preventDefault будут игнорироваться)
  
  */

  /* /// */
  addNodesToMouseClick(id, nameElm)
  {
    let ID = document.getElementById(id);
    let qid = $();

    switch(nameElm)
    {
      case "canvas": case "zoomCam": 
        qid = $("#"+id);
        break;
      
      case "game":
        qid = $(id);
        ID = document;
        break;
    }
    
    // [See descr-1]
    ID.addEventListener("touchstart", this.funTouchstart, {passive: false});
    
    qid.on("touchend", this.funTouchend);
    qid.on("toucncancel", this.curLeaveModelZone);

    qid.on("mousedown", this.turnOn);
    qid.on("mouseup", this.turnOff);

    qid.on("mouseenter", this.curEnterModelZone);
    qid.on("mouseleave", this.curLeaveModelZone);
  }

  /* /// */
  removeNodesFromMouseClick(id, nameElm)
  {
    let ID = document.getElementById(id);
    let qid = $();

    switch(nameElm)
    {
      case "canvas": case "zoomCam": 
        qid = $("#"+id);
        break;
      
      case "game":
        qid = $(id);
        ID = document;
        break;
    }

    // [See descr-1]
    ID.removeEventListener("touchstart", this.funTouchstart, {passive: false});
    
    qid.off("touchend", this.funTouchend);
    qid.off("touchcancel", this.curLeaveModelZone);

    qid.off("mousedown", this.turnOn);
    qid.off("mouseup", this.turnOff);

    qid.off("mouseenter", this.curEnterModelZone);
    qid.off("mouseleave", this.curLeaveModelZone);
  }

  /* /// */
  touchMove(e) { mouse.move(e, true); }

  /* /// */
  mouseMove(e) { mouse.move(e); }

  /* /// */
  addNodeToMouseMove(elm)
  {
    // [See descr-1]
    elm.addEventListener("touchmove", this.touchMove, {passive: false});
    
    $(document).on("mousemove", this.mouseMove);
  }

  /* /// */
  removeNodeFromMouseMove(elm)
  {
    // [See descr-1]
    elm.removeEventListener("touchmove", this.touchMove, {passive: false});
    
    $(document).off("mousemove", this.mouseMove);
  }

  /* /// */
  reset()
  {
    this.x = this.y = 0;
    this.posCur.x = this.posCur.y = 0;
  }
}

/* /// */
function normalize(v, vmin, vmax, min, max)
{
  let nv = Math.max(Math.min(v, vmax), vmin);
  let dv = vmax - vmin;
  let pc = (nv - vmin) / dv;
  let dt = max - min;
  let tv = min + (pc * dt);

  return tv;
}
