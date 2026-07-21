/* Содержит все страницы документации на en к игре "SNAKE 2D" */


class DocumentPageEn
{
  // 
  getPage(nch)
  {
    switch(nch)
    {
      case "1.0": return this.chapter_1_0();
      case "1.1": return this.chapter_1_1();
      case "1.2": return this.chapter_1_2();
      case "2.0": return this.chapter_2_0();
      case "2.1": return this.chapter_2_1();
      case "2.2": return this.chapter_2_2();
      case "2.3": return this.chapter_2_3();
      case "2.4": return this.chapter_2_4();
      case "2.5": return this.chapter_2_5();
      case "2.6": return this.chapter_2_6();
    }
  }

  // 
  getHTMLTeg(args, o={})
  {
    let text = "";
    let style = "";

    let i = 0;
    let sz = args.length;

    o.type = (Object.hasOwn(o, "type")?o.type:"txt");
    o.nElm = (Object.hasOwn(o, "nElm")?o.nElm:"");

    while (i < sz)
    {
      if (i == 0 && o.type == "txt") text += args[i++];
      if (i < sz) style += args[i++];
    }

    let id = 'document-elm-en-'+o.nElm;
    
    if (o.type == "txt")
    {
      let bl = '<div class="devBl '+id+'" style="'+style+'">';
      bl += '<code class="codeTPosAbsolute">'+text+'</code>';
      bl += '</div>';
      return bl;
    }
    else if (o.type == "img")
      return '<div class="codeImg '+id+'" style="'+style+'"></div>';
  }

  // 
  getClr(clr) { return 'color: '+clr+'; '; }

  // 
  mleft(n) { return 'margin-left: '+n+'px; '; }

  // 
  mtop(n) { return 'margin-top: '+n+'px; '; }

  // 
  lt(left, top)
  {
    let l = "left: "+left+"%; ";
    let t = "top: "+top+"%; ";
    return l+t+"transform: translate(-"+left+"%, -"+top+"%); ";
  }

  // 
  bgImg(img) { return 'background-image: url(\''+img+'\'); '; }

  // 
  bgSize(n) { return 'background-size: '+n+'px; '; }

  // 
  w(n) { return 'width: '+n+'px; '; }

  // 
  h(n) { return 'height: '+n+'px; '; }


  // 1.0
  chapter_1_0()
  {
    return (
      this.getHTMLTeg(
        [
          '1.0. Parameters of the "mathematics" mode.', 
          this.getClr('#3EC14D'), this.lt(0, 0), this.w(500), this.h(16)
        ], {nElm: "1-0-1"})+
      this.getHTMLTeg(
        [
          'Only the table of contents of the section is given here.', 
          this.lt(0, 5), this.w(900), this.h(16)
        ], {nElm: "1-0-2"})
    );
  }

  // 1.1
  chapter_1_1()
  {
    return (
      this.getHTMLTeg(
        [
          '1.1. What is an operand?', 
          this.getClr('#3EC14D'), this.lt(0, 0), this.w(500), this.h(16)
        ], {nElm: "1-1-1"})+
      this.getHTMLTeg(
        [
          'An operand is a value that is located to the left or right of the operator.', 
          this.lt(0, 5), this.w(900), this.h(16)
        ], {nElm: "1-1-2"})+
      this.getHTMLTeg(
        [
          'For example', 
          this.lt(0, 10), this.w(500), this.h(16)
        ], {nElm: "1-1-3"})+
      this.getHTMLTeg(
        [
          '1 + 2', 
          this.lt(0, 15), this.w(500), this.h(16)
        ], {nElm: "1-1-4"})+
      this.getHTMLTeg(
        [
          'Here 1 and 2 are operands, and the <b>PLUS</b> sign (+) is an operator.', 
          this.lt(0, 20), this.w(900), this.h(16)
        ], {nElm: "1-1-5"})
    );
  }

