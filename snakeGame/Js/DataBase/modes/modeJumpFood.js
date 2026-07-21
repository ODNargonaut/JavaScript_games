// Mode jumpFood
class ModeJumpFood
{
  offsetX = 1;
  offsetY = 1;
  
  fps = 0;
  
  speed = 3;


  // 
  constructor() { }

  // 
  speedFps()
  {
    if (this.fps >= 1e5) this.fps = 0;
    
    if (this.fps++ % this.speed == 0) return true;
    else return false;
  }

  // 
  moveFood()
  {
    for (let k of food.collectionMap.keys())
    {
      let b = false;
      let iFood = food.collectionMap.get(k);
 
      let x = iFood.block.x;
      let y = iFood.block.y;
      let offsetX = iFood.block.offsetX;
      let offsetY = iFood.block.offsetY;
       
      if (x < ctxData.border.L+2)
      {
        b = true;
        // console.log("Left сторона");
        iFood.block.offsetX = -offsetX;
        iFood.block.moveDirect.x = DRIGHT;
      }
      else if (y < ctxData.border.U+2)
      {
        b = true;
        // console.log("Up сторона");
        iFood.block.offsetY = -offsetY;
        iFood.block.moveDirect.y = DDOWN;
      }
      else if (x > ctxData.border.R-2)
      {
        b = true;
        // console.log("Right сторона");
        iFood.block.offsetX = -offsetX;
        iFood.block.moveDirect.x = DLEFT;
      }
      else if (y > ctxData.border.D-2)
      {
        b = true;
        // console.log("Down сторона");
        iFood.block.offsetY = -offsetY;
        iFood.block.moveDirect.y = DUP;
      }

      if (!b)
      {
        for (let k of snake.organisms.keys())
        {
          let iSnake = snake.organisms.get(k);
  
          if (x === iSnake.x && y === iSnake.y)
          {
            switch(iSnake.rotation.current)
            {
              case DUP: case DDOWN:     // Горизонтальное направление
              iFood.block.offsetY = -offsetY;
                break;
              case DRIGHT: case DLEFT:  // Вертикальное направление
                iFood.block.offsetX = -offsetX;
                break;
            }
            break;
          }
        }
      }
 
      iFood.block.x += iFood.block.offsetX;
      iFood.block.y += iFood.block.offsetY;

      // Внимание: Смотри на знак выше! Прежде, чем менять.
      // В первый старт игры.
      if (iFood.block.moveDirect.x === null)
        iFood.block.moveDirect.x = DLEFT;
      if (iFood.block.moveDirect.y === null)
        iFood.block.moveDirect.y = DUP;
 
      // Если будет баг, то необходимо создать новый объект
      if (x <= ctxData.border.L) food.delFood(k);
      else if (y <= ctxData.border.U) food.delFood(k);
      else if (x >= ctxData.border.R) food.delFood(k);
      else if (y >= ctxData.border.D) food.delFood(k);
    }
  }

  // 
  randomOffset()
  {
    return {offsetX: -this.offsetX, offsetY: -this.offsetY};
  }

  // 
  reset()
  {
    this.fps = 0;
  }
}
