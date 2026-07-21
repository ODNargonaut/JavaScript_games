/* Данный класс отвечает за адаптацию GUI и холста */

/*

  Изначально игра создавалась для определенного разрешения экрана (1536 x 748).
  Размеры, которые ты видишь в таких ф-ия, как AdaptationGUI.mainGui(), являются 
  первоначальными размерами элементов, которые затем преобразуются в проценты, а 
  затем корректируются в соответствии с экраном устройства.

*/

class AdaptationGUI
{
  // openGUI = "-";  // какой сейчас открыт GUI?

  fixWin = {w: 1536, h: 748};  // Это w и h экрана, под который изначально разрабатывалась игра!
  BlForOtherSides = {w: 1008, h: 708};

  display = null;

  listModes = null;     // для ф-ии modes();
  selectedMode = null;  // для ф-ии description()

  selectedTopic = {o: null, lang: ""};  // для ф-ии settingsModeWords()

  activeBlock =                         // для ф-ии settingsModeMath() 
  {
    oprLen: 
    {
      "first": ["#C1C1C1", "#C1C1C1"], 
      "second": ["#C1C1C1", "#C1C1C1"]
    }, 
    actSigns: 
    {
      sign: ["#C1C1C1", "#C1C1C1", "#C1C1C1"], 
      random: "#C1C1C1"
    }, 
    byDefault: "#C1C1C1"
  };

  activeBlock2 =            // для ф-ии topics() 
  {
    obst: "#FFFFFF",
    bg: "#FFFFFF",
    random: "#FFFFFF"
  };

  snakeDesign = null;       // для ф-ий settingsSnake() и settingsFood()
  settingsDocument =        // для ф-ии document()
  {
    o: null, 
    nch: ""
  };



  // 
  constructor () 
  {
    this.addStyleman(
      [
        "MainMenu", "LanguageSys", "InitUser", "Warning", "SettingJestik", 
        "Modes", "Description", "DecorationField", "LevelsForMaze", "SettingsModeWords", 
        "SettingsModeMath", "Topics", "SettingsSnake", "SettingsFood", "RulesOfGame", 
        "Document", "UnderMenu", "GameOverForWM", "GameOverForOther", "GameOverForMaze", 
        "CountingRelustsForMaze"
      ]);
  }

  // 
  // guiWasClosed() { this.openGUI = "-"; };

  // 
  addStyleman(ids)
  {
    for (let i = 0; i < ids.length; i++)
      $("#body").append('<style id="styleman-'+ids[i]+'"></style>');
  }

  // 
  setVStyleman(id, v) { $("#styleman-"+id).html(v); }

  // Три формулы на проценты:
  p1(a, p) { return (a * p) / 100; }
  p2(b, p) { return (b * 100) / p; }
  p3(b, a) { return b / a * 100; }

  // 
  getAttrValueStyle(id, searchStr, sbr="border:")
  {
    let arr = [], s = "", ind = -1, res = -1;

    if ($(id).attr("style") !== undefined)
      arr = $(id).attr("style").split(';');

    arr.forEach((v, i, ar) => { if (v.indexOf(sbr) != -1) s = v; });

    if (s.length > 0)
    {
      arr = s.split(' ');
      arr.forEach((v, i, ar) => 
      {
        if (searchStr == "px" && v.indexOf("px") != -1) s = v;
        else if (searchStr == "rgb" && v.indexOf("rgb") != -1) ind = i;
      });

      if (s.indexOf(searchStr) != -1 || ind >= 0)
      {
        switch(searchStr)
        {
          case "px": res = +s.slice(0, s.indexOf('p')); break;
          case "rgb":
          {
            res = "";
            arr.slice(ind).forEach((v, i, ar) => { res += v+(i<ar.length-1?' ':''); });
            break;
          }
        }
      }
    }

    return res;
  };

  // 
  changeWHInterf(interf="all", o=false)
  {
    let felm = (arr) => 
    {
      let s = "";

      for (let i = 0; i < arr.length; i++)
      {
        let o = arr[i];

        if (o.id === "-1") continue

        let h = this.p1($(i==0||o.link==1.1?window:arr[o.link>=0?o.link:i-1].id).height(), o.ph);
        let w = h + this.p1(h, o.diffpw);

        if ((i == 0 || i == 1) && $(window).width() - 20 < w)
        {
          let n = w - $(window).width() + 15;
          let Ndivi = n / 1.6;

          if (o.id.indexOf("blValueForSnake") != -1) Ndivi = n / 28;
          
          h -= Ndivi;
          w -= n;
        }

        // Это действие, просто тупо использует размеры родителя. Мне уже надоела эта
        // чертова адаптация (т.е. типа якобы видны полосы прокрутки по вертикали/горизонтали). 
        if (o.id.indexOf(".blForOtherSides-elm-1") != -1)
        {
          h = $(".blForOtherSides-elm-0").height();
          w = $(".blForOtherSides-elm-0").width();
        }

        let cssElm = o.id + "{ ";  // для псевдокласса

        let fsetWH = (s, n) => 
        {
          if (!o.b)
            $(o.id).css(s=="w"?"width":"height", n+"px");
          else 
            cssElm += (s=="w"?"width":"height") + " :" + n+"px; ";
        };

        if (o.id === "szcell")
        {
          SZCELL2 = w + h;
        }
        else 
        {
          fsetWH("w", w);
          fsetWH("h", h);
        }

        // для border
        if (o.br)
        {
          let n = this.p1(w+h, o.br.pn);
          $(o.id).css("border", n+"px solid "+o.br.clr);

          if (o.br.nobr.length > 0)
          {
            let i = 0;
            if (o.br.nobr[i++] == "L") $(o.id).css("border-left",   "none");
            if (o.br.nobr[i++] == "U") $(o.id).css("border-top",    "none");
            if (o.br.nobr[i++] == "R") $(o.id).css("border-right",  "none");
            if (o.br.nobr[i]   == "D") $(o.id).css("border-bottom", "none");
          }
        }

        // для border-radius
        if ((typeof o.angleBr === "number" && o.angleBr > 0) || typeof o.angleBr === "object")
        {
          let fAngleBrLURD = () => 
          {
            let b = 0;

            [{c: "UL", d: "top-left"}, 
             {c: "UR", d: "top-right"}, 
             {c: "DL", d: "bottom-left"}, 
             {c: "DR", d: "bottom-right"}
            ].forEach((v, i, ar) => 
            {
              if (Object.hasOwn(o.angleBr, v.c)) 
              {
                $(o.id).css("border-"+v.d+"-radius", this.p1(w+h, o.angleBr[v.c])); 
                b=1;
              }
            });

            return b;
          };

          if (typeof o.angleBr === "object" && fAngleBrLURD());
          else if (typeof o.angleBr === "number")
          {
            let r = this.p1(w+h, o.angleBr);
            $(o.id).css("border-radius", r+"px");
          }
        }

        // для font-size и bg-size
        if (o.t.psz > 0)
        {
          let sz = this.p1(w+h, o.t.psz);
          if (!o.b)
            $(o.id).css(o.t.s=="txt"?"font-size":"background-size", sz+"px");
          else 
            cssElm += (o.t.s=="txt"?"font-size":"background-size") + " :" + sz+"px; ";
        }

        // для MOffset
        if (o.MOffset !== null)
        {
          let x = this.p1(w, o.MOffset.px);
          let y = this.p1(h, o.MOffset.py);
          $(o.id).css("margin-left", x+"px");
          $(o.id).css("margin-top", y+"px");
        }

        if (o.b)
        {
          s += cssElm + "}" + '\n';
              
          if (o.pseudoCls)
            s += this.pseudoСlass(o.pseudoCls);
        }
      }

      return s;
    };

    
    if (interf !== "all")
    {
      let arr = [];
      switch(interf)
      {
        case "MainMenu":      arr = this.mainGui();       break;
        case "LanguageSys":   arr = this.languageSys();   break;
        case "InitUser":      arr = this.initUser();      break;
        case "Warning":       arr = this.warning();       break;
        case "SettingJestik": arr = this.settingJestik(); break;
        case "Modes":         arr = this.modes();         break;
        case "Description":   arr = this.description();   break;
        case "DecorationField":   arr = this.decorationField();   break;
        case "LevelsForMaze":     arr = this.levelsForMaze();     break;
        case "SettingsModeWords": arr = this.settingsModeWords(); break;
        case "SettingsModeMath":  arr = this.settingsModeMath();  break;
        case "Topics":        arr = this.topics();        break;
        case "SettingsSnake": arr = this.settingsSnake(); break;
        case "SettingsFood":  arr = this.settingsFood();  break;
        case "RulesOfGame":   arr = this.rulesOfGame();   break;
        case "Document":      arr = this.document();      break;
        case "UnderMenu":     arr = this.underMenu();     break;
        case "GameOverForWM": arr = this.gameOverForWM(); break;
        case "GameOverForOther":  arr = this.gameOverForOther();  break;
        case "GameOverForMaze":   arr = this.gameOverForMaze();   break;
        case "CountingRelustsForMaze": arr = this.countingRelustsForMaze(); break;
        case "indicator":       arr = this.indicator();       break;
        case "lowerBlock":      arr = this.lowerBlock();      break;
        case "blValueForSnake": arr = this.blValueForSnake(); break;
        case "canvas":          arr = this.canvas();          break;
        case "blForOtherSides": arr = this.blForOtherSides(); break;
      }

      if (arr.length > 0)
        this.setVStyleman(interf, felm(arr));
    }
    else
    {
      this.setVStyleman("MainMenu",      felm(this.mainGui()));
      this.setVStyleman("LanguageSys",   felm(this.languageSys()));
      this.setVStyleman("InitUser",      felm(this.initUser()));
      this.setVStyleman("Warning",       felm(this.warning()));
      this.setVStyleman("SettingJestik", felm(this.settingJestik()));
      this.setVStyleman("Modes",         felm(this.modes()));
      this.setVStyleman("Description",   felm(this.description()));
      this.setVStyleman("DecorationField",   felm(this.decorationField()));
      this.setVStyleman("LevelsForMaze",     felm(this.levelsForMaze()));
      this.setVStyleman("SettingsModeWords", felm(this.settingsModeWords()));
      this.setVStyleman("SettingsModeMath",  felm(this.settingsModeMath()));
      this.setVStyleman("Topics",        felm(this.topics()));
      this.setVStyleman("SettingsSnake", felm(this.settingsSnake()));
      this.setVStyleman("SettingsFood",  felm(this.settingsFood()));
      this.setVStyleman("RulesOfGame",   felm(this.rulesOfGame()));
      this.setVStyleman("Document",      felm(this.document()));
      this.setVStyleman("UnderMenu",     felm(this.underMenu()));
      this.setVStyleman("GameOverForWM", felm(this.gameOverForWM()));
      this.setVStyleman("GameOverForOther", felm(this.gameOverForOther()));
      this.setVStyleman("GameOverForMaze",  felm(this.gameOverForMaze()));
      this.setVStyleman("CountingRelustsForMaze", felm(this.countingRelustsForMaze()));
      felm(this.indicator());
      felm(this.lowerBlock());
      felm(this.blValueForSnake());
      felm(this.canvas());
      felm(this.blForOtherSides());
    }


    // FeedMe
    if ((interf == "blValueForSnake" || interf == "all") && ctxData.checkSelectedMode("feedMe"))
    {
      let interStrCls = ".blValueForSnake-elm-";
      let blFeedMe = {w: 670, h: 23};

      let feedMe = ctxData.mode.current.o;
      let blIndicatorFeedMe = {w: feedMe.width.current, h: 12};

      let setH = (h1, h2) => { return this.p1($(interStrCls+"7").height(), this.p3(h1, h2)); };

      let setW = (h, h1, w) => { return h + this.p1(h, this.p3(w - h1, h1)); };

      let h = setH(blIndicatorFeedMe.h, blFeedMe.h);
      let w = setW(h, blIndicatorFeedMe.h, blIndicatorFeedMe.w);

      feedMe.width.forHtmlElm = w;

      let elms = [this.getObj("-1", 0, 0, {w: 0, h: 0}), this.getObj(interStrCls+"7", 0, 0, {w: 0, h: 0})];
      elms.push(this.getObj(interStrCls+"8", blIndicatorFeedMe.w, blIndicatorFeedMe.h, blFeedMe, {angleBr: 3, MOffset: {x: 2, y: 8}}));
      felm(elms);

      w = setW(h, blIndicatorFeedMe.h, feedMe.width.total);
      
      feedMe.width.forHtmlElmTotal = w;
      
      feedMe.speed2 = this.p1(w, this.p3(feedMe.speed, feedMe.width.total));
      
      feedMe.valueScore2 = this.p1(w, this.p3(feedMe.valueScore, feedMe.width.total));
      
      feedMe.halfOfLife = this.p1(w, feedMe.pN);
    }


    if (interf === "canvas" || interf === "all")
    {
      // console.log("HTML_Canvas_W: "+$("#canvas").width());
      // console.log("HTML_Canvas_H: "+$("#canvas").height());
      // console.log("-------");
      // console.log("ctxW: "+Math.floor($("#canvas").width() / SZCELL2));
      // console.log("ctxH: "+Math.floor($("#canvas").height() / SZCELL2));
      // console.log("===");

      canvasWidth = Math.floor($("#canvas").width() / SZCELL2);
      canvasHeight = Math.floor($("#canvas").height() / SZCELL2);
    }
  }

  // 
  pseudoСlass(o)
  {
    let style = "";

    // --
    let setW = (n) => { return "width: "+n+"px; "; };
    let setH = (n) => { return "height: "+n+"px; "; };

    let setMLx = (n) => { return "margin-left: "+n+"px; "; };
    let setMUy = (n) => { return "margin-top: "+n+"px; "; };

    // let setPLx = (n) => { return "padding-left: "+n+"px; "; };
    // let setPUy = (n) => { return "padding-top: "+n+"px; "; };

    let setBgsz = (n) => { return "background-size: "+n+"px; "; };
    let setTsz = (n) => { return "font-size: "+n+"px; "; };

    let setAnim = (s) => { return "transition: "+s+"; "; };
    // --

    let Blid = o.arr[o.o.link>=0?o.o.link:o.i-1].id;

    let h = this.p1($(Blid).height(), o.o.ph);
    let w = h + this.p1(h, o.o.diffpw);

    let sz = this.p1(w+h, o.o.t.psz);

    if (o.o.MOffset !== null)
    {
      let x = this.p1($(Blid).width(), o.o.MOffset.px);
      let y = this.p1($(Blid).height(), o.o.MOffset.py);
      style += setMLx(x) + setMUy(y);
    }

    // if (o.o.POffset !== null)
    // {
    //   let x = this.p1($(o.arr[o.i].id).width(), o.o.POffset.px);
    //   let y = this.p1($(o.arr[o.i].id).height(), o.o.POffset.py);
    //   style += setPLx(x) + setPUy(y);
    // }

    for (let i = 0; i < o.css.length; i++)
    {
      switch(o.css[i])
      {
        case "w": style += setW(w); break;
        case "h": style += setH(h); break;
        case "bgsz": style += setBgsz(sz); break;
        case "fontsz": style += setTsz(sz); break;
        case "anim": style += setAnim(o.anim); break;
      }
    }

    let css = o.o.id + ":" + o.cls + "{" + style + "}";

    return css + '\n';
  }

  // 
  getObj(id, w, h, parent, o={})
  {
    o.sz = (Object.hasOwn(o, "sz")?o.sz:0);
    o.s = (Object.hasOwn(o, "s")?o.s:"txt");
    o.br = (Object.hasOwn(o, "br")?o.br:false);
    if (o.br) {
      o.br.nobr = (Object.hasOwn(o.br, "nobr")?o.br.nobr:"")
    }
    o.angleBr = (Object.hasOwn(o, "angleBr")?o.angleBr:0);
    o.link = (Object.hasOwn(o, "link")?o.link:-1);
    o.b = (Object.hasOwn(o, "b")?o.b:false);
    o.MOffset = (Object.hasOwn(o, "MOffset")?o.MOffset:false);
    // o.POffset = (Object.hasOwn(o, "POffset")?o.POffset:false);
    o.pseudoCls = (Object.hasOwn(o, "pseudoCls")?o.pseudoCls:false);

    let MOffset = (o.MOffset ? {px: this.p3(o.MOffset.x, parent.w), py: this.p3(o.MOffset.y, parent.h)} : null);
    // let POffset = (o.POffset ? {px: this.p3(o.POffset.x, parent.w), py: this.p3(o.POffset.y, parent.h)} : null);

    let border = (o.br ?{pn: this.p3(o.br.n, w+h), clr: o.br.clr, nobr: o.br.nobr}: false);

    let fAngleBrLURD = () => 
    {
      let b = 0;

      ["UL", "UR", "DL", "DR"].forEach((v, i, ar) => 
      {
        if (Object.hasOwn(o.angleBr, v)) 
        {
          o.angleBr[v] = this.p3(o.angleBr[v], w+h); 
          b=1;
        }
      });

      return b;
    };

    if (typeof o.angleBr === "object" && fAngleBrLURD());
    else if (typeof o.angleBr === "number") o.angleBr = this.p3(o.angleBr, w+h);
    else o.angleBr = 0;

    // **Важно**
    // Соблюдай порядок у следующих свойств: 
    // 1) br.nobr = LURD (примеры: (-U--, убрать границу сверху), (L-R-, убрать границу слева и справа))
    // 
    // Все числа здесь будут преобразованы в проценты (чтобы стать постоянной единицей измерения, независимо от экрана устройства)
    return {
      id: id,                    // ID - элемента.
      diffpw: this.p3(w-h, h),   // diffpw - разница между шириной и высотой (Например: w=8, h=5; 8-5=3; 3-и - это наша разница).
      ph: this.p3(h, parent.h),  // ph - высота элемента.
      t:                         // 
      {                          // 
        psz: this.p3(o.sz, w+h), // psz - размеры для текста или фонового изображения.
        s: o.s                   // s - определяет, для кого должно быть применено значение из psz - (txt/img), по умолчанию (txt).                           // 
      },                         // 
      br: border,                // br - свойства: (pn - толщина линии), (clr - цвет линии) и (nobr - скрыть border с LURD (если не нужна буква поставь '-')).
      angleBr: o.angleBr,        // angleBr - (может быть числом или объектом) - общий border-radius или по отдельности:
                                 // "UL" - border-top-left-radius;
                                 // "UR" - border-top-right-radius;
                                 // "DL" - border-bottom-left-radius;
                                 // "DR" - border-bottom-right-radius;
                                 // 
      link: o.link,              // link - ссылка на элемент.
      b: o.b,                    // b - определяет, куда нужно записывать css (в сам тег или в тег style).
      MOffset: MOffset,          // MOffset - margin-left и margin-top (css).
      // POffset: POffset,       // POfset - padding-left и padding-top (css).
                                 // 
      pseudoCls: o.pseudoCls // pseudoCls - псевдокласс css, и с необходимыми данными для элемента:
                             // .i - порядковый номер в стеке (если указана ссылка, то номер служит исключительно для указания элемента в стеке);
                             // .cls - название псевдокласса;
                             // .o - содержит данные, которые упоминались ранее до свойства pseudoCls;
                             // .anim - transition (css);
                             // .css - содержит сокращенные названия стилей css, которые понадобятся для элемента с псевдоклассом;
                             // .arr - содержит список всех элементов с данными для текущего GUI.
    };
  }

  // 
  addMainBlock(interf, o, elms)
  {
    elms.push(this.getObj("."+interf+"-elm-0", o.w, o.h, this.fixWin, {angleBr: 5}));
    elms.push(this.getObj("."+interf+"-elm-1", o.w, o.h, o));
  }

  // Задать те же внешние блоки у GUI
  addExternalBlocks(interf, elms, mainBlock, titleBlock, underBlock)
  {
    this.addMainBlock(interf, mainBlock, elms);

    elms.push(this.getObj("."+interf+"-elm-2", titleBlock.w, titleBlock.h, mainBlock, {sz: 25}));

    elms.push(this.getObj("."+interf+"-elm-3", underBlock.w, underBlock.h, mainBlock, {angleBr: 10, link: 1}));
    elms.push(this.getObj("."+interf+"-elm-4", underBlock.w, underBlock.h, underBlock));
  }

  // 
  addBtnPrevisChapter(interf, parent, nameBtn, elms, o={})
  {
    o.w = (Object.hasOwn(o, "w")?o.w:50);
    o.h = (Object.hasOwn(o, "h")?o.h:30);

    let i = elms.length;

    elms.push(this.getObj("."+interf+"-elm-"+i, o.w, o.h, parent, 
      {
        link: 1, sz: 38, s: "img", b: true,
        pseudoCls: 
        {
          i: i,
          cls: "active",
          o: this.getObj(nameBtn, o.w, o.h, parent, 
            {
              sz: 29, link: 1
            }),
          anim: "0.2",
          css: ["bgsz", "anim"],
          arr: elms
        }
      }));
  }

