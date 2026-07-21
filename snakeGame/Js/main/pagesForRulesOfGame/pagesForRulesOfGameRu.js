/* Содежит правила для режимов на ru */


class PagesForRulesOfGameRu
{
  currentMode = "";


  // 
  getPage(mode)
  {
    this.currentMode = mode;
    switch(mode)
    {
      case "classic":     return this.modePageClassic();
      case "infinitely":  return this.modePageInfinitely();
      case "jumpFood":    return this.modePageJumpFood();
      case "feedMe":      return this.modePageFeedMe();
      case "words":       return this.modePageWords();
      case "mathematics": return this.modePageMathematics();
      case "reverseMove": return this.modePageReverseMove();
      case "narrowingOfZone": return this.modePageNarrowingOfZone();
      case "maze":    return this.modePageMaze();
      case "portals": return this.modePagePortals();
    }
  }

  // 
  getHTMLTeg(args, o={})
  {
    let text = "";
    let style = "";

    o.b = (Object.hasOwn(o, "b")?o.b:0);
    o.nElm = (Object.hasOwn(o, "nElm")?o.nElm:"");

    let i = 0, j = 0;
    let sz = args.length;

    while (i < sz)
    {
      while (j < args[0].length)
      {
        if (j > 0) text += '<br />'+(o.b-- > 0?'<br />':'');
        if (i == 0) text += '<span class="t-strong-regular">'+args[0][j++]+'</span>';
      }
      
      if (i < sz) style += args[1+(i++)];
    }
    
    return '<div class="devSpan rulesOfGame-elm-ru-'+o.nElm+'" style="'+style+'">'+text+'</div>';
  }

  // 
  w(n) { return 'width: '+n+'px; '; }

  // 
  h(n) { return 'height: '+n+'px; '; }

  // 
  offset(x, y) { return 'left: '+x+'%; top: '+y+'%; transform: translate(-'+x+'%, -'+y+'%); '; }

  // 
  top(n) { return 'margin-top: '+n+'px; '; }

  // 
  getClr(clr) { return 'color: '+clr+'; '; }

  // 
  fontSize(n) { return 'font-size: '+n+'px; ' }

  // 
  endText(x1, y1, x2, y2, food="Пища может", w=442)
  {
    return ((this.currentMode !== "maze" && this.currentMode !== "portals"?
      this.getHTMLTeg(
        [
          ['Внимание: '+food+' появляться прямо по вверх змейки - это не баг!'], 
          this.w(w), this.h(20), this.fontSize(15), this.offset(x1, y1), this.getClr('#EE3131')
        ], {nElm: "end-1"}):"")+
      this.getHTMLTeg(
        [
          ['P.S. Мы рады, что вы играете в нашу игру!'], 
          this.w(228), this.h(17), this.fontSize(13), this.offset(x2, y2)
        ], {nElm: "end-2"})
    );
  }


  // mode classic
  modePageClassic()
  {
    return (
      this.getHTMLTeg(
        [
          ['Все как и в классической игре змейка:'], 
          this.w(250), this.h(20), this.fontSize(16), this.offset(50, 2)
        ], {nElm: "0-1"})+
      this.getHTMLTeg(
        [
          [
            '1) Увеличивайте свой счет, поедая еду;',
            '2) Избегайте препятствий, а также границ холста, чтобы не проиграть;',
            '3) Устанавливайте новые рекорды.'
          ], 
          this.w(480), this.h(60), this.fontSize(15), this.offset(50, 10)
        ], {nElm: "0-2"})+
      this.endText(50, 30, 50, 40)
    );
  }


  // mode infinitely
  modePageInfinitely()
  {
    return (
      this.getHTMLTeg(
        [
          ['Все как и в классической игре змейка, НО без границ:'], 
          this.w(350), this.h(20), this.fontSize(16), this.offset(50, 2)
        ], {nElm: "1-1"})+
      this.getHTMLTeg(
        [
          [
            '1) Увеличивайте свой счет, поедая еду;',
            '2) Избегайте препятствий, чтобы не проиграть;',
            '3) Устанавливайте новые рекорды.'
          ], 
          this.w(480), this.h(60), this.fontSize(15), this.offset(50, 10)
        ], {nElm: "1-2"})+
      this.endText(50, 30, 50, 40)
    );
  }


