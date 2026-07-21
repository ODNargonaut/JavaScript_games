// Mode worlds
class ModeWords
{ 
  // Увеличиваем или понижаем счет игрока:
  valueScore = 5;                       // Награда за отгаданое слово
  notValueScore = 1;                    // Неверная следующая буква
  valueHint = {n:3, active:false};      // Была использованна подсказка

  // numWord = 0;

  numOfGuessedWords = 0; // Кол-во угаданных слов
  numOfHintsUsed = 0;    // Кол-во использованных подсказок

  currentWord = 
  {
    s: "", 
    hideS: "", 
    sz: 0, 
    listKey: [], 
    openSymbs: []
  };
  counterSymbs = 0;

  separationActv = false;

  // MAXSZSYMBOL = 33;
  LANGUAGE = "ru";
  
  // Номер темы
  NTopic = -1;


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
          document.getElementById("blSymb-"+(o.idN+1)).style.display = o.display;
        }
        document.getElementById("symb-"+(o.idN+1)).innerHTML = o.value;
        break;
      }
      case "score":
      {
        if (food.score + o.num <= 0) 
          food.keepScore(food.score, true);
        else 
          food.keepScore(o.num);

        break;
      }
    }
  }

  // 
  discardCards()
  {
    // Сброс
    for (let i = 0; i < this.currentWord.sz; i++)
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
  chooseWord()
  {
    this.discardCards();

    this.counterSymbs = 0;

    food.collectionMap.clear();

    let tmpStr = this.getWord();

    this.currentWord.s = tmpStr;
    this.currentWord.hideS = "";
    this.currentWord.sz = tmpStr.length;
    this.currentWord.listKey = [];
    this.currentWord.openSymbs = [];
  }

  // 
  maxMinQualityOpenSymbs()
  {
    let min = 1;     // Минимум одна буква, должна быть открыта в слове!
    let max = null;  // NULL - пока не будет известна длина слова!

    switch(this.currentWord.sz)
    {
      // На заметку: минимальная длина слова равна 2 буквам, а максимальная 33 буквы!
      case 2: case 3: { max = 1; break; }
              case 4: { max = 2; break; }
      case 5: case 6: { max = 3; break; }
      case 7: case 8:   case 9:  { max = 4; break; }
      case 10: case 11: case 12: { max = 5; break; }
      case 13: case 14: { max = 6; break; }
      case 15: case 18: { max = 7; break; }
      case 16: case 17: 
      case 19: case 20: { max = 8; break; }
      case 21: case 22: { max = 9; break; }
      case 23: case 24: { max = 10; break; }
               case 25: { max = 11; break; }
      case 26: case 27: { max = 12; break; }
      case 28: case 29: { max = 13; break; }
               case 30: { max = 14; break; }
      case 31: case 32: { max = 15; break; }
               case 33: { max = 18; break; }
    }

    return this.randomNum(min, max);
  }

  // 
  splitIntoLetters()
  {
    this.chooseWord();

    // this.numWord++;

    // Случайные позиции для открытых букв в слове
    let quality = this.maxMinQualityOpenSymbs();

    for (let i = 0; i < quality; i++)
    {
      let clone = false;
      let pos = -1;
      do
      {
        clone = false;
        pos = this.randomNum(0, this.currentWord.sz);
        for (let n = 0; n < this.currentWord.openSymbs.length; n++)
        {
          if (pos === this.currentWord.openSymbs[n])
          {
            clone = true; 
            break;
          }
        }
      } while(clone);

      this.currentWord.openSymbs[i] = pos;
    }
    // -----

    for (let i = 0, j=0; i < this.currentWord.sz; i++)
    {
      let c = "";
      let f = () => 
      {
        let o = this.currentWord;
        for (let ii = 0; ii < o.openSymbs.length; ii++)
        {
          let cN = o.openSymbs[ii];
          if (i == cN)
          {
            o.openSymbs.splice(ii, 1);
            return {idN: cN}
          }
        }
        return false;
      };

      let res = f();

      if (!res)
      {
        this.createSymbol(
          {
            idN: i,    // Порядковый номер буквы в слове
            idNKey: j, // Порядковый номер ключа для буквы в слове
            symb: this.currentWord.s[i]
          });

        j++;
        
        this.currentWord.hideS += this.currentWord.s[i];
        
        c = "-";
      }
      else 
        c = this.currentWord.s[res.idN].toUpperCase();

      this.getElemByID(
        {
          title: "symb",
          idN: i,
          display: "block",
          value: c,
          b: true
        });
    }

    this.separationActv = true;

    // console.log(food.collectionMap);
    // console.log(this.currentWord.listKey);
  }

  // 
  createSymbol(o)
  {
    let pos = food.randomPos();
    let key = pos.x+"|"+pos.y;

    this.currentWord.listKey[o.idNKey] = key;

    food.collectionMap.set(key, 
      {
        block: new Block("food", pos.x, pos.y, DDOWN, {}),
        img: this.getAlphabet("white", this.currentWord.s[o.idN]),
        idN: o.idN,        // Порядковый номер буквы в слове
        idNKey: o.idNKey,  // Порядковый номер ключа для буквы в слове
        symb: o.symb
      });
  }

  // 
  getAlphabet(table, symb)
  {
    let dir = "./img/alphabet/";

    let firstCh = "";

    switch(symb.charCodeAt())
    {
      case 95:
      {
        dir += "punct/";
        firstCh = "punct";
        break;
      }
      case 39:
      {
        dir += "punct/";
        firstCh = "punct";
        break;
      }
      default:
      {
        dir += this.LANGUAGE+"/";
        firstCh = this.LANGUAGE;
        break;
      }
    }

    return dir+table+"/"+firstCh+"_"+symb.charCodeAt()+".png";;
  }

  // 
  showSymbol(key)
  {
    let iElem = food.collectionMap.get(key);
    let idN = iElem.idN;
    let b = false;

    if (iElem.symb.charCodeAt() == this.currentWord.hideS[this.counterSymbs].charCodeAt())
    {
      // console.log("OK symb!");
      // console.log("key: "+k+"");
      // console.log(food.collectionMap.get(k));
      // console.log("---------------");

      this.getElemByID(
        {
          title: "symb",
          idN: food.collectionMap.get(this.currentWord.listKey[this.counterSymbs]).idN,
          value: this.currentWord.s[idN].toUpperCase(),
          b: false
        });

      // Если слово отгадано!
      if (this.counterSymbs == this.currentWord.hideS.length-1)
      {
        this.getElemByID({ title: "score", num: this.valueScore });

        this.separationActv = false;
        this.numOfGuessedWords++;
      }
      else 
        b = true;
    }
    else
    {
      // console.log("Not symb!");
      // console.log("key: "+key+"");
      // console.log(food.collectionMap.get(key));
      // console.log("---------------");
      
      this.getElemByID({ title: "score", num: -this.notValueScore });
    }

    this.nextSymbol(
      {
        key: key, 
        idN: idN, 
        currentIdNkey: iElem.idNKey, 
        next: b, 
        symb: iElem.symb
      });
  }

  // 
  nextSymbol(o)
  {
    if (o.next)
    {
      // Эти две строчки на первый взгдял могут быть безсмысленными, НО это так 
      // и должно быть: Причина - если змейка съедает следующую одинаковую букву, 
      // но эта буква не считается следующий по счету, то в этом случае нам нужно, 
      // перезаписать данные ... Дальше читай код и запускай прогу, чтобы детальней понять!
      let nextKey = this.currentWord.listKey[this.counterSymbs];
      this.currentWord.listKey[o.currentIdNkey] = nextKey;

      // Это нужно для устранения диффекта у подсказки при одинаковых букв.
      let nextIElem = food.collectionMap.get(nextKey);
      nextIElem.img = this.getAlphabet("white", nextIElem.symb);
      // ----

      if (this.valueHint.active)
        this.valueHint.active = false;
      
      nextIElem.idN = o.idN;
      nextIElem.idNKey = o.currentIdNkey;

      food.collectionMap.delete(o.key);

      ++this.counterSymbs;

      // console.log(food.collectionMap);
      // console.log(this.currentWord.listKey);
    }
    else
    {      
      food.collectionMap.delete(o.key);
      
      // console.log(this.currentWord.listKey);

      this.createSymbol(
        {
          idN: o.idN,
          idNKey: o.currentIdNkey,
          symb: o.symb
        });
    }


    // Этот код использовался когда еще не была добавлена 'Подсказка'.
    //
    // if (o.next)
    // {
    //   // Next symbol
    //   if (++this.counterSymbs < this.currentWord.hideS.length)
    //   {
    //     console.log("NextKey: "+this.currentWord.listKey[this.counterSymbs]);

    //     let iElem = food.collectionMap.get(this.currentWord.listKey[this.counterSymbs]);
    //     iElem.img = this.getAlphabet("green", this.currentWord.s[iElem.idN]);
    //   }
    // }
  }

  // 
  activeHint()
  {
    if (!this.valueHint.active && this.counterSymbs < this.currentWord.hideS.length-1)
    {
      let iElem = food.collectionMap.get(this.currentWord.listKey[this.counterSymbs]);
      iElem.img = this.getAlphabet("green", this.currentWord.s[iElem.idN]);

      this.getElemByID({ title: "score", num: -this.valueHint.n });
      this.valueHint.active = true;

      this.numOfHintsUsed++;
    }
  }

  // 
  getWord()
  {
    // Эти строки мне нужны для тестирования картинок букв!
    // 
    // "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
    // "abcdefghijklmnopqrstuvwxyz"


    // if (this.numWord >= (this.LANGUAGE == "ru" ? wordsRu : wordsEn).length)
    // {
    //   this.numWord = 0;
    // }

    let getRandomWord = (arr) => 
    { return arr[this.randomNum(0, arr.length)].toLowerCase().trim(); };
    
    let o = new MainWord();
    let word = getRandomWord(o.selectedTopic(this.NTopic, this.LANGUAGE));

    // console.log("answer: "+word);

    return word;
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

    this.separationActv = false;
    this.valueHint.active = false;

    this.numOfGuessedWords = 0;
    this.numOfHintsUsed = 0;
  }
}