  // 1.2
  chapter_1_2()
  {
    return (
      this.getHTMLTeg(
        [
          '1.2. How do I adjust the length of the operand?', 
          this.getClr('#3EC14D'), this.lt(0, 0), this.w(500), this.h(16)
        ], {nElm: "1-2-1"})+
      this.getHTMLTeg(
        [
          'It\'s very simple!', 
          this.lt(0, 5), this.w(500), this.h(16)
        ], {nElm: "1-2-2"})+
      this.getHTMLTeg(
        [
          'In the window that opens, find the section "Operand length", four blocks will be shown below, as well as two buttons "plus" and "minus".', 
          this.lt(0, 10), this.w(900), this.h(32)
        ], {nElm: "1-2-3"})+
      this.getHTMLTeg(
        [
          this.bgImg('./GUI/documentationForGame/math/'+LANGUAGE+'/length_oprs.png'), 
          this.w(220), 
          this.h(190), 
          this.bgSize(300),
          this.lt(50, 35)
        ], {type: "img", nElm: "1-2-4"})+
      this.getHTMLTeg(
        [
          '<b>And so the most important thing here is to understand what each block is responsible for!</b>', 
          this.lt(50, 68), this.w(705), this.h(16), this.getClr("#EE3131")
        ], {nElm: "1-2-5"})+
      this.getHTMLTeg(
        [
          'The top line is responsible for the maximum length of the first and second operands.', 
          this.lt(0, 75), this.w(900), this.h(16)
        ], {nElm: "1-2-6"})+
      this.getHTMLTeg(
        [
          this.bgImg('./GUI/documentationForGame/math/'+LANGUAGE+'/max_value.png'), 
          this.w(350), 
          this.h(130), 
          this.bgSize(350),
          this.lt(50, 111)
        ], {type: "img", nElm: "1-2-7"})+
      this.getHTMLTeg(
        [
          'The bottom line is responsible for the minimum length of the first and second operands.', 
          this.lt(0, 117), this.w(900), this.h(16)
        ], {nElm: "1-2-8"})+
      this.getHTMLTeg(
        [
          this.bgImg('./GUI/documentationForGame/math/'+LANGUAGE+'/min_value.png'), 
          this.w(350), 
          this.h(130), 
          this.bgSize(350),
          this.lt(50, 166)
        ], {type: "img", nElm: "1-2-9"})+
      this.getHTMLTeg(
        [
          'To adjust the length, you need to click on one of the four blocks with the mouse cursor, after which '+
          'the block frame will turn green (i.e. this means that the block is selected and ready to be configured).', 
          this.lt(0, 164.5), this.w(900), this.h(32)
        ], {nElm: "1-2-10"})+
      this.getHTMLTeg(
        [
          'For the record: When you click on the blocks, the buttons at the bottom (i.e. "plus" and "minus") they '+
          'adjust to this block (i.e. they are either hidden or displayed).', 
          this.lt(0, 174.5), this.w(900), this.h(32), this.getClr('#3EC14D')
        ], {nElm: "1-2-11"})+
      this.getHTMLTeg(
        [
          'After the block is selected, you can adjust the length of the operand using the buttons located below.', 
          this.lt(0, 179.5), this.w(900), this.h(16)
        ], {nElm: "1-2-12"})+
      this.getHTMLTeg(
        [
          '<b>Attention: The maximum allowed length for an operand is 6!</b>', 
          this.lt(0, 185), this.w(600), this.h(16), this.getClr('#EE3131')
        ], {nElm: "1-2-13"})+
      this.getHTMLTeg(
        [
          '<b>Attention: The minimum allowed length for an operand is 1!</b>', 
          this.lt(0, 189), this.w(900), this.h(16), this.getClr('#EE3131')
        ], {nElm: "1-2-14"})+
      this.getHTMLTeg(
        [
          '<b>It is important to understand: The minimum length cannot be greater than the maximum, and the '+
          'maximum length cannot be less than the minimum! For this reason, the "plus" and "minus" buttons will be hidden.</b>', 
          this.lt(0, 203), this.w(900), this.h(32), this.getClr('#EE3131')
        ], {nElm: "1-2-15"})+
      this.getHTMLTeg(
        [
          'If you want to return to the original settings, just click on the "Default" button.', 
          this.lt(50, 213), this.w(653), this.h(16)
        ], {nElm: "1-2-16"})+
      this.getHTMLTeg(['.', this.lt(0, 215), this.w(1), this.h(1), this.getClr('#262525')], {nElm: "1-2-17"})
    );
  }

  // 2.0
  chapter_2_0()
  {
    return (
      this.getHTMLTeg(
        [
          '2.0. \'The submenu\'.', 
          this.getClr('#3EC14D'), this.lt(0, 0), this.w(500), this.h(16)
        ], {nElm: "2-0-1"})+
      this.getHTMLTeg(
        [
          'Only the table of contents of the section is given here.', 
          this.lt(0, 5), this.w(500), this.h(16)
        ], {nElm: "2-0-2"}));
  }

  // 2.1
  chapter_2_1()
  {
    return (
      this.getHTMLTeg(
        [
          '2.1. What is a \'Submenu\'?', 
          this.getClr("#3EC14D"), this.lt(0, 0), this.w(500), this.h(16)
        ], {nElm: "2-1-1"})+
      this.getHTMLTeg(
        [
          'A \'submenu\' is a special user interface that contains links to other user interfaces.',
          this.lt(0, 5), this.w(900), this.h(16)
        ], {nElm: "2-1-2"})
    );
  }

