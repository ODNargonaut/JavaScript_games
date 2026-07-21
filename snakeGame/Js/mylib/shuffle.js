function shuffle(arr)
{
  let randomNum = (min, max) =>
  {
    let ntmp = Math.floor(Math.random() * (max - 0) + min);
    return (ntmp > max ? max : ntmp);
  }

  for (let l = arr.length-1; l > 0; l--)
  {
    let n = randomNum(0, l);
    let tmp = arr[l];
    arr[l] = arr[n]
    arr[n] = tmp;
  }

  return arr;
}