  // 
  addBtnSelected(interf, parent, nameBtn, tw, th, elms, o={})
  {
    o.w = (Object.hasOwn(o, "w")?o.w:230);    // ширина кнопки
    o.h = (Object.hasOwn(o, "h")?o.h:38);     // высота кнопки
    o.i = (Object.hasOwn(o, "i")?o.i:false);  // счет будет начинаться с этого числа 

    let i = (typeof o.i === "number" ? o.i : elms.length);

    elms.push(this.getObj("."+interf+"-elm-"+(i++), o.w, o.h, parent, 
      {
        link: 4, angleBr: 3, b: true, br: {n: 1, clr: "#C1C1C1"},
        pseudoCls: 
        {
          i: elms.length,
          cls: "active",
          o: this.getObj(nameBtn, o.w, o.h, parent, 
            {
              link: 4, MOffset: {x: 0, y: 5}
            }),
          anim: "0.15s",
          css: ["anim"],
          arr: elms
        }
      }));
    elms.push(this.getObj("."+interf+"-elm-"+(i++), o.w, o.h, parent, {link: 4}));

    elms.push(this.getObj("."+interf+"-elm-"+(i), tw, th, o, {sz: 24}));
  }

  
  // MainGui
  mainGui()
  {
    let elms = [];
    let interStrCls = ".blMainGUI-elm-";

    let blMainGUI = {w: 1008, h: 608};
    this.addMainBlock("blMainGUI", blMainGUI, elms);

    let blLogo = {w: 480, h: 80};
    elms.push(this.getObj(interStrCls+"2", blLogo.w, blLogo.h, blMainGUI, {angleBr: 10}));
    elms.push(this.getObj(interStrCls+"3", blLogo.w, blLogo.h, blLogo));

    let t_logoMain = {w: 440, h: 80};
    elms.push(this.getObj(interStrCls+"4", t_logoMain.w, t_logoMain.h, blLogo, {sz: 65}));

    let blBtnPlayImg = {w: 60, h: 66};
    elms.push(this.getObj(interStrCls+"5", blBtnPlayImg.w, blBtnPlayImg.h, blMainGUI, 
      {
        sz: 66, link: 1, b: true, s: "img",
        pseudoCls: 
        {
          i: 5,
          cls: "active", 
          o: this.getObj(".blBtnPlayImgApple", blBtnPlayImg.w, blBtnPlayImg.h-10, blMainGUI, 
              {
                sz: 56, link: 1, s: "img", MOffset: {x: 5, y: 0}
              }),
          anim: "0.1s",
          css: ["w", "h", "bgsz", "anim"],
          arr: elms
        }
      }));

    let blDrawSnake = {w: 86, h: 205};
    elms.push(this.getObj(interStrCls+"6", blDrawSnake.w, blDrawSnake.h, blMainGUI, {link: 1}));
    
    elms.push(this.getObj(interStrCls+"7", blDrawSnake.w, blDrawSnake.h, blDrawSnake));

    return elms;
  }


  // LanguageSys
  languageSys()
  {
    let elms = [];
    let interStrCls = ".blLanguage-elm-";

    let blLanguage = {w: 1008, h: 608};
    this.addMainBlock("blLanguage", blLanguage, elms);

    let selectedLanguare = {w: 200, h: 159};
    elms.push(this.getObj(interStrCls+"2", selectedLanguare.w, selectedLanguare.h, blLanguage));

    for (let i = 3; i < 5; i++)
    {
      let blSelectedLanguareRuEn = {w: 200, h: 65};
      elms.push(this.getObj(interStrCls+i, blSelectedLanguareRuEn.w, blSelectedLanguareRuEn.h, selectedLanguare, 
        {
          angleBr: 5, sz: 28, b: true,
          pseudoCls: 
          {
            i: i,
            cls: "active",
            o: this.getObj(".blSelectedLanguare"+(i==3?"Ru":"En"), blSelectedLanguareRuEn.w-27, blSelectedLanguareRuEn.h-10, selectedLanguare, 
              {
                sz: 25, MOffset: {x: i==3?10:0, y: i==3?10:-10}
              }),
            anim: "0.25s",
            css: ["w", "h", "fontsz", "anim"],
            arr: elms
          }
        }));
      
      if (i == 4)
      {
        elms[i].link = 2;
        elms[i].pseudoCls.o.link = 2;
      }
    }

    return elms;
  }


  // InitUser
  initUser()
  {
    let elms = [];
    let b = (LANGUAGE=="ru"?true:false);
    let interStrCls = ".initUser-elm-";

    let blInitUser = {w: 1008, h: 608};
    let blTitleInitUser = {w: b?187:141, h: 29};
    let blMainBlInitUser = {w: 750, h: 540};
    this.addExternalBlocks("initUser", elms, blInitUser, blTitleInitUser, blMainBlInitUser);

    let blMainInitUser = {w: 650, h: 430};
    elms.push(this.getObj(interStrCls+"5", blMainInitUser.w, blMainInitUser.h, blMainBlInitUser, {angleBr: 5, br: {n: 1, clr: "#C1C1C1"}}));
    elms.push(this.getObj(interStrCls+"6", blMainInitUser.w, blMainInitUser.h, blMainInitUser));

    let blInitUserText = {w: 625, h: 405};
    elms.push(this.getObj(interStrCls+"7", blInitUserText.w, blInitUserText.h, blMainInitUser, {link: 6}));

    let codeTInitUser_1 = {w: b?275:243.5, h: 18};
    elms.push(this.getObj(interStrCls+"8", codeTInitUser_1.w, codeTInitUser_1.h, blInitUserText, {sz: 13}));

    let sameObj = {sz: 13, link: 7};
    
    let codeTInitUser_2 = {w: b?423:400, h: 62};
    elms.push(this.getObj(interStrCls+"9", codeTInitUser_2.w, codeTInitUser_2.h, blInitUserText, sameObj));

    let codeTInitUser_3 = {w: b?435:430, h: 18};
    elms.push(this.getObj(interStrCls+"10", codeTInitUser_3.w, codeTInitUser_3.h, blInitUserText, sameObj));

    let codeTInitUser_4 = {w: b?595:595, h: 48};
    elms.push(this.getObj(interStrCls+"11", codeTInitUser_4.w, codeTInitUser_4.h, blInitUserText, sameObj));

    let codeTInitUser_5 = {w: b?595:595, h: 48};
    elms.push(this.getObj(interStrCls+"12", codeTInitUser_5.w, codeTInitUser_5.h, blInitUserText, sameObj));

    let codeTInitUser_6 = {w: b?305:255, h: 18};
    elms.push(this.getObj(interStrCls+"13", codeTInitUser_6.w, codeTInitUser_6.h, blInitUserText, sameObj));

    this.addBtnSelected("initUser", blMainBlInitUser, ".blBtnSelectedInitUser", b?68:69, 28, elms);
    this.addBtnSelected("initUser", blMainBlInitUser, ".blBtnSelectedInitUser", b?64:63, 28, elms);

    let hrLine = {w: b?423:400, h: 1.5};
    elms.push(this.getObj(interStrCls+"20", hrLine.w, hrLine.h, codeTInitUser_2, {link: 9, MOffset: {x: 0, y: 3}}));

    return elms;
  }


  // Warning
  warning()
  {
    let elms = [];
    let b = (LANGUAGE=="ru"?true:false);
    let interStrCls = ".warning-elm-";

    let blWarning = {w: 1008, h: 608};
    let blTitleWarning = {w: b?144:131, h: 29};
    let blMainBlWarning = {w: 750, h: 540};
    this.addExternalBlocks("warning", elms, blWarning, blTitleWarning, blMainBlWarning);

    let blMainWarning = {w: 650, h: 430};
    elms.push(this.getObj(interStrCls+"5", blMainWarning.w, blMainWarning.h, blMainBlWarning, {angleBr: 5, br: {n: 1, clr: "#C1C1C1"}}));
    elms.push(this.getObj(interStrCls+"6", blMainWarning.w, blMainWarning.h, blMainWarning));

    let blWarningText = {w: 625, h: 405};
    elms.push(this.getObj(interStrCls+"7", blWarningText.w, blWarningText.h, blMainWarning));

    let sameObj = {sz: 13, link: 7};
    
    let codeTWarning_1 = {w: b?71:103, h: 15};
    elms.push(this.getObj(interStrCls+"8", codeTWarning_1.w, codeTWarning_1.h, blWarningText, sameObj));

    let codeTWarning_2 = {w: b?495:350, h: 15};
    elms.push(this.getObj(interStrCls+"9", codeTWarning_2.w, codeTWarning_2.h, blWarningText, {sz: 12, link: 7}));

    let codeTWarning_3 = {w: b?550:530, h: 15};
    elms.push(this.getObj(interStrCls+"10", codeTWarning_3.w, codeTWarning_3.h, blWarningText, {sz: 12, link: 7}));

    let codeTWarning_4 = {w: b?230:310, h: 15};
    elms.push(this.getObj(interStrCls+"11", codeTWarning_4.w, codeTWarning_4.h, blWarningText, sameObj));

    let codeTWarning_5 = {w: b?265:305, h: 15};
    elms.push(this.getObj(interStrCls+"12", codeTWarning_5.w, codeTWarning_5.h, blWarningText, {sz: 12, link: 7}));

    this.addBtnSelected("warning", blMainBlWarning, ".blBtnSelectedWarning", b?90:57, 28, elms);

    return elms;
  }


  // SettingJestik
  settingJestik()
  {
    let elms = [];
    let b = (LANGUAGE=="ru"?true:false);
    let interStrCls = ".settingJestik-elm-";

    let blSettingJestik = {w: 1008, h: 608};
    let blTitleSettingJestik = {w: b?141:149, h: 29};
    let blMainSettingJestik = {w: 750, h: 480};
    this.addExternalBlocks("settingJestik", elms, blSettingJestik, blTitleSettingJestik, blMainSettingJestik);

    this.addBtnPrevisChapter("settingJestik", blSettingJestik, "#blPrevisChapter-settingJestik", elms);

    let blTitleSJ = {w: b?185:173, h: 20};
    elms.push(this.getObj(interStrCls+"6", blTitleSJ.w, blTitleSJ.h, blMainSettingJestik, {link: 4, sz: 16}));

    let blSpacePause = {w: 140, h: 58};
    elms.push(this.getObj(interStrCls+"7", blSpacePause.w, blSpacePause.h, blMainSettingJestik, {link: 4}));
    elms.push(this.getObj(interStrCls+"8", blSpacePause.w, blSpacePause.h, blSpacePause));

    let blTitleKeySpace = {w: b?43:43, h: 17};
    elms.push(this.getObj(interStrCls+"9", blTitleKeySpace.w, blTitleKeySpace.h, blSpacePause, {sz: 15}));

    let blKeySpace = {w: 140, h: 35};
    elms.push(this.getObj(interStrCls+"10", blKeySpace.w, blKeySpace.h, blSpacePause, {link: 8, angleBr: 5}));
    elms.push(this.getObj(interStrCls+"11", blKeySpace.w, blKeySpace.h, blKeySpace));

    let blTKeySpace = {w: b?95:74, h: 23};
    elms.push(this.getObj(interStrCls+"12", blTKeySpace.w, blTKeySpace.h, blKeySpace, {sz: 24}));

    let blSelectedJestik = {w: 480, h: 250};
    elms.push(this.getObj(interStrCls+"13", blSelectedJestik.w, blSelectedJestik.h, blMainSettingJestik, {link: 4}));
    elms.push(this.getObj(interStrCls+"14", blSelectedJestik.w, blSelectedJestik.h, blSelectedJestik));

    let blSelectedMouseJestik = {w: 150, h: 250};
    elms.push(this.getObj(interStrCls+"15", blSelectedMouseJestik.w, blSelectedMouseJestik.h, blSelectedJestik));
    elms.push(this.getObj(interStrCls+"16", blSelectedMouseJestik.w, blSelectedMouseJestik.h, blSelectedMouseJestik));

    let blInterfaceBtnLines = {w: 100, h: 120};
    elms.push(this.getObj(interStrCls+"17", blInterfaceBtnLines.w, blInterfaceBtnLines.h, blSelectedMouseJestik));
    elms.push(this.getObj(interStrCls+"18", blInterfaceBtnLines.w, blInterfaceBtnLines.h, blInterfaceBtnLines));


    let clrInput1_0 = this.getAttrValueStyle(interStrCls+"19", "rgb");
    let clrInput1_1 = this.getAttrValueStyle(interStrCls+"20", "rgb");

    let blLineEffectBtnSlcJM = {w: 85, h: 93};
    elms.push(this.getObj(interStrCls+"19", blLineEffectBtnSlcJM.w, blLineEffectBtnSlcJM.h, blInterfaceBtnLines, 
      {angleBr: 3, br: {n: 4, clr: typeof clrInput1_0 === "string" ? clrInput1_0 : "#FFFFFF"}}));

    let blBtnSelectedJestikMouse = {w: 40, h: 40};
    elms.push(this.getObj(interStrCls+"20", blBtnSelectedJestikMouse.w, blBtnSelectedJestikMouse.h, blInterfaceBtnLines, 
      {
        link: 18, angleBr: 5, br: {n: 3, clr: typeof clrInput1_1 === "string" ? clrInput1_1 : "#FFFFFF"}, sz: 28, s: "img", b: true,
        pseudoCls: 
        {
          i: 20,
          cls: "active",
          o: this.getObj(".blBtnSelectedJestikMouse", blBtnSelectedJestikMouse.w, blBtnSelectedJestikMouse.h, blInterfaceBtnLines, 
            {
              sz: 22, link: 18, MOffset: {x: 0, y: 5}
            }),
          anim: "0.1",
          css: ["bgsz", "anim"],
          arr: elms
        }
      }));

    let blDirectAndMouse = {w: 145, h: 195};
    elms.push(this.getObj(interStrCls+"21", blDirectAndMouse.w, blDirectAndMouse.h, blSelectedMouseJestik, {link: 16}));
    elms.push(this.getObj(interStrCls+"22", blDirectAndMouse.w, blDirectAndMouse.h, blDirectAndMouse));

    let blArrowMove = {w: 30, h: 30};
    for (let iElm = 23, i=0; iElm < 27; iElm++, i)
    {
      elms.push(this.getObj(interStrCls+iElm, blArrowMove.w, blArrowMove.h, blDirectAndMouse, 
        {link: 22, sz: [28, 25, 25, 28][i], s: "img"}));
    }

    let blTextShowActv = {w: b?43.5:31.5, h: 14};
    elms.push(this.getObj(interStrCls+"27", blTextShowActv.w, blTextShowActv.h, blDirectAndMouse, {link: 22, sz: 12}));

    let blMouseImg = {w: 65, h: 117};
    elms.push(this.getObj(interStrCls+"28", blMouseImg.w, blMouseImg.h, blDirectAndMouse, {link: 22}));
    elms.push(this.getObj(interStrCls+"29", blMouseImg.w, blMouseImg.h, blMouseImg));

    let sameObj = {n: 1, clr: "#000000"};

    let blMouseChL = {w: 30.5, h: 52};
    elms.push(this.getObj(interStrCls+"30", blMouseChL.w, blMouseChL.h, blMouseImg, 
      {br: sameObj, angleBr: {"UL": 15}}));

    let blLineShowActv = {w: 39, h: 3};
    elms.push(this.getObj(interStrCls+"31", blLineShowActv.w, blLineShowActv.h, blMouseImg, { link: 29, MOffset: {x: -35.5, y: 220} }));
    elms.push(this.getObj(interStrCls+"32", blLineShowActv.w, blLineShowActv.h, blLineShowActv));

    let blLineWhiteShowActv = {w: 23, h: 1.5};
    elms.push(this.getObj(interStrCls+"33", blLineWhiteShowActv.w, blLineWhiteShowActv.h, blLineShowActv, 
      {br: {n: 1, clr: "#FFFFFF"}, angleBr: {"UL": 3, "DL": 3}}));

    let blLineBlackShowActv = {w: 14.5, h: 1.5};
    elms.push(this.getObj(interStrCls+"34", blLineBlackShowActv.w, blLineBlackShowActv.h, blLineShowActv, 
      {link: 32, br: sameObj}));

    let blCircleShowActv = {w: 13, h: 14};
    elms.push(this.getObj(interStrCls+"35", blCircleShowActv.w, blCircleShowActv.h, blMouseImg, 
      {link: 29, br: sameObj, angleBr: 50}));

    let blMouseChR = {w: 30.5, h: 52};
    elms.push(this.getObj(interStrCls+"36", blMouseChR.w, blMouseChR.h, blMouseImg, 
      {link: 29, br: sameObj, angleBr: {"UR": 15}}));

    let blMouseScroll = {w: 8, h: 18};
    elms.push(this.getObj(interStrCls+"37", blMouseScroll.w, blMouseScroll.h, blMouseImg, 
      {link: 29, br: sameObj, angleBr: 12}));

    let blMouseChBody = {w: 63, h: 61};
    elms.push(this.getObj(interStrCls+"38", blMouseChBody.w, blMouseChBody.h, blMouseImg, 
      {link: 29, br: sameObj, angleBr: {"DL": 15, "DR": 15}}));

    // =====
    // 
    // [Keys-Jestik-1] and [Keys-Jestik-2]

    for (let ind = 0, iElm = 39; ind < 2; ind++)
    {
      let blSelectedWASDJestik = {w: 140, h: 148};
      elms.push(this.getObj(interStrCls+(iElm++), blSelectedWASDJestik.w, blSelectedWASDJestik.h, blSelectedJestik, {link: 14}));
      elms.push(this.getObj(interStrCls+(iElm++), blSelectedWASDJestik.w, blSelectedWASDJestik.h, blSelectedWASDJestik));

      let blInterfaceBtnLines_2 = {w: 85, h: 78};
      elms.push(this.getObj(interStrCls+(iElm++), blInterfaceBtnLines_2.w, blInterfaceBtnLines_2.h, blSelectedWASDJestik));
      elms.push(this.getObj(interStrCls+(iElm++), blInterfaceBtnLines_2.w, blInterfaceBtnLines_2.h, blInterfaceBtnLines_2));

      
      let blLineEffectBtnSlcJKey_1 = {w: 37, h: 55};
      for (; iElm < [45, 54][ind]; iElm++)
      {
        let clrInput0_0 = this.getAttrValueStyle(interStrCls+iElm, "rgb");

        if (clrInput0_0 == -1)
          clrInput0_0 = this.getAttrValueStyle(interStrCls+iElm, "rgb", "border-left:");

        elms.push(this.getObj(interStrCls+iElm, blLineEffectBtnSlcJKey_1.w, blLineEffectBtnSlcJKey_1.h, blInterfaceBtnLines_2, 
          {
            link: 42, br: {n: 4, clr: (typeof clrInput0_0 === "string" ? clrInput0_0 : "#FFFFFF"), nobr: "-U--"}, angleBr: 3
          }));
      }

      let clrInput0_1 = this.getAttrValueStyle(interStrCls+iElm, "rgb");

      let blBtnSelectedJestikMouse_2 = {w: 40, h: 40};
      elms.push(this.getObj(interStrCls+(iElm++), blBtnSelectedJestikMouse_2.w, blBtnSelectedJestikMouse_2.h, blInterfaceBtnLines_2,
        {
          link: 42, angleBr: 5, br: {n: 3, clr: typeof clrInput0_1 === "string" ? clrInput0_1 : "#FFFFFF"}, sz: 28, s: "img", b: true
        }));

      let blWASDKeyBord = {w: 135, h: 88};
      elms.push(this.getObj(interStrCls+(iElm++), blWASDKeyBord.w, blWASDKeyBord.h, blSelectedWASDJestik, {link: 40}));
      elms.push(this.getObj(interStrCls+(iElm++), blWASDKeyBord.w, blWASDKeyBord.h, blWASDKeyBord));


      let N = ind;
      let blKey = {w: 40, h: 40};
      let blTKey = { w: [[24, 19, 17, 18], [20, 27, 20, 27]], h: [[30, 30, 30, 30], [27, 20, 27, 20]] };

      let arrInputIds = [[57, 59, 61, 63], [65, 69, 73, 77]];

      for (let i = 0; i < 4; i++)
      {
        let n = arrInputIds[N][i];

        elms.push(this.getObj(interStrCls+(n++), blKey.w, blKey.h, {w: 135, h: 88}, {link: 47, angleBr: 5}));

        let elm = {w: blTKey.w[N][i], h: blTKey.h[N][i]};

        if (N == 0)
          elms.push(this.getObj(interStrCls+n, elm.w, elm.h, blKey, {sz: 28}));
        else if (N == 1)
        {
          elms.push(this.getObj(interStrCls+n, elm.w, elm.h, blKey));

          let blLineHead = {w: [2.5, 13, 2.5, 13], h: [13, 2.5, 13, 2.5]};
          let arrLineIds = [67, 71, 75, 79];

          let blArrowHead = {w: 16, h: 15};
          let arrArrowsIds = [68, 72, 76, 80];
          let parentLinks = [66, 70, 74, 78];

          elms.push(this.getObj(interStrCls+(arrLineIds[i]), 
            blLineHead.w[i], 
            blLineHead.h[i], 
            elm, 
            {br: {n: 1, clr: "#000000"}, angleBr: {"DL": 2, "DR": 2}}));

          elms.push(this.getObj(interStrCls+(arrArrowsIds[i]), 
            blArrowHead.w, 
            blArrowHead.h, 
            elm, 
            {link: parentLinks[i], sz: 14, s: "img"}));
        }
      }
    }

    // 
    // =====

    let blNoteWarning = {w: 615, h: 35};
    elms.push(this.getObj(interStrCls+"81", blNoteWarning.w, blNoteWarning.h, blMainSettingJestik, {link: 4, sz: 13}));
    elms.push(this.getObj(interStrCls+"82", blNoteWarning.w, blNoteWarning.h, blNoteWarning));

    let blNoteWarning_1 = {w: b?360:281, h: 14.5};
    elms.push(this.getObj(interStrCls+"83", blNoteWarning_1.w, blNoteWarning_1.h, blNoteWarning));

    let blNoteWarning_2 = {w: b?610:565, h: 14.5};
    elms.push(this.getObj(interStrCls+"84", blNoteWarning_2.w, blNoteWarning_2.h, blNoteWarning, {link: 82}));

    this.addBtnSelected("settingJestik", blMainSettingJestik, ".blBtnSettingJestik", b?156:87, 28, elms);

    return elms;
  }


