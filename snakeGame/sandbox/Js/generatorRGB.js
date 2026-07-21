class Color
{
  rgb = [];
  A = 0;

  fg = null;  // цвет краски
  bg = null;  // фон

  // 
  constructor(fg, bg)
  {
    this.fg = fg;
    this.bg = bg;

    this.A = 1 - (1 - fg.A) * (1 - bg.A);

    let rgb = "RGB";
    for (let i = 0; i < rgb.length; i++)
    {
      let fg = this.fg[rgb[i]];
      let bg = this.bg[rgb[i]];
            
      this.rgb[i] = Math.floor(this.getNumClr(fg, bg) * 255);
    }
  }

  // 
  getNumClr(fgRGB, bgRGB)
  {
    let answer = ((fgRGB * this.fg.A / this.A + bgRGB * this.bg.A * (1 - this.fg.A) / this.A).toFixed(2));
    return +answer;
  }

  // 
  showResult()
  {
    console.log(this.rgb);

    let r = this.rgb[0];
    let g = this.rgb[1];
    let b = this.rgb[2];
    
    $("body").css("background-color", "rgb("+r+", "+g+", "+b+")");
  }
}

      
let res = new Color
(
  // Для первого аргумента диапозоны значений: 
  // R = (min: 0.00, max: 1.50) | 
  // G = (min: 0.00, max: 1.00) | 
  // B = (min: 0.00, max: 1.50) | 
  // A = (min: 0.00, max: 0.50) |
  {"R": 0.90, "G": 0.80, "B": 1.10, A: 0.50},
  {"R": 0.00, "G": 1.00, "B": 0.00, A: 0.50}  // Эти значения не трогаем!
);

res.showResult();