  // 2.2
  chapter_2_2()
  {
    return (
      this.getHTMLTeg(
        [
          '2.2. What opportunities does the \'Submenu\' provide me?', 
          this.getClr("#3EC14D"), this.lt(0, 0), this.w(500), this.h(16)
        ], {nElm: "2-2-1"})+
      this.getHTMLTeg(
        [
          'Here is a list of all available features:', 
          this.lt(0, 5), this.w(900), this.h(16)
        ], {nElm: "2-2-2"})+
      this.getHTMLTeg(
        [
          '1) Configure the interface language;', 
          this.lt(0, 10), this.w(900), this.h(16)
        ], {nElm: "2-2-3"})+
      this.getHTMLTeg(
        [
          '2) Select the input method (i.e. control);', 
          this.lt(0, 14), this.w(900), this.h(16)
        ], {nElm: "2-2-4"})+
      this.getHTMLTeg(
        [
          '3) Return to the modes;', 
          this.lt(0, 18), this.w(900), this.h(16)
        ], {nElm: "2-2-5"})+
      this.getHTMLTeg(
        [
          '4) Show the rules of the game;', 
          this.lt(0, 22), this.w(900), this.h(16)
        ], {nElm: "2-2-6"})+
      this.getHTMLTeg(
        [
          '5) Change the theme (i.e. change the background color and choose a different avatar for obstacles);', 
          this.lt(0, 26), this.w(900), this.h(16)
        ], {nElm: "2-2-7"})+
      this.getHTMLTeg(
        [
          '6) Adjust the snake parameters;', 
          this.lt(0, 30), this.w(900), this.h(16)
        ], {nElm: "2-2-8"})+
      this.getHTMLTeg(
        [
          '7) Adjust the food parameters for the snake;', 
          this.lt(0, 34), this.w(900), this.h(16)
        ], {nElm: "2-2-9"})+
      this.getHTMLTeg(
        [
          '8) Change the design of the field (i.e. not available in all modes);', 
          this.lt(0, 38), this.w(900), this.h(16)
        ], {nElm: "2-2-10"})+
      this.getHTMLTeg(
        [
          '9) Adjust the settings for the current mode (i.e. not available in all modes).', 
          this.lt(0, 42), this.w(900), this.h(16)
        ], {nElm: "2-2-11"})+
      this.getHTMLTeg(
        [
          'As well as additional features:', 
          this.lt(0, 49), this.w(900), this.h(16)
        ], {nElm: "2-2-12"})+
      this.getHTMLTeg(
        [
          '1) Pause the game;', 
          this.lt(0, 54), this.w(500), this.h(16)
        ], {nElm: "2-2-13"})+
      this.getHTMLTeg(
        [
          '2) Open the \'Submenu\' right at the time when the game is over (i.e. game over) and adjust the settings you need;', 
          this.lt(0, 58), this.w(900), this.h(16)
        ], {nElm: "2-2-14"})+
      this.getHTMLTeg(
        [
          '3) As well as the \'Submenu\' can be opened right during the calculation of the results, but this applies only to the \'Maze\' mode.', 
          this.lt(0, 64.2), this.w(900), this.h(32)
        ], {nElm: "2-2-15"})+
      this.getHTMLTeg(
        [
          '<b>Using the \'Submenu\' you can easily change the settings of anything you want without interrupting the current game session!</b>', 
          this.lt(50, 80), this.w(900), this.h(32)
        ], {nElm: "2-2-16"})
    );
  }

  // 2.3
  chapter_2_3()
  {
    return (
      this.getHTMLTeg(
        [
          '2.3. I opened the \'Submenu\' and decided(a) change the design of the field!', 
          this.getClr("#3EC14D"), this.lt(0, 0), this.w(600), this.h(16)
        ], {nElm: "2-3-1"})+
      this.getHTMLTeg(
        [
          'And so you decided to change the design of the field, right during the game or when the game was over (i.e. it was Game over). Right?', 
          this.lt(0, 6), this.w(900), this.h(32)
        ], {nElm: "2-3-2"})+
      this.getHTMLTeg(
        [
          'Please note that when you change the design of the field, everything will be cleared and created anew!', 
          this.lt(0, 16), this.w(900), this.h(16)
        ], {nElm: "2-3-3"})+
      this.getHTMLTeg(
        [
          'What does it mean?', 
          this.lt(0, 22), this.w(500), this.h(16)
        ], {nElm: "2-3-4"})+
      this.getHTMLTeg(
        [
          'This means that:', 
          this.lt(0, 28), this.w(500), this.h(16)
        ], {nElm: "2-3-5"})+
      this.getHTMLTeg(
        [
          '1) The current design will be erased and replaced with a new one;', 
          this.lt(0, 33), this.w(900), this.h(16)
        ], {nElm: "2-3-6"})+
      this.getHTMLTeg(
        [
          '2) The length of the snake\'s tail will return to its original length (i.e., as at the first start of the game);', 
          this.lt(0, 37), this.w(900), this.h(16)
        ], {nElm: "2-3-7"})+
      this.getHTMLTeg(
        [
          '3) Your current points will be reset.', 
          this.lt(0, 41), this.w(900), this.h(16)
        ], {nElm: "2-3-8"})
    );
  }