  // Modes
  modes()
  {
    let elms = [];
    let b = (LANGUAGE=="ru"?true:false);
    let interStrCls = ".modes-elm-";

    let blModes = {w: 1008, h: 608};
    let blTitleModes = {w: b?105:77, h: 29};
    let blSelectedMode = {w: 750, h: 450};
    this.addExternalBlocks("modes", elms, blModes, blTitleModes, blSelectedMode);

    this.addBtnPrevisChapter("modes", blModes, "#blPrevisChapter-modes", elms);

    let blSelectedModeInternal = {w: 565, h: 380};
    elms.push(this.getObj(interStrCls+"6", blSelectedModeInternal.w, blSelectedModeInternal.h, blSelectedMode, {link: 4}));


    if (this.listModes !== null)
    {
      for (let NBl = 1; NBl <= this.listModes.total; NBl++)
      {
        let blMode = {w: 175, h: 120};
        elms.push(this.getObj(interStrCls+"7-"+NBl, blMode.w, blMode.h, blSelectedModeInternal, {link: 6, br: {n: 2, clr: "#FFFFFF"}}));
        elms.push(this.getObj(interStrCls+"8-"+NBl, blMode.w, blMode.h, blMode));

        let blBtnInfo = {w: 50, h: 48};
        elms.push(this.getObj(interStrCls+"9-"+NBl, blBtnInfo.w, blBtnInfo.h, blMode, {br: {n: 1, clr: "#FFFFFF"}, angleBr: 11}));
        elms.push(this.getObj(interStrCls+"10-"+NBl, blBtnInfo.w, blBtnInfo.h, blMode, {link: 8}));

        let blInfoPart = {w: 9, h: 33};
        elms.push(this.getObj(interStrCls+"11-"+NBl, blInfoPart.w, blInfoPart.h, blBtnInfo));
        
        let Info_part_1 = {w: 9, h: 9};
        elms.push(this.getObj(interStrCls+"12-"+NBl, Info_part_1.w, Info_part_1.h, blInfoPart, {angleBr: 2}));

        let Info_part_2 = {w: 9, h: 19};
        elms.push(this.getObj(interStrCls+"13-"+NBl, Info_part_2.w, Info_part_2.h, blInfoPart, {link: 11, angleBr: 2}));

        let blNameMode = {w: 135, h: 22};
        elms.push(this.getObj(interStrCls+"14-"+NBl, blNameMode.w, blNameMode.h, blMode, 
          {
            link: 8, br: {n: 2, clr: "#C1C1C1", nobr: "---D"}, angleBr: {"UL": 5, "UR": 5}
          }));
        elms.push(this.getObj(interStrCls+"15-"+NBl, blNameMode.w, blNameMode.h, blNameMode));

        let nameMode = {w: this.listModes.list[LANGUAGE][NBl-1].w, h: 19};
        elms.push(this.getObj("#nameMode-"+NBl, nameMode.w, nameMode.h, blNameMode, {sz: 16}));
      }
    }

    return elms;
  }


  // Description
  description()
  {
    let elms = [];
    let b = (LANGUAGE=="ru"?true:false);
    let interStrCls = ".description-elm-";

    let blDescription = {w: 1008, h: 608};
    this.addMainBlock("description", blDescription, elms);

    let blDescripMode = {w: 325, h: 350};
    elms.push(this.getObj(interStrCls+"2", blDescripMode.w, blDescripMode.h, blDescription, 
      {br: {n: 2, clr: "#FFFFFF"}, angleBr: 5}));
    elms.push(this.getObj(interStrCls+"3", blDescripMode.w, blDescripMode.h, blDescripMode));

    let blTDescriptMode = {w: 260, h: 220};
    elms.push(this.getObj(interStrCls+"4", blTDescriptMode.w, blTDescriptMode.h, blDescripMode, 
      {br: {n: 1, clr: "#FFFFFF"}, angleBr: 3}));
    elms.push(this.getObj(interStrCls+"5", blTDescriptMode.w, blTDescriptMode.h, blTDescriptMode));

    let blTDescripModeScroll = {w: 235, h: 190};
    elms.push(this.getObj(interStrCls+"6", blTDescripModeScroll.w, blTDescripModeScroll.h, blTDescriptMode, 
      {angleBr: 3, sz: 14}));

    let blBtnSelected = {w: 180, h: 29};
    elms.push(this.getObj(interStrCls+"7", blBtnSelected.w, blBtnSelected.h, blDescripMode, 
      {
        link: 3, br: {n: 2, clr: "#C1C1C1", nobr: "-U--"}, angleBr: {"DL": 4, "DR": 4}, b: true, 
        pseudoCls: 
        {
          i: 7,
          cls: "active",
          o: this.getObj(".blBtnSelected", blBtnSelected.w, blBtnSelected.h, blDescripMode, 
            {
              link: 3, MOffset: {x: 0, y: 7}
            }),
          anim: "0.1",
          css: ["anim"],
          arr: elms
        }
      }));
    elms.push(this.getObj(interStrCls+"8", blBtnSelected.w, blBtnSelected.h, blDescripMode, {link: 3}));

    let blBtnTextSelected = {w: b?71:67, h: 20};
    elms.push(this.getObj(interStrCls+"9", blBtnTextSelected.w, blBtnTextSelected.h, blBtnSelected, {sz: 17}));


    if (this.selectedMode !== null)
    {
      let blTitleDescript = {w: this.selectedMode.wBl, h: 29};
      elms.push(this.getObj(interStrCls+"10", blTitleDescript.w, blTitleDescript.h, blDescription, 
        {link: 1, br: {n: 2, clr: "#C1C1C1", nobr: "---D"}, angleBr: {"UL": 4, "UR": 4}}));
      elms.push(this.getObj(interStrCls+"11", blTitleDescript.w, blTitleDescript.h, blTitleDescript));

      let t_TitleDescrip = {w: this.selectedMode.wT, h: 19};
      elms.push(this.getObj(interStrCls+"12", t_TitleDescrip.w, t_TitleDescrip.h, blTitleDescript, {sz: 18}));
    }

    let blBtnCloseDescript = {w: 60, h: 48};
    elms.push(this.getObj(interStrCls+"13", blBtnCloseDescript.w, blBtnCloseDescript.h, blDescription, 
      {
        link: 1, sz: 35, s: "img", br: {n: 1, clr: "#C1C1C1"}, angleBr: 4, b: true, 
        pseudoCls: 
        {
          i: 13,
          cls: "active",
          o: this.getObj(".blBtnCloseDescript", blBtnCloseDescript.w-5, blBtnCloseDescript.h-6, blDescription, 
            {
              link: 1, MOffset: {x: 0, y: 3}, sz: 31, s: "img"
            }),
          anim: "0.1",
          css: ["w", "h", "bgsz", "anim"],
          arr: elms
        }
      }));

    return elms;
  }


  // DecorationField
  decorationField()
  {
    let elms = [];
    let b = (LANGUAGE=="ru"?true:false);
    let interStrCls = ".decorationField-elm-";

    let blDecorationField = {w: 1008, h: 608};
    let blTitleDecorField = {w: b?218:184, h: 29};
    let blSelectedDecorField = {w: 750, h: 450};
    this.addExternalBlocks("decorationField", elms, blDecorationField, blTitleDecorField, blSelectedDecorField);

    this.addBtnPrevisChapter("decorationField", blDecorationField, "#blPrevisChapter-decorationField", elms);

    let blImgDecorField = {w: 520, h: 318};
    elms.push(this.getObj(interStrCls+"6", blImgDecorField.w, blImgDecorField.h, blSelectedDecorField, 
      {link: 4, angleBr: 5, sz: 520, s: "img"}));

    let blBtnPrevNextDecorField = {w: 48, h: 48};
    for (let i = 7, v=0; i < 9; i++, v++)
    {
      let ar = [{x: 5, y: 2, id: "blBtnPrevisDecorField"}, {x: -3.5, y: 2, id: "blBtnNextDecorField"}];

      elms.push(this.getObj(interStrCls+i, blBtnPrevNextDecorField.w, blBtnPrevNextDecorField.h, blSelectedDecorField, 
        {
          link: 4, angleBr: 5, sz: 48, s: "img", b: true,
          pseudoCls: 
          {
            i: i,
            cls: "active",
            o: this.getObj("."+ar[v].id, blBtnPrevNextDecorField.w-5, blBtnPrevNextDecorField.h-5, blSelectedDecorField, 
              {
                link: 4, MOffset: {x: ar[v].x, y: ar[v].y}, sz: 43, s: "img"
              }),
            anim: "0.15",
            css: ["w", "h", "bgsz", "anim"],
            arr: elms
          }
        }));
    }

    this.addBtnSelected("decorationField", blSelectedDecorField, ".blBtnSelectedDecorField", b?103:95, 28, elms);

    return elms;
  }


  // LevelsForMaze
  levelsForMaze()
  {
    let elms = [];
    let interStrCls = ".levelsForMaze-elm-";

    let blLevelsForMaze = {w: 1008, h: 608};
    this.addMainBlock("levelsForMaze", blLevelsForMaze, elms);

    this.addBtnPrevisChapter("levelsForMaze", blLevelsForMaze, "#blPrevisChapter-maze", elms);

    let blSelectedLevelsForMaze = {w: 750, h: 450};
    elms.push(this.getObj(interStrCls+"3", blSelectedLevelsForMaze.w, blSelectedLevelsForMaze.h, blLevelsForMaze, {link: 1, angleBr: 10}));
    elms.push(this.getObj(interStrCls+"4", blSelectedLevelsForMaze.w, blSelectedLevelsForMaze.h, blSelectedLevelsForMaze));

    let blSelectedLvlForMazeInter = {w: 565, h: 380};
    elms.push(this.getObj(interStrCls+"5", blSelectedLvlForMazeInter.w, blSelectedLvlForMazeInter.h, blSelectedLevelsForMaze))

    let angleBrV = (i) => 
    {
      let n = 5;
      switch(i)
      {
        case 1: return {"UL": n}; 
        case 3: return {"UR": n};
        case 13: return {"DL": n};
        case 15: return {"DR": n};
      }
    }

    let listOpnLvl = historyForMaze.levels.listOpen;

    for (let NBl = 1; NBl <= historyForMaze.levels.total; NBl++)
    {
      let blLevelForMaze = {w: 175, h: 120};
      elms.push(this.getObj(interStrCls+"6-"+NBl, blLevelForMaze.w, blLevelForMaze.h, blSelectedLvlForMazeInter, 
        {link: 5, br: {n: 2, clr: "#FFFFFF"}, angleBr: angleBrV(NBl)}));
      elms.push(this.getObj(interStrCls+"7-"+NBl, blLevelForMaze.w, blLevelForMaze.h, blLevelForMaze));

      let blNumLevel = {w: 37, h: 20};
      elms.push(this.getObj(interStrCls+"8-"+NBl, blNumLevel.w, blNumLevel.h, blLevelForMaze, {sz: 16}));

      let blBtnPlayLvlMaze = {w: 50, h: 48};
      elms.push(this.getObj("#blBtnPlayLvlMaze-"+NBl, blBtnPlayLvlMaze.w, blBtnPlayLvlMaze.h, blLevelForMaze, 
        {
          link: 7, br: {n: 1, clr: "#FFFFFF", nobr: listOpnLvl[NBl-1]?"LURD":"----"}, angleBr: 11, sz: 25, s: "img", b: true, 
          pseudoCls: 
          {
            i: elms.length,
            cls: "active",
            o: this.getObj("#blBtnPlayLvlMaze-"+NBl, blBtnPlayLvlMaze.w, blBtnPlayLvlMaze.h, blLevelForMaze, 
              {
                link: 7, sz: 21, s: "img"
              }),
            anim: "0.1",
            css: ["bgsz", "anim"],
            arr: elms
          }
        }));

      let blNumOfStarsLvl = {w: 135, h: 22};
      elms.push(this.getObj(interStrCls+"9-"+NBl, blNumOfStarsLvl.w, blNumOfStarsLvl.h, blLevelForMaze, 
        {link: 7, br: {n: 2, clr: "#C1C1C1", nobr: "---D"}, angleBr: {"UL": 5, "UR": 5}}));
      elms.push(this.getObj(interStrCls+"10-"+NBl, blNumOfStarsLvl.w, blNumOfStarsLvl.h, blLevelForMaze, {link: 7}));

      let blStars = {w: 95, h: 20};
      elms.push(this.getObj(interStrCls+"11-"+NBl, blStars.w, blStars.h, blNumOfStarsLvl));

      let imgStar = {w: 15, h: 15};
      for (let i = 1; i <= historyForMaze.earnedStars.totalStars; i++)
        elms.push(this.getObj(".imgStar-"+i, imgStar.w, imgStar.h, blStars, {link: 11, sz: 14.5, s: "img"}));
    }

    return elms;
  }


  // SettingsModeWords
  settingsModeWords()
  {
    let elms = [];
    let b = (LANGUAGE=="ru"?true:false);
    let interStrCls = ".settingsModeWords-elm-";

    if (ctxData.checkSelectedMode("words") && this.display.list["words"])
    {
      let blSettingsModeWords = {w: 1008, h: 608};
      let blTitleSettingsModeWord = {w: b?243:200, h: 29};
      let blMainSettingsModeWords = {w: 750, h: 540};
      this.addExternalBlocks("settingsModeWords", elms, blSettingsModeWords, blTitleSettingsModeWord, blMainSettingsModeWords);

      this.addBtnPrevisChapter("settingsModeWords", blSettingsModeWords, "#blPrevisChapter-words", elms);

      let blTitleSelectedTopicWords = {w: b?134:132, h: 19};
      elms.push(this.getObj(interStrCls+"6", blTitleSelectedTopicWords.w, blTitleSelectedTopicWords.h, blMainSettingsModeWords, 
        {link: 4, sz: 18}));

      let blMainListTopic = {w: 650, h: 400};
      elms.push(this.getObj(interStrCls+"7", blMainListTopic.w, blMainListTopic.h, blMainSettingsModeWords, 
        {link: 4, br: {n: 1, clr: "#FFFFFF"}, angleBr: 5}));
      elms.push(this.getObj(interStrCls+"8", blMainListTopic.w, blMainListTopic.h, blMainListTopic));

      let blRandomTopic = {w: 100, h: 22};
      elms.push(this.getObj(interStrCls+"9", blRandomTopic.w, blRandomTopic.h, blMainListTopic, 
        {br: {n: 1, clr: "#C1C1C1"}, angleBr: 3}));
      elms.push(this.getObj(interStrCls+"10", blRandomTopic.w, blRandomTopic.h, blMainListTopic, {link: 8}));

      let blTopicRandom = {w: b?39:45, h: 13};
      elms.push(this.getObj(interStrCls+"11", blTopicRandom.w, blTopicRandom.h, blRandomTopic, {sz: 12}));


      let blListTopic = {w: 546, h: 325};
      let lang = ["Ru", "En"];
      let topicWords = [this.selectedTopic.o.ru.quantityShow, this.selectedTopic.o.en.quantityShow];
      let N = [0, 1][this.selectedTopic.lang=="ru"?0:1];

      elms.push(this.getObj(".settingsModeWords"+lang[N]+"-elm-12", blListTopic.w, blListTopic.h, blMainListTopic, {link: 8}));
        
      for (let NBl = 1; NBl <= topicWords[N]; NBl++)
      {
        let blTopic = {w: 125, h: 25};
        elms.push(this.getObj(".settingsModeWords"+lang[N]+"-elm-12-"+NBl, blTopic.w, blTopic.h, blListTopic, 
          {link: 12, br: {n: 1, clr: "#C1C1C1"}, angleBr: 3}));
        elms.push(this.getObj(".settingsModeWords"+lang[N]+"-elm-13-"+NBl, blTopic.w, blTopic.h, blListTopic, {link: 12}));

        let blTextTopic = 
        {
          w: 
          [
            [
              35, 39, 68, 99, 55, 55, 99, 63, 66, 49, 40, 37, 38, 
              41, 46, 61, 93, 44, 95, 54, 105, 103, 55, 44, 22, 
              62, 111, 89, 42, 36, 45, 43
            ], 
            [
              30, 29, 40, 55, 45, 65, 72, 44, 55, 30, 43, 65, 39, 
              65, 35, 48, 34, 76, 104, 35, 103, 88, 45, 41, 28, 
              58, 115, 104.5, 39, 36, 53, 32
            ]
          ], 
          h: 14
        };
        elms.push(this.getObj(".settingsModeWords"+lang[N]+"-elm-14-"+NBl, blTextTopic.w[N][NBl-1], blTextTopic.h, blTopic, {sz: 12}));
      }

      let blLanguageTopic = {w: 79, h: 20};
      elms.push(this.getObj(interStrCls+"13", blLanguageTopic.w, blLanguageTopic.h, blMainListTopic, {link: 8}));
      elms.push(this.getObj(interStrCls+"14", blLanguageTopic.w, blLanguageTopic.h, blLanguageTopic));


      let angleBr = [{"UL": 3, "DL": 3}, {"UR": 3, "DR": 3}];
      for (let i = 0, n=15; i < 2; i++)
      {
        let blBtnTopic = {w: 38, h: 20};
        elms.push(this.getObj(interStrCls+(n++), blBtnTopic.w, blBtnTopic.h, blLanguageTopic, 
          {link: 110, br: {n: 1, clr: "#FFFFFF"}, angleBr: angleBr[i]}));
        elms.push(this.getObj(interStrCls+(n++), blBtnTopic.w, blBtnTopic.h, blBtnTopic));

        let blBtnTextRu = {w: 12, h: 14};
        elms.push(this.getObj(interStrCls+(n++), blBtnTextRu.w, blBtnTextRu.h, blBtnTopic, {sz: 13}));
      }
      
      this.addBtnSelected("settingsModeWords", blMainSettingsModeWords, ".blBtnSelectedSettingsModeWords", b?103:95, 28, elms);

      interStrCls = ".tooltipSZW-elm-";

      let tooltipSZW = {w: 78, h: 15};
      elms.push(this.getObj(interStrCls+"0", tooltipSZW.w, tooltipSZW.h, this.fixWin, 
        {link: 1.1, br: {n: 1, clr: "#FFFFFF"}, angleBr: 3}));

      let TtooltipSZW = {w: 74, h: 15};
      elms.push(this.getObj(interStrCls+"1", TtooltipSZW.w, TtooltipSZW.h, tooltipSZW, {sz: 13}));
    }

    return elms;
  }