  // mode jumpFood
  modePageJumpFood()
  {
    return (
      this.getHTMLTeg(
        [
          ['Данный режим объединяет в себе классическую змейку и пинг-понг.'], 
          this.w(455), this.h(20), this.fontSize(16), this.offset(50, 2)
        ], {nElm: "2-1"})+
      this.getHTMLTeg(
        [
          ['В этом режиме пища не просто появляется в разных позициях, она еще и перемещается в разных '+
          'направлениях, а также при столкновении с границей холста она отскакивает и движется в противоположную сторону.'], 
          this.w(610), this.h(60), this.fontSize(15), this.offset(50, 10)
        ], {nElm: "2-2"})+
      this.getHTMLTeg([['Но это еще не все!'], this.w(113), this.h(20), this.fontSize(15), this.offset(50, 28)], {nElm: "2-3"})+
      this.getHTMLTeg(
        [
          ['При столкновении с хвостом змеи еда отскочит в противоположном направлении!'], 
          this.w(500), this.h(20), this.fontSize(15), this.offset(50, 35)
        ], {nElm: "2-4"})+
      this.endText(50, 50, 50, 60)
    );
  }


  // mode feedMe
  modePageFeedMe()
  {
    return (
      this.getHTMLTeg(
        [
          ['Все как и в классической игре змейка, но на этот раз на карту поставлена жизнь.'], 
          this.w(528), this.h(20), this.fontSize(16), this.offset(50, 2)
        ], {nElm: "3-1"})+
      this.getHTMLTeg(
        [
          ['В данном режиме вам предстоит поддерживать сытость змейки поедая при этом пищу, '+
          'которая будет появляться на поле в разных позициях.'], 
          this.w(585), this.h(40), this.fontSize(15), this.offset(50, 10)
        ], {nElm: "3-2"})+
      this.getHTMLTeg(
        [
          ['Будьте осторожны и не дайте змейке умереть с голоду.'], 
          this.w(585), this.h(20), this.fontSize(15), this.offset(50, 22)
        ], {nElm: "3-3"})+
      this.getHTMLTeg(
        [
          ['Как только зеленая полоса исчезнет вы потерпите поражение!'], 
          this.w(585), this.h(20), this.fontSize(15), this.offset(50, 29)
        ], {nElm: "3-4"})+
      this.endText(50, 40, 50, 50)
    );
  }


