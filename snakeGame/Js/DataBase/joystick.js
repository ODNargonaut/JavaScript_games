/* Данный класс отвечает за джестик игрока. */


class Joystick 
{
  left  = {keyCode: 37, active: false};
  up    = {keyCode: 38, active: false};
  right = {keyCode: 39, active: false};
  down  = {keyCode: 40, active: false};
  
  hint = {keyCode: 9, active: false};

  manpage = {keyCode: 72, active: false};


  // 
  constructor() { }

  // 
  setNewJoystick(selected)
  {
    let keys = 
    {
      "wasd": {L:65, U:87, R:68, D:83},
      "arrows": {L:37, U:38, R:39, D:40}
    };

    switch(selected)
    {
      case "mouse":
      {
        this.bindANode();
        this.setKeys();
        break;
      }
      case "wasd": case "arrows":
      {
        if (Object.hasOwn(keys, selected))
        {
          this.delNode();
          let key = keys[selected];
          this.setKeys(key.L, key.U, key.R, key.D);
        }
        break;
      }
    }
  }

  // 
  setKeys(L=null, U=null, R=null, D=null)
  {
    this.left.keyCode = L;
    this.up.keyCode = U;
    this.right.keyCode = R;
    this.down.keyCode = D;
  }

  // Добавить узел
  bindANode() 
  {
    canvas.addEventListener('mousemove', moveMousePos, false);

    canvas.addEventListener('mousedown', pressLBtnMouse, false);
    canvas.addEventListener('mouseup', tearoffLBtnMouse, false);
  }

  // Удалить узел
  delNode()
  {
    canvas.removeEventListener('mousemove', moveMousePos, false);

    canvas.removeEventListener('mousedown', pressLBtnMouse, false);
    canvas.removeEventListener('mouseup', tearoffLBtnMouse, false);

    // Сброс
    resetMouseDt();

    cursorPosOnCanvas();
  }
}

// ==========
canvas.addEventListener('mouseover', cursorOnCanvasTrue, false);
canvas.addEventListener('mouseout', cursorOnCanvasFalse, false);

let mouse =
{
  x: "-", 
  y: "-",
  direct: "-",
  onCanvas: false,
  nextPos: {x: 0, y: 0},
  previousPos: {x: 0, y: 0},
  active: false
};

let bbb = true;
function cursorOnCanvasTrue() 
{
  mouse.onCanvas = true;

  if (mouse.onCanvas && bbb)
  {
    cursorPosOnCanvas();
    bbb = false;
  }
}
function cursorOnCanvasFalse() 
{
  mouse.onCanvas = false;

  if (!mouse.onCanvas && !bbb)
  {
    resetMouseDt();
    cursorPosOnCanvas();
    bbb = true;
  }
}

// 
function cnvEPage(e, axis) 
{
  if (axis == "X")
    return e.pageX - e.target.offsetLeft;
  else if (axis == "Y")
    return e.pageY - e.target.offsetTop;
}

// 
function pressLBtnMouse(e)
{
  if (e.button == 0)
    mouse.active = true;
}

// Сброс данных мыши
function resetMouseDt()
{
  mouse.active = false;

  mouse.x = "-";
  mouse.y = "-";
  mouse.direct = "-";
  mouse.nextPos.x = 0;
  mouse.nextPos.y = 0;
  mouse.previousPos.x = 0;
  mouse.previousPos.y = 0;
}

// 
function tearoffLBtnMouse(e)
{
  if (e.button == 0)
  {
    resetMouseDt();
    cursorPosOnCanvas();
  }
}

// Отслеживаем pos курсора на странице
function moveMousePos(e) 
{
  if ( gui.checkingForAClosedGUI()   && 
      !gui.display.list["underMenu"] && 
       snake.countingDown.start      && 
       mouse.active                  && 
      !gui.advRewardActv)
  {
    let psX = cnvEPage(e, "X");
    let psY = cnvEPage(e, "Y");

    let MFloor = (n) => { return Math.floor(n / SZCELL); };
    mouse.x = MFloor(psX);
    mouse.y = MFloor(psY);

    if (mouse.onCanvas) 
      handCur(mouse.x, mouse.y);

    cursorPosOnCanvas();
  }
}

// 
function setHTMLText(id, axis, v) 
{
  $("#"+id).html(axis+": "+(mouse.onCanvas?v:"-")+" | ");
}

// 
function showTextDirect(d="-")
{
  $("#directMouse").html((LANGUAGE=="ru"?"Направление":"Direction")+": "+(mouse.onCanvas?d:"-"));
}

// Позиция курсора на холсте
function cursorPosOnCanvas()
{
  setHTMLText("psMouseX", "X", mouse.x);
  setHTMLText("psMouseY", "Y", mouse.y);

  showTextDirect(mouse.direct);
}

// 
function setTextDirect(d)
{
  let s = "";
  switch(d)
  {
    case DLEFT:  s = "влево";  break;
    case DUP:    s = "вверх";  break;
    case DRIGHT: s = "вправо"; break;
    case DDOWN:  s = "вниз";   break;
  }

  return (LANGUAGE=="ru"?s:d).toUpperCase();
}

// 
function handCur(ULCGx, ULCGy)
{
  mouse.nextPos.x = ULCGx;
  mouse.nextPos.y = ULCGy;

  // X
  if (mouse.nextPos.x > mouse.previousPos.x)
  {
    snake.checkDirect(DRIGHT);
    mouse.direct = setTextDirect(DRIGHT);
  }
  else if (mouse.nextPos.x < mouse.previousPos.x)
  {
    snake.checkDirect(DLEFT);
    mouse.direct = setTextDirect(DLEFT);
  }

  // Y
  if (mouse.nextPos.y > mouse.previousPos.y)
  {
    snake.checkDirect(DDOWN);
    mouse.direct = setTextDirect(DDOWN);
  }
  else if (mouse.nextPos.y < mouse.previousPos.y)
  {
    snake.checkDirect(DUP);
    mouse.direct = setTextDirect(DUP);
  }

  mouse.previousPos.x = mouse.nextPos.x;
  mouse.previousPos.y = mouse.nextPos.y;
}

// ==========

let joystick = new Joystick();