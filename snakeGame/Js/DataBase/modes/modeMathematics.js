// Mode mathematics
class ModeMathematics
{
  valueScore = 5;
  notValueScore = 3;

  // Кол-во Решенных примеров
  numOfSolvedExamples = 0;

  currentExample = 
  {
    example: "", 
    answer: "", 
    sz: 0, 
    currentSZ: 0
  };
  yourAnswer = { idN: 0, answer: "" };

  exampleActv = false;

  // MAXSZSYMBOL = 33;
  SYMBSZ = 11;
  // MAXFRACTLENGTH = 3;

  operand = 
  {
    "one": 
    {
      whole:  // целая часть
      { 
        length: {"min": 1, "max": 2},
        lenByDefault: {"min": 1, "max": 2}
      }
      // fract: { length: {min: 0, max: 0, selected: 0, actv: false} }   // дробная часть
    },
    "two": 
    {
      whole:  // цела часть
      {
        length: {"min": 1, "max": 2},
        lenByDefault: {"min": 1, "max": 2}
      }
      // fract: { length: {min: 0, max: 0, selected: 0, actv: false} }   // дробная часть
    },
    length: {min: 1, max: 6}
  };

  sign = 
  {
    selecteds: new Map(),
    all: [0, 1, 2]
  };


  // 
  constructor() { }

  // 
  getElemByID(o)
  {
    switch(o.title)
    {
      case "symb":
      {
        if (o.b)
        {
          $("#blSymb-"+(o.idN+1)).css("display", o.display);
        }
        $("#symb-"+(o.idN+1)).html(o.value);
        break;
      }
      case "score":
      {
        // if (food.score + o.num <= 0) 
        //   food.score = 0;
        // else 
        //   food.score += o.num;

        food.keepScore(o.num);
        break;
      }
    }
  }

  // 
  discardCards()
  {
    // Сброс
    for (let i = 0; i < this.currentExample.sz+this.yourAnswer.idN; i++)
    {
      this.getElemByID(
        {
          title: "symb",
          idN: i,
          display: "none",
          value: "",
          b: true
        });
    }
  }

  // 
  chooseExample()
  {
    this.discardCards();

    this.yourAnswer.idN = 0;
    this.yourAnswer.answer = "";

    food.collectionMap.clear();

    let obj = this.getExample();
    
    this.currentExample.example = obj.example;
    this.currentExample.answer = obj.answer;
    this.currentExample.sz = obj.example.length;
    this.currentExample.currentSZ = obj.example.length;
  }

  // 
  createExample()
  {
    this.chooseExample();

    for (let i = 0; i < this.SYMBSZ; i++)
    {
      let pos = food.randomPos();
      let key = pos.x+"|"+pos.y;

      this.createSymbol(
        {
          key: key,
          x: pos.x, y: pos.y,
          imgSrc: this.getAlphabet(""+i),
          idN: (i==10?"-":i==11?".":""+i)
        });
    }

    // Показываем пример
    for (let i = 0; i < this.currentExample.sz; i++)
    {
      this.getElemByID(
        {
          title: "symb",
          idN: i,
          display: "block",
          value: this.currentExample.example[i],
          b: true
        });
    }

    this.exampleActv = true;
  }

  // 
  createSymbol(o)
  {
    food.collectionMap.set(o.key, 
      {
        block: new Block("food", o.x, o.y, DDOWN, {}),
        img: o.imgSrc,
        idN: o.idN
      });
  }

  // 
  getAlphabet(symb)
  {
    let dir = "./img/alphabet/num/";
    let dirPunct = "./img/alphabet/punct/"

    switch(symb)
    {
      case "10": return dirPunct+"minus.png";
      // case "11": return dirPunct+"point.png";
    }

    return dir+"num_"+symb+".png";
  }