  // SettingsModeMath
  settingsModeMath()
  {
    let elms = [];
    let b = (LANGUAGE=="ru"?true:false);
    let interStrCls = ".settingsModeMath-elm-";

    if (ctxData.checkSelectedMode("mathematics") && this.display.list["mathematics"])
    {
      let o = this.activeBlock;

      let blSettingsModeMath = {w: 1008, h: 608};
      let blTitleSettingsModeMath = {w: b?243:200, h: 29};
      let blMainSettingsModeMath = {w: 750, h: 480};
      this.addExternalBlocks("settingsModeMath", elms, blSettingsModeMath, blTitleSettingsModeMath, blMainSettingsModeMath);

      this.addBtnPrevisChapter("settingsModeMath", blSettingsModeMath, "#blPrevisChapter-mathematics", elms);

      let blLengthOperand = {w: 187, h: 190};
      elms.push(this.getObj(interStrCls+"6", blLengthOperand.w, blLengthOperand.h, blMainSettingsModeMath, {link: 4}));
      elms.push(this.getObj(interStrCls+"7", blLengthOperand.w, blLengthOperand.h, blLengthOperand));

      let blTitleLength = {w: b?119:105, h: 19};
      elms.push(this.getObj(interStrCls+"8", blTitleLength.w, blTitleLength.h, blLengthOperand, {sz: 15}));

      // Операнд-блоки
      // 

      for (let i = 0, N = 9; i < 2; i++)
      {
        let bl = 0;

        let blFirstSettingsOperand = {w: 75, h: 105};
        elms.push(this.getObj(interStrCls+(N++), blFirstSettingsOperand.w, blFirstSettingsOperand.h, blLengthOperand, {link: 7}));
        elms.push(this.getObj(interStrCls+(N++), blFirstSettingsOperand.w, blFirstSettingsOperand.h, blFirstSettingsOperand));

        let blTextTitle = {w: b?[51, 46][i]:[28, 45][i], h: 16};
        elms.push(this.getObj(interStrCls+(N++), blTextTitle.w, blTextTitle.h, blFirstSettingsOperand, {sz: 13.5}));

        let blInputsMax = {w: 70, h: 23};
        elms.push(this.getObj(interStrCls+(N++), blInputsMax.w, blInputsMax.h, blFirstSettingsOperand, {link: 10}));
        elms.push(this.getObj(interStrCls+(N++), blInputsMax.w, blInputsMax.h, blInputsMax));

        let blInputWhole = {w: 68, h: 23};
        elms.push(this.getObj(interStrCls+(N++), blInputWhole.w, blInputWhole.h, blInputsMax, 
          {br: {n: 1, clr: (o.oprLen[i==0?"first":"second"][bl++])}, angleBr: 3.5}));
        elms.push(this.getObj(interStrCls+(N++), blInputWhole.w, blInputWhole.h, blInputsMax, {link: 13}));

        let blNumWhole = {w: 10, h: 20};
        elms.push(this.getObj(interStrCls+(N++), blNumWhole.w, blNumWhole.h, blInputWhole, {sz: 16}));

        let blTextWhole = {w: 35, h: 14};
        elms.push(this.getObj(interStrCls+(N++), blTextWhole.w, blTextWhole.h, blFirstSettingsOperand, {link: 10, sz: 12}));

        let blInputsMin = blInputsMax;
        elms.push(this.getObj(interStrCls+(N++), blInputsMin.w, blInputsMin.h, blFirstSettingsOperand, {link: 10}));
        elms.push(this.getObj(interStrCls+(N++), blInputsMin.w, blInputsMin.h, blInputsMin));

        elms.push(this.getObj(interStrCls+(N++), blInputWhole.w, blInputWhole.h, blInputsMin, 
          {br: {n: 1, clr: (o.oprLen[i==0?"first":"second"][bl])}, angleBr: 3.5}));
        elms.push(this.getObj(interStrCls+(N++), blInputWhole.w, blInputWhole.h, blInputsMin, {link: 19}));

        elms.push(this.getObj(interStrCls+(N++), blNumWhole.w, blNumWhole.h, blInputWhole, {sz: 16}));
      }

      //
      // =====

      let blTextMinMax = {w: [32, 25][b?0:1], h: 105};
      elms.push(this.getObj(interStrCls+"37", blTextMinMax.w, blTextMinMax.h, blLengthOperand, {link: 7}));
      elms.push(this.getObj(interStrCls+"38", blTextMinMax.w, blTextMinMax.h, blTextMinMax));

      for (let i = 0, N = 39; i < 2; i++)
      {
        let blTMaxMin = {w: [[31, 24], [24, 22]][i][b?0:1], h: 15};
        elms.push(this.getObj(interStrCls+(N++), blTMaxMin.w, blTMaxMin.h, blTextMinMax, {link: 38, sz: 13}));
      }

      let blAdjustmentOperandov = {w: 75, h: 30};
      elms.push(this.getObj(interStrCls+"41", blAdjustmentOperandov.w, blAdjustmentOperandov.h, blLengthOperand, {link: 7}));

      let blBtnMP = {w: 24, h: 24};
      for (let i = 0, N = 42; i < 2; i++) 
      {
        elms.push(this.getObj(interStrCls+(N++), blBtnMP.w, blBtnMP.h, blAdjustmentOperandov, 
          {
            link: 41, angleBr: 3, sz: 24, s: "img", b: true, 
            pseudoCls: 
            {
              i: elms.length,
              cls: "active", 
              o: this.getObj([".blBtnMinus", ".blBtnPlus"][i], blBtnMP.w-2, blBtnMP.h-2, blAdjustmentOperandov, 
                {
                  link: 41, sz: 22, s: "img", MOffset: {x: [2, -2][i], y: 0}
                }),
              anim: "0.15",
              css: ["bgsz", "anim"],
              arr: elms
            }
          }));
      }

      let blOperationSign = {w: 150, h: 90};
      elms.push(this.getObj(interStrCls+"44", blOperationSign.w, blOperationSign.h, blMainSettingsModeMath, {link: 4}));
      elms.push(this.getObj(interStrCls+"45", blOperationSign.w, blOperationSign.h, blOperationSign));

      let blTitleOperationSign = {w: b?107:99, h: 16};
      elms.push(this.getObj(interStrCls+"46", blTitleOperationSign.w, blTitleOperationSign.h, blOperationSign, {sz: 15}));

      let blSigns = {w: 105, h: 25};
      elms.push(this.getObj(interStrCls+"47", blSigns.w, blSigns.h, blOperationSign, {link: 45}));
      elms.push(this.getObj(interStrCls+"48", blSigns.w, blSigns.h, blSigns));

      // ---

      for (let i = 0, N = 49; i < 3; i++)
      {
        let blSign = {w: 30, h: 25};
        elms.push(this.getObj(interStrCls+(N++), blSign.w, blSign.h, blSigns, 
          {link: 48, br: {n: 1, clr: o.actSigns.sign[i]}, angleBr: 3}));
        elms.push(this.getObj(interStrCls+(N++), blSign.w, blSign.h, blSigns, {link: 48}));

        let blTSign = {w: [10.5, 11, 13][i], h: 31};
        elms.push(this.getObj(interStrCls+(N++), blTSign.w, blTSign.h, blSign, {sz: 25}));
      }

      // ---

      let blRandomSigns = {w: 110, h: 23};
      elms.push(this.getObj(interStrCls+"58", blRandomSigns.w, blRandomSigns.h, blOperationSign, 
        {link: 45, br: {n: 1, clr: o.actSigns.random}, angleBr: 3}));
      elms.push(this.getObj(interStrCls+"59", blRandomSigns.w, blRandomSigns.h, blOperationSign, {link: 45}));

      let blTRandomSigns = {w: b?75:52, h: 16};
      elms.push(this.getObj(interStrCls+"60", blTRandomSigns.w, blTRandomSigns.h, blRandomSigns, {sz: 14}));

      let blNote = {w: b?200:200, h: 14.5};
      elms.push(this.getObj(interStrCls+"61", blNote.w, blNote.h, blMainSettingsModeMath, {link: 4, sz: 13}));

      let blBtnByDefSMM = {w: 135, h: 25};
      elms.push(this.getObj(interStrCls+"62", blBtnByDefSMM.w, blBtnByDefSMM.h, blMainSettingsModeMath, 
        {link: 4, br: {n: 1, clr: o.byDefault}, angleBr: 3}));
      elms.push(this.getObj(interStrCls+"63", blBtnByDefSMM.w, blBtnByDefSMM.h, blMainSettingsModeMath, {link: 4}));

      let blTBtnByDefMM = {w: b?99:65, h: 16};
      elms.push(this.getObj(interStrCls+"64", blTBtnByDefMM.w, blTBtnByDefMM.h, blBtnByDefSMM, {sz: 14}));

      this.addBtnSelected("settingsModeMath", blMainSettingsModeMath, ".blBtnSelectedSettingsModeMath", b?103:95, 28, elms);

      let blShowKeyHDocument = {w: b?100:70, h: 30};
      elms.push(this.getObj(interStrCls+"68", blShowKeyHDocument.w, blShowKeyHDocument.h, blSettingsModeMath, {link: 1}));
      elms.push(this.getObj(interStrCls+"69", blShowKeyHDocument.w, blShowKeyHDocument.h, blShowKeyHDocument));

      let blBtnOpenKey = {w: 30, h: 30};
      elms.push(this.getObj(interStrCls+"70", blBtnOpenKey.w, blBtnOpenKey.h, blShowKeyHDocument, {angleBr: 5}));
      elms.push(this.getObj(interStrCls+"71", blBtnOpenKey.w, blBtnOpenKey.h, blBtnOpenKey));

      let BlKeyH = {w: 14.2, h: 18};
      elms.push(this.getObj(interStrCls+"72", BlKeyH.w, BlKeyH.h, blBtnOpenKey, {sz: 20}));

      let blTOpenD = {w: b?60:30, h: 16};
      elms.push(this.getObj(interStrCls+"73", blTOpenD.w, blTOpenD.h, blShowKeyHDocument, {link: 69, sz: 15}));
    }

    return elms;
  }


  // Topics
  topics()
  {
    let elms = [];
    let b = (LANGUAGE=="ru"?true:false);
    let interStrCls = ".topics-elm-";

    if (this.display.list["topic"])
    {
      let blTopics = {w: 1008, h: 608};
      let blTitleTopics = {w: b?59:62, h: 29};
      let blMainTopics = {w: 750, h: 480};
      this.addExternalBlocks("topics", elms, blTopics, blTitleTopics, blMainTopics);

      this.addBtnPrevisChapter("topics", blTopics, "#blPrevisChapter-topic", elms);

      let blNotification = {w: 308, h: 20};
      elms.push(this.getObj(interStrCls+"6", blNotification.w, blNotification.h, blMainTopics, {link: 4}));
      elms.push(this.getObj(interStrCls+"7", blNotification.w, blNotification.h, blNotification));

      let blTNotification = {w: b?245:148, h: 16};
      elms.push(this.getObj(interStrCls+"8", blTNotification.w, blTNotification.h, blNotification, {sz: 12}));

      let blSelectedColor = {w: 308, h: 280};
      elms.push(this.getObj(interStrCls+"9", blSelectedColor.w, blSelectedColor.h, blMainTopics, {link: 4}));
      elms.push(this.getObj(interStrCls+"10", blSelectedColor.w, blSelectedColor.h, blSelectedColor));

      let blSelectedChapter = {w: 308, h: 35};
      elms.push(this.getObj(interStrCls+"11", blSelectedChapter.w, blSelectedChapter.h, blSelectedColor));
      elms.push(this.getObj(interStrCls+"12", blSelectedChapter.w, blSelectedChapter.h, blSelectedChapter));

      let blBtnObstacles = {w: 135, h: 30};
      elms.push(this.getObj(interStrCls+"13", blBtnObstacles.w, blBtnObstacles.h, blSelectedChapter, 
        {br: {n: 1, clr: this.activeBlock2.obst}, angleBr: 3}));
      elms.push(this.getObj(interStrCls+"14", blBtnObstacles.w, blBtnObstacles.h, blSelectedChapter, {link: 12}));

      let blTBtnObst = {w: b?99:72, h: 19};
      elms.push(this.getObj(interStrCls+"15", blTBtnObst.w, blTBtnObst.h, blBtnObstacles, {sz: 16}));

      let blSelectedShowColor = {w: 32, h: 30};
      elms.push(this.getObj(interStrCls+"16", blSelectedShowColor.w, blSelectedShowColor.h, blSelectedChapter, 
        {link: 12, br: {n: 2, clr: "#FFFFFF"}, angleBr: 3, sz: 32, s: "img"}));

      let blPadlock = {w: 32, h: 30};
      elms.push(this.getObj(interStrCls+"17", blPadlock.w, blPadlock.h, blSelectedShowColor, 
        {br: {n: 2, clr: "#FFFFFF"}, angleBr: 3, sz: 15, s: "img"}));

      let blBtnFont = {w: 105, h: 30};
      elms.push(this.getObj(interStrCls+"18", blBtnFont.w, blBtnFont.h, blSelectedChapter, 
        {link: 12, br: {n: 1, clr: this.activeBlock2.bg}, angleBr: 3}));
      elms.push(this.getObj(interStrCls+"19", blBtnFont.w, blBtnFont.h, blSelectedChapter, {link: 12}));

      let blTBtnFont = {w: b?31:86.5, h: 19};
      elms.push(this.getObj(interStrCls+"20", blTBtnFont.w, blTBtnFont.h, blBtnFont, {sz: 16}));

      let blListColors = {w: 308, h: 236};
      elms.push(this.getObj(interStrCls+"21", blListColors.w, blListColors.h, blSelectedColor, 
        {link: 10, br: {n: 1, clr: "#FFFFFF"}, angleBr: 4}));
      elms.push(this.getObj(interStrCls+"22", blListColors.w, blListColors.h, blListColors));

      let blNoteClr = {w: b?168:130, h: 16};
      elms.push(this.getObj(interStrCls+"23", blNoteClr.w, blNoteClr.h, blListColors, {sz: 13}));

      let blMainList = {w: 280, h: 203.5};
      for (let i = 24; i < 26; i++)
        elms.push(this.getObj(interStrCls+i, blMainList.w, blMainList.h, blListColors, {link: 22}));

      let blSprClr = {w: 20, h: 20};
      elms.push(this.getObj(interStrCls+"26", blSprClr.w, blSprClr.h, blMainList, {link: 24, angleBr: 2, sz: 20, s: "img"}));

      let blBtnRandomTopics = {w: 135, h: 25};
      elms.push(this.getObj(interStrCls+"27", blBtnRandomTopics.w, blBtnRandomTopics.h, blMainTopics, 
        {link: 4, br: {n: 1, clr: this.activeBlock2.random}, angleBr: 3}));
      elms.push(this.getObj(interStrCls+"28", blBtnRandomTopics.w, blBtnRandomTopics.h, blMainTopics, {link: 4}));

      let blTBtnRandomTopics = {w: b?71:53, h: 17};
      elms.push(this.getObj(interStrCls+"29", blTBtnRandomTopics.w, blTBtnRandomTopics.h, blBtnRandomTopics, {sz: 14}));

      this.addBtnSelected("topics", blMainTopics, ".blBtnSelectedTopics", b?103:95, 28, elms);

      let blAnanimusUser = {w: b?710:552, h: 38};
      elms.push(this.getObj(interStrCls+"33", blAnanimusUser.w, blAnanimusUser.h, blTopics, {link: 1, sz: 13}));

      let TAnanimusUser = {w: b?145:84.5, h: 16};
      elms.push(this.getObj(interStrCls+"34", TAnanimusUser.w, TAnanimusUser.h, blAnanimusUser, {angleBr: 2}));


      interStrCls = ".tooltipAdv-elm-";

      let tooltipAdv = {w: b?161:196, h: 15};
      elms.push(this.getObj(interStrCls+"0", tooltipAdv.w, tooltipAdv.h, this.fixWin, 
        {link: 1.1, br: {n: 1, clr: "#32D042"}, angleBr: 3}));

      let TtooltipAdv = {w: b?164:198, h: 15};
      elms.push(this.getObj(interStrCls+"1", TtooltipAdv.w, TtooltipAdv.h, tooltipAdv, {sz: 13}));
    }

    return elms;
  }


  // SettingsSnake
  settingsSnake()
  {
    let elms = [];
    let b = (LANGUAGE=="ru"?true:false);
    let interStrCls = ".settingsSnake-elm-";

    if (this.display.list["settingsSnake"])
    {
      let blSettingsSnake = {w: 1008, h: 608};
      let blTitleSettingsSnake = {w: b?236:206, h: 29};
      let blSettingsSnakeMain = {w: 750, h: 530};
      this.addExternalBlocks("settingsSnake", elms, blSettingsSnake, blTitleSettingsSnake, blSettingsSnakeMain);

      this.addBtnPrevisChapter("settingsSnake", blSettingsSnake, "#blPrevisChapter-settingsSnake", elms);

      let blSetSnakeSize = {w: 280, h: 100};
      elms.push(this.getObj(interStrCls+"6", blSetSnakeSize.w, blSetSnakeSize.h, blSettingsSnakeMain, {link: 4}));
      elms.push(this.getObj(interStrCls+"7", blSetSnakeSize.w, blSetSnakeSize.h, blSetSnakeSize));

      let blTitleSetSnakeSize = {w: b?47:48, h: 19};
      elms.push(this.getObj(interStrCls+"8", blTitleSetSnakeSize.w, blTitleSetSnakeSize.h, blSetSnakeSize, {sz: 15.5}));

      let blShowSnakeSize = {w: 180, h: 40};
      elms.push(this.getObj(interStrCls+"9", blShowSnakeSize.w, blShowSnakeSize.h, blSetSnakeSize, 
        {link: 7, br: {n: 1, clr: "#C1C1C1"}, angleBr: 2}));
      elms.push(this.getObj(interStrCls+"10", blShowSnakeSize.w, blShowSnakeSize.h, blShowSnakeSize));

      let blSelectedAvatar = {w: 105, h: 20};
      elms.push(this.getObj(interStrCls+"11", blSelectedAvatar.w, blSelectedAvatar.h, blShowSnakeSize));

      let selectedAvatar = {w: 20, h: 20};
      elms.push(this.getObj(interStrCls+"12", selectedAvatar.w, selectedAvatar.h, blSelectedAvatar, 
        {br: {n: 1, clr: "#FFFFFF"}, sz: 20, s: "img"}));

      let blBtnMP = {w: 24, h: 24};
      for (let i = 0; i < 4; i++)
      {
        elms.push(this.getObj(interStrCls+[13, 14, 32, 33][i], blBtnMP.w, blBtnMP.h, blSetSnakeSize, 
          {
            link: 7, angleBr: 3, sz: 24, s: "img", b: true, 
            pseudoCls: 
            {
              i: elms.length,
              cls: "active", 
              o: this.getObj([".blBtnMinus", ".blBtnPlus"][i], blBtnMP.w-2, blBtnMP.h-2, blSetSnakeSize, 
                {
                  link: 7, sz: 22, s: "img", MOffset: {x: [2, -2][i], y: 0}
                }),
              anim: "0.15",
              css: ["bgsz", "anim"],
              arr: elms
            }
          }));
      }

      let blSetDesingSnake = {w: 300, h: 250};
      elms.push(this.getObj(interStrCls+"15", blSetDesingSnake.w, blSetDesingSnake.h, blSettingsSnakeMain, {link: 4}))
      elms.push(this.getObj(interStrCls+"16", blSetDesingSnake.w, blSetDesingSnake.h, blSetDesingSnake));

      let blTitleDesingSnake = {w: b?57:50, h: 20};
      elms.push(this.getObj(interStrCls+"17", blTitleDesingSnake.w, blTitleDesingSnake.h, blSetDesingSnake, {sz: 16}));

      let blSetDesingSnakeScroll = {w: 300, h: 200};
      elms.push(this.getObj(interStrCls+"18", blSetDesingSnakeScroll.w, blSetDesingSnakeScroll.h, blSetDesingSnake, 
        {link: 18, br: {n: 1, clr: "#C1C1C1"}, angleBr: 3}));

      let blSetDesingSnakeScrollMain = {w: 300, h: 166};
      elms.push(this.getObj(interStrCls+"19", blSetDesingSnakeScrollMain.w, blSetDesingSnakeScrollMain.h, blSetDesingSnakeScroll, {angleBr: 3}));

      let blSending = {w: 25, h: 10};
      elms.push(this.getObj(interStrCls+"20", blSending.w, blSending.h, blSetDesingSnakeScroll, {link: 20, sz: 11}));

      let blSetSnakeSpeed = {w: 280, h: 85};
      elms.push(this.getObj(interStrCls+"26", blSetSnakeSpeed.w, blSetSnakeSpeed.h, blSettingsSnakeMain, {link: 4}));
      elms.push(this.getObj(interStrCls+"27", blSetSnakeSpeed.w, blSetSnakeSpeed.h, blSetSnakeSpeed));

      let blTitleSetSnakeSpeed = {w: b?70:43, h: 20};
      elms.push(this.getObj(interStrCls+"28", blTitleSetSnakeSpeed.w, blTitleSetSnakeSpeed.h, blSetSnakeSpeed, {sz: 15.5}));

      let blShowSnakeSpeed = {w: 115, h: 40};
      elms.push(this.getObj(interStrCls+"29", blShowSnakeSpeed.w, blShowSnakeSpeed.h, blSetSnakeSpeed, 
        {link: 24, br: {n: 1, clr: "#C1C1C1"}, angleBr: 2}));
      elms.push(this.getObj(interStrCls+"30", blShowSnakeSpeed.w, blShowSnakeSpeed.h, blShowSnakeSpeed));

      let speed = (snake.speed / 1e3).toFixed(3);
      let sz = speed.length;

      let noZero = () => 
      { 
        if (speed[sz-1] === '0')
        {
          speed = speed.slice(0, sz-1);
          sz = speed.length;
        }
      };

      if (speed.length == 5) noZero();
      if (speed.length == 4) noZero();

      let blSnakeSpeed = {w: (sz==3?55:sz==4?65:sz==5?75:0), h: 20};
      elms.push(this.getObj("#blSnakeSpeed", blSnakeSpeed.w, blSnakeSpeed.h, blShowSnakeSpeed, {sz: 16}));

      let blNoteWarningSpeedSnake = {w: b?430:370, h: 16};
      elms.push(this.getObj(interStrCls+"34", blNoteWarningSpeedSnake.w, blNoteWarningSpeedSnake.h, blSettingsSnakeMain, 
        {link: 4, sz: 13}));

      this.addBtnSelected("settingsSnake", blSettingsSnakeMain, ".blBtnSelectedSettingSnake", b?103:95, 28, elms, {i: 35});

      let tooltipAdv = {w: b?161:196, h: 15};
      elms.push(this.getObj(".tooltipAdv-elm-0", tooltipAdv.w, tooltipAdv.h, this.fixWin, 
        {link: 1.1, br: {n: 1, clr: "#32D042"}, angleBr: 3}));

      let TtooltipAdv = {w: b?164:198, h: 15};
      elms.push(this.getObj(".tooltipAdv-elm-1", TtooltipAdv.w, TtooltipAdv.h, tooltipAdv, {sz: 13}));


      let blBtnSelDesign = {w: 50, h: 145};
      let o = this.snakeDesign;

      for (let i = -1, x=1, y=0, n=0; i < o.quantityShow; i++, x++, n += 418)
      {
        if (x > 4)
        {
          x = 1;
          n = 0;
          y++;
        }

        elms.push(this.getObj("#blBtnSelectedDesignSnake-"+(i<0?"":i), blBtnSelDesign.w, blBtnSelDesign.h, blSetDesingSnakeScrollMain, 
          {
            link: 21, br: {n: 1, clr: i==+o.selectedBlN?"#10DC1A":"#C1C1C1"}, 
            angleBr: 3, MOffset: {x: 116.4 + n, y: 190 * y}
          }));
        elms.push(this.getObj(interStrCls+"21", blBtnSelDesign.w, blBtnSelDesign.h, blSetDesingSnakeScrollMain, {link: 21}));

        let counterBlInScrll = {w: 49, h: 12};
        elms.push(this.getObj(interStrCls+"22", counterBlInScrll.w, counterBlInScrll.h, blBtnSelDesign, {sz: 10}));

        let selfDesign = {w: [12.5, 20], h: [24, 96]};
        let ind = i<0?0:1;
        elms.push(this.getObj(interStrCls+"23-"+(i<0?"":i), selfDesign.w[ind], selfDesign.h[ind], blSetDesingSnakeScrollMain, 
          {link: 21, sz: [24, 20][ind], s: ["txt", "img"][ind]}));

        if (i < 0)
          elms.push(this.getObj("#imgRandomSnake", selfDesign.w[1], selfDesign.h[1], blSetDesingSnakeScrollMain, 
            {link: 21, sz: 20, s: "img"}));
        else 
        {
          let blockingDesign = {w: 16, h: 20};
          elms.push(this.getObj("#blockingDesignSnake-"+i, blockingDesign.w, blockingDesign.h, blSetDesingSnakeScrollMain, 
            {link: 21, sz: 19, s: "img"}));
        }
      }

      let blAnanimusUser = {w: b?200:200, h: b?125:75};
      elms.push(this.getObj(interStrCls+"24", blAnanimusUser.w, blAnanimusUser.h, blSettingsSnake, {link: 1, sz: 13}));

      let TAnanimusUser = {w: b?145:84.5, h: 16};
      elms.push(this.getObj(interStrCls+"25", TAnanimusUser.w, TAnanimusUser.h, blAnanimusUser, {angleBr: 2}));
    }

    return elms;
  }


