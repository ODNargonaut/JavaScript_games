// Mode portals
class ModePortals
{
  // Кол-во объектов в паре
  quantityObjInCouples = 2;

  // Данные о паре
  coupleData = 
  {
    listKey: [],
    listPos: [{}, {}]
  };

  // 
  tunnel = [];

  // Порталы
  collectionMap = new Map();

  imgPortal = "./img/modes/portals/portal.png";

  pointExit = {x: null, y: null};


  // 
  constructor() { }

  // 
  addValueInFood(key, pos)
  {
    let n = this.coupleData.listKey.length;
    
    this.coupleData.listKey[n] = key;

    this.coupleData.listPos[n].key = key;
    this.coupleData.listPos[n].x = pos.x;
    this.coupleData.listPos[n].y = pos.y;
  }

  // 
  linkingAPair(fthis)
  {
    this.coupleData.listPos.reverse();

    for (let i = 0; i < this.coupleData.listKey.length; i++)
    {
      let blFood = fthis.collectionMap.get(this.coupleData.listKey[i]);
      let pos = this.coupleData.listPos[i];
      blFood.v.couple.key = pos.key;
      blFood.v.couple.x = pos.x;
      blFood.v.couple.y = pos.y;
    }

    // обнуляем
    this.coupleData.listKey = [];
    this.coupleData.listPos = [{}, {}];
  }

  // 
  snakeFoundEntrance(newHead, obj)
  {
    // console.log("Змейка начала телепортироваться!");
    let head = {x: newHead.x, y: newHead.y}; // offset: {x: 0, y: 0}
    let blFood = {x: obj.v.couple.x, y: obj.v.couple.y};

    this.pointExit.x = blFood.x;
    this.pointExit.y = blFood.y;

    let setObj = (x, y, imgSrc, direct=DDOWN) => 
    {
      this.collectionMap.set(x+"|"+y, {block: new Block("obst", x, y, direct), img: imgSrc});
    };

    // Поворот портала в зависимости от направления, но только зеркально. А также 
    // наложение партала на змею, дабы скрыть разрыв змеи.
    let mirrorDirect = "";
    switch(newHead.rotation.current)
    {
      case DUP:    mirrorDirect = DDOWN;  break;  // Move left  // head.offset.x = 1;
      case DDOWN:  mirrorDirect = DUP;    break;  // Move right // head.offset.x = -1;
      case DRIGHT: mirrorDirect = DLEFT;  break;  // Move up    // head.offset.y = 1;
      case DLEFT:  mirrorDirect = DRIGHT; break;  // Move down  // head.offset.y = -1;
    }

    let n = this.tunnel.length;
    this.tunnel[n] = [];
    this.tunnel[n][0] = {x: head.x, y: head.y}; // + head.offset.x + + head.offset.y
    this.tunnel[n][1] = {x: blFood.x, y: blFood.y};

    setObj(head.x, head.y, this.imgPortal, mirrorDirect);
    setObj(blFood.x, blFood.y, this.imgPortal, newHead.rotation.current);

    newHead.x = this.pointExit.x;
    newHead.y = this.pointExit.y;
  }

  // 
  tipOfTailFountEntrance(key)
  {
    let tipOfTail = snake.organisms.get(key);
    
    if (this.tunnel.length > 0)
    {          
      let n = 0;
      let pos0 = this.tunnel[n][0];
      let pos1 = this.tunnel[n][1];

      if (tipOfTail.x == pos1.x && tipOfTail.y == pos1.y)
      {
        let arKey = [pos0.x+"|"+pos0.y, pos1.x+"|"+pos1.y];

        for (let i = 0; i < arKey.length; i++)
          this.collectionMap.delete(arKey[i]);

        this.tunnel.splice(n, 1);
          
        // console.log("Кончик хвоста перемеместился!");
      }
    }
  }

  // 
  drawPortals()
  {
    if (this.collectionMap.size > 0)
    {
      for (let k of this.collectionMap.keys())
      {
        let iCell = this.collectionMap.get(k);
        iCell.block.drawImg(iCell.img);
      }
    }
  }

  // Сброс 
  reset() 
  {
    this.coupleData.listKey = [];
    this.coupleData.listPos = [{}, {}];

    this.tunnel = [];
    
    this.collectionMap.clear();
  }
}