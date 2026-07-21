// 
class MainField extends CommonFields
{
  // Конструктор здесь не нужет (т.е будет выдовать ошибку)!

  // 
  selectedField(all=false)
  {
    if (!all)
    {
      switch(ctxData.mode.current.title)
      {
        case "classic":     return this.getClassicField();
        case "infinitely":  return this.getInfinitelyField();
        case "feedMe":      return this.getFeedMeField();
        case "reverseMove": return this.getReverseMoveField();
        case "portals":     return this.getPortalsField();
      }
    }
    else 
    {
      switch(ctxData.mode.current.title)
      {
        case "classic":     case "feedMe": 
        case "reverseMove": case "portals": return this.showAllFields();

        case "infinitely":  return this.getInfinitelyField();
      }
    }
  }
}