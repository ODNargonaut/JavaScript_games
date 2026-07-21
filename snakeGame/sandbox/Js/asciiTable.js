
class PrintSymbolsTable
{
  MIN = 0
  MAX = 100;


  // 
  constructor() 
  {
    this.main();
  }

  // 
  main()
  {
    let n = 0;
    for (n = this.MIN; n < this.MAX; n++)
    {      
      let bin = n.toString(2);
      let oct = n.toString(8);
      let dec = n.toString(10);
      let hex = n.toString(16);
      let char = String.fromCharCode(n);

      let getTd = (v, style="") => { return '<td align="center" style="'+style+'">'+v+'</td>'; };

      let tr = '<tr>';

      tr += getTd(bin, "font-size: 13px;");
      tr += getTd(oct, "font-size: 13px;");
      tr += getTd(dec, "font-size: 13px;");
      tr += getTd(hex.toUpperCase(), "font-size: 13px;");
      tr += getTd(char, "font-size: 25px;");

      tr += '</tr>';

      $("#tbody").append(tr);
    }
  }
}

let o = new PrintSymbolsTable();