  // mode words 
  modePageWords()
  {
    return (
      this.getHTMLTeg(
        [
          ['В отличии от классического режима, здесь вам предстоит отгадывать слова из разных тем.'], 
          this.w(595), this.h(20), this.fontSize(16), this.offset(50, 2)
        ], {nElm: "4-1"})+
      this.getHTMLTeg(
        [
          [
            'В этом режиме ваша задача состоит в том, чтобы угадать слова.', 
            '1) Чтобы угадать слово, вам нужно съедать буквы по порядку;', 
            '2) Каждая следующая съеденная правильная буква будет исчезать с поля;', 
            '3) Если вы съедаете букву, которая не является следующей по порядку, то вы теряете одно '+
                'очко, а буква перемещается в новую позицию на холсте.',
            '4) За каждое отгаданное слово вы получаете пять очков.', 
            '5) Угадай как можно больше слов!'
          ], 
          this.w(480), this.h(160), this.fontSize(15), this.offset(50, 18)
        ], {b: 1, nElm: "4-2"})+
        this.getHTMLTeg(
          [
            ['Если у вас не получается угадать слово, то вы можете воспользоваться подсказкой нажав на клавишу \'Tab\' на клавиатуре, '+
            'но имейте в виду, что вы потеряете три очка за использование подсказки!'], 
            this.w(585), this.h(60), this.fontSize(15), this.offset(50, 63)
          ], {nElm: "4-3"})+
        this.getHTMLTeg(
          [
            ['Когда подсказка будет активирована, вы увидите на поле букву зеленого цвета - это означает, что она '+
            'является следующей по порядку.'], 
            this.w(585), this.h(40), this.fontSize(15), this.offset(50, 77)
          ], {nElm: "4-4"})+
        this.getHTMLTeg(
          [
            ['На заметку: Если вы воспользовались подсказкой и съели не ту букву (т.е. она была похожей на зеленую) '+
            'не волнуйтесь эта буква будет засчитана и исчезнет с поля, а та что была зеленого цвета вернется в прежнее '+
            'состояние и останется в той же позиции на холсте.'], 
            this.w(585), this.h(60), this.getClr('#3EC14D'), this.fontSize(15), this.offset(50, 95)
          ], {nElm: "4-5"})+
        this.getHTMLTeg(
          [
            ['Внимание: Слова изначально содержали в себе пробелы (\' \') и дефисы (\'-\') - все они были заменены на знак подчеркивания (\'_\')! '+
            'Поэтому, если вы видите на поле черту - значит в слове может содержаться пробел или дефис.'], 
            this.w(585), this.h(60), this.getClr('#EE3131'), this.fontSize(15), this.offset(50, 115)
          ], {nElm: "4-6"})+
        this.getHTMLTeg(
          [
            ['Внимание: Если вы будете отгадывать английские слова, то в некоторых из них может встречаться апостроф (\') - он не '+
            'был изменен, в отличии от пробела и дефиса!'], 
            this.w(585), this.h(40), this.getClr('#EE3131'), this.fontSize(15), this.offset(50, 128)
          ], {nElm: "4-7"})+
      this.endText(50, 140, 50, 150, 'Буквы могут')
    );
  }

  
  // mode mathematics
  modePageMathematics()
  {
    return (
      this.getHTMLTeg(
        [
          ['В отличии от классического режима, здесь вам предстоит решать математические примеры.'], 
          this.w(605), this.h(20), this.fontSize(16), this.offset(50, 2)
        ], {nElm: "5-1"})+
      this.getHTMLTeg(
        [
          [
            'В этом режиме ваша задача состоит в том, чтобы дать правильный ответ.', 
            '1) Чтобы дать правильный ответ, вам нужно съесть цифры по порядку;', 
            '2)  Каждая следующая съеденная правильная цифра будет перемещаться в другую позиции на поле затрудняя вам путь;', 
            '3) Если вы съедаете цифру, которая не является следующей по порядку в ответе, то вы теряете три очка, а '+
                'буква перемещается в новую позицию на холсте;', 
            '4) За каждый решенный пример вы получаете пять очков.', 
            '5) Решите как можно больше примеров!'
          ], 
          this.w(480), this.h(190), this.fontSize(15), this.offset(50, 18)
        ], {b: 1, nElm: "5-2"})+
      this.getHTMLTeg(
        [
          ['Внимание: Ваши баллы могут уйти в минус - это нормально (т.е. в математике есть же положитель-ные и отрицательные числа?).'], 
          this.w(625), this.h(60), this.getClr('#EE3131'), this.fontSize(15), this.offset(50, 70)
        ], {nElm: "5-3"})+
      this.endText(50, 80, 50, 90, 'Цифры могут')
    );
  }


  // mode reverseMove
  modePageReverseMove()
  {
    return (
      this.getHTMLTeg(
        [
          ['Все как и в классической игре змейка, НО с зеркальными командами.'], 
          this.w(453), this.h(20), this.fontSize(16), this.offset(50, 2)
        ], {nElm: "6-1"})+
      this.getHTMLTeg(
        [
          [
            '1) Увеличивайте свой счет, поедая еду;', 
            '2) Избегайте препятствий, чтобы не проиграть;', 
            '3) Устанавливайте новые рекорды.'
          ], 
          this.w(480), this.h(60), this.fontSize(15), this.offset(50, 12)
        ], {nElm: "6-2"})+
      this.getHTMLTeg(
        [
          ['На заметку: Нажимая влево, змейка будет двигаться вправо, а нажимая вверх, змейка будет двигаться вниз.'], 
          this.w(585), this.h(40), this.getClr('#3EC14D'), this.fontSize(15), this.offset(50, 35)
        ], {nElm: "6-3"})+
      this.endText(50, 50, 50, 60)
    );
  }


