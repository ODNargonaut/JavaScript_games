/* Содежит правила для режимов на en */


class PagesForRulesOfGameEn
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
    
    return '<div class="devSpan rulesOfGame-elm-en-'+o.nElm+'" style="'+style+'">'+text+'</div>';
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
  endText(x1, y1, x2, y2, food="Food", w=400)
  {
    return ((this.currentMode !== "maze" && this.currentMode !== "portals"?
      this.getHTMLTeg(
        [
          ['Attention: '+food+' can appear straight up the snake - this is not a bug!'], 
          this.w(w), this.h(20), this.fontSize(15), this.offset(x1, y1), this.getClr('#EE3131')
        ], {nElm: "end-1"}):"")+
      this.getHTMLTeg(
        [
          ['P.S. We are glad that you are playing our game!'], 
          this.w(247), this.h(17), this.fontSize(13), this.offset(x2, y2)
        ], {nElm: "end-2"})
    );
  }

  // mode classic
  modePageClassic()
  {
    return (
      this.getHTMLTeg(
        [
          ['It\'s just like in the classic snake game:'], 
          this.w(250), this.h(20), this.fontSize(16), this.offset(50, 2)
        ], {nElm: "0-1"})+
      this.getHTMLTeg(
        [
          [
            '1) Increase your score by eating food;',
            '2) Avoid obstacles, as well as the borders of the canvas, so as not to lose;',
            '3) Set new records.'
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
          ['It\'s just like in the classic snake game, BUT without borders:'], 
          this.w(375), this.h(20), this.fontSize(16), this.offset(50, 2)
        ], {nElm: "1-1"})+
      this.getHTMLTeg(
        [
          [
            '1) Increase your score by eating food;',
            '2) Avoid obstacles so as not to lose;',
            '3) Set new records.'
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
          ['This mode combines the classic snake and ping pong.'], 
          this.w(333), this.h(20), this.fontSize(16), this.offset(50, 2)
        ], {nElm: "2-1"})+
      this.getHTMLTeg(
        [
          ['In this mode, the food does not just appear in different positions, it also moves in different '+
          'directions, and when it collides with the border of the canvas, it bounces and moves in the opposite direction.'], 
          this.w(610), this.h(40), this.fontSize(15), this.offset(50, 10)
        ], {nElm: "2-2"})+
      this.getHTMLTeg([['But that\'s not all!'], this.w(113), this.h(20), this.fontSize(15), this.offset(50, 28)], {nElm: "2-3"})+
      this.getHTMLTeg(
        [
          ['When colliding with the snake\'s tail, the food will bounce in the opposite direction!'], 
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
          ['It\'s just like in the classic snake game, but this time life is at stake.'], 
          this.w(417), this.h(20), this.fontSize(16), this.offset(50, 2)
        ], {nElm: "3-1"})+
      this.getHTMLTeg(
        [
          ['In this mode, you have to keep the snake full by eating food that will appear on the field in different positions.'], 
          this.w(585), this.h(40), this.fontSize(15), this.offset(50, 10)
        ], {nElm: "3-2"})+
      this.getHTMLTeg(
        [
          ['Be careful and don\'t let the snake starve to death.'], 
          this.w(585), this.h(20), this.fontSize(15), this.offset(50, 22)
        ], {nElm: "3-3"})+
      this.getHTMLTeg(
        [
          ['As soon as the green bar disappears, you will be defeated!'], 
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
          ['Unlike the classic mode, here you have to guess the words from different topics.'], 
          this.w(500), this.h(20), this.fontSize(16), this.offset(50, 2)
        ], {nElm: "4-1"})+
      this.getHTMLTeg(
        [
          [
            'In this mode, your task is to guess the words.', 
            '1) To guess the word, you need to eat the letters in order;', 
            '2) Every next correct letter eaten will disappear from the field;', 
            '3) If you eat a letter that is not next in order, then you lose one point, and the letter moves '+
                'to a new position on the canvas.',
            '4) For each word you guess, you get five points.', 
            '5) Guess as many words as possible!'
          ], 
          this.w(480), this.h(160), this.fontSize(15), this.offset(50, 18)
        ], {b: 1, nElm: "4-2"})+
        this.getHTMLTeg(
          [
            ['If you can\'t guess the word, then you can use the hint by pressing the \'Tab\' key on your '+
            'keyboard, but keep in mind that you will lose three points for using the hint!'], 
            this.w(585), this.h(40), this.fontSize(15), this.offset(50, 63)
          ], {nElm: "4-3"})+
        this.getHTMLTeg(
          [
            ['When the hint is activated, you will see a green letter on the field - this means that it is the next in order.'], 
            this.w(585), this.h(40), this.fontSize(15), this.offset(50, 77)
          ], {nElm: "4-4"})+
        this.getHTMLTeg(
          [
            ['Note: If you used the hint and ate the wrong letter (i.e. it looked like green), do not worry, this letter will '+
            'be counted and disappear from the field, and the one that was green will return to its previous state and remain '+
            'in the same position on the canvas.'], 
            this.w(585), this.h(60), this.getClr('#3EC14D'), this.fontSize(15), this.offset(50, 95)
          ], {nElm: "4-5"})+
        this.getHTMLTeg(
          [
            ['Attention: The words originally contained spaces (\' \') and hyphens (\'-\') - all of them were replaced with an underscore (\'_\')! '+
            'Therefore, if you see a line in the field, it means that the word may contain a space or hyphen.'], 
            this.w(585), this.h(60), this.getClr('#EE3131'), this.fontSize(15), this.offset(50, 115)
          ], {nElm: "4-6"})+
        this.getHTMLTeg(
          [
            ['Attention: If you guess English words, then some of them may contain an apostrophe (\') - it has not been changed, '+
            'unlike the space and hyphen!'], 
            this.w(585), this.h(40), this.getClr('#EE3131'), this.fontSize(15), this.offset(50, 128)
          ], {nElm: "4-7"})+
      this.endText(50, 140, 50, 150, 'The letters', 430)
    );
  }


  // mode mathematics
  modePageMathematics()
  {
    return (
      this.getHTMLTeg(
        [
          ['Unlike the classic mode, here you have to solve mathematical examples.'], 
          this.w(453), this.h(20), this.fontSize(16), this.offset(50, 2)
        ], {nElm: "5-1"})+
      this.getHTMLTeg(
        [
          [
            'In this mode, your task is to give the correct answer.', 
            '1) To give the correct answer, you need to eat the numbers in order;', 
            '2) Each next correct digit eaten will move to a different position on the field, making it difficult for you to get there;', 
            '3) If you eat a number that is not next in order in the answer, then you lose three points, and '+
                'the letter moves to a new position on the canvas;', 
            '4) For each solved example, you get five points.', 
            '5) Solve as many examples as possible!'
          ], 
          this.w(480), this.h(190), this.fontSize(15), this.offset(50, 18)
        ], {b: 1, nElm: "5-2"})+
      this.getHTMLTeg(
        [
          ['Attention: Your points may go into the negative - this is normal (i.e. there are positive and '+
           'negative numbers in mathematics, right?).'], 
          this.w(625), this.h(60), this.getClr('#EE3131'), this.fontSize(15), this.offset(50, 70)
        ], {nElm: "5-3"})+
      this.endText(50, 80, 50, 90, 'The numbers', 445)
    );
  }


  // mode reverseMove
  modePageReverseMove()
  {
    return (
      this.getHTMLTeg(
        [
          ['It\'s just like in the classic snake game, BUT with mirror commands.'], 
          this.w(417), this.h(20), this.fontSize(16), this.offset(50, 2)
        ], {nElm: "6-1"})+
      this.getHTMLTeg(
        [
          [
            '1) Increase your score by eating food;', 
            '2) Avoid obstacles so as not to lose;', 
            '3) Set new records.'
          ], 
          this.w(480), this.h(60), this.fontSize(15), this.offset(50, 12)
        ], {nElm: "6-2"})+
      this.getHTMLTeg(
        [
          ['For the record: By pressing left, the snake will move to the right, and by pressing up, the snake will move down.'], 
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
          ['It\'s just like in the classic snake game, BUT with additional obstacles.'], 
          this.w(433), this.h(20), this.fontSize(16), this.offset(50, 2)
        ], {nElm: "7-1"})+
      this.getHTMLTeg(
        [
          ['In this mode, when the snake eats the next food, an obstacle will appear on the field in a random position!'], 
          this.w(580), this.h(40), this.fontSize(15), this.offset(50, 13)
        ], {nElm: "7-2"})+
      this.getHTMLTeg(
        [
          ['For the record: At the position where the future obstacle will appear, the label will be displayed first.'], 
          this.w(595), this.h(20), this.getClr('#3EC14D'), this.fontSize(15), this.offset(50, 30)
        ], {nElm: "7-3"})+
      this.getHTMLTeg(
        [
          ['Attention: If the tail of the snake turns out to be in the position where the obstacle is displayed, '+
           'then do not worry, you will not lose!'], 
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
          ['In this mode, you have to complete several levels on time.'], 
          this.w(365), this.h(20), this.fontSize(16), this.offset(50, 2)
        ], {nElm: "8-1"})+
      this.getHTMLTeg(
        [
          ['Your main task is to find the shortest way to the exit!'], 
          this.w(313), this.h(20), this.fontSize(15), this.offset(50, 13)
        ], {nElm: "8-2"})+
      this.getHTMLTeg(
        [
          ['At the beginning, you will be given a few seconds to think your way through, and you '+
           'will also be given three elixirs of life - they will help you heal the snake if it '+
           'encounters an obstacle.'], 
          this.w(600), this.h(40), this.fontSize(15), this.offset(50, 20)
        ], {nElm: "8-3"})+
      this.getHTMLTeg(
        [
          ['For each completed level you get a certain number of stars.'], 
          this.w(353), this.h(20), this.fontSize(15), this.offset(50, 32)
        ], {nElm: "8-4"})+
      this.getHTMLTeg(
        [
          ['Note: If you score the best score in the game, then you will receive a gift that can '+
           'contain from one to two elixirs of life, which can be used only at the next level and only once.'], 
          this.w(583), this.h(40), this.getClr('#3EC14D'), this.fontSize(15), this.offset(50, 50)
        ], {nElm: "8-5"})+
      this.getHTMLTeg(
        [
          ['Attention: The required time to complete the level varies depending on the speed of the snake!'], 
          this.w(550), this.h(20), this.getClr('#EE3131'), this.fontSize(15), this.offset(50, 67)
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
          ['It\'s just like in the classic snake game, BUT with teleportation.'], 
          this.w(390), this.h(20), this.fontSize(16), this.offset(50, 2)
        ], {nElm: "9-1"})+
      this.getHTMLTeg(
        [
          ['In this mode, the snake moves around the field, eating food, but instead of just moving forward, '+
           'it now moves to the position where the corresponding pair for this food is located. However, the '+
           'snake must be careful and avoid its tail and other obstacles so as not to lose the game.'], 
          this.w(580), this.h(60), this.fontSize(15), this.offset(50, 13)
        ], {nElm: "9-2"})+
      this.endText(0, 0, 50, 40)
    );
  }
}
