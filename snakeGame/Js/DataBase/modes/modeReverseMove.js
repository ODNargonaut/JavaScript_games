// Mode reverse move
class ModeReverseMove
{
  // 
  constructor() { }

  // 
  activeReverseMove(direct)
  {
    switch(direct)
    {
      case DLEFT:  return DRIGHT;
      case DUP:    return DDOWN;
      case DRIGHT: return DLEFT;
      case DDOWN:  return DUP;
    }
  }

  // 
  reset() { }
}