  // mode narrowingOfZone
  modePageNarrowingOfZone()
  {
    return (
      this.getHTMLTeg(
        [
          ['Все как и в классической игре змейка, НО с дополнительными препятствиями.'], 
          this.w(512), this.h(20), this.fontSize(16), this.offset(50, 2)
        ], {nElm: "7-1"})+
      this.getHTMLTeg(
        [
          ['В данном режиме, когда змейка будет съедать очередную пищу на поле в случайной '+
           'позиции будет появляться препятствие!'], 
          this.w(580), this.h(40), this.fontSize(15), this.offset(50, 13)
        ], {nElm: "7-2"})+
      this.getHTMLTeg(
        [
          ['На заметку: В позиции, где появится будущее препятствие, сначала будет отображаться метка.'], 
          this.w(595), this.h(20), this.getClr('#3EC14D'), this.fontSize(15), this.offset(50, 30)
        ], {nElm: "7-3"})+
      this.getHTMLTeg(
        [
          ['Внимание: Если хвост змейки окажется в позиции, где отобразиться препятствие, то не волнуйтесь '+
           'вы не проиграете!'], 
          this.w(595), this.h(40), this.getClr('#EE3131'), this.fontSize(15), this.offset(50, 41)
        ], {nElm: "7-4"})+
      this.endText(50, 58, 50, 70)
    );
  }


  // mode maze
  modePageMaze()
  {
    return (
      this.getHTMLTeg(
        [
          ['В данном режиме вам предстоит пройти несколько уровней на время.'], 
          this.w(460), this.h(20), this.fontSize(16), this.offset(50, 2)
        ], {nElm: "8-1"})+
      this.getHTMLTeg(
        [
          ['Ваша главная задача - это найти самый короткий путь к выходу!'], 
          this.w(400), this.h(20), this.fontSize(15), this.offset(50, 13)
        ], {nElm: "8-2"})+
      this.getHTMLTeg(
        [
          ['В начале вам будет дано несколько секунд на то, чтобы продумать свой путь, а также '+
           'будут даны три эликсира жизни - они помогут вам исцелить змейку, если та столкнется с '+
           'препятствием.'], 
          this.w(600), this.h(40), this.fontSize(15), this.offset(50, 20)
        ], {nElm: "8-3"})+
      this.getHTMLTeg(
        [
          ['За каждый пройденный уровень вы получаете определенное количество звезд.'], 
          this.w(490), this.h(20), this.fontSize(15), this.offset(50, 32)
        ], {nElm: "8-4"})+
      this.getHTMLTeg(
        [
          ['На заметку: Если вы набираете наилучший результат в игре, то вы получите подарок в '+
           'котором может быть от одного до двух эликсиров жизни, которые можно '+
           'будет использовать только на следующем уровне и только один раз.'], 
          this.w(583), this.h(60), this.getClr('#3EC14D'), this.fontSize(15), this.offset(50, 50)
        ], {nElm: "8-5"})+
      this.getHTMLTeg(
        [
          ['Внимание: Необходимое время для прохождения уровня варьируется в зависимости от скорости змейки!'], 
          this.w(590), this.h(40), this.getClr('#EE3131'), this.fontSize(15), this.offset(50, 67)
        ], {nElm: "8-6"})+
      this.endText(0, 0, 50, 80)
    );
  }


  // mode portals
  modePagePortals()
  {
    return (
      this.getHTMLTeg(
        [
          ['Все как и в классической игре змейка, НО с телепортацией.'], 
          this.w(390), this.h(20), this.fontSize(16), this.offset(50, 2)
        ], {nElm: "9-1"})+
      this.getHTMLTeg(
        [
          ['В данном режиме змейка перемещается по полю, съедая пищу, но вместо того, чтобы '+
           'просто двигаться вперед, она теперь перемещается в позицию, где находится соответствующая '+
           'пара для этой пищи. Однако змейка должна быть осторожна и избегать своего хвоста и других '+
           'препятствий, чтобы не потерять игру.'], 
          this.w(580), this.h(80), this.fontSize(15), this.offset(50, 13)
        ], {nElm: "9-2"})+
      this.endText(0, 0, 50, 40)
    );
  }
}
