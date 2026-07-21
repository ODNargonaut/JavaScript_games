/* Содержит все страницы документации на ru к игре "SNAKE 2D" */


class DocumentPageRu
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

    let id = 'document-elm-ru-'+o.nElm;
    
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
          '1.0. Параметры режима "математика".', 
          this.getClr('#3EC14D'), this.w(280), this.h(16), this.lt(0, 0)
        ], {nElm: "1-0-1"})+
      this.getHTMLTeg(
        [
          'Здесь приведено только оглавление раздела.', 
          this.w(330), this.h(16), this.lt(0, 5)
        ], {nElm: "1-0-2"})
    );
  }

  // 1.1
  chapter_1_1()
  {
    return (
      this.getHTMLTeg(
        [
          '1.1. Что такое операнд?', 
          this.getClr('#3EC14D'), this.w(280), this.h(16), this.lt(0, 0)
        ], {nElm: "1-1-1"})+
      this.getHTMLTeg(
        [
          'Операнд - это значение, которое расположено слева или справа от оператора.', 
          this.lt(0, 5), this.w(800), this.h(16)
        ], {nElm: "1-1-2"})+
      this.getHTMLTeg(['Например', this.lt(0, 10), this.w(500), this.h(16)], {nElm: "1-1-3"})+
      this.getHTMLTeg(['1 + 2', this.lt(0, 15), this.w(500), this.h(16)], {nElm: "1-1-4"})+
      this.getHTMLTeg(
        [
          'Здесь 1 и 2 - это операнды, а знак <b>ПЛЮС</b> (+) - это оператор.', 
          this.lt(0, 20), this.w(500), this.h(16)
        ], {nElm: "1-1-5"})
    );
  }

  // 1.2
  chapter_1_2()
  {
    return (
      this.getHTMLTeg(
        [
          '1.2. Как настроить длину операнда?', 
          this.getClr('#3EC14D'), this.w(500), this.h(16), this.lt(0, 0)
        ], {nElm: "1-2-1"})+
      this.getHTMLTeg(['Все очень просто!', this.lt(0, 5), this.w(500), this.h(16)], {nElm: "1-2-2"})+
      this.getHTMLTeg(
        [
          'В открывшимся окне найдите раздел "Длина операнда", ниже будут показаны четыре блока, а также две кнопки "плюс" и "минус".', 
          this.lt(0, 10), this.w(900), this.h(32)
        ], {nElm: "1-2-3"})+
      this.getHTMLTeg(
        [
          this.bgImg('./GUI/documentationForGame/math/'+LANGUAGE+'/length_oprs.png'), 
          this.w(220), 
          this.h(190), 
          this.bgSize(300),
          this.lt(50, 35),
        ], {type: "img", nElm: "1-2-4"})+
      this.getHTMLTeg(
        [
          '<b>И так тут самое важное - это понять за что отвечает каждый блок!</b>', 
          this.lt(50, 68), this.getClr("#EE3131"), this.w(510), this.h(16)
        ], {nElm: "1-2-5"})+
      this.getHTMLTeg(
        [
          'Верхняя строка отвечает за максимальную длину первого и второго операндов.', 
          this.lt(0, 74), this.w(800), this.h(16)
        ], {nElm: "1-2-6"})+
      this.getHTMLTeg(
        [
          this.bgImg('./GUI/documentationForGame/math/'+LANGUAGE+'/max_value.png'), 
          this.w(350), 
          this.h(130), 
          this.bgSize(350),
          this.lt(50, 110),
        ], {type: "img", nElm: "1-2-7"})+
      this.getHTMLTeg(
        [
          'Нижняя строка отвечает за минимальную длину первого и второго операндов.', 
          this.lt(0, 117), this.w(600), this.h(16)
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
          'Чтобы отрегулировать длину, вам нужно щелкнуть курсором мыши по одному из четырех блоков, после чего '+
          'рамка блока станет зеленой (т.е. это означает, что блок выбран и готов к настройке).', 
          this.lt(0, 165), this.w(900), this.h(32)
        ], {nElm: "1-2-10"})+
      this.getHTMLTeg(
        [
          'На заметку: Когда вы нажимаете на блоки, кнопки внизу (т.е. "плюс" и "минус") подстраиваются под этот блок '+
          '(т.е. они либо скрываются, либо отображаются).', 
          this.lt(0, 175), this.getClr('#3EC14D'), this.w(900), this.h(32)
        ], {nElm: "1-2-11"})+
      this.getHTMLTeg(
        [
          'После того как блок выбран, вы можете настроить длину операнда с помощью кнопок, которые расположены ниже.', 
          this.lt(0, 180), this.w(900), this.h(16)
        ], {nElm: "1-2-12"})+
      this.getHTMLTeg(
        [
          '<b>Внимание: Максимально допустимая длина для операнда равна 6!</b>', 
          this.lt(0, 185), this.getClr('#EE3131'), this.w(900), this.h(16)
        ], {nElm: "1-2-13"})+
      this.getHTMLTeg(
        [
          '<b>Внимание: Минимально допустимая длина для операнда равна 1!</b>', 
          this.lt(0, 190), this.getClr('#EE3131'), this.w(900), this.h(16)
        ], {nElm: "1-2-14"})+
      this.getHTMLTeg(
        [
          '<b>Важно понять: Минимальная длина не может быть больше максимальной, а максимальная длина '+
          'не может быть меньше минимальной! По это причине кнопки "плюс" и "минус" будут скрываться.</b>', 
          this.lt(0, 201.5), this.getClr('#EE3131'), this.w(900), this.h(32)
        ], {nElm: "1-2-15"})+
      this.getHTMLTeg(
        [
          'Если вы желаете вернуть первоначальные настройки, просто нажмите на кнопку "По умолчанию".', 
          this.lt(50, 208), this.w(710), this.h(16)
        ], {nElm: "1-2-16"})+
      this.getHTMLTeg(['.', this.lt(0, 210), this.w(1), this.h(1), this.getClr('#262525')], {nElm: "1-2-17"})
    );
  }

  // 2.0
  chapter_2_0()
  {
    return (
      this.getHTMLTeg(
        [
          '2.0. \'Подменю\'.', 
          this.getClr('#3EC14D'), this.lt(0, 0), this.w(500), this.h(16)
        ], {nElm: "2-0-1"})+
      this.getHTMLTeg(
        [
          'Здесь приведено только оглавление раздела.', 
          this.lt(0, 5), this.w(500), this.h(16)
        ], {nElm: "2-0-2"}));
  }
  
  // 2.1
  chapter_2_1()
  {
    return (
      this.getHTMLTeg(
        [
          '2.1. Что такое \'Подменю\'?', 
          this.getClr("#3EC14D"), this.lt(0, 0), this.w(500), this.h(16)
        ], {nElm: "2-1-1"})+
      this.getHTMLTeg(
        [
          '\'Подменю\' - это специальный пользовательский интерфейс в котором содержаться ссылки '+
          'на другие пользовательские интерфейсы.',
          this.lt(0, 5), this.w(900), this.h(32)
        ], {nElm: "2-1-2"})
    );
  }

  // 2.2
  chapter_2_2()
  {
    return (
      this.getHTMLTeg(
        [
          '2.2. Какие возможности предоставляет мне \'Подменю\'?', 
          this.getClr("#3EC14D"), this.lt(0, 0), this.w(500), this.h(16)
        ], {nElm: "2-2-1"})+
      this.getHTMLTeg(
        [
          'Вот список всех доступных возможностей:', 
          this.lt(0, 5), this.w(500), this.h(16)
        ], {nElm: "2-2-2"})+
      this.getHTMLTeg(
        [
          '1) Настроить язык интерфейса;', 
          this.lt(0, 10), this.w(500), this.h(16)
        ], {nElm: "2-2-3"})+
      this.getHTMLTeg(
        [
          '2) Выбрать способ ввода (т.е. управление);', 
          this.lt(0, 14), this.w(500), this.h(16)
        ], {nElm: "2-2-4"})+
      this.getHTMLTeg(
        [
          '3) Вернуться к режимам;', 
          this.lt(0, 18), this.w(500), this.h(16)
        ], {nElm: "2-2-5"})+
      this.getHTMLTeg(
        [
          '4) Показать правила игры;', 
          this.lt(0, 22), this.w(500), this.h(16)
        ], {nElm: "2-2-6"})+
      this.getHTMLTeg(
        [
          '5) Сменить тему (т.е. поменять цвет заднего фона и выбрать другой аватар для препятствий);', 
          this.lt(0, 26), this.w(800), this.h(16)
        ], {nElm: "2-2-7"})+
      this.getHTMLTeg(
        [
          '6) Настроить параметры змейки;', 
          this.lt(0, 30), this.w(500), this.h(16)
        ], {nElm: "2-2-8"})+
      this.getHTMLTeg(
        [
          '7) Настроить параметры пищи для змейки;', 
          this.lt(0, 34), this.w(500), this.h(16)
        ], {nElm: "2-2-9"})+
      this.getHTMLTeg(
        [
          '8) Поменять оформление поля (т.е. доступно не во всех режимах);', 
          this.lt(0, 38), this.w(800), this.h(16)
        ], {nElm: "2-2-10"})+
      this.getHTMLTeg(
        [
          '9) Настроить параметры для текущего режима  (т.е. доступно не во всех режимах).', 
          this.lt(0, 42), this.w(800), this.h(16)
        ], {nElm: "2-2-11"})+
      this.getHTMLTeg(
        [
          'А также дополнительные возможности:', 
          this.lt(0, 48), this.w(500), this.h(16)
        ], {nElm: "2-2-12"})+
      this.getHTMLTeg(
        [
          '1) Поставить игру на паузу;', 
          this.lt(0, 53), this.w(500), this.h(16)
        ], {nElm: "2-2-13"})+
      this.getHTMLTeg(
        [
          '2) Открыте \'Подменю\' прямо в тот момент, когда игра закончится (т.е. game over) и отрегулировать '+
          'нужные вам настройки;', 
          this.lt(0, 57), this.w(900), this.h(32)
        ], {nElm: "2-2-14"})+
      this.getHTMLTeg(
        [
          '3) А также \'Подменю\' можно открыть прямо во время подсчета результатов, но это относится только для режима \'Лабиринт\'.', 
          this.lt(0, 61.1), this.w(900), this.h(32)
        ], {nElm: "2-2-15"})+
      this.getHTMLTeg(
        [
          '<b>С помощью \'Подменю\' вы сможете легко менять настройки всего чего захотите, не прерывая текущую игровую сессию!</b>', 
          this.lt(50, 83), this.w(870), this.h(16)
        ], {nElm: "2-2-16"})
    );
  }

  // 2.3
  chapter_2_3()
  {
    return (
      this.getHTMLTeg(
        [
          '2.3. Я открыл(а) \'Подменю\' и решил(а) поменять оформление поля!', 
          this.getClr("#3EC14D"), this.lt(0, 0), this.w(500), this.h(16)
        ], {nElm: "2-3-1"})+
      this.getHTMLTeg(
        [
          'И так вы решили поменять оформление поля, прямо во время игры или, когда игра была '+
          'окончена (т.е. наступил момент окончания игры). Верно?', 
          this.lt(0, 5), this.w(900), this.h(32)
        ], {nElm: "2-3-2"})+
      this.getHTMLTeg(
        [
          'Учтите, когда вы меняете оформление поля, то все будет очищено и создано заново!', 
          this.lt(0, 15), this.w(900), this.h(16)
        ], {nElm: "2-3-3"})+
      this.getHTMLTeg(
        [
          'Что это значит?', 
          this.lt(0, 21), this.w(500), this.h(16)
        ], {nElm: "2-3-4"})+
      this.getHTMLTeg(
        [
          'Это значит, что:', 
          this.lt(0, 27), this.w(500), this.h(16)
        ], {nElm: "2-3-5"})+
      this.getHTMLTeg(
        [
          '1) Текущее оформление будет стерто и заменено на новое;', 
          this.lt(0, 32), this.w(500), this.h(16)
        ], {nElm: "2-3-6"})+
      this.getHTMLTeg(
        [
          '2) Длина хвоста змейки вернется в первоначальную длину (т.е. как при первом старте игры);', 
          this.lt(0, 36), this.w(900), this.h(16)
        ], {nElm: "2-3-7"})+
      this.getHTMLTeg(
        [
          '3) Ваш текущий счет будет сброшен.', 
          this.lt(0, 40), this.w(500), this.h(16)
        ], {nElm: "2-3-8"})
    );
  }

  // 2.4
  chapter_2_4()
  {
    return (
      this.getHTMLTeg(
        [
          '2.4. Я открыл(а) \'Подменю\' и решил(а) поменять параметры еды для змейки!', 
          this.getClr('#3EC14D'), this.lt(0, 0), this.w(600), this.h(16)
        ], {nElm: "2-4-1"})+
      this.getHTMLTeg(
        [
          'И так вы решили поменять параметры еды для змейки, прямо во время игры или, когда игра была '+
          'окончена (т.е. наступил момент окончания игры). Верно?', 
          this.lt(0, 5), this.w(900), this.h(32)
        ], {nElm: "2-4-2"})+
      this.getHTMLTeg(
        [
          'Учтите, когда вы меняете параметры еды для змейки, то у всех объектов будет заменен аватар, а '+
          'также их текущая позиция на поле будет заменена на новую!', 
          this.lt(0, 15), this.w(900), this.h(32)
        ], {nElm: "2-4-3"})
    );
  }

  // 2.5
  chapter_2_5()
  {
    return (
      this.getHTMLTeg(
        [
          '2.5. Я открыл(а) \'Подменю\' и решил(а) поменять параметры для текущего режима!', 
          this.getClr('#3EC14D'), this.lt(0, 0), this.w(650), this.h(16)
        ], {nElm: "2-5-1"})+
      this.getHTMLTeg(
        [
          'Внимание: Эта возможность доступна только у двух режимов (т.е. "Слова" и "Математика")!', 
          this.getClr('#EE3131'), this.lt(0, 5), this.w(900), this.h(16)
        ], {nElm: "2-5-2"})+
      this.getHTMLTeg(
        [
          'Учтите, когда вы меняете параметры у текущего режима, то текущий пример или слово будет стерто и заменено на новое '+
          'и соответственно ответ будет уже другой!', 
          this.lt(0, 12), this.w(900), this.h(32)
        ], {nElm: "2-5-3"})
    );
  }

  // 2.6
  chapter_2_6()
  {
    return (
      this.getHTMLTeg(
        [
          '2.6. Почему моя змейка не двигается, когда я закрыл(а) \'Подменю\'?', 
          this.getClr('#3EC14D'), this.lt(0, 0), this.w(600), this.h(16)
        ], {nElm: "2-6-1"})+
      this.getHTMLTeg(
        [
          'Это сделано специально!', 
          this.getClr('#EE3131'), this.lt(0, 5), this.w(500), this.h(16)
        ], {nElm: "2-6-2"})+
      this.getHTMLTeg(
        [
          'Представьте себе такую ситуацию:', 
          this.lt(0, 12), this.w(500), this.h(16)
        ], {nElm: "2-6-3"})+
      this.getHTMLTeg(
        [
          '<i>Вы начали игру, а после вам захотелось поменять аватар змейки и изменить скорость.</i>', 
          this.lt(0, 16), this.w(900), this.h(16)
        ], {nElm: "2-6-4"})+
      this.getHTMLTeg(
        [
          '<i>После всех этих действий вы возвращаетесь в \'Подменю\' и понимаете, что забыли, где раньше была змея! И как '+
          'только вы закроете \'Подменю\', змея начнет двигаться, но у вас не было времени среагировать, и змея столкнулась с '+
          'препятствием, и игра была окончена (т.е. Game over).</i>', 
          this.lt(0, 20.5), this.w(900), this.h(48)
        ], {nElm: "2-6-5"})+
      this.getHTMLTeg(
        [
          'По этом причине было добавлено условие, которое останавливает змейку, когда \'Подменю\' открыто.', 
          this.lt(0, 35), this.w(900), this.h(16)
        ], {nElm: "2-6-6"})+
      this.getHTMLTeg(
        [
          'Соответственно, когда вы закроете \'Подменю\' то увидите, что змейка будет ждать вашей команды, чтобы начать движение.', 
          this.lt(0, 42), this.w(900), this.h(32)
        ], {nElm: "2-6-7"})+
      this.getHTMLTeg(
        [
          'Чтобы заставить змейку начать двигаться, просто нажмите на кнопку с интересующим вас направлением (т.е. это относится к клавишам на клавиатуре). '+
          'А что касается мыши, то удерживайте нажатой левую кнопку и начинайте перемещать мышь в интересующем вас направлении.', 
          this.lt(0, 54), this.w(900), this.h(48)
        ], {nElm: "2-6-8"})
    );
  }
}
