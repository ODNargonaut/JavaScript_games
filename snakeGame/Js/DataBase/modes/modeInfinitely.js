// Mode infinitely
class ModeInfinitely
{
  // 
  constructor() { }
  
  // Без границ
  withoutBorders(newHead)
  {
    // Move left
    if (newHead.rotation.current == DUP)
    {
      newHead.x = ctxData.border.R;
    }
    // Move up
    else if (newHead.rotation.current == DRIGHT)
    {
      newHead.y = ctxData.border.D;
    }
    // Move right
    else if (newHead.rotation.current == DDOWN)
    {
      newHead.x = ctxData.border.L;
    }
    // Move down
    else if (newHead.rotation.current == DLEFT)
    {
      newHead.y = ctxData.border.U;
    }
  }

  // 
  reset() { }
}