  // SettingsFood
  settingsFood()
  {
    let elms = [];
    let b = (LANGUAGE=="ru"?true:false);
    let interStrCls = ".settingsFood-elm-";

    if (this.display.list["settingsFood"])
    {
      let blSettingsFood = {w: 1008, h: 608};
      let blTitleSettingsFood = {w: b?199:193, h: 29};
      let blSettingsFoodMain = {w: 750, h: 470};
      this.addExternalBlocks("settingsFood", elms, blSettingsFood, blTitleSettingsFood, blSettingsFoodMain);

      this.addBtnPrevisChapter("settingsFood", blSettingsFood, "#blPrevisChapter-settingsFood", elms);

      let blSetDesingFood = {w: 350, h: 250};
      elms.push(this.getObj(interStrCls+"6", blSetDesingFood.w, blSetDesingFood.h, blSettingsFoodMain, {link: 4}));
      elms.push(this.getObj(interStrCls+"7", blSetDesingFood.w, blSetDesingFood.h, blSetDesingFood));

      let blTitleDesingFood = {w: b?208:178, h: 20};
      elms.push(this.getObj(interStrCls+"8", blTitleDesingFood.w, blTitleDesingFood.h, blSetDesingFood, {sz: 16}));


      let blSetDesingFoodScroll = {w: 350, h: 200};
      elms.push(this.getObj(interStrCls+"9", blSetDesingFoodScroll.w, blSetDesingFoodScroll.h, blSetDesingFood, 
        {link: 7, br: {n: 1, clr: "#C1C1C1"}, angleBr: 3}));

      let blSetDesingFoodScrollMain = {w: 350, h: 166};
      elms.push(this.getObj(interStrCls+"10", blSetDesingFoodScrollMain.w, blSetDesingFoodScrollMain.h, blSetDesingFoodScroll));

      
      let blSending = {w: 25, h: 10};
      elms.push(this.getObj(interStrCls+"-66", blSending.w, blSending.h, blSetDesingFoodScroll, {link: 9, sz: 11}));


      let blSetFoodQuantity = {w: 280, h: 85};
      elms.push(this.getObj(interStrCls+"-67", blSetFoodQuantity.w, blSetFoodQuantity.h, blSettingsFoodMain, {link: 4}));
      elms.push(this.getObj(interStrCls+"-68", blSetFoodQuantity.w, blSetFoodQuantity.h, blSetFoodQuantity));

      let blTitleSetFoodQuantity = {w: b?152:151, h: 20};
      elms.push(this.getObj(interStrCls+"-69", blTitleSetFoodQuantity.w, blTitleSetFoodQuantity.h, blSetFoodQuantity, {sz: 15.5}));

      let blShowSnakeFood = {w: 115, h: 40};
      elms.push(this.getObj(interStrCls+"-70", blShowSnakeFood.w, blShowSnakeFood.h, blSetFoodQuantity, 
        {link: 13, br: {n: 1, clr: "#C1C1C1"}, angleBr: 2}));
      elms.push(this.getObj(interStrCls+"-71", blShowSnakeFood.w, blShowSnakeFood.h, blShowSnakeFood));
      
      let blSetQuantityFood = {w: 13, h: 25};
      elms.push(this.getObj(interStrCls+"-72", blSetQuantityFood.w, blSetQuantityFood.h, blShowSnakeFood, {sz: 22}));

      let blBtnMP = {w: 24, h: 24};
      for (let i = 0, N = 73; i < 2; i++)
      {
        elms.push(this.getObj(interStrCls+"-"+(N++), blBtnMP.w, blBtnMP.h, blSetQuantityFood, 
          {
            link: 17, angleBr: 3, sz: 24, s: "img", b: true, 
            pseudoCls: 
            {
              i: elms.length,
              cls: "active", 
              o: this.getObj([".blBtnMinus", ".blBtnPlus"][i], blBtnMP.w-2, blBtnMP.h-2, blSetQuantityFood, 
                {
                  link: 17, sz: 22, s: "img", MOffset: {x: [2, -2][i], y: 0}
                }),
              anim: "0.15",
              css: ["bgsz", "anim"],
              arr: elms
            }
          }));
      }


      this.addBtnSelected("settingsFood-", blSettingsFoodMain, ".blBtnSelectedSettingFood", b?103:95, 28, elms, {i: 75});

      let tooltipAdv = {w: b?161:196, h: 15};
      elms.push(this.getObj(".tooltipAdv-elm-0", tooltipAdv.w, tooltipAdv.h, this.fixWin, 
        {link: 1.1, br: {n: 1, clr: "#32D042"}, angleBr: 3}));

      let TtooltipAdv = {w: b?164:198, h: 15};
      elms.push(this.getObj(".tooltipAdv-elm-1", TtooltipAdv.w, TtooltipAdv.h, tooltipAdv, {sz: 13}));

      let blAnanimusUser = {w: b?710:552, h: 38};
      elms.push(this.getObj(interStrCls+"-78", blAnanimusUser.w, blAnanimusUser.h, blSettingsFood, {link: 1, sz: 13}));

      let TAnanimusUser = {w: b?145:84.5, h: 16};
      elms.push(this.getObj(interStrCls+"-79", TAnanimusUser.w, TAnanimusUser.h, blAnanimusUser, {angleBr: 2}));


      let blBtnSelDesign = {w: 70, h: 60};
      let o = this.snakeDesign;

      for (let i = -1, x=1, y=0, n=0; i < o.quantityShow; i++, x++, n += 418)
      {
        if (x > 4)
        {
          x = 1;
          n = 0;
          y++;
        }

        elms.push(this.getObj("#blBtnSelectedDesignFood-"+(i<0?"":i), blBtnSelDesign.w, blBtnSelDesign.h, blSetDesingFoodScrollMain, 
          {
            link: 10, br: {n: 1, clr: i==+o.selectedBlN?"#10DC1A":"#C1C1C1"}, 
            angleBr: 3, MOffset: {x: 70.4 + n, y: 190 * y}
          }));
        elms.push(this.getObj(interStrCls+"21", blBtnSelDesign.w, blBtnSelDesign.h, blSetDesingFoodScrollMain, {link: 10}));

        let counterBlInScrll = {w: 49, h: 12};
        elms.push(this.getObj(interStrCls+"22", counterBlInScrll.w, counterBlInScrll.h, blBtnSelDesign, {sz: 10}));

        let selfDesign = {w: [12.5, 40], h: [24, 40]};
        let ind = i<0?0:1;
        elms.push(this.getObj(interStrCls+"23-"+(i<0?"":i), selfDesign.w[ind], selfDesign.h[ind], blSetDesingFoodScrollMain, 
          {link: 10, sz: [24, 40][ind], s: ["txt", "img"][ind]}));

        if (i < 0)
          elms.push(this.getObj("#imgRandomFood", selfDesign.w[1], selfDesign.h[1], blSetDesingFoodScrollMain, 
            {link: 10, sz: 40, s: "img"}));
        else 
        {
          let blockingDesign = {w: 16, h: 20};
          elms.push(this.getObj("#blockingDesignFood-"+i, blockingDesign.w, blockingDesign.h, blSetDesingFoodScrollMain, 
            {link: 10, sz: 19, s: "img"}));
        }
      }
    }

    return elms;
  }