  // 2.4
  chapter_2_4()
  {
    return (
      this.getHTMLTeg(
        [
          '2.4. I opened the \'Submenu\' and decided(a) change the food parameters for the snake!', 
          this.getClr('#3EC14D'), this.lt(0, 0), this.w(900), this.h(16)
        ], {nElm: "2-4-1"})+
      this.getHTMLTeg(
        [
          'And so you decided to change the food parameters for the snake, right during the game or when the game was over '+
          '(i.e. the Game over came). Right?', 
          this.lt(0, 6), this.w(900), this.h(32)
        ], {nElm: "2-4-2"})+
      this.getHTMLTeg(
        [
          'Keep in mind that when you change the food parameters for the snake, all objects will have their avatar replaced, '+
          'as well as their current position on the field will be replaced with a new one!', 
          this.lt(0, 16), this.w(900), this.h(32)
        ], {nElm: "2-4-3"})
    );
  }

  // 2.5
  chapter_2_5()
  {
    return (
      this.getHTMLTeg(
        [
          '2.5. I opened the \'Submenu\' and decided(a) change the parameters for the current mode!', 
          this.getClr('#3EC14D'), this.lt(0, 0), this.w(900), this.h(16)
        ], {nElm: "2-5-1"})+
      this.getHTMLTeg(
        [
          'Attention: This feature is available only in two modes (i.e. "Words" and "Math")!', 
          this.getClr('#EE3131'), this.lt(0, 5), this.w(900), this.h(16)
        ], {nElm: "2-5-2"})+
      this.getHTMLTeg(
        [
          'Please note that when you change the parameters of the current mode, the current example or word will be '+
          'erased and replaced with a new one, and accordingly the answer will be different!', 
          this.lt(0, 11), this.w(900), this.h(32)
        ], {nElm: "2-5-3"})
    );
  }

  // 2.6
  chapter_2_6()
  {
    return (
      this.getHTMLTeg(
        [
          '2.6. Why doesn\'t my snake move when I closed the \'Submenu\'?', 
          this.getClr('#3EC14D'), this.lt(0, 0), this.w(600), this.h(16)
        ], {nElm: "2-6-1"})+
      this.getHTMLTeg(
        [
          'This is done on purpose!', 
          this.getClr('#EE3131'), this.lt(0, 5), this.w(500), this.h(16)
        ], {nElm: "2-6-2"})+
      this.getHTMLTeg(
        [
          'Imagine such a situation:', 
          this.lt(0, 11), this.w(500), this.h(16)
        ], {nElm: "2-6-3"})+
      this.getHTMLTeg(
        [
          '<i>You started the game, and then you wanted to change the snake\'s avatar and change the speed.</i>', 
          this.lt(0, 15), this.w(900), this.h(16)
        ], {nElm: "2-6-4"})+
      this.getHTMLTeg(
        [
          '<i>After all these actions, you return to the \'Submenu\' and realize that you have forgotten where the snake was '+
          'before! And as soon as you close the \'Submenu\', the snake will start moving, but you did not have time to react '+
          'and the snake collided with an obstacle and the game was over (i.e. Game over).</i>', 
          this.lt(0, 19.5), this.w(900), this.h(48)
        ], {nElm: "2-6-5"})+
      this.getHTMLTeg(
        [
          'For this reason, a condition has been added that stops the snake when the \'Submenu\' is open.', 
          this.lt(0, 33), this.w(900), this.h(16)
        ], {nElm: "2-6-6"})+
      this.getHTMLTeg(
        [
          'Accordingly, when you close the \'Submenu\' you will see that the snake will be waiting for your command to start moving.', 
          this.lt(0, 40), this.w(900), this.h(32)
        ], {nElm: "2-6-7"})+
      this.getHTMLTeg(
        [
          'To make the snake start moving, just click on the button with the direction you are interested in (i.e. it refers to the keys on the keyboard). '+
          'As for the mouse, hold down the left button and start moving the mouse in the direction you are interested in.', 
          this.lt(0, 52), this.w(900), this.h(48)
        ], {nElm: "2-6-8"})
    );
  }
}
