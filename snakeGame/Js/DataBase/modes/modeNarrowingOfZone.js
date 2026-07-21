// Mode narrowing of zone
class ModeNarrowingOfZone
{
  keyNextObst = "";
  activeNextPos = false;

  nextWallImg = "./img/modes/narrowingOfZone/nextPosObst.png";


  // 
  constructor() { }

  // 
  showNextPosObst()
  {
    let pos = food.randomPos();
    let key = pos.x+"|"+pos.y;

    this.keyNextObst = key;
    
    obst.createObst(this.nextWallImg, pos.x, pos.y, DDOWN, {nextPosObst: true});

    this.activeNextPos = true;
  }

  // 
  activeNarrowingOfZone()
  {
    if (obst.collectionMap.has(this.keyNextObst))
    {
      let iElem = obst.collectionMap.get(this.keyNextObst);

      iElem.img = obst.wallImg;
      iElem.v.nextPosObst = false;
    }

    this.activeNextPos = false;
  }

  // 
  reset()
  {
    this.activeNextPos = false;
  }
}