  // RulesOfGame
  rulesOfGame()
  {
    let elms = [];
    let b = (LANGUAGE=="ru"?true:false);
    let interStrCls = ".rulesOfGame-elm-";

    let blRulesOfGame = {w: 1008, h: 608};
    let blTitleRulesOfGame = {w: b?169:246, h: 29};
    let blMainRulesOfGame = {w: 750, h: 540};
    this.addExternalBlocks("rulesOfGame", elms, blRulesOfGame, blTitleRulesOfGame, blMainRulesOfGame);

    this.addBtnPrevisChapter("rulesOfGame", blRulesOfGame, "#blPrevisChapter-rulesOfGame", elms);

    let blmainRulesOfGame = {w: 650, h: 430};
    elms.push(this.getObj(interStrCls+"6", blmainRulesOfGame.w, blmainRulesOfGame.h, blMainRulesOfGame, 
      {link: 4, br: {n: 1, clr: "#C1C1C1"}, angleBr: 5}));
    elms.push(this.getObj(interStrCls+"7", blmainRulesOfGame.w, blmainRulesOfGame.h, blmainRulesOfGame));

    let blRulesOfGameText = {w: 625, h: 405};
    elms.push(this.getObj(interStrCls+"8", blRulesOfGameText.w, blRulesOfGameText.h, blmainRulesOfGame));


    let nT = (this.display.list["underMenu"]?1:0);
    this.addBtnSelected("rulesOfGame", blMainRulesOfGame, ".blBtnSelectedRulesOfGame", 
      b ? ([140, 206][nT]) : ([161, 205][nT]), 28, elms);


    let parent = blRulesOfGameText;

    // 
    let checkAndCall = (smode, callfun) => 
    {
      if (ctxData.checkSelectedMode(smode))
        callfun();
    };

    // 
    let endText = (o={}) => 
    {
      let b = (LANGUAGE=="ru"?true:false);

      o.w1 = (Object.hasOwn(o, "w1")?o.w1:(b?442:400));  // ширина предупреждающего текста
      o.h1 = (Object.hasOwn(o, "h1")?o.h1:(b?20:20));    // высота предупреждающего текста
      
      o.w2 = (Object.hasOwn(o, "w2")?o.w2:(b?228:247));  // ширина текста P.S.
      o.h2 = (Object.hasOwn(o, "h2")?o.h2:(b?17:17));    // высота текста P.S.

      o.noEndT = (Object.hasOwn(o, "noEndT")?o.noEndT:true);  // добавлять или не добавлять предупреждающй текст?

      if (o.noEndT)
      {
        let blTEnd_1 = {w: o.w1, h: o.h1};
        elms.push(this.getObj(interStrCls+LANGUAGE+"-end-1", blTEnd_1.w, blTEnd_1.h, parent, 
          {link: 8, sz: 15}));
      }

      let blTEnd_2 = {w: o.w2, h: o.h2};
      elms.push(this.getObj(interStrCls+LANGUAGE+"-end-2", blTEnd_2.w, blTEnd_2.h, parent, 
        {link: 8, sz: 13}));
    };


    // Classic
    let modeClassic = () => 
    {
      switch(LANGUAGE)
      {
        case "ru": 
        {
          let prefix = "ru-0-";

          let blT_1 = {w: 250, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"1", blT_1.w, blT_1.h, parent, 
            {link: 8, sz: 16}));

          let blT_2 = {w: 480, h: 60};
          elms.push(this.getObj(interStrCls+prefix+"2", blT_2.w, blT_2.h, parent, 
            {link: 8, sz: 15}));

          endText();

          break;
        }
        case "en": 
        {
          let prefix = "en-0-";

          let blT_1 = {w: 250, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"1", blT_1.w, blT_1.h, parent, 
            {link: 8, sz: 16}));

          let blT_2 = {w: 480, h: 60};
          elms.push(this.getObj(interStrCls+prefix+"2", blT_2.w, blT_2.h, parent, 
            {link: 8, sz: 15}));

          endText();

          break;
        }
      }
    };


    // Infinitely
    let modeInfinitely = () => 
    {
      switch(LANGUAGE)
      {
        case "ru": 
        {
          let prefix = "ru-1-";

          let blT_1 = {w: 350, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"1", blT_1.w, blT_1.h, parent, 
            {link: 8, sz: 16}));

          let blT_2 = {w: 480, h: 60};
          elms.push(this.getObj(interStrCls+prefix+"2", blT_2.w, blT_2.h, parent, 
            {link: 8, sz: 15}));

          endText();

          break;
        }
        case "en": 
        {
          let prefix = "en-1-";

          let blT_1 = {w: 375, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"1", blT_1.w, blT_1.h, parent, 
            {link: 8, sz: 16}));

          let blT_2 = {w: 480, h: 60};
          elms.push(this.getObj(interStrCls+prefix+"2", blT_2.w, blT_2.h, parent, 
            {link: 8, sz: 15}));

          endText();

          break;
        }
      }
    };


    // JumpFood
    let modeJumpFood = () => 
    {
      switch(LANGUAGE)
      {
        case "ru": 
        {
          let prefix = "ru-2-";

          let blT_1 = {w: 455, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"1", blT_1.w, blT_1.h, parent, 
            {link: 8, sz: 16}));

          let blT_2 = {w: 610, h: 60};
          elms.push(this.getObj(interStrCls+prefix+"2", blT_2.w, blT_2.h, parent, 
            {link: 8, sz: 15}));

          let blT_3 = {w: 113, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"3", blT_3.w, blT_3.h, parent, 
            {link: 8, sz: 15}));

          let blT_4 = {w: 500, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"4", blT_4.w, blT_4.h, parent, 
            {link: 8, sz: 15}));

          endText();

          break;
        }
        case "en": 
        {
          let prefix = "en-2-";

          let blT_1 = {w: 333, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"1", blT_1.w, blT_1.h, parent, 
            {link: 8, sz: 16}));

          let blT_2 = {w: 610, h: 40};
          elms.push(this.getObj(interStrCls+prefix+"2", blT_2.w, blT_2.h, parent, 
            {link: 8, sz: 15}));

          let blT_3 = {w: 113, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"3", blT_3.w, blT_3.h, parent, 
            {link: 8, sz: 15}));

          let blT_4 = {w: 500, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"4", blT_4.w, blT_4.h, parent, 
            {link: 8, sz: 15}));

          endText();

          break;
        }
      }
    };


    // FeedMe
    let modeFeedMe = () => 
    {
      switch(LANGUAGE)
      {
        case "ru": 
        {
          let prefix = "ru-3-";

          let blT_1 = {w: 528, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"1", blT_1.w, blT_1.h, parent, 
            {link: 8, sz: 16}));

          let blT_2 = {w: 585, h: 40};
          elms.push(this.getObj(interStrCls+prefix+"2", blT_2.w, blT_2.h, parent, 
            {link: 8, sz: 15}));

          let blT_3 = {w: 585, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"3", blT_3.w, blT_3.h, parent, 
            {link: 8, sz: 15}));

          let blT_4 = {w: 585, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"4", blT_4.w, blT_4.h, parent, 
            {link: 8, sz: 15}));

          endText();

          break;
        }
        case "en": 
        {
          let prefix = "en-3-";

          let blT_1 = {w: 417, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"1", blT_1.w, blT_1.h, parent, 
            {link: 8, sz: 16}));

          let blT_2 = {w: 585, h: 40};
          elms.push(this.getObj(interStrCls+prefix+"2", blT_2.w, blT_2.h, parent, 
            {link: 8, sz: 15}));

          let blT_3 = {w: 585, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"3", blT_3.w, blT_3.h, parent, 
            {link: 8, sz: 15}));

          let blT_4 = {w: 585, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"4", blT_4.w, blT_4.h, parent, 
            {link: 8, sz: 15}));

          endText();

          break;
        }
      }
    };


    // Words
    let modeWords = () => 
    {
      switch(LANGUAGE)
      {
        case "ru": 
        {
          let prefix = "ru-4-";

          let blT_1 = {w: 595, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"1", blT_1.w, blT_1.h, parent, 
            {link: 8, sz: 16}));

          let blT_2 = {w: 480, h: 160};
          elms.push(this.getObj(interStrCls+prefix+"2", blT_2.w, blT_2.h, parent, 
            {link: 8, sz: 15}));

          let blT_3 = {w: 585, h: 60};
          elms.push(this.getObj(interStrCls+prefix+"3", blT_3.w, blT_3.h, parent, 
            {link: 8, sz: 15}));

          let blT_4 = {w: 585, h: 40};
          elms.push(this.getObj(interStrCls+prefix+"4", blT_4.w, blT_4.h, parent, 
            {link: 8, sz: 15}));

          let blT_5 = {w: 585, h: 60};
          elms.push(this.getObj(interStrCls+prefix+"5", blT_5.w, blT_5.h, parent, 
            {link: 8, sz: 15}));

          let blT_6 = {w: 585, h: 60};
          elms.push(this.getObj(interStrCls+prefix+"6", blT_6.w, blT_6.h, parent, 
            {link: 8, sz: 15}));

          let blT_7 = {w: 585, h: 40};
          elms.push(this.getObj(interStrCls+prefix+"7", blT_7.w, blT_7.h, parent, 
            {link: 8, sz: 15}));

          endText();

          break;
        }
        case "en": 
        {
          let prefix = "en-4-";

          let blT_1 = {w: 500, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"1", blT_1.w, blT_1.h, parent, 
            {link: 8, sz: 16}));

          let blT_2 = {w: 480, h: 160};
          elms.push(this.getObj(interStrCls+prefix+"2", blT_2.w, blT_2.h, parent, 
            {link: 8, sz: 15}));

          let blT_3 = {w: 585, h: 40};
          elms.push(this.getObj(interStrCls+prefix+"3", blT_3.w, blT_3.h, parent, 
            {link: 8, sz: 15}));

          let blT_4 = {w: 585, h: 40};
          elms.push(this.getObj(interStrCls+prefix+"4", blT_4.w, blT_4.h, parent, 
            {link: 8, sz: 15}));

          let blT_5 = {w: 585, h: 60};
          elms.push(this.getObj(interStrCls+prefix+"5", blT_5.w, blT_5.h, parent, 
            {link: 8, sz: 15}));

          let blT_6 = {w: 585, h: 60};
          elms.push(this.getObj(interStrCls+prefix+"6", blT_6.w, blT_6.h, parent, 
            {link: 8, sz: 15}));

          let blT_7 = {w: 585, h: 40};
          elms.push(this.getObj(interStrCls+prefix+"7", blT_7.w, blT_7.h, parent, 
            {link: 8, sz: 15}));

          endText({w1: 430});

          break;
        }
      }
    };


    // Mathematics
    let modeMathematics = () => 
    {
      switch(LANGUAGE)
      {
        case "ru": 
        {
          let prefix = "ru-5-";

          let blT_1 = {w: 605, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"1", blT_1.w, blT_1.h, parent, 
            {link: 8, sz: 16}));

          let blT_2 = {w: 480, h: 190};
          elms.push(this.getObj(interStrCls+prefix+"2", blT_2.w, blT_2.h, parent, 
            {link: 8, sz: 15}));

          let blT_3 = {w: 625, h: 60};
          elms.push(this.getObj(interStrCls+prefix+"3", blT_3.w, blT_3.h, parent, 
            {link: 8, sz: 15}));

          endText();

          break;
        }
        case "en": 
        {
          let prefix = "en-5-";

          let blT_1 = {w: 453, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"1", blT_1.w, blT_1.h, parent, 
            {link: 8, sz: 16}));

          let blT_2 = {w: 480, h: 190};
          elms.push(this.getObj(interStrCls+prefix+"2", blT_2.w, blT_2.h, parent, 
            {link: 8, sz: 15}));

          let blT_3 = {w: 625, h: 60};
          elms.push(this.getObj(interStrCls+prefix+"3", blT_3.w, blT_3.h, parent, 
            {link: 8, sz: 15}));

          endText({w1: 445});

          break;
        }
      }
    };


    // reverseMove
    let modeReverseMove = () => 
    {
      switch(LANGUAGE)
      {
        case "ru": 
        {
          let prefix = "ru-6-";

          let blT_1 = {w: 453, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"1", blT_1.w, blT_1.h, parent, 
            {link: 8, sz: 16}));

          let blT_2 = {w: 480, h: 60};
          elms.push(this.getObj(interStrCls+prefix+"2", blT_2.w, blT_2.h, parent, 
            {link: 8, sz: 15}));

          let blT_3 = {w: 585, h: 40};
          elms.push(this.getObj(interStrCls+prefix+"3", blT_3.w, blT_3.h, parent, 
            {link: 8, sz: 15}));

          endText();

          break;
        }
        case "en": 
        {
          let prefix = "en-6-";

          let blT_1 = {w: 417, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"1", blT_1.w, blT_1.h, parent, 
            {link: 8, sz: 16}));

          let blT_2 = {w: 480, h: 60};
          elms.push(this.getObj(interStrCls+prefix+"2", blT_2.w, blT_2.h, parent, 
            {link: 8, sz: 15}));

          let blT_3 = {w: 585, h: 40};
          elms.push(this.getObj(interStrCls+prefix+"3", blT_3.w, blT_3.h, parent, 
            {link: 8, sz: 15}));

          endText();

          break;
        }
      }
    };


    // NarrowingOfZone
    let modeNarrowingOfZone = () => 
    {
      switch(LANGUAGE)
      {
        case "ru": 
        {
          let prefix = "ru-7-";

          let blT_1 = {w: 512, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"1", blT_1.w, blT_1.h, parent, 
            {link: 8, sz: 16}));

          let blT_2 = {w: 580, h: 40};
          elms.push(this.getObj(interStrCls+prefix+"2", blT_2.w, blT_2.h, parent, 
            {link: 8, sz: 15}));

          let blT_3 = {w: 595, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"3", blT_3.w, blT_3.h, parent, 
            {link: 8, sz: 15}));

          let blT_4 = {w: 595, h: 40};
          elms.push(this.getObj(interStrCls+prefix+"4", blT_4.w, blT_4.h, parent, 
            {link: 8, sz: 15}));

          endText();

          break;
        }
        case "en": 
        {
          let prefix = "en-7-";

          let blT_1 = {w: 433, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"1", blT_1.w, blT_1.h, parent, 
            {link: 8, sz: 16}));

          let blT_2 = {w: 580, h: 40};
          elms.push(this.getObj(interStrCls+prefix+"2", blT_2.w, blT_2.h, parent, 
            {link: 8, sz: 15}));

          let blT_3 = {w: 595, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"3", blT_3.w, blT_3.h, parent, 
            {link: 8, sz: 15}));

          let blT_4 = {w: 595, h: 40};
          elms.push(this.getObj(interStrCls+prefix+"4", blT_4.w, blT_4.h, parent, 
            {link: 8, sz: 15}));

          endText();

          break;
        }
      }
    };


    // Maze
    let modeMaze = () => 
    {
      switch(LANGUAGE)
      {
        case "ru": 
        {
          let prefix = "ru-8-";

          let blT_1 = {w: 460, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"1", blT_1.w, blT_1.h, parent, 
            {link: 8, sz: 16}));

          let blT_2 = {w: 400, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"2", blT_2.w, blT_2.h, parent, 
            {link: 8, sz: 15}));

          let blT_3 = {w: 600, h: 40};
          elms.push(this.getObj(interStrCls+prefix+"3", blT_3.w, blT_3.h, parent, 
            {link: 8, sz: 15}));

          let blT_4 = {w: 490, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"4", blT_4.w, blT_4.h, parent, 
            {link: 8, sz: 15}));

          let blT_5 = {w: 585, h: 60};
          elms.push(this.getObj(interStrCls+prefix+"5", blT_5.w, blT_5.h, parent, 
            {link: 8, sz: 15}));

          let blT_6 = {w: 590, h: 40};
          elms.push(this.getObj(interStrCls+prefix+"6", blT_6.w, blT_6.h, parent, 
            {link: 8, sz: 15}));

          endText({noEndT: false});
 
          break;
        }
        case "en": 
        {
          let prefix = "en-8-";

          let blT_1 = {w: 365, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"1", blT_1.w, blT_1.h, parent, 
            {link: 8, sz: 16}));

          let blT_2 = {w: 313, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"2", blT_2.w, blT_2.h, parent, 
            {link: 8, sz: 15}));

          let blT_3 = {w: 600, h: 40};
          elms.push(this.getObj(interStrCls+prefix+"3", blT_3.w, blT_3.h, parent, 
            {link: 8, sz: 15}));

          let blT_4 = {w: 353, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"4", blT_4.w, blT_4.h, parent, 
            {link: 8, sz: 15}));

          let blT_5 = {w: 583, h: 40};
          elms.push(this.getObj(interStrCls+prefix+"5", blT_5.w, blT_5.h, parent, 
            {link: 8, sz: 15}));

          let blT_6 = {w: 550, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"6", blT_6.w, blT_6.h, parent, 
            {link: 8, sz: 15}));

          endText({noEndT: false});

          break;
        }
      }
    };


    // Portals
    let modePortals = () => 
    {
      switch(LANGUAGE)
      {
        case "ru": 
        {
          let prefix = "ru-9-";

          let blT_1 = {w: 390, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"1", blT_1.w, blT_1.h, parent, 
            {link: 8, sz: 16}));

          let blT_2 = {w: 580, h: 80};
          elms.push(this.getObj(interStrCls+prefix+"2", blT_2.w, blT_2.h, parent, 
            {link: 8, sz: 15}));

          endText({noEndT: false});
 
          break;
        }
        case "en": 
        {
          let prefix = "en-9-";

          let blT_1 = {w: 390, h: 20};
          elms.push(this.getObj(interStrCls+prefix+"1", blT_1.w, blT_1.h, parent, 
            {link: 8, sz: 16}));

          let blT_2 = {w: 580, h: 60};
          elms.push(this.getObj(interStrCls+prefix+"2", blT_2.w, blT_2.h, parent, 
            {link: 8, sz: 15}));

          endText({noEndT: false});

          break;
        }
      }
    };



    checkAndCall("classic", modeClassic);
    checkAndCall("infinitely", modeInfinitely);
    checkAndCall("jumpFood", modeJumpFood);
    checkAndCall("feedMe", modeFeedMe);
    checkAndCall("words", modeWords);
    checkAndCall("mathematics", modeMathematics);
    checkAndCall("reverseMove", modeReverseMove);
    checkAndCall("narrowingOfZone", modeNarrowingOfZone);
    checkAndCall("maze", modeMaze);
    checkAndCall("portals", modePortals);

    return elms;
  }


  // Document
  document()
  {
    let elms = [];
    let b = (LANGUAGE=="ru"?true:false);
    let interStrCls = ".document-elm-";

    if (this.display.list["documentation"])
    {
      let blMainDocument = {w: 1008, h: 608};
      let blTitleblMainDocument = {w: b?175:173, h: 29};
      let blMainDocumentAllPage = {w: 950, h: 540};
      this.addExternalBlocks("document", elms, blMainDocument, blTitleblMainDocument, blMainDocumentAllPage);

      let blBtnCloseDocument = {w: b?105:80, h: 30};
      elms.push(this.getObj(interStrCls+"5", blBtnCloseDocument.w, blBtnCloseDocument.h, blMainDocument, {link: 1}));
      elms.push(this.getObj(interStrCls+"6", blBtnCloseDocument.w, blBtnCloseDocument.h, blBtnCloseDocument));

      let blBtnCloseKey = {w: 30, h: 30};
      elms.push(this.getObj(interStrCls+"7", blBtnCloseKey.w, blBtnCloseKey.h, blBtnCloseDocument, {angleBr: 5}));
      elms.push(this.getObj(interStrCls+"8", blBtnCloseKey.w, blBtnCloseKey.h, blBtnCloseKey));

      let BlKeyH = {w: 14.5, h: 18};
      elms.push(this.getObj(interStrCls+"9", BlKeyH.w, BlKeyH.h, blBtnCloseKey, {sz: 20}));

      let blTCloseD = {w: b?62:39, h: 20};
      elms.push(this.getObj(interStrCls+"10", blTCloseD.w, blTCloseD.h, blBtnCloseDocument, {link: 6, sz: 15}));

      let blMainListDocumentAllPage = {w: 920, h: 510};
      elms.push(this.getObj(interStrCls+"11", blMainListDocumentAllPage.w, blMainListDocumentAllPage.h, blMainDocumentAllPage, 
        {link: 4, br: {n: 1, clr: "#C1C1C1"}, angleBr: 5}));
      elms.push(this.getObj(interStrCls+"12", blMainListDocumentAllPage.w, blMainListDocumentAllPage.h, blMainListDocumentAllPage));

      let blListDocumentAllPage = {w: 905, h: 490};
      elms.push(this.getObj(interStrCls+"13", blListDocumentAllPage.w, blListDocumentAllPage.h, blMainListDocumentAllPage));

      let o = this.settingsDocument;

      let blShowHideListChapters = {w: 920, h: !o.o.listChapter.sh?510:0};
      elms.push(this.getObj(interStrCls+"14", blShowHideListChapters.w, blShowHideListChapters.h, blMainDocumentAllPage, 
        {link: 4, angleBr: 5}));
      elms.push(this.getObj(interStrCls+"17", blShowHideListChapters.w, blShowHideListChapters.h, blMainDocumentAllPage, {link: 4}));

      let imgShowHideListChapters = {w: 20, h: 20};
      elms.push(this.getObj(interStrCls+"15", imgShowHideListChapters.w, imgShowHideListChapters.h, blMainDocumentAllPage, 
        {link: 4, angleBr: 50, sz: 23, s: "img"}));

      let parentCh = blMainDocumentAllPage;
      let parentPg = blListDocumentAllPage;

      let szCh = 10;
      let sameObj = {link: 4, sz: 12};

      // Chapter:
      switch(LANGUAGE)
      {
        case "ru": 
        {
          let prefix = "ru-0-";

          let blT = {w: 620, h: 14};
          for (let i = 1; i <= szCh; i++)
            elms.push(this.getObj(interStrCls+prefix+i, blT.w, blT.h, parentCh, sameObj));
          
          break;
        }
        case "en": 
        {
          let prefix = "en-0-";

          let blT = {w: 620, h: 14};
          for (let i = 1; i <= szCh; i++)
          {
            if (i == 8 || i == 9)
              blT.w = 680;
            elms.push(this.getObj(interStrCls+prefix+i, blT.w, blT.h, parentCh, sameObj));
          }

          break;
        }
      }

      sameObj = {link: 13, sz: 12};

      // Pages: 
      if (LANGUAGE == "ru")
      {
        let prefix = "ru-";

        switch(o.nch)
        {
          case "1.0": 
          {
            let blT_1 = {w: 280, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-0-1", blT_1.w, blT_1.h, parentPg, sameObj));

            let blT_2 = {w: 330, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-0-2", blT_2.w, blT_2.h, parentPg, sameObj))

            break;
          }
          case "1.1": 
          {
            let blT_1 = {w: 280, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-1-1", blT_1.w, blT_1.h, parentPg, sameObj));

            let blT_2 = {w: 800, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-1-2", blT_2.w, blT_2.h, parentPg, sameObj));

            let blT_3 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-1-3", blT_3.w, blT_3.h, parentPg, sameObj));

            let blT_4 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-1-4", blT_4.w, blT_4.h, parentPg, sameObj));

            let blT_5 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-1-5", blT_5.w, blT_5.h, parentPg, sameObj));

            break;
          }
          case "1.2": 
          {
            let blT_1 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-2-1", blT_1.w, blT_1.h, parentPg, sameObj));

            let blT_2 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-2-2", blT_2.w, blT_2.h, parentPg, sameObj));

            let blT_3 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-2-3", blT_3.w, blT_3.h, parentPg, sameObj));

            let blI_4 = {w: 220, h: 190};
            elms.push(this.getObj(interStrCls+prefix+"1-2-4", blI_4.w, blI_4.h, parentPg, 
              {link: 13, sz: 300, s: "img", br: {n: 1, clr: "#FFFFFF"}, angleBr: 5}));

            let blT_5 = {w: 510, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-2-5", blT_5.w, blT_5.h, parentPg, sameObj));

            let blT_6 = {w: 800, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-2-6", blT_6.w, blT_6.h, parentPg, sameObj));

            let blI_7 = {w: 350, h: 130};
            elms.push(this.getObj(interStrCls+prefix+"1-2-7", blI_7.w, blI_7.h, parentPg, 
              {link: 13, sz: 350, s: "img", br: {n: 1, clr: "#FFFFFF"}, angleBr: 5}));

            let blT_8 = {w: 600, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-2-8", blT_8.w, blT_8.h, parentPg, sameObj));

            let blI_9 = {w: 350, h: 130};
            elms.push(this.getObj(interStrCls+prefix+"1-2-9", blI_9.w, blI_9.h, parentPg, 
              {link: 13, sz: 350, s: "img", br: {n: 1, clr: "#FFFFFF"}, angleBr: 5}));

            let blT_10 = {w: 900, h: 32};
            elms.push(this.getObj(interStrCls+prefix+"1-2-10", blT_10.w, blT_10.h, parentPg, sameObj));

            let blT_11 = {w: 900, h: 32};
            elms.push(this.getObj(interStrCls+prefix+"1-2-11", blT_11.w, blT_11.h, parentPg, sameObj));

            let blT_12 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-2-12", blT_12.w, blT_12.h, parentPg, sameObj));

            let blT_13 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-2-13", blT_13.w, blT_13.h, parentPg, sameObj));

            let blT_14 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-2-14", blT_14.w, blT_14.h, parentPg, sameObj));

            let blT_15 = {w: 900, h: 32};
            elms.push(this.getObj(interStrCls+prefix+"1-2-15", blT_15.w, blT_15.h, parentPg, sameObj));

            let blT_16 = {w: 660, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-2-16", blT_16.w, blT_16.h, parentPg, sameObj));

            let blT_17 = {w: 1, h: 1};
            elms.push(this.getObj(interStrCls+prefix+"1-2-17", blT_17.w, blT_17.h, parentPg, sameObj));

            break;
          }
          case "2.0": 
          {
            let blT_1 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-0-1", blT_1.w, blT_1.h, parentPg, sameObj));

            let blT_2 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-0-2", blT_2.w, blT_2.h, parentPg, sameObj));

            break;
          }
          case "2.1": 
          {
            let blT_1 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-1-1", blT_1.w, blT_1.h, parentPg, sameObj));

            let blT_2 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-1-2", blT_2.w, blT_2.h, parentPg, sameObj));

            break;
          }
          case "2.2": 
          {
            let blT_1 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-1", blT_1.w, blT_1.h, parentPg, sameObj));

            let blT_2 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-2", blT_2.w, blT_2.h, parentPg, sameObj));

            let blT_3 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-3", blT_3.w, blT_3.h, parentPg, sameObj));

            let blT_4 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-4", blT_4.w, blT_4.h, parentPg, sameObj));

            let blT_5 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-5", blT_5.w, blT_5.h, parentPg, sameObj));

            let blT_6 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-6", blT_6.w, blT_6.h, parentPg, sameObj));

            let blT_7 = {w: 800, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-7", blT_7.w, blT_7.h, parentPg, sameObj));

            let blT_8 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-8", blT_8.w, blT_8.h, parentPg, sameObj));

            let blT_9 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-9", blT_9.w, blT_9.h, parentPg, sameObj));

            let blT_10 = {w: 800, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-10", blT_10.w, blT_10.h, parentPg, sameObj));

            let blT_11 = {w: 800, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-11", blT_11.w, blT_11.h, parentPg, sameObj));

            let blT_12 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-12", blT_12.w, blT_12.h, parentPg, sameObj));

            let blT_13 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-13", blT_13.w, blT_13.h, parentPg, sameObj));

            let blT_14 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-14", blT_14.w, blT_14.h, parentPg, sameObj));

            let blT_15 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-15", blT_15.w, blT_15.h, parentPg, sameObj));

            let blT_16 = {w: 800, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-16", blT_16.w, blT_16.h, parentPg, sameObj));

            break;
          }
          case "2.3": 
          {
            let blT_1 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-3-1", blT_1.w, blT_1.h, parentPg, sameObj));

            let blT_2 = {w: 900, h: 32};
            elms.push(this.getObj(interStrCls+prefix+"2-3-2", blT_2.w, blT_2.h, parentPg, sameObj));

            let blT_3 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-3-3", blT_3.w, blT_3.h, parentPg, sameObj));

            let blT_4 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-3-4", blT_4.w, blT_4.h, parentPg, sameObj));

            let blT_5 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-3-5", blT_5.w, blT_5.h, parentPg, sameObj));

            let blT_6 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-3-6", blT_6.w, blT_6.h, parentPg, sameObj));

            let blT_7 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-3-7", blT_7.w, blT_7.h, parentPg, sameObj));

            let blT_8 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-3-8", blT_8.w, blT_8.h, parentPg, sameObj));

            break;
          }
          case "2.4": 
          {
            let blT_1 = {w: 600, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-4-1", blT_1.w, blT_1.h, parentPg, sameObj));

            let blT_2 = {w: 900, h: 32};
            elms.push(this.getObj(interStrCls+prefix+"2-4-2", blT_2.w, blT_2.h, parentPg, sameObj));

            let blT_3 = {w: 900, h: 32};
            elms.push(this.getObj(interStrCls+prefix+"2-4-3", blT_3.w, blT_3.h, parentPg, sameObj));

            break;
          }
          case "2.5": 
          {
            let blT_1 = {w: 650, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-5-1", blT_1.w, blT_1.h, parentPg, sameObj));

            let blT_2 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-5-2", blT_2.w, blT_2.h, parentPg, sameObj));

            let blT_3 = {w: 900, h: 32};
            elms.push(this.getObj(interStrCls+prefix+"2-5-3", blT_3.w, blT_3.h, parentPg, sameObj));

            break;
          }
          case "2.6": 
          {
            let blT_1 = {w: 600, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-6-1", blT_1.w, blT_1.h, parentPg, sameObj));

            let blT_2 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-6-2", blT_2.w, blT_2.h, parentPg, sameObj));

            let blT_3 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-6-3", blT_3.w, blT_3.h, parentPg, sameObj));

            let blT_4 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-6-4", blT_4.w, blT_4.h, parentPg, sameObj));

            let blT_5 = {w: 900, h: 48};
            elms.push(this.getObj(interStrCls+prefix+"2-6-5", blT_5.w, blT_5.h, parentPg, sameObj));

            let blT_6 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-6-6", blT_6.w, blT_6.h, parentPg, sameObj));

            let blT_7 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-6-7", blT_7.w, blT_7.h, parentPg, sameObj));

            let blT_8 = {w: 900, h: 48};
            elms.push(this.getObj(interStrCls+prefix+"2-6-8", blT_8.w, blT_8.h, parentPg, sameObj));

            break;
          }
          default:
          {
            let blTByDef = {w: 400, h: 14};
            elms.push(this.getObj(interStrCls+"16", blTByDef.w, blTByDef.h, parentPg, {link: 13, sz: 12}))
            break;
          }
        }
      }
      else if (LANGUAGE == "en")
      {
        let prefix = "en-";

        switch(o.nch)
        {
          case "1.0": 
          {
            let blT_1 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-0-1", blT_1.w, blT_1.h, parentPg, sameObj));

            let blT_2 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-0-2", blT_2.w, blT_2.h, parentPg, sameObj));

            break;
          }
          case "1.1": 
          {
            let blT_1 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-1-1", blT_1.w, blT_1.h, parentPg, sameObj));

            let blT_2 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-1-2", blT_2.w, blT_2.h, parentPg, sameObj));

            let blT_3 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-1-3", blT_3.w, blT_3.h, parentPg, sameObj));

            let blT_4 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-1-4", blT_4.w, blT_4.h, parentPg, sameObj));

            let blT_5 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-1-5", blT_5.w, blT_5.h, parentPg, sameObj));

            break;
          }
          case "1.2": 
          {
            let blT_1 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-2-1", blT_1.w, blT_1.h, parentPg, sameObj));

            let blT_2 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-2-2", blT_2.w, blT_2.h, parentPg, sameObj));

            let blT_3 = {w: 900, h: 32};
            elms.push(this.getObj(interStrCls+prefix+"1-2-3", blT_3.w, blT_3.h, parentPg, sameObj));

            let blI_4 = {w: 220, h: 190};
            elms.push(this.getObj(interStrCls+prefix+"1-2-4", blI_4.w, blI_4.h, parentPg, 
              {link: 13, sz: 300, s: "img", br: {n: 1, clr: "#FFFFFF"}, angleBr: 5}));

            let blT_5 = {w: 650, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-2-5", blT_5.w, blT_5.h, parentPg, sameObj));

            let blT_6 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-2-6", blT_6.w, blT_6.h, parentPg, sameObj));

            let blI_7 = {w: 350, h: 130};
            elms.push(this.getObj(interStrCls+prefix+"1-2-7", blI_7.w, blI_7.h, parentPg, 
              {link: 13, sz: 350, s: "img", br: {n: 1, clr: "#FFFFFF"}, angleBr: 5}));

            let blT_8 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-2-8", blT_8.w, blT_8.h, parentPg, sameObj));

            let blI_9 = {w: 350, h: 130};
            elms.push(this.getObj(interStrCls+prefix+"1-2-9", blI_9.w, blI_9.h, parentPg, 
              {link: 13, sz: 350, s: "img", br: {n: 1, clr: "#FFFFFF"}, angleBr: 5}));

            let blT_10 = {w: 900, h: 32};
            elms.push(this.getObj(interStrCls+prefix+"1-2-10", blT_10.w, blT_10.h, parentPg, sameObj));

            let blT_11 = {w: 900, h: 32};
            elms.push(this.getObj(interStrCls+prefix+"1-2-11", blT_11.w, blT_11.h, parentPg, sameObj));

            let blT_12 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-2-12", blT_12.w, blT_12.h, parentPg, sameObj));

            let blT_13 = {w: 600, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-2-13", blT_13.w, blT_13.h, parentPg, sameObj));

            let blT_14 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-2-14", blT_14.w, blT_14.h, parentPg, sameObj));

            let blT_15 = {w: 900, h: 32};
            elms.push(this.getObj(interStrCls+prefix+"1-2-15", blT_15.w, blT_15.h, parentPg, sameObj));

            let blT_16 = {w: 605, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"1-2-16", blT_16.w, blT_16.h, parentPg, sameObj));

            let blT_17 = {w: 1, h: 1};
            elms.push(this.getObj(interStrCls+prefix+"1-2-17", blT_17.w, blT_17.h, parentPg, sameObj));

            break;
          }
          case "2.0": 
          {
            let blT_1 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-0-1", blT_1.w, blT_1.h, parentPg, sameObj));

            let blT_2 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-0-2", blT_2.w, blT_2.h, parentPg, sameObj));

            break;
          }
          case "2.1": 
          {
            let blT_1 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-1-1", blT_1.w, blT_1.h, parentPg, sameObj));

            let blT_2 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-1-2", blT_2.w, blT_2.h, parentPg, sameObj));

            break;
          }
          case "2.2": 
          {
            let blT_1 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-1", blT_1.w, blT_1.h, parentPg, sameObj));

            let blT_2 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-2", blT_2.w, blT_2.h, parentPg, sameObj));

            let blT_3 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-3", blT_3.w, blT_3.h, parentPg, sameObj));

            let blT_4 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-4", blT_4.w, blT_4.h, parentPg, sameObj));

            let blT_5 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-5", blT_5.w, blT_5.h, parentPg, sameObj));

            let blT_6 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-6", blT_6.w, blT_6.h, parentPg, sameObj));

            let blT_7 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-7", blT_7.w, blT_7.h, parentPg, sameObj));

            let blT_8 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-8", blT_8.w, blT_8.h, parentPg, sameObj));

            let blT_9 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-9", blT_9.w, blT_9.h, parentPg, sameObj));

            let blT_10 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-10", blT_10.w, blT_10.h, parentPg, sameObj));

            let blT_11 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-11", blT_11.w, blT_11.h, parentPg, sameObj));

            let blT_12 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-12", blT_12.w, blT_12.h, parentPg, sameObj));

            let blT_13 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-13", blT_13.w, blT_13.h, parentPg, sameObj));

            let blT_14 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-14", blT_14.w, blT_14.h, parentPg, sameObj));

            let blT_15 = {w: 900, h: 32};
            elms.push(this.getObj(interStrCls+prefix+"2-2-15", blT_15.w, blT_15.h, parentPg, sameObj));

            let blT_16 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-2-16", blT_16.w, blT_16.h, parentPg, sameObj));

            break;
          }
          case "2.3": 
          {
            let blT_1 = {w: 600, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-3-1", blT_1.w, blT_1.h, parentPg, sameObj));

            let blT_2 = {w: 900, h: 32};
            elms.push(this.getObj(interStrCls+prefix+"2-3-2", blT_2.w, blT_2.h, parentPg, sameObj));

            let blT_3 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-3-3", blT_3.w, blT_3.h, parentPg, sameObj));

            let blT_4 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-3-4", blT_4.w, blT_4.h, parentPg, sameObj));

            let blT_5 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-3-5", blT_5.w, blT_5.h, parentPg, sameObj));

            let blT_6 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-3-6", blT_6.w, blT_6.h, parentPg, sameObj));

            let blT_7 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-3-7", blT_7.w, blT_7.h, parentPg, sameObj));

            let blT_8 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-3-8", blT_8.w, blT_8.h, parentPg, sameObj));

            break;
          }
          case "2.4": 
          {
            let blT_1 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-4-1", blT_1.w, blT_1.h, parentPg, sameObj));

            let blT_2 = {w: 900, h: 32};
            elms.push(this.getObj(interStrCls+prefix+"2-4-2", blT_2.w, blT_2.h, parentPg, sameObj));

            let blT_3 = {w: 900, h: 32};
            elms.push(this.getObj(interStrCls+prefix+"2-4-3", blT_3.w, blT_3.h, parentPg, sameObj));

            break;
          }
          case "2.5": 
          {
            let blT_1 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-5-1", blT_1.w, blT_1.h, parentPg, sameObj));

            let blT_2 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-5-2", blT_2.w, blT_2.h, parentPg, sameObj));

            let blT_3 = {w: 900, h: 32};
            elms.push(this.getObj(interStrCls+prefix+"2-5-3", blT_3.w, blT_3.h, parentPg, sameObj));

            break;
          }
          case "2.6": 
          {
            let blT_1 = {w: 600, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-6-1", blT_1.w, blT_1.h, parentPg, sameObj));

            let blT_2 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-6-2", blT_2.w, blT_2.h, parentPg, sameObj));

            let blT_3 = {w: 500, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-6-3", blT_3.w, blT_3.h, parentPg, sameObj));

            let blT_4 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-6-4", blT_4.w, blT_4.h, parentPg, sameObj));

            let blT_5 = {w: 900, h: 48};
            elms.push(this.getObj(interStrCls+prefix+"2-6-5", blT_5.w, blT_5.h, parentPg, sameObj));

            let blT_6 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-6-6", blT_6.w, blT_6.h, parentPg, sameObj));

            let blT_7 = {w: 900, h: 16};
            elms.push(this.getObj(interStrCls+prefix+"2-6-7", blT_7.w, blT_7.h, parentPg, sameObj));

            let blT_8 = {w: 900, h: 48};
            elms.push(this.getObj(interStrCls+prefix+"2-6-8", blT_8.w, blT_8.h, parentPg, sameObj));

            break;
          }
          default:
          {
            let blTByDef = {w: 400, h: 14};
            elms.push(this.getObj(interStrCls+"16", blTByDef.w, blTByDef.h, parentPg, {link: 13, sz: 12}))
            break;
          }
        }
      }
    }

    return elms;
  }


  // UnderMenu
  underMenu()
  {
    let elms = [];
    let b = (LANGUAGE=="ru"?true:false);
    let interStrCls = ".underMenu-elm-";

    if (this.display.list["underMenu"])
    {
      let blUnderMenu = {w: 1008, h: 608};
      this.addMainBlock("underMenu", blUnderMenu, elms);

      let blSelectionsUnderMenu = {w: 775, h: 500};
      elms.push(this.getObj(interStrCls+"2", blSelectionsUnderMenu.w, blSelectionsUnderMenu.h, blUnderMenu));
      elms.push(this.getObj(interStrCls+"3", blSelectionsUnderMenu.w, blSelectionsUnderMenu.h, blSelectionsUnderMenu));

      let btnSelection = {w: 230, h: 40};
      elms.push(this.getObj(interStrCls+"4", btnSelection.w, btnSelection.h, blSelectionsUnderMenu, 
        {angleBr: 5, sz: 19}));
      elms.push(this.getObj(interStrCls+"5", btnSelection.w, btnSelection.h, blSelectionsUnderMenu, {link: 3}));


      let blTBtnSelection = 
      {
        w: 
        {
          "ru": [130, 55, 118, 88, 50, 140, 198, 166, [185, 203]],
          "en": [85, 93, 125, 65, 52, 136, 173, 161, [154, 168]]
        }, 
        h: 25
      };

      let arr = blTBtnSelection.w[LANGUAGE];
      let NMode = ctxData.mode.current.n;

      for (let i = 0, w = 0; i < arr.length; i++)
      {
        if (i < 8) 
          w = arr[i];
        else
          w = arr[i][NMode!=4 && NMode!=5 ? 0 : 1];
        
        elms.push(this.getObj(interStrCls+"6-"+(i+1), w, blTBtnSelection.h, btnSelection, {link: 5, sz: 21}));
      }

      let blShowKeyHDocument = {w: b?100:70, h: 30};
      elms.push(this.getObj(interStrCls+"7", blShowKeyHDocument.w, blShowKeyHDocument.h, blUnderMenu, {link: 1}));
      elms.push(this.getObj(interStrCls+"8", blShowKeyHDocument.w, blShowKeyHDocument.h, blShowKeyHDocument));

      let blBtnOpenKey = {w: 30, h: 30};
      elms.push(this.getObj(interStrCls+"9", blBtnOpenKey.w, blBtnOpenKey.h, blShowKeyHDocument, {angleBr: 5}));
      elms.push(this.getObj(interStrCls+"10", blBtnOpenKey.w, blBtnOpenKey.h, blBtnOpenKey));

      let BlKeyH = {w: 14.2, h: 18};
      elms.push(this.getObj(interStrCls+"11", BlKeyH.w, BlKeyH.h, blBtnOpenKey, {sz: 20}));

      let blTOpenD = {w: b?60:30, h: 16};
      elms.push(this.getObj(interStrCls+"12", blTOpenD.w, blTOpenD.h, blShowKeyHDocument, {link: 16, sz: 15}));
    }

    return elms;
  }


  // GameOverForWM
  gameOverForWM()
  {
    let elms = [];
    let b = (LANGUAGE=="ru"?true:false);
    let interStrCls = ".gameOverForWM-elm-";

    if (this.display.list["gameOverForWM"])
    {
      let blGameOverForModeWordMath = {w: 1008, h: 608};
      this.addMainBlock("gameOverForWM", blGameOverForModeWordMath, elms);

      let blGameOverResultForModeWM = {w: 380, h: 480};
      elms.push(this.getObj(interStrCls+"2", blGameOverResultForModeWM.w, blGameOverResultForModeWM.h, blGameOverForModeWordMath, 
        {br: {n: 2, clr: "#FFFFFF"}, angleBr: 10}));
      elms.push(this.getObj(interStrCls+"3", blGameOverResultForModeWM.w, blGameOverResultForModeWM.h, blGameOverResultForModeWM));

      let blTitleGameOverModeWordMath = {w: b?150:167, h: 25};
      elms.push(this.getObj(interStrCls+"4", blTitleGameOverModeWordMath.w, blTitleGameOverModeWordMath.h, blGameOverResultForModeWM, 
        {sz: 19}));

      let blARecordModeWordMath = {w: 210, h: 40};
      elms.push(this.getObj(interStrCls+"5", blARecordModeWordMath.w, blARecordModeWordMath.h, blGameOverResultForModeWM, {link: 3}));
      elms.push(this.getObj(interStrCls+"6", blARecordModeWordMath.w, blARecordModeWordMath.h, blARecordModeWordMath));

      let imgARecordModeWordMath = {w: 30, h: 30};
      elms.push(this.getObj(interStrCls+"7", imgARecordModeWordMath.w, imgARecordModeWordMath.h, blARecordModeWordMath, 
        {sz: 33, s: "img"}));

      let NARecordModeWordMath = {w: 141.25, h: 26.5};
      elms.push(this.getObj(interStrCls+"8", NARecordModeWordMath.w, NARecordModeWordMath.h, blARecordModeWordMath, 
        {sz: 24.75}));

      let blCurrentScoreModeWordMath = {w: 210, h: 40};
      elms.push(this.getObj(interStrCls+"9", blCurrentScoreModeWordMath.w, blCurrentScoreModeWordMath.h, blGameOverResultForModeWM, 
        {link: 3}));
      elms.push(this.getObj(interStrCls+"10", blCurrentScoreModeWordMath.w, blCurrentScoreModeWordMath.h, blCurrentScoreModeWordMath));

      let imgCurrentScoreModeWordMath = {w: 30, h: 30};
      elms.push(this.getObj(interStrCls+"11", imgCurrentScoreModeWordMath.w, imgCurrentScoreModeWordMath.h, blCurrentScoreModeWordMath, 
        {sz: 33, s: "img"}));

      let NCurrentScoreModeWordMath = {w: 141.25, h: 26.5};
      elms.push(this.getObj(interStrCls+"12", NCurrentScoreModeWordMath.w, NCurrentScoreModeWordMath.h, blARecordModeWordMath, 
        {sz: 24.75}));

      let blGuessedWordsMath = {w: 190, h: 20};
      elms.push(this.getObj(interStrCls+"13", blGuessedWordsMath.w, blGuessedWordsMath.h, blGameOverResultForModeWM, {link: 3}));
      elms.push(this.getObj(interStrCls+"14", blGuessedWordsMath.w, blGuessedWordsMath.h, blGuessedWordsMath));

      let textGuessedWordsMath = {w: 250, h: 20};
      elms.push(this.getObj(interStrCls+"15", textGuessedWordsMath.w, textGuessedWordsMath.h, blGuessedWordsMath, {sz: 18}));

      let blHintWordsMath = {w: 312, h: 20};
      elms.push(this.getObj(interStrCls+"16", blHintWordsMath.w, blHintWordsMath.h, blGameOverResultForModeWM, {link: 3}));
      elms.push(this.getObj(interStrCls+"17", blHintWordsMath.w, blHintWordsMath.h, blHintWordsMath));

      let textHintWordsMath = {w: 312, h: 20};
      elms.push(this.getObj(interStrCls+"18", textHintWordsMath.w, textHintWordsMath.h, blHintWordsMath, {sz: 18}));

      let blGuessedExamplesMath = {w: 312, h: 20};
      elms.push(this.getObj(interStrCls+"19", blGuessedExamplesMath.w, blGuessedExamplesMath.h, blGameOverResultForModeWM, {link: 3}));
      elms.push(this.getObj(interStrCls+"20", blGuessedExamplesMath.w, blGuessedExamplesMath.h, blGuessedExamplesMath));

      let textGuessedExamplesMath = {w: 225, h: 20};
      elms.push(this.getObj(interStrCls+"21", textGuessedExamplesMath.w, textGuessedExamplesMath.h, blGuessedExamplesMath, 
        {sz: 18}));

      let blBtnsGameOverForWordMath = {w: 178, h: 195};
      elms.push(this.getObj(interStrCls+"22", blBtnsGameOverForWordMath.w, blBtnsGameOverForWordMath.h, blGameOverResultForModeWM, 
        {link: 3}));
      elms.push(this.getObj(interStrCls+"23", blBtnsGameOverForWordMath.w, blBtnsGameOverForWordMath.h, blBtnsGameOverForWordMath));

      let btnGO = {w: 178, h: 38};
      for (let i = 0; i < 3; i++)
      {
        elms.push(this.getObj(interStrCls+"24-"+(i+1), btnGO.w, btnGO.h, blBtnsGameOverForWordMath, 
          {
            link: 23, br: {n: 1, clr: "#FFFFFF"}, angleBr: 7, b: true, 
            pseudoCls: 
              {
                i: elms.length,
                cls: "active", 
                o: this.getObj("."+["btnGOResurrected", "btnGOOneMoreTime", "btnGOModes"][i], btnGO.w, btnGO.h, blBtnsGameOverForWordMath, 
                  {
                    link: 23, MOffset: {x: 0, y: 5}
                  }),
                anim: "0.2",
                css: ["anim"],
                arr: elms
              }
          }));
        }
      
      elms.push(this.getObj(interStrCls+"25", btnGO.w, btnGO.h, blBtnsGameOverForWordMath, {link: 23}));

      let textGOResurrected = {w: b?[110, 70, 74]:[142, 120, 55], h: 22};
      for (let i = 0; i < 3; i++)
        elms.push(this.getObj(interStrCls+"26-"+(i+1), textGOResurrected.w[i], textGOResurrected.h, btnGO, {link: 27, sz: 18}));

      let blMiniTAdvertisementWarningModeWordMath = {w: b?135:159, h: 15};
      elms.push(this.getObj(interStrCls+"27", blMiniTAdvertisementWarningModeWordMath.w, blMiniTAdvertisementWarningModeWordMath.h, 
        blBtnsGameOverForWordMath, {link: 23, sz: 10.5}));


      let blAnanimusUser = {w: b?710:552, h: 38};
      elms.push(this.getObj(interStrCls+"28", blAnanimusUser.w, blAnanimusUser.h, blGameOverForModeWordMath, {link: 1, sz: 13}));

      let TAnanimusUser = {w: b?145:84.5, h: 16};
      elms.push(this.getObj(interStrCls+"29", TAnanimusUser.w, TAnanimusUser.h, blAnanimusUser, {angleBr: 2}));
    }

    return elms;
  }


  // GameOverForOther
  gameOverForOther()
  {
    let elms = [];
    let b = (LANGUAGE=="ru"?true:false);
    let interStrCls = ".gameOverForOther-elm-";

    if (this.display.list["gameOverForOther"])
    {
      let blGameOverForModeWordMath = {w: 1008, h: 608};
      this.addMainBlock("gameOverForOther", blGameOverForModeWordMath, elms);

      let blGameOverResultForModeWM = {w: 380, h: 380};
      elms.push(this.getObj(interStrCls+"2", blGameOverResultForModeWM.w, blGameOverResultForModeWM.h, blGameOverForModeWordMath, 
        {br: {n: 2, clr: "#FFFFFF"}, angleBr: 10}));
      elms.push(this.getObj(interStrCls+"3", blGameOverResultForModeWM.w, blGameOverResultForModeWM.h, blGameOverResultForModeWM));

      let blTitleGameOverModeWordMath = {w: b?150:167, h: 25};
      elms.push(this.getObj(interStrCls+"4", blTitleGameOverModeWordMath.w, blTitleGameOverModeWordMath.h, blGameOverResultForModeWM, 
        {sz: 19}));

      let blARecordModeWordMath = {w: 210, h: 40};
      elms.push(this.getObj(interStrCls+"5", blARecordModeWordMath.w, blARecordModeWordMath.h, blGameOverResultForModeWM, {link: 3}));
      elms.push(this.getObj(interStrCls+"6", blARecordModeWordMath.w, blARecordModeWordMath.h, blARecordModeWordMath));

      let imgARecordModeWordMath = {w: 30, h: 30};
      elms.push(this.getObj(interStrCls+"7", imgARecordModeWordMath.w, imgARecordModeWordMath.h, blARecordModeWordMath, 
        {sz: 33, s: "img"}));

      let NARecordModeWordMath = {w: 141.25, h: 26.5};
      elms.push(this.getObj(interStrCls+"8", NARecordModeWordMath.w, NARecordModeWordMath.h, blARecordModeWordMath, 
        {sz: 24.75}));

      let blCurrentScoreModeWordMath = {w: 210, h: 40};
      elms.push(this.getObj(interStrCls+"9", blCurrentScoreModeWordMath.w, blCurrentScoreModeWordMath.h, blGameOverResultForModeWM, 
        {link: 3}));
      elms.push(this.getObj(interStrCls+"10", blCurrentScoreModeWordMath.w, blCurrentScoreModeWordMath.h, blCurrentScoreModeWordMath));

      let imgCurrentScoreModeWordMath = {w: 30, h: 30};
      elms.push(this.getObj(interStrCls+"11", imgCurrentScoreModeWordMath.w, imgCurrentScoreModeWordMath.h, blCurrentScoreModeWordMath, 
        {sz: 33, s: "img"}));

      let NCurrentScoreModeWordMath = {w: 141.25, h: 26.5};
      elms.push(this.getObj(interStrCls+"12", NCurrentScoreModeWordMath.w, NCurrentScoreModeWordMath.h, blARecordModeWordMath, 
        {sz: 24.75}));

      let blBtnsGameOverForWordMath = {w: 178, h: 195};
      elms.push(this.getObj(interStrCls+"22", blBtnsGameOverForWordMath.w, blBtnsGameOverForWordMath.h, blGameOverResultForModeWM, 
        {link: 3}));
      elms.push(this.getObj(interStrCls+"23", blBtnsGameOverForWordMath.w, blBtnsGameOverForWordMath.h, blBtnsGameOverForWordMath));

      let btnGO = {w: 178, h: 38};
      for (let i = 0; i < 3; i++)
      {
        elms.push(this.getObj(interStrCls+"24-"+(i+1), btnGO.w, btnGO.h, blBtnsGameOverForWordMath, 
          {
            link: 14, br: {n: 1, clr: "#FFFFFF"}, angleBr: 7, b: true, 
            pseudoCls: 
              {
                i: elms.length,
                cls: "active", 
                o: this.getObj("."+["btnGOResurrected", "btnGOOneMoreTime", "btnGOModes"][i], btnGO.w, btnGO.h, blBtnsGameOverForWordMath, 
                  {
                    link: 14, MOffset: {x: 0, y: 5}
                  }),
                anim: "0.2",
                css: ["anim"],
                arr: elms
              }
          }));
        }
      
      elms.push(this.getObj(interStrCls+"25", btnGO.w, btnGO.h, blBtnsGameOverForWordMath, {link: 14}));

      let textGOResurrected = {w: b?[110, 70, 74]:[142, 120, 55], h: 22};
      for (let i = 0; i < 3; i++)
        elms.push(this.getObj(interStrCls+"26-"+(i+1), textGOResurrected.w[i], textGOResurrected.h, btnGO, {link: 18, sz: 18}));

      let blMiniTAdvertisementWarningModeWordMath = {w: b?135:159, h: 15};
      elms.push(this.getObj(interStrCls+"27", blMiniTAdvertisementWarningModeWordMath.w, blMiniTAdvertisementWarningModeWordMath.h, 
        blBtnsGameOverForWordMath, {link: 14, sz: 10.5}));

      let blAnanimusUser = {w: b?710:552, h: 38};
      elms.push(this.getObj(interStrCls+"28", blAnanimusUser.w, blAnanimusUser.h, blGameOverForModeWordMath, {link: 1, sz: 13}));

      let TAnanimusUser = {w: b?145:84.5, h: 16};
      elms.push(this.getObj(interStrCls+"29", TAnanimusUser.w, TAnanimusUser.h, blAnanimusUser, {angleBr: 2}));
    }

    return elms;
  }


  // GameOverForMaze
  gameOverForMaze()
  {
    let elms = [];
    let b = (LANGUAGE=="ru"?true:false);
    let interStrCls = ".gameOverForMaze-elm-";

    if (this.display.list["gameOverForMaze"])
    {
      let blGameOverForMaze = {w: 1008, h: 608};
      this.addMainBlock("gameOverForMaze", blGameOverForMaze, elms);

      let blGameOverResultForModeMaze = {w: 450, h: 335};
      elms.push(this.getObj(interStrCls+"2", blGameOverResultForModeMaze.w, blGameOverResultForModeMaze.h, blGameOverForMaze, 
        {br: {n: 2, clr: "#FFFFFF"}, angleBr: 10}));
      elms.push(this.getObj(interStrCls+"3", blGameOverResultForModeMaze.w, blGameOverResultForModeMaze.h, blGameOverResultForModeMaze));

      let blTitleGameOverModeWordMath = {w: b?150:167, h: 25};
      elms.push(this.getObj(interStrCls+"4", blTitleGameOverModeWordMath.w, blTitleGameOverModeWordMath.h, blGameOverResultForModeMaze, 
        {sz: 19}));

      let blElexirHealthForModeMaze = {w: 210, h: 50};
      elms.push(this.getObj(interStrCls+"5", blElexirHealthForModeMaze.w, blElexirHealthForModeMaze.h, blGameOverResultForModeMaze, 
        {link: 3}))
      elms.push(this.getObj(interStrCls+"6", blElexirHealthForModeMaze.w, blElexirHealthForModeMaze.h, blElexirHealthForModeMaze));

      let imgElexirHealth = {w: 30, h: 50};
      elms.push(this.getObj(interStrCls+"7", imgElexirHealth.w, imgElexirHealth.h, blElexirHealthForModeMaze, 
        {sz: 33, s: "img"}));

      let NQuantityElexirHealth = {w: 80, h: 20};
      elms.push(this.getObj(interStrCls+"8", NQuantityElexirHealth.w, NQuantityElexirHealth.h, blElexirHealthForModeMaze, 
        {link: 6, sz: 20}));

      let blBtnGameOverForMaze = {w: 240, h: 60};
      elms.push(this.getObj(interStrCls+"9", blBtnGameOverForMaze.w, blBtnGameOverForMaze.h, blGameOverResultForModeMaze, 
        {link: 3}));
      elms.push(this.getObj(interStrCls+"10", blBtnGameOverForMaze.w, blBtnGameOverForMaze.h, blBtnGameOverForMaze));

      let btnGOGetMore = {w: 230, h: 38};
      elms.push(this.getObj(interStrCls+"11", btnGOGetMore.w, btnGOGetMore.h, blBtnGameOverForMaze, 
        {
          br: {n: 3, clr: "#FFFFFF"}, angleBr: 4, b: true, 
          pseudoCls: 
            {
              i: elms.length,
              cls: "active", 
              o: this.getObj(".btnGOGetMore", btnGOGetMore.w, btnGOGetMore.h, blBtnGameOverForMaze, 
                {
                  MOffset: {x: 0, y: 5}
                }),
              anim: "0.2",
              css: ["anim"],
              arr: elms
            }
        }));
      elms.push(this.getObj(interStrCls+"12", btnGOGetMore.w, btnGOGetMore.h, blBtnGameOverForMaze, {link: 10}));

      let textGOGetMore = {w: b?123:75, h: 22};
      elms.push(this.getObj(interStrCls+"13", textGOGetMore.w, textGOGetMore.h, btnGOGetMore, {sz: 18}));

      let blMiniTAdvertisementWarningModeWordMath = {w: b?135:159, h: 15};
      elms.push(this.getObj(interStrCls+"14", blMiniTAdvertisementWarningModeWordMath.w, blMiniTAdvertisementWarningModeWordMath.h, 
        blBtnGameOverForMaze, {link: 10, sz: 10.5}));

      let blBtnsForLvlForMaze = {w: 400, h: 70};
      elms.push(this.getObj(interStrCls+"15", blBtnsForLvlForMaze.w, blBtnsForLvlForMaze.h, blGameOverResultForModeMaze, 
        {link: 3}));
      elms.push(this.getObj(interStrCls+"16", blBtnsForLvlForMaze.w, blBtnsForLvlForMaze.h, blBtnsForLvlForMaze));

      let blBtnGOForMaze = {w: [120, 100, 120], h: 60};
      
      for (let i = 0; i < 3; i++)
      {
        elms.push(this.getObj(interStrCls+"17-"+(i+1), blBtnGOForMaze.w[i], blBtnGOForMaze.h, blBtnsForLvlForMaze, 
          {
            link: 16, br: {n: 3, clr: "#FFFFFF"}, angleBr: 4, sz: 46, s: "img", b: true, 
            pseudoCls: 
              {
                i: elms.length,
                cls: "active", 
                o: this.getObj("."+["blBtnBackGOForMaze", "blBtnResumeGOForMaze", "blBtnShowLvlsGOForMaze"][i], 
                    blBtnGOForMaze.w[i], blBtnGOForMaze.h, blBtnsForLvlForMaze, 
                    {
                      link: 16, sz: 40, s: "img"
                    }),
                anim: "0.1",
                css: ["bgsz", "anim"],
                arr: elms
              }
          }));
      }
    }

    return elms;
  }


  // CountingRelustsForMaze
  countingRelustsForMaze()
  {
    let elms = [];
    let b = (LANGUAGE=="ru"?true:false);
    let interStrCls = ".countingRelustsForMaze-elm-";

    if (this.display.list["countingRelustsForMaze"])
    {
      let blContingResultsCurrenLvlForMaze = {w: 1008, h: 608};
      this.addMainBlock("countingRelustsForMaze", blContingResultsCurrenLvlForMaze, elms);

      let blCountingResultsForModeMaze = {w: 450, h: 355};
      elms.push(this.getObj(interStrCls+"2", blCountingResultsForModeMaze.w, blCountingResultsForModeMaze.h, blContingResultsCurrenLvlForMaze, 
        {br: {n: 2, clr: "#FFFFFF"}, angleBr: 10}));
      elms.push(this.getObj(interStrCls+"3", blCountingResultsForModeMaze.w, blCountingResultsForModeMaze.h, blCountingResultsForModeMaze));

      let blStarsBehindLvl = {w: [55, 190, 310], h: 50};
      for (let i = 0; i < 3; i++)
      {
        elms.push(this.getObj(interStrCls+"4-"+(i+1), blStarsBehindLvl.w[i], blStarsBehindLvl.h, blCountingResultsForModeMaze, 
          {link: 3}));
        elms.push(this.getObj(interStrCls+"5-"+(i+1), blStarsBehindLvl.w[i], blStarsBehindLvl.h, blStarsBehindLvl));
      } 

      let blImgStarOne = {w: 55, h: 50};
      elms.push(this.getObj(interStrCls+"6", blImgStarOne.w, blImgStarOne.h, blStarsBehindLvl, 
        {link: 5, sz: 55, s: "img"}));

      let blCurrentAndTotalTime = {w: 105, h: 66};
      elms.push(this.getObj(interStrCls+"7", blCurrentAndTotalTime.w, blCurrentAndTotalTime.h, blCountingResultsForModeMaze, 
        {link: 3}));
      elms.push(this.getObj(interStrCls+"8", blCurrentAndTotalTime.w, blCurrentAndTotalTime.h, blCurrentAndTotalTime));

      let blTextYourTime = {w: b?93:73, h: 20};
      elms.push(this.getObj(interStrCls+"9", blTextYourTime.w, blTextYourTime.h, blCurrentAndTotalTime, 
        {sz: 15}));

      let blTextCurrentTime = {w: 139, h: 27};
      for (let i = 10; i < 12; i++)
      {
        elms.push(this.getObj(interStrCls+i, blTextCurrentTime.w, blTextCurrentTime.h, blCurrentAndTotalTime, 
          {link: 8, sz: 21}));
      }

      let blRewardForPassingForModeMaze = {w: 150, h: 50};
      elms.push(this.getObj(interStrCls+"12", blRewardForPassingForModeMaze.w, blRewardForPassingForModeMaze.h, blCountingResultsForModeMaze, 
        {link: 3}));
      elms.push(this.getObj(interStrCls+"13", blRewardForPassingForModeMaze.w, blRewardForPassingForModeMaze.h, blRewardForPassingForModeMaze));

      let blImgAndNFoodRewardForPassing = {w: 35, h: 40};
      elms.push(this.getObj(interStrCls+"14", blImgAndNFoodRewardForPassing.w, blImgAndNFoodRewardForPassing.h, blRewardForPassingForModeMaze));

      let imgFoodRewardForPassing = {w: 35, h: 35};
      elms.push(this.getObj(interStrCls+"15", imgFoodRewardForPassing.w, imgFoodRewardForPassing.h, blImgAndNFoodRewardForPassing, 
        {sz: 38, s: "img"}));

      let blReceivedGift = {w: 91, h: 95};
      elms.push(this.getObj(interStrCls+"16", blReceivedGift.w, blReceivedGift.h, blImgAndNFoodRewardForPassing, {link: 14}));
      elms.push(this.getObj(interStrCls+"17", blReceivedGift.w, blReceivedGift.h, blReceivedGift));

      let imgReceivedGiftElexirHealth = {w: 52, h: 95};
      elms.push(this.getObj(interStrCls+"18", imgReceivedGiftElexirHealth.w, imgReceivedGiftElexirHealth.h, blReceivedGift, 
        {sz: 56, s: "img"}));

      let NQuantityFoodRewardForPassing = {w: 35, h: 40};
      elms.push(this.getObj(interStrCls+"19", NQuantityFoodRewardForPassing.w, NQuantityFoodRewardForPassing.h, blReceivedGift, 
        {sz: 35}));

      let blBtnsForLvlForMaze = {w: 390, h: 70};
      elms.push(this.getObj(interStrCls+"20", blBtnsForLvlForMaze.w, blBtnsForLvlForMaze.h, blCountingResultsForModeMaze, 
        {link: 3}));
      elms.push(this.getObj(interStrCls+"21", blBtnsForLvlForMaze.w, blBtnsForLvlForMaze.h, blBtnsForLvlForMaze));

      let blBtnRewardForMaze = {w: 170, h: 86};
      for (let i = 0; i < 3; i++)
      {
        elms.push(this.getObj(interStrCls+"22-"+(i+1), blBtnRewardForMaze.w, blBtnRewardForMaze.h, blBtnsForLvlForMaze, 
          {
            link: 21, br: {n: 4, clr: "#FFFFFF"}, angleBr: 4, sz: 62, s: "img", b: true, 
            pseudoCls: 
            {
              i: elms.length,
              cls: "active", 
              o: this.getObj("."+["blBtnBackRewardForMaze", "blBtnShowLvlsForMaze", "blBtnNextLvlForMaze"][i], 
                    blBtnRewardForMaze.w, blBtnRewardForMaze.h, blBtnsForLvlForMaze, 
                    {
                      link: 21, sz: 56, s: "img"
                    }),
              anim: "0.1",
              css: ["bgsz", "anim"],
              arr: elms
            }
          }));
      }

      let blAnanimusUser = {w: b?710:552, h: 38};
      elms.push(this.getObj(interStrCls+"23", blAnanimusUser.w, blAnanimusUser.h, blContingResultsCurrenLvlForMaze, {link: 1, sz: 13}));

      let TAnanimusUser = {w: b?145:84.5, h: 16};
      elms.push(this.getObj(interStrCls+"24", TAnanimusUser.w, TAnanimusUser.h, blAnanimusUser, {angleBr: 2}));

      interStrCls = ".tooltipCurrentTime-elm-";

      let tooltipAdv = {w: b?[76, 110]:[60, 84], h: 15};
      for (let i = 0; i < 2; i++)
      {
        elms.push(this.getObj(interStrCls+"0-"+(i+1), tooltipAdv.w[i], tooltipAdv.h, this.fixWin, 
          {link: 1.1, br: {n: 1, clr: "#FFFFFF"}, angleBr: 3}));

        let TtooltipAdv = {w: b?[75, 110]:[56, 82], h: 15};
        elms.push(this.getObj(interStrCls+"1-"+(i+1), TtooltipAdv.w[i], TtooltipAdv.h, tooltipAdv, {sz: 13}));
      }
    }

    return elms;
  }


  // indicator
  indicator()
  {
    let elms = [];
    let interStrCls = ".indicator-elm-";

    let blIndicator = {w: 21, h: 21};
    elms.push(this.getObj(interStrCls+"0", blIndicator.w, blIndicator.h, this.BlForOtherSides, {angleBr: 50}));
    
    return elms;
  }


  // lowerBlock
  lowerBlock()
  {
    let elms = [];
    let interStrCls = ".lowerBlock-elm-";

    let BlLowerBlock = {w: 380, h: 42};
    elms.push(this.getObj(interStrCls+"0", BlLowerBlock.w, BlLowerBlock.h, this.BlForOtherSides));

    let blMsgCollision = {w: 380, h: 16};
    elms.push(this.getObj(interStrCls+"1", blMsgCollision.w, blMsgCollision.h, BlLowerBlock, {sz: 13}));

    let posMoveMouse = {w: 320, h: 16};
    elms.push(this.getObj(interStrCls+"2", posMoveMouse.w, posMoveMouse.h, BlLowerBlock, {link: 0, sz: 13}));

    return elms;
  }

  
  // blValueForSnake
  blValueForSnake()
  {
    let elms = [];
    let interStrCls = ".blValueForSnake-elm-";

    let BlValueForSnake = {w: 950, h: 40};
    elms.push(this.getObj(interStrCls+"0", BlValueForSnake.w, BlValueForSnake.h, this.BlForOtherSides));
    elms.push(this.getObj(interStrCls+"1", BlValueForSnake.w, BlValueForSnake.h, BlValueForSnake));


    if ( ctxData.checkSelectedMode("classic")         || 
         ctxData.checkSelectedMode("infinitely")      || 
         ctxData.checkSelectedMode("jumpFood")        || 
         ctxData.checkSelectedMode("reverseMove")     || 
         ctxData.checkSelectedMode("narrowingOfZone") ||
         ctxData.checkSelectedMode("maze")            || 
         ctxData.checkSelectedMode("portals") )
    {
      let blQuantityFood = {w: 150, h: 40};
      elms.push(this.getObj(interStrCls+"2", blQuantityFood.w, blQuantityFood.h, BlValueForSnake, {link: 1}));
      elms.push(this.getObj(interStrCls+"3", blQuantityFood.w, blQuantityFood.h, blQuantityFood));

      let imgScoreFood = {w: 30, h: 45};
      elms.push(this.getObj(interStrCls+"4", imgScoreFood.w, imgScoreFood.h, blQuantityFood, {sz: 30, s: "img"}));

      let scoreN = {w: 300, h: 18};
      elms.push(this.getObj(interStrCls+"5", scoreN.w, scoreN.h, blQuantityFood, {link: 3, sz: 17}));
    }
    else if (ctxData.checkSelectedMode("feedMe"))
    {
      let blImgFeedMe = {w: 32, h: 32};
      elms.push(this.getObj(interStrCls+"6", blImgFeedMe.w, blImgFeedMe.h, BlValueForSnake, 
        {link: 1, sz: 32, s: "img"}));

      let blFeedMe = {w: 670, h: 23};
      elms.push(this.getObj(interStrCls+"7", blFeedMe.w, blFeedMe.h, BlValueForSnake, 
        {link: 1, br: {n: 2.5, clr: "#FFFFFF"}, angleBr: 4}));
    }
    else if (ctxData.checkSelectedMode("words") || ctxData.checkSelectedMode("mathematics"))
    {
      let blMaps = {w: 1005, h: 35};
      elms.push(this.getObj(interStrCls+"9", blMaps.w, blMaps.h, BlValueForSnake, {link: 1}));

      let blRewardApple = {w: 175, h: 35};
      elms.push(this.getObj(interStrCls+"10", blRewardApple.w, blRewardApple.h, blMaps));
      elms.push(this.getObj(interStrCls+"11", blRewardApple.w, blRewardApple.h, blRewardApple));

      let blImgReward = {w: 30, h: 30};
      elms.push(this.getObj(interStrCls+"12", blImgReward.w, blImgReward.h, blRewardApple, 
        {sz: 32, s: "img"}));

      let blRewardScore = {w: 135, h: 17};
      elms.push(this.getObj(interStrCls+"13", blRewardScore.w, blRewardScore.h, blRewardApple, 
        {link: 4, sz: 17}));

      let mainBlSymb = {w: 825, h: 35};
      elms.push(this.getObj(interStrCls+"14", mainBlSymb.w, mainBlSymb.h, blMaps, {link: 3}));

      let blSymb = {w: 20, h: 35};
      elms.push(this.getObj(interStrCls+"15", blSymb.w, blSymb.h, mainBlSymb, 
        {br: {n: 1, clr: "#FFFFFF"}, angleBr: 2, sz: 33}));
    }

    let blCountingDown = {w: 23, h: 20};
    elms.push(this.getObj(interStrCls+"16", blCountingDown.w, blCountingDown.h, BlValueForSnake, 
      {link: 1, sz: 19}));

    let snakePosXY = {w: 120, h: 15};
    elms.push(this.getObj(interStrCls+"17", snakePosXY.w, snakePosXY.h, BlValueForSnake, 
      {link: 1, sz: 13.5}));

    return elms;
  }


  // canvas
  canvas()
  {
    let elms = [];

    let blCanvas = {w: 1008, h: 608};
    elms.push(this.getObj("#canvas", blCanvas.w, blCanvas.h, this.fixWin, {angleBr: 5}));

    let szcell = {w: 8, h: 8};  // По умолчанию 16 pixel
    elms.push(this.getObj("szcell", szcell.w, szcell.h, blCanvas));

    return elms;
  }


  // blForOtherSides
  blForOtherSides()
  {
    let elms = [];
    let interStrCls = ".blForOtherSides-elm-";
    
    elms.push(this.getObj(interStrCls+"0", this.BlForOtherSides.w, this.BlForOtherSides.h, this.fixWin));
    elms.push(this.getObj(interStrCls+"1", this.BlForOtherSides.w, this.BlForOtherSides.h, this.BlForOtherSides));

    return elms;
  }
}
