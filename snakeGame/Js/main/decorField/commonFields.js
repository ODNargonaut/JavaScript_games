// 
class CommonFields extends portalsField
{
  // 
  showAllFields()
  {
    let maps = [];
    maps[0] = this.getClassicField();
    maps[1] = this.getFeedMeField();
    maps[2] = this.getReverseMoveField();
    maps[3] = this.getPortalsField();

    let arrFields = [];
    let arrStartPoints = [];

    for (let m = 0; m < maps.length; m++)
    {
      let nextPos = arrFields.length;
      for (let i = (m==0?0:1); i < maps[m].get("arr").length; i++, nextPos++)
      {
        arrFields[nextPos] = maps[m].get("arr")[i];
        arrStartPoints[nextPos] = maps[m].get("startPoint")[i];
      }
    }

    return new Map([["arr", arrFields], ["startPoint", arrStartPoints]]);
  }
}