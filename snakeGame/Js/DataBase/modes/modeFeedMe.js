// Mode feedMe
class ModeFeedMe
{
  valueScore = 10;
  valueScore2 = 0;

  halfOfLife = 0;
  pN = 50;  // в процентах

  width =
  {
    current: 0,
    total: 0,
    forHtmlElm: 0,
    forHtmlElmTotal: 0
  }
  
  speed = 0.1;
  speed2 = 0;


  // 
  constructor()
  {
    let width = 662;

    this.width.total = width;
    this.width.current = width;

    this.width.forHtmlElm = width;
    this.width.forHtmlElmTotal = width;

    this.valueScore2 = this.valueScore;
    this.speed2 = this.speed;
  }

  // 
  feedTheSnake()
  {
    if (this.width.current > 0)
    {
      this.width.current -= this.speed;
      this.width.forHtmlElm -= this.speed2;

      let width = this.width.current;

      food.keepScore((width<0 ? 0 : this.width.forHtmlElm)+"px");
    }
    else
      snake.stopOrGameOver();
  }

  // 
  EliminateFeelingOfHunger()
  {
    food.score += food.valueScore;

    let currentW = this.width.current;
    let newWidth = currentW + this.valueScore;

    this.width.forHtmlElm += this.valueScore2;

    if (newWidth >= this.width.total)
    {
      newWidth = this.width.total;
      this.width.forHtmlElm = this.width.forHtmlElmTotal;
    }
             
    this.width.current = newWidth;

    food.keepScore(this.width.forHtmlElm+"px");
  }

  // 
  extraHalfOfLife()
  {
    if (this.width.current <= 0)
    {
      let halfOfLife = (this.width.total * this.pN) / 100;
      this.width.current = halfOfLife;

      food.keepScore((this.width.forHtmlElm = this.halfOfLife)+"px");
    }
  }

  // 
  reset()
  {
    food.score = 0;
    food.keepScore(this.width.forHtmlElmTotal+"px");
    
    this.width.current = this.width.total;
    this.width.forHtmlElm = this.width.forHtmlElmTotal;
  }
}