  // 
  showSymbol(key)
  {
    let iElem = food.collectionMap.get(key);
    let idN = iElem.idN;

    this.yourAnswer.answer = idN;

    if (this.yourAnswer.answer === this.currentExample.answer[this.yourAnswer.idN])
    {
      this.yourAnswer.idN++;

      this.currentExample.currentSZ += idN.length;
      this.getElemByID(
        {
          title: "symb",
          idN: this.currentExample.currentSZ-1,
          display: "block",
          value: idN,
          b: true
        });

      // Если ответ верный!
      if (this.yourAnswer.idN == this.currentExample.answer.length)
      {
        this.getElemByID({ title: "score", num: this.valueScore });

        this.exampleActv = false;
        this.numOfSolvedExamples++;
      }
      else 
      {
        food.collectionMap.delete(key);
        this.newPosSymb(idN);
      }
    }
    else
    {
      this.getElemByID({ title: "score", num: -this.notValueScore });
      
      food.collectionMap.delete(key);
      this.newPosSymb(idN);
      
    }
  }

  // 
  newPosSymb(idN)
  {
    let pos = food.randomPos();
    let key = pos.x+"|"+pos.y;

    this.createSymbol(
      {
        key: key,
        x: pos.x, y: pos.y,
        imgSrc: this.getAlphabet(idN=="-"?"10":idN=="."?"11":idN),
        idN: idN
      });
  }

  // 
  getExample()
  {
    let obj = { example: "", answer: "" };

    // Деление не используется - из-за не точных результатов!
    let n1 = "", action = ["-", "*", "+", "÷"], n2 = "";

    let getNumSign = (arr) => { return action[arr[this.randomNum(0, arr.length)]]; };

    let f = () => 
    {
      let arr = [];
      for (let k of this.sign.selecteds.keys())
        arr.push(this.sign.selecteds.get(k));
      return arr;
    }

    action = (this.sign.selecteds.size == 0 ? getNumSign(this.sign.all) : getNumSign(f()));

    let getNum = (opr) => 
    {
      let o = this.operand[opr];
      let tmpNum = "";

      // целая часть
      for (let i = 0, l = this.randomNum(o.whole.length["min"], o.whole.length["max"]); i < l; i++)
        tmpNum += this.randomNum(0, 10);

      tmpNum = (tmpNum.length > 1 && tmpNum[0] === "0" ? tmpNum.slice(1) + tmpNum[0] : tmpNum);

      // if (o.fract.length.actv)
      // {
      //   o.fract.length.selected = this.randomNum(o.fract.length.min, o.fract.length.max);

      //   if (o.fract.length.selected > 0)
      //   {
      //     tmpNum += ".";
      //     // дробная часть
      //     for (let i = 0, l = o.fract.length.selected; i < l; i++)
      //       tmpNum += this.randomNum(0, 10);
      //   }
      // }
      return tmpNum;
    };

    n1 = getNum("one");
    n2 = getNum("two");

    obj.example = n1+action+n2+"=";
    
    let fAction = () =>
    {
      switch(action)
      {
        case "+": return (+n1) + (+n2);
        case "-": return (+n1) - (+n2);
        case "*": return (+n1) * (+n2);
        // Деление не используется - из-за не точных результатов!
        // case "÷": return Math.floor((+n1) / (+n2));
      }
    };

    // Пока убрал. (Причина - не точные вычисления)
    //
    // let correctionOfAnswer = (answer) => 
    // {
    //   let o = [this.operand["one"], this.operand["two"]];

    //   if (o[0].fract.length.actv || o[1].fract.length.actv)
    //   {
    //     answer = answer.toFixed(this.MAXFRACTLENGTH*2);  // Потому, что могут быть 6-ти значные дробные!

    //     let sz = answer.length-1;

    //     while(answer[sz] === "0")
    //     {
    //       answer = answer.slice(0, sz);
    //       sz = answer.length-1;
    //     }

    //     answer = answer.slice(0, (answer[sz] === "."? sz : answer.length));
    //   }
    //   return answer;
    // };


    obj.answer += fAction();

    // console.log("anwer: "+obj.answer);

    return obj;
  }

  // Генерация случайных чисел
  randomNum(min, max)
  {
    let ntmp = Math.floor(Math.random() * (max - 0) + min);
    return (ntmp > max ? max : ntmp);
  }

  // 
  reset()
  {
    this.discardCards();

    this.exampleActv = false;
    this.numOfSolvedExamples = 0;
  }
}