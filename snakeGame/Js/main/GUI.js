/* Данный класс отвечает за GUI */


class GUI
{
  // Запомнить какой GUI был отображен
  display = 
  {
    current: {d: "", b: false, n: -1},
    list:
    {
      "initUser": false,
      "warningForUser": false,
      "documentation": false,
      "underMenu": false,
      "mainGUI": false,
      "language": false,
      "settingJestik": false,
      "modes": false,
      "descriptionForModes": false,
      "decorationField": false,
      "topic": false,
      "settingsSnake": false,
      "settingsFood": false,
      "mathematics": false,
      "words": false,
      "rulesOfGame": false,
      "levelsForMaze": false,
      "gameOverForMaze": false,
      "gameOverForWM": false,
      "gameOverForOther": false,
      "countingRelustsForMaze": false,
      "canvas": false
    },
    key: 
    [
      "language", "settingJestik", "modes", "levelsForMaze", "mathematics", "words", "decorationField", 
      "topic", "settingsSnake", "settingsFood", "rulesOfGame" 
    ]
  };

  // Первая заглавная буква
  firstUpperCase = (str) => { return str[0].toUpperCase() + str.slice(1); };

  // Рекламный блок с вознаграждением
  advRewardActv = false;

  // Подсказка
  tooltip = 
  {
    advertisement: {"ru": "доступно после рекламы", "en": "available after the advertisement"}
  };

  // Настройки языка
  settingsLanguage = 
  {
    btnSelected: {"ru": "русский", "en": "english"}
  };

  // Настойки управления
  settingsJestik = 
  {
    title: {"ru": {t:"управление"}, "en": {t:"management"}},
    selectedInput: 
    {
      title: {"ru": {t:"выберите способ ввода"}, "en": {t:"select the input method"}},
      pause: 
      {
        title: {"ru": {t:"пауза"}, "en": {t:"pause"}},
        keyT: {"ru": {t:"пробел"}, "en": {t:"space"}}
      },
      mauseImgT: {"ru": {t:"зажать"}, "en": {t:"pinch"}},
      details:
      {
        warning: 
        {
          idBl: "blNoteWarning-1",
          "ru": {t: "внимание: курсор должен находиться в пределах холста!", w: 360}, 
          "en": {t: "attention: the cursor must be within the canvas!", w: 281}
        },
        note: 
        {
          idBl: "blNoteWarning-2",
          "ru": {t: "для комфортной игры, двигайте курсор строго по прямой линии независимо от направления.", w: 610}, 
          "en": {t: "for a comfortable game, move the cursor strictly in a straight line regardless of the direction.", w: 565}
        }
      },
      current: {n: 2, s: "arrows"}
    },
    btnSelected: {"ru": {t:"подтвердить"}, "en": {t:"confirm"}}
  };

  // Наименования для режимов и описания
  modes = 
  {
    total: 10,
    title: {"ru": "режимы", "en": "modes"},
    allModes: 
    [
      "classic", "infinitely", "jumpFood", "feedMe", "words", "mathematics", 
      "reverseMove", "narrowingOfZone", "maze", "portals"
    ],
    list:
    {
      "ru":
      [
        {title: "классика", w: 72},      {title: "бесконечный", w: 103},  {title: "прыг скок еда", w: 110}, 
        {title: "накорми меня", w: 111}, {title: "слова", w: 46},         {title: "математика", w: 93},
        {title: "обратный ход", w: 108}, {title: "сужение зоны", w: 110}, {title: "лабиринт", w: 75},
        {title: "порталы", w: 68}
      ],
      "en":
      [
        {title: "classic", w: 52},       {title: "infinitely", w: 62},         {title: "jump food", w: 78}, 
        {title: "feed me", w: 62},       {title: "words", w: 46},              {title: "mathematics", w: 94}, 
        {title: "reverse move", w: 102}, {title: "narrowing of zone", w: 132}, {title: "maze", w: 40}, 
        {title: "portals", w: 52},
      ],
    },
    descript: new Map(
    [
      [
        "classic",
        {
          "ru": 
          {
            title: "классика", wT: 80, wBl: 135, 
            descr: 
            "вам предстоит управлять змейкой, перемещаясь по полю и поедая еду, чтобы расти. Однако, будьте осторожны, Вам нужно избегать препятствий и границ холста, чтобы не проиграть. Покажите свою ловкость и стратегическое мышление, чтобы достичь максимального счета и стать настоящим мастером змейки!"
          },
          "en": 
          {
            title: "classic", wT: 60, wBl: 135, 
            descr: 
            "you have to control the snake, moving around the field and eating food to grow. However, be careful, you need to avoid obstacles and canvas borders so as not to lose. Show your dexterity and strategic thinking to reach the maximum score and become a real snake master!"
          }
        }
      ],
      [
        "infinitely",
        {
          "ru": 
          {
            title: "бесконечный", wT: 115, wBl: 160, 
            descr: 
            "в этом режиме змейка после того, как она дойдет до границы холста, появляется на противоположной стороне и продолжает игру."
          },
          "en": 
          {
            title: "infinitely", wT: 70, wBl: 135, 
            descr: 
            "in this mode, the snake, after it reaches the border of the canvas, appears on the opposite side and continues the game."
          }
        }
      ],
      [
        "jumpFood",
        {
          "ru": 
          {
            title: "прыг скок еда", wT: 125, wBl: 175, 
            descr: 
            "вам предстоит управлять змейкой, которая должна съесть перемещающуюся еду. Однако, в этом режиме еда не только перемещается, но и отскакивает от границ игрового поля и от хвоста змейки, создавая дополнительные вызовы и препятствия. Вам придется быстро реагировать и точно попадать на еду, чтобы набрать максимальное количество очков."
          }, 
          "en": 
          {
            title: "jump food", wT: 88, wBl: 135, 
            descr: 
            "you have to control a snake that has to eat moving food. However, in this mode, the food not only moves, but also bounces off the boundaries of the playing field and off the tail of the snake, creating additional challenges and obstacles. You will have to react quickly and accurately hit the food to score the maximum number of points."
          }
        }
      ],
      [
        "feedMe", 
        {
          "ru": 
          {
            title: "накорми меня", wT: 125, wBl: 175, 
            descr: 
            "ты будешь управлять змейкой, которая неутолимо голодна. Твоя задача - поедать еду, которая появляется на поле, чтобы удерживать змейку в живых и увеличивать ее размер. Но будь осторожен, ведь на пути могут встретиться препятствия, которые нужно избегать, чтобы не проиграть. Готов накормить свою змейку до максимального размера и побить рекорд?"
          }, 
          "en": 
          {
            title: "feed me", wT: 70, wBl: 135, 
            descr: 
            "you will control a snake that is insatiably hungry. Your task is to eat the food that appears on the field to keep the snake alive and increase its size. But be careful, because there may be obstacles on the way that you need to avoid in order not to lose. Are you ready to feed your snake to the maximum size and beat the record?"
          }
        }
      ],
      [
        "words", 
        {
          "ru": 
          {
            title: "слова", wT: 53, wBl: 135, 
            descr: 
            "вам предстоит управлять змейкой, которая должна съесть буквы в определенном порядке, чтобы расшифровать различные слова. Проявите свою ловкость и стратегическое мышление, чтобы правильно выбирать путь и собирать буквы, чтобы успешно разгадать все слова."
          }, 
          "en": 
          {
            title: "words", wT: 52, wBl: 135, 
            descr: 
            "you have to control a snake that has to eat letters in a certain order to decipher various words. Show your dexterity and strategic thinking to choose the right path and collect letters to successfully solve all the words."
          }
        }
      ],
      [
        "mathematics", 
        {
          "ru": 
          {
            title: "математика", wT: 106, wBl: 155, 
            descr: 
            "тебе нужно решать математические примеры, собирая цифры по порядку, чтобы дать правильный ответ. Управляй змейкой и развивай свои навыки в математике!"
          }, 
          "en": 
          {
            title: "mathematics", wT: 106, wBl: 155, 
            descr: 
            "you need to solve mathematical examples by collecting the numbers in order to give the correct answer. Control the snake and develop your math skills!"
          }
        }
      ],
      [
        "reverseMove", 
        {
          "ru": 
          {
            title: "обратный ход", wT: 122, wBl: 170, 
            descr: 
            "тебе предстоит управлять змейкой, используя зеркальные команды. Нажимая влево, она будет двигаться вправо, а нажимая вверх, она будет двигаться вниз. Тебе придется умело маневрировать и думать наоборот, чтобы успешно управлять змейкой и достичь цели."
          }, 
          "en": 
          {
            title: "reverse move", wT: 115, wBl: 165, 
            descr: 
            "you have to control the snake using mirror commands. By pressing left, she will move to the right, and by pressing up, she will move down. You will have to maneuver skillfully and think the other way around in order to successfully control the snake and achieve the goal."
          }
        }
      ],
      [
        "narrowingOfZone", 
        {
          "ru": 
          {
            title: "сужение зоны", wT: 125, wBl: 170, 
            descr: 
            "в этом режиме змейка сталкивается с новым вызовом: каждый раз, когда она съедает пищу, вокруг нее появляются препятствия в разных позициях. Змейке придется избегать этих препятствий и продолжать собирать пищу, чтобы выжить и набрать максимальное количество очков. Будь внимателен и стратегичен, чтобы не попасть в ловушку и достичь новых высот в игре змейка!"
          }, 
          "en": 
          {
            title: "narrowing of zone", wT: 149, wBl: 195, 
            descr: 
            "in this mode, the snake faces a new challenge: every time it eats food, obstacles appear around it in different positions. The snake will have to avoid these obstacles and keep collecting food to survive and score maximum points. Be careful and strategic not to fall into a trap and reach new heights in the snake game!"
          }
        }
      ],
      [
        "maze", 
        {
          "ru": 
          {
            title: "лабиринт", wT: 85, wBl: 140, 
            descr: 
            "вам предстоит вступить в захватывающее приключение, где каждый уровень представляет собой сложный лабиринт. Ваша главная задача - найти самый короткий путь к выходу, при этом избегая препятствия, которые могут замедлить ваш прогресс. Время играет важную роль, поскольку вы должны проходить уровни как можно быстрее, чтобы достичь высоких результатов."
          }, 
          "en": 
          {
            title: "maze", wT: 45, wBl: 135, 
            descr: 
            "you will embark on an exciting adventure where each level is a complex maze. Your main task is to find the shortest way to the exit, while avoiding obstacles that can slow down your progress. Time plays an important role as you have to complete the levels as fast as possible to achieve high scores."
          }
        }
      ],
      [
        "portals", 
        {
          "ru": 
          {
            title: "порталы", wT: 76, wBl: 135, 
            descr: 
            "змейка перемещается по полю, съедая пищу, но вместо того, чтобы просто двигаться вперед, она теперь перемещается в позицию, где находится соответствующая пара для этой пищи. Однако змейка должна быть осторожна и избегать своего хвоста и других препятствий, чтобы не потерять игру. В этом режиме вы должены принимать стратегические решения и использовать порталы, чтобы максимизировать свой счет и достичь новых высот."
          }, 
          "en": 
          {
            title: "portals", wT: 59, wBl: 135, 
            descr: 
            "the snake moves around the field eating food, but instead of just moving forward, it now moves to the position where the appropriate pair for that food is located. However, the snake must be careful and avoid its tail and other obstacles so as not to lose the game. In this mode, you have to make strategic decisions and use portals to maximize your score and reach new heights."
          }
        }
      ],
    ]),
    btnSelected: {"ru": "выбрать", "en": "selected"}
  };

  // Содержит оформление поля для конкретных режимов
  decorationField = 
  {
    title: {"ru": "оформление поля", "en": "field decoration"},
    current: {dt: null, n: 0},
    dir: "./GUI/decorField/img/",
    arr: new Map(
    [
      ["classic",     {img: "commonFields/commonFields-",       format: ".png", total: 37}],  // {img: "classicField/classicField-",         format: ".png", total: 10}
      ["infinitely",  {img: "infinitelyField/infinitelyField-", format: ".png", total: 10}],  // 
      ["feedMe",      {img: "commonFields/commonFields-",       format: ".png", total: 37}],  // {img: "feedMeField/feedMeField-",           format: ".png", total: 10}
      ["reverseMove", {img: "commonFields/commonFields-",       format: ".png", total: 37}],  // {img: "reverseMoveField/reverseMoveField-", format: ".png", total: 10}
      ["portals",     {img: "commonFields/commonFields-",       format: ".png", total: 37}]   // {img: "portalsField/portalsField-",         format: ".png", total: 10}
    ]),
    btnSelected: {"ru": "выбрать", "en": "selected"}
  }

  // Тема
  topic = 
  {
    title: {"ru": "тема", "en": "topic"},
    chapter: 
    {
      selected: "random",  // для первого запуска, если не был выбран ни один раздел.
      "obst": 
      {
        title: {"ru": "препятствия", "en": "obstacles"},
        quantityShow: 0,        // Сколько сейчас отображено.
        portion: 80,            // Сколько необходимо создать - за раз.
        NPortion: 0,            // Считаем кол-во порций
        lowerBound: 1250,        // По достижении это границы, необходимо создать еще порцию.
        pastPos: {x: 0, y: 0},  // Позиция последнего элемента из порции
        py: 0,                  // Смещение блока по оси Y (в процентах)
        bgValue: 
        {
          N: 409, 
          current: "url('"+obst.wallImg+"')", 
          type: "image"
        },
        dir: "./img/obst/sprites/",
        img: "wall-",
        format: ".png",
        totalImg: obst.history.totalImg
      },
      "background": 
      {
        title: {"ru": "фон", "en": "background"},
        quantityShow: 0,        // Сколько сейчас отображено.
        portion: 80,            // Сколько необходимо создать - за раз.
        NPortion: 0,            // Считаем кол-во порций
        lowerBound: 1250,        // По достижении это границы, необходимо создать еще порцию.
        pastPos: {x: 0, y: 0},  // Позиция последнего элемента из порции
        py: 0,                  // Смещение блока по оси Y (в процентах)
        bgValue: 
        {
          N: ctxData.history.listOpn[0], 
          current: ctxData.history.currentClr,
          type: "color"
        }
      },
      random: { title: {"ru": "случайная", "en": "random"} },
      previsCh: "random"
    },
    note: 
    {
      idBl: "blNoteClr",
      "ru": {t: "cначала выберите раздел!", w: 170}, 
      "en": {t: "first, select a section!", w: 130}
    },
    notification: 
    {
      idBl: "blTNotification",
      "ru": {t: "чтобы разблокировать, нажмите на замок", w: 245}, 
      "en": {t: "to unlock, click on the lock", w: 145}
    },
    btnSelected: {"ru": "выбрать", "en": "selected"}
  };

  // Настройки змейки
  settingsSnake = 
  {
    title: {"ru": {t:"параметры змейки"}, "en": {t:"snake parameters"}},
    length: 
    {
      title: {"ru": {t:"длина"}, "en": {t:"length"}},
      current: 0,
      max: 2,
      standard: 3
    },
    design: 
    {
      title: {"ru": {t:"дизайн"}, "en": {t:"design"}},
      current: 0,
      selectedBlN: 0,
      avatar: 
      {
        dir: "./img/snake/", 
        head: "head/head-", 
        body: "body/body-", 
        corner: "corner/corner-", 
        tail: "tail/tail-", 
        full: "full/avatar-",
        padlock: "./GUI/modes/maze/padlock2.png",
        format: ".png", 
        total: snake.history.design.total
      },
      quantityShow: 0,        // Сколько сейчас отображено.
      portion: 10,            // Сколько необходимо создать - за раз.
      NPortion: 0,            // Считаем кол-во порций
      lowerBound: 900,        // По достижении это границы, необходимо создать еще порцию.
      pastPos: {x: 0, y: 0},  // Позиция последнего элемента из порции
    },
    speed: 
    {
      title: {"ru": {t:"скорость"}, "en": {t:"speed"}},
      second: {"ru": {t:"/сек"}, "en": {t:"/sec"}},
      noteWarning: 
      {
        idBl: "blNoteWarningSpeedSnake",
        "ru": {t:"внимание: чем выше скорость, тем медленнее будет ползти змейка!", w:430}, 
        "en": {t:"attention: the higher the speed, the slower the snake will crawl!", w:370}
      },
      min: 10, max: 500
    },
    btnSelected: {"ru": {t:"выбрать"}, "en": {t:"selected"}}
  };

  // Настройки еды для змейки
  settingsFood = 
  {
    title: {"ru": {t: "параметры еды"}, "en": {t: "food parameters"}},
    design: 
    {
      title: 
      {
        id: "blTitleDesingFood",
        "ru": {t: "что змейка будет кушать?", w: 202}, 
        "en": {t: "what will the snake eat?", w: 175}
      },
      current: 0,
      selectedBlN: 0,
      avatar: 
      {
        dir: "./img/food/", 
        food: "food-",
        padlock: "./GUI/modes/maze/padlock2.png",
        format: ".png", 
        total: food.history.design.total
      },
      quantityShow: 0,        // Сколько сейчас отображено.
      portion: 10,            // Сколько необходимо создать - за раз.
      NPortion: 0,            // Считаем кол-во порций
      lowerBound: 900,        // По достижении это границы, необходимо создать еще порцию.
      pastPos: {x: 0, y: 0},  // Позиция последнего элемента из порции
    },
    quantity: 
    {
      title: 
      {
        id: "blTitleSetFoodQuantity", 
        "ru": {t: "сколько создавать?", w: 150}, 
        "en": {t: "how much to create?", w: 148}
      },
      max: 5
    },
    btnSelected: {"ru": {t: "выбрать"}, "en": {t: "selected"}}
  };

  // Настройки режима mathematics
  settingsModeMathematics = 
  {
    title: {"ru": {t: "параметры режима"}, "en": {t: "mode parameters"}},
    selectedValueID: "",
    previsBlValueID: "blBtnByDefaultSettingsModeMath",
    operand: 
    {
      title: 
      {
        idBl: "blTitleLength",
        "ru": {t: "длина операнда", w: 120}, 
        "en": {t: "operand length", w: 105}
      },
      selectedOperand: {opr: "", ch: ""},
      "one": 
      {
        title: {"ru": {t: "первый"}, "en": {t: "first"}},
        whole: // целая часть
        {
          title: {"ru": {t: "целое"}, "en": {t: "whole"}},
        }
      },
      "two": 
      {
        title: {"ru": {t: "второй"}, "en": {t: "second"}},
        whole: // целая часть
        { 
          title: {"ru": {t: "целое"}, "en": {t: "whole"}},
        }
      },
      Tmax: {"ru": "макс", "en": "max"},
      Tmin: {"ru": "мин", "en": "min"},
      length: 0
    },
    operationSign: 
    {
      title: 
      {
        idBl: "blTitleOperationSign",
        "ru": {t: "знак операции", w: 108}, 
        "en": {t: "operation sign", w: 99}
      },
      selectedBl: false,
      markSigns: 
      [
        {id: "blsignMinus", b: false}, 
        {id: "blsignMultiply", b: false}, 
        {id: "blsignPlus", b: false}
      ],
      random: 
      {
        title: {"ru": {t: "случайный"}, "en": {t: "random"}}
      },
      note: 
      {
        title: 
        {
          idBl: "blNote",
          "ru": {t: "вы можете выбрать несколько!", w: 200}, 
          "en": {t: "you can choose several!", w: 200}
        }
      }
    },
    valuesByDefault: 
    {
      title: 
        {
          idBl: "blTBtnByDefaultModeMath",
          "ru": {t: "по умолчанию", w: 100}, 
          "en": {t: "by default", w: 65}
        }
    },
    btnSelected: {"ru": {t: "выбрать"}, "en": {t: "selected"}},
    helpDoc:
    {
      idBl: "blShowKeyHDocument",
      "ru": {t: "помощь", w: 100}, 
      "en": {t: "help", w: 70}
    }
  };

  // Настройки режима words
  settingsModeWords = 
  {
    title: {"ru": "параметры режима", "en": "mode parameters"},
    selectedTopic: 
    {
      title: {"ru": "выберите тему", "en": "choose a theme"},
      current: {n: -1, l: ""},
      previsBl: "blTopic-",
      randomTitle: {"ru": "любая", "en": "random"},
      portion: 36,             // Сколько необходимо создать - за раз.
      lowerBound: 743,         // По достижении это границы, необходимо создать еще порцию.
      "ru": 
      {
        quantityShow: 0,        // Сколько сейчас отображено.
        NPortion: 0,            // Считаем кол-во порций
        pastPos: {x: 0, y: 0},  // Позиция последнего элемента из порции
      },
      "en": 
      {
        quantityShow: 0,        // Сколько сейчас отображено.
        NPortion: 0,            // Считаем кол-во порций
        pastPos: {x: 0, y: 0},  // Позиция последнего элемента из порции
      }
    },
    btnSelected: {"ru": "выбрать", "en": "selected"}
  };

  // Правила игры
  rulesOfGame = 
  {
    title: {"ru": {t:"правила игры"}, "en": {t:"the rules of the game"}},
    btnSelected: 
    {
      idBl: "blTBtnSelectedRulesOfGame",
      "ru": {t:"начать игру", w: 140}, 
      "en": {t:"start the game", w: 162}
    }
  };

  // Под меню
  settingsUnderMenu = 
  {
    linkBtn: 
    {
      сontinue: 
      {
        "ru": {t:"продолжить"}, 
        "en": {t:"сontinue"}
      },
      language: 
      {
        "ru": {t:"язык"}, 
        "en": {t:"language"}
      },
      мanagement: 
      {
        "ru": {t:"управление"}, 
        "en": {t:"мanagement"}
      },
      modes: 
      {
        "ru": {t:"режимы"}, 
        "en": {t:"modes"}
      },
      settingsMAndDF: 
      {
        m: 
        {
          idBl: "blTBtnSelectionSettingsMAndDF",
          "ru": {t:"параметры режима", w: 185}, 
          "en": {t:"mode parameters", w: 151}
        },
        df: 
        {
          idBl: "blTBtnSelectionSettingsMAndDF",
          "ru": {t:"оформление поля", w: 166}, 
          "en": {t:"field decoration", w: 140}
        }
      },
      topic: 
      {
        "ru": {t:"тема"}, 
        "en": {t:"topic"}
      },
      rulesOfGame: 
      {
        idBl: "blTBtnSelectionRulesOfGame",
        "ru": {t:"правила игры", w: 128}, 
        "en": {t:"rules of game", w: 124}
      },
      settingsSnake:
      {
        idBl: "blTBtnSelectionSettingsSnake",
        "ru": {t:"параметры змейки", w: 180}, 
        "en": {t:"snake parameters", w: 156}
      },
      settingsFood:
      {
        idBl: "blTBtnSelectionSettingsFood",
        "ru": {t:"параметры еды", w: 150}, 
        "en": {t:"food parameters", w: 146}
      }
    },
    helpDoc:
    {
      idBl: "blShowKeyHDocument",
      "ru": {t: "помощь", w: 100}, 
      "en": {t: "help", w: 70}
    }
  };

  // Документация к игре
  settingsDocument = 
  {
    title: {"ru": "документация", "en": "documentation"},
    keyH: {"ru": "закрыть", "en": "close"},
    note: 
    {
      "ru": "сначала выберите интересующий вас раздел!", 
      "en": "First, select the section you are interested in!"
    },
    listChapter: 
    {
      sh: false,
      previsCh: "",
      h: {min: 0, max: 510},
      imgSH:
      {
        dir: "./GUI/documentationForGame/", 
        show: "clone_show.png", hide: "clone_hide.png"
      }
    }
  };

  // Предупреждение для игрока
  warningForUser = 
  {
    title: {"ru": {t:"внимание"}, "en": {t: "attention"}},
    codeTWarning1: {"ru": {t: "важно"}, "en": {t: "important"}},
    codeTWarning2: 
    {
      "ru": {t: "игра <b>использует</b> облачные сохранения для сохранения вашего прогресса!", w: 495}, 
      "en": {t: "the game <b>uses</b> cloud saves to save your progress!", w: 350}
    },
    codeTWarning3: 
    {
      "ru": {t: "В таблице \"Лучшие игроки\" будет отображен общий балл по всем девяти режимам!", w: 550}, 
      "en": {t: "the \"Best Players\" table will display the total score for all nine modes!", w: 530}
    },
    codeTWarning4: 
    {
      "ru": {t: "в игре нет звуковых эффектов!", w: 230}, 
      "en": {t: "there are no sound effects in the game!", w: 310}
    },
    codeTWarning5: 
    {
      "ru": {t: "мы рады, что вы играете в нашу игру!", w: 265}, 
      "en": {t: "we are glad that you are playing our game!", w: 305}
    },
    btnSelected: {"ru": {t:"хорошо"}, "en": {t:"good"}}
  };

  // Инициализация игрока
  initUser = 
  {
    title: {"ru": {t:"инициализация"}, "en": {t: "initialization"}},
    codeTInitUser_1: 
    {
      "ru": {t:"добро пожаловать в игру"}, 
      "en": {t:"welcome to the game"}
    },
    codeTInitUser_2_1: 
    {
      idBl: "codeTInitUser-2",
      "ru": {t:"в этом интерфейсе вам предоставляются две возможности:", w: 423}, 
      "en": {t:"in this interface, you are given two possibilities:", w: 400}
    },
    codeTInitUser_2_2: 
    {
      "ru": {t:"играйте в качестве гостя;"}, 
      "en": {t:"play as a guest;"}
    },
    codeTInitUser_2_3: 
    {
      "ru": {t:"играйте как авторизованный игрок."}, 
      "en": {t:"play as an authorized player."}
    },
    codeTInitUser_3: 
    {
      idBl: "codeTInitUser-3",
      "ru": {t:"теперь давайте поговорим о возможностях более подробно.", w: 435}, 
      "en": {t:"now let's talk about the possibilities in more detail.", w: 430}
    },
    codeTInitUser_4_1: 
    {
      idBl: "codeTInitUser-4",
      "ru": {t:"преимущества авторизованного игрока:", w: 595}, 
      "en": {t:"advantages of an authorized player:", w: 595}
    },
    codeTInitUser_4_2: 
    {
      "ru": {t:"прогресс в игре сохраняется;"}, 
      "en": {t:"the progress in the game is saved;"}
    },
    codeTInitUser_4_3: 
    {
      "ru": {t:"разблокированные аватары (персонажа, препятствия и т.д.) сохраняются."}, 
      "en": {t:"unlocked avatars (characters, obstacles, etc.) are saved."}
    },
    codeTInitUser_5_1: 
    {
      idBl: "codeTInitUser-5",
      "ru": {t:"недостатки гостя:", w: 595}, 
      "en": {t:"disadvantages of the guest:", w: 595}
    },
    codeTInitUser_5_2: 
    {
      "ru": {t:"прогресс в игре не сохраняется;"}, 
      "en": {t:"the progress in the game is not saved;"}
    },
    codeTInitUser_5_3: 
    {
      "ru": {t:"разблокированные аватары (персонажа, препятствия и т.д.) не сохраняются."}, 
      "en": {t:"unlocked avatars (characters, obstacles, etc.) are not saved."}
    },
    codeTInitUser_6: 
    {
      "ru": {t:"теперь выберите, как вы хотите играть:", w: 305}, 
      "en": {t:"now choose how you want to play:", w: 255}
    },
    TAnanimusUser_1:
    {
      "ru": {t:"ваш прогресс не будет сохранен в игре, пожалуйста, войдите в систему, чтобы сохранить его!"}, 
      "en": {t:"your progress will not be saved in the game, please log in to save it!"}
    },
    TAnanimusUser_2:
    {
      "ru": {t:"авторизоваться", w:145}, 
      "en": {t:"log in", w:80}
    },
    anonymousUser: false,
    syncingDt: false,
    btnSelected1: {"ru": {t:"игрок"}, "en": {t:"player"}},
    btnSelected2: {"ru": {t:"гость"}, "en": {t:"guest"}}
  };
  

  // 
  constructor() { }

  // --
  advBlock()
  {
    YaGames.init().then(ysdk => 
    {
      ysdk.adv.showFullscreenAdv(
      {
        callbacks: 
        {
          onOpen:  function() { },
          onClose: function(wasShown) { },
          onError: function(error) {  }
        }
      });
    });
  };

  // --
  advRewarded(callfun) 
  {
    YaGames.init().then(ysdk => 
    {
      ysdk.adv.showRewardedVideo(
      {
        callbacks: 
        {
          onOpen:     () => { this.advRewardActv = true; },
          onRewarded: () => { callfun(); },
          onClose:    () => { this.advRewardActv = false; }, 
          onError:    (e) => { }
        }
      });
    });
  };

  // 
  saveCommonResultUser(newValue)
  {
    let leaderboardName = "sumofallmodes";
    
    YaGames.init().then(ysdk => 
    {
      ysdk.isAvailableMethod('leaderboards.getLeaderboardPlayerEntry')
        .then(result => 
        {
          if (result)
          {
            let work = async () => 
            {
              let oldValue = null;
              let lb = await ysdk.getLeaderboards();
              try { oldValue = (await lb.getLeaderboardPlayerEntry(leaderboardName)).score; } 
              catch (err)
              {
                if (err.code === 'LEADERBOARD_PLAYER_NOT_PRESENT') 
                {
                  // Срабатывает, если у игрока нет записи в лидерборде
                  oldValue = -1;
                }
              }

              if (oldValue < newValue)
                lb.setLeaderboardScore(leaderboardName, newValue);
            }

            work();
          }
        });
    });
  }

  // Проверка какой из GUI был показан
  checkWhichOneWasDisplayed() { }

  // Проверка на закрытый GUI
  checkingForAClosedGUI(exceptions=false)
  {
    return !this.display.list["initUser"]               &&
           !this.display.list["warningForUser"]         &&
           !this.display.list["mainGUI"]                &&
           !this.display.list["language"]               &&
           !this.display.list["settingJestik"]          &&
           !this.display.list["modes"]                  &&
           !this.display.list["descriptionForModes"]    &&
           !this.display.list["decorationField"]        &&
           !this.display.list["topic"]                  &&
           !this.display.list["settingsSnake"]          &&
           !this.display.list["settingsFood"]           &&
           !this.display.list["mathematics"]            &&
           !this.display.list["words"]                  &&
           !this.display.list["rulesOfGame"]            &&
           !this.display.list["levelsForMaze"]          &&
           (exceptions ? true : this.checkingForAclosedExceptions())
  }

  // 
  checkingForAclosedExceptions()
  {
    return !this.display.list["gameOverForMaze"]        &&
           !this.display.list["gameOverForWM"]          &&
           !this.display.list["gameOverForOther"]       &&
           !this.display.list["countingRelustsForMaze"]
  }

  tmpB = true; // Чтобы предотвратить повторый вызов ф-ии gui.commonSyncing()
  // Задать открываемый GUI
  setOpenDisplay(display, v)
  {
    this.display.list[display] = v;

    if ( display !== "documentation"  && 
         display !== "warningForUser" && 
         display !== "initUser"       && 
         display !== "canvas" )
    {
      this.display.current.d = (v?display:"");
    }

    // Это нужно, если user авторизуется не через мой gui.InitUser!
    if (v && this.initUser.anonymousUser)
    {
      YaGames.init().then(ysdk => 
      {
        ysdk.getPlayer().then(_player => 
        {
          if (_player.getMode() === 'lite' && !this.initUser.syncingDt)
          {
            // console.log("User не авторизован, но данные были Init!");
            this.commonSyncing();
            this.initUser.syncingDt = true;
          }
          else if (_player.getMode() !== 'lite')
          {
            // console.log("User авторизовался не через мой gui.InitUser!");
            this.commonSyncing();
            this.initUser.anonymousUser = false;
            this.showHideLinkOnInitUser();

            this.initUser.syncingDt = false; // выставляем по умолчанию (если user выйдет из акка-Я прямо во время игры)
            this.tmpB = false;
          }
        });
      });
    }
    // Это нужно, если user уже авторизован и необходимо добавить данные из БДЯ в ОЗУ user!
    else if (v && !this.initUser.syncingDt && this.tmpB)
    {
      YaGames.init().then(ysdk => 
      {
        ysdk.getPlayer().then(_player => 
        {
          if (_player.getMode() !== 'lite')
          {
            // console.log("Init data для IntiUser!");
            this.commonSyncing();
            this.initUser.syncingDt = true;
          }
        });
      })
    }
  }

  // 
  showHideInitUser(v)
  {
    this.displayID("blInitUser", v);
    this.setOpenDisplay("initUser", (v=="block"?true:false));

    if (this.display.list["initUser"])
    {
      let setTTitle = (id, t, b=false) => 
      {
        let idBl = (b==="bl"?t.idBl:"");
        let title = t[LANGUAGE];
        $("#"+id).html(this.firstUpperCase(title.t));

        if (b)
          $("#"+(idBl.length>0?idBl:id)).css("width", title.w+"px");
      };

      setTTitle("TitleInitUser", this.initUser.title);
      setTTitle("codeTInitUser-1", this.initUser.codeTInitUser_1);
      setTTitle("codeTInitUser-2-1", this.initUser.codeTInitUser_2_1, "bl");
      setTTitle("codeTInitUser-2-2", this.initUser.codeTInitUser_2_2);
      setTTitle("codeTInitUser-2-3", this.initUser.codeTInitUser_2_3);
      setTTitle("codeTInitUser-3-1", this.initUser.codeTInitUser_3, "bl");
      setTTitle("codeTInitUser-4-1", this.initUser.codeTInitUser_4_1, "bl");
      setTTitle("codeTInitUser-4-2", this.initUser.codeTInitUser_4_2);
      setTTitle("codeTInitUser-4-3", this.initUser.codeTInitUser_4_3);
      setTTitle("codeTInitUser-5-1", this.initUser.codeTInitUser_5_1, "bl");
      setTTitle("codeTInitUser-5-2", this.initUser.codeTInitUser_5_2);
      setTTitle("codeTInitUser-5-3", this.initUser.codeTInitUser_5_3);
      setTTitle("codeTInitUser-6", this.initUser.codeTInitUser_6, true);
      setTTitle("TBtnSelectedInitUser1", this.initUser.btnSelected1);
      setTTitle("TBtnSelectedInitUser2", this.initUser.btnSelected2);

      adaptation.changeWHInterf("InitUser");
    }
  }

  // 
  selectedBtnIUPlayer()
  {
    YaGames.init().then(ysdk => 
    {
      ysdk.getPlayer().then(_player => 
      {
        if (_player.getMode() === 'lite')
        {
          // console.log("Показать окно для авторизации user!");
          ysdk.auth.openAuthDialog().then(() => 
          {
            // console.log("User авторизован!");
            YaGames.init().then(ysdk => ysdk.getPlayer());
            
            this.showHideInitUser("none");
            
            let b = this.initUser.anonymousUser;
            this.initUser.anonymousUser = false;

            if (b)
            {
              // console.log("Скрыть ссылки авторизации!");
              this.showHideLinkOnInitUser();
              this.commonSyncing();
            }
          })
          .catch(() => { /* console.log("User не вошел в систему???"); */ });
        }
      });
    });
  }

  // 
  selectedBtnIUGuest()
  {
    this.showHideInitUser("none");
    this.initUser.anonymousUser = true;
  }

  // 
  showHideLinkOnInitUser(setTTitle=false, n="")
  {
    let w = 0, h = 0, b = LANGUAGE=="ru"?true:false;

    if (this.display.list["topic"]                 || 
        this.display.list["settingsFood"]          || 
        this.display.list["gameOverForWM"]         || 
        this.display.list["gameOverForOther"]      || 
        this.display.list["countingRelustsForMaze"])
    {
      w = b?710:555;
      h = 38;
    }
    if (this.display.list["settingsSnake"])
    {
      w = b?200:180;
      h = b?125:100;
    }

    for (let i = (n==""?1:n); i < (n==""?7:n+1); i++)
    {
      $(".blAnanimusUser-"+i)
        .css("display", this.initUser.anonymousUser?"block":"none")
        .css("width", w+"px").css("height", h+"px");
    }

    if (setTTitle)
    {
      setTTitle("TAnanimusUser-1", this.initUser.TAnanimusUser_1);
      setTTitle("TAnanimusUser-2", this.initUser.TAnanimusUser_2, "TAnanimusUser-2");
    }
  }

  // 
  commonSyncing()
  {
    // 'Сосуществование' двух переменных...
    YaGames.init().then(ysdk => 
    {
      ysdk.getPlayer().then(_player => 
      {
        let dtfun = async () => 
        {
          if (!Object.hasOwn(await _player.getData(), "dtUser"))
          {
            // На заметку: 
            // Ф-ия setData - каждый раз перезаписывает объект (т.е старое св-во затерается на новое).
            _player.setData(
            {
              dtUser:
              {
                recordsmodes:
                {
                  "classic": 0,
                  "infinitely": 0,
                  "jumpFood": 0,
                  "feedMe": 0,
                  "words": 0,
                  "mathematics": 0,
                  "reverseMove": 0,
                  "narrowingOfZone": 0,
                  "portals": 0,
                  "maze": 
                  {
                    opnLvls: 1,
                    earnedStars: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                  }
                },
                avatars:
                {
                  topic: 
                  {
                    obst: [409],
                    bgClr: [156]
                  },
                  snake: [],
                  food: []
                }
              }
            }).then(result => 
            {
              // if (result)
              //   console.log("Были созданы [ячейка-avatars] и [ячейка-records] в БДЯ для user="+_player.getUniqueID());
              // else 
              //   console.log("Error: не получилось создать [ячейку-avatars] и [ячейку-records] в БДЯ для user="+_player.getUniqueID());
            });
          }

          // Проверка:
          // console.log("==Check Data dtUser==");
          // console.log("User: "+_player.getUniqueID());
          // console.log(await _player.getData());
          // console.log("==----END----==");


          this.syncingRecordsForModes("all");
          this.syncingAvatars("all", {ch:"2"});
        };
        
        dtfun();
      });
    });
  }

  // 
  syncingAvatars(s, opt={ch:"", id:false})
  {
    YaGames.init().then(ysdk => 
    {
      ysdk.getPlayer().then(_player => 
      {
        let dtfun = async () =>
        {
          let dtUser = (await _player.getData()).dtUser;
  
          if (Object.hasOwn(dtUser, "avatars"))
          {
            let fun = (_interface, s) => 
            {
              let addAvatar = (savedAvatars, sgui, sobj) => 
              {
                let o = (sobj=="obst"?obst : sobj=="bgClr"?ctxData : sobj=="snake"?snake : sobj=="food"?food : null);
                let currentAvatars = null;
                switch(sgui)
                {
                  case "topic":
                  {
                    currentAvatars = 
                    {
                      list: o.history.list,
                      listOpn: o.history.listOpn,
                    };
                    break;
                  }
                  case "snake-food":
                  {
                    currentAvatars = 
                    {
                      list: o.history.design.listAvatars,
                      listOpn: o.history.design.listAvatarsOpn
                    }
                    break;
                  }
                }

                if (s === "one")
                {
                  savedAvatars.push(opt.id);

                  // console.log("Был добавлен new Avatar для ["+opt.ch+"]!");
                  // console.log(currentAvatars);
                  // console.log("=============");
                }
                else if (s === "all")
                {
                  let tmpArr = [];

                  // console.log("listOpnAvatars user in ОЗУ: "+currentAvatars.listOpn.length);

                  // Проверка, есть ли такой аватар в БД
                  for (let i = 0; i < currentAvatars.listOpn.length; i++)
                  {
                    let saved = false;

                    for (let sdtn = 0; sdtn < savedAvatars.length; sdtn++)
                      if (currentAvatars.listOpn[i] == savedAvatars[sdtn]) { saved = true; break; }
                      
                    if (!saved)
                      tmpArr.push(currentAvatars.listOpn[i]);
                  }

                  // Добавляем новые аватары в БД
                  for (let i = 0; i < tmpArr.length; i++)
                    savedAvatars.push(tmpArr[i]);

                  let fx = (arr) => 
                  {
                    if (sobj == "obst" || sobj == "bgClr") o.history.listOpn = arr;
                    else if (sobj == "snake" || sobj == "food") o.history.design.listAvatarsOpn = arr;

                    return arr;
                  };

                  currentAvatars.listOpn = fx(savedAvatars);

                  let t = (sobj=="snake"||sobj=="food"?sobj:"-");

                  // Разблокируем аватары в ОЗУ user
                  for (let i = 0; i < currentAvatars.listOpn.length; i++)
                  {
                    let idE = currentAvatars.listOpn[i];
                    currentAvatars.list[idE] = true;

                    // 
                    if (sgui == "topic" && this.display.list["topic"])
                    {
                      let NClr = $("#blSelectedShowColor").attr("data-NClr");
                      if (NClr && idE == NClr)
                      {
                        // console.log("Убираем замочек у аватара в ["+sobj+"]!");
                        this.displayID("blPadlock", "none");
                      }
                    }
                    else if (sobj == t)
                    {
                      if (idE <= (t=="snake"?this.settingsSnake:this.settingsFood).design.quantityShow)
                      {
                        // console.log("Убираем замочек у аватара в ["+sobj+"]!");
                        $("#blockingDesign"+this.firstUpperCase(t)+"-"+idE).css("display", "none");
                      }
                    }
                  }

                  // console.log(sobj=="obst"?obst : sobj=="bgClr"?ctxData : sobj=="snake"?snake : sobj=="food"?food : "");
                  // console.log("Синхронизируем все Avatars!");
                }
              };

              let o = dtUser.avatars;
              switch(_interface)
              {
                case "topic": 
                {
                  for (let i = (opt.ch=="obst"?0:opt.ch=="bgClr"?1:opt.ch=="2"?0:-1); 
                           i < (opt.ch=="obst"?1:opt.ch=="bgClr"?2:opt.ch=="2"?2:-1); 
                           i++)
                  {
                    if (i == 0) addAvatar(o.topic.obst, "topic", "obst");
                    else if (i == 1) addAvatar(o.topic.bgClr, "topic", "bgClr");
                  }

                  break;
                }
                case "settingsSnake": 
                {
                  addAvatar(o.snake, "snake-food", "snake");
                  break;
                }
                case "settingsFood": 
                {
                  addAvatar(o.food, "snake-food", "food");
                  break;
                }
              }
            };
  
            switch(s)
            {
              case "one": fun(this.display.current.d, "one"); break;
              case "all":
              {
                // Сохраняем/изменяем аватары сразу все
                let interfaces = ["topic", "settingsSnake", "settingsFood"];
                for (let i = 0; i < interfaces.length; i++)
                  fun(interfaces[i], "all");
                break;
              }
            }
  
            _player.setData({dtUser: dtUser}).then(result => 
             {
                // if (result)
                //   console.log("Аватары сохранены!");
                // else 
                //   console.log("Error: аватары не сохранены!");
             });
      
            // Проверка:
            // console.log("==Check Data Avatars==");
            // console.log("User: "+_player.getUniqueID());
            // console.log(await _player.getData());
            // console.log("==----END----==");
          }
        }
  
        dtfun();
      });
    });
  }

  // 
  syncingRecordsForModes(s)
  {
    YaGames.init().then(ysdk => 
    {
      ysdk.getPlayer().then(_player => 
      {
        let dtfun = async () =>
        {
          let dtUser = (await _player.getData()).dtUser;

          if (Object.hasOwn(dtUser, "recordsmodes"))
          {
            let fun = (m) => 
            {
              if (m !== "maze")
              {
                let rm = recordForModes.get(m);
                if (dtUser.recordsmodes[m] < rm)
                  dtUser.recordsmodes[m] = rm;
                else 
                  recordForModes.set(m, dtUser.recordsmodes[m]);
              }
              else
              {
                let opnLvls = 0;
                let o = historyForMaze;
                
                for (let i = 0; i < o.levels.listOpen.length; i++)
                  if (o.levels.listOpen[i]) opnLvls++;
                
                
                if (dtUser.recordsmodes[m].opnLvls < opnLvls) 
                  dtUser.recordsmodes[m].opnLvls = opnLvls;
                else if (dtUser.recordsmodes[m].opnLvls > opnLvls)
                {
                  for (let i = 0; i < dtUser.recordsmodes[m].opnLvls; i++)
                    o.levels.listOpen[i] = true;
                }

                for (let i = 0; i < dtUser.recordsmodes[m].earnedStars.length; i++)
                {
                  if (dtUser.recordsmodes[m].earnedStars[i] < o.earnedStars.list[i])
                  {
                    dtUser.recordsmodes[m].earnedStars[i] = o.earnedStars.list[i];
                  }
                  else 
                    o.earnedStars.list[i] = dtUser.recordsmodes[m].earnedStars[i];
                }
              }
            };

            switch(s)
            {
              case "one": fun(ctxData.mode.current.title); break;
              case "all":
              {
                // Сохраняем/изменяем рекорды сразу у всех режимов
                for (let i = 0; i < this.modes.allModes.length; i++)
                  fun(this.modes.allModes[i]);
                break;
              }
            }

            if (this.display.list["gameOverForWM"] || this.display.list["gameOverForOther"])
            {
              if (ctxData.checkSelectedMode("words") && ctxData.checkSelectedMode("mathematics"))
                ctxData.setRecordAndCurScore("1");
              else 
                ctxData.setRecordAndCurScore("2");
            }

            _player.setData({dtUser: dtUser}).then(result => 
              {
                // if (result)
                //   console.log("Рекорды сохранены!");
                // else 
                //   console.log("Error: рекорды не сохранены!");
              });
    
            // Проверка:
            // console.log("==Check Data Records==");
            // console.log("User: "+_player.getUniqueID());
            // console.log(await _player.getData());
            // console.log("==----END----==");
          }
        }

        dtfun();
      });
    });
  }

  // 
  showHideWarningForUser(v)
  {
    this.displayID("blWarning", v);
    this.setOpenDisplay("warningForUser", (v=="block"?true:false));

    if (this.display.list["warningForUser"])
    {
      let setTTitle = (id, t, b=false) => 
      {
        let title = t[LANGUAGE];
        $("#"+id).html((id=="codeTWarning-6"?"P.S. ":"")+this.firstUpperCase(title.t));

        if (b)
          $("#"+id).css("width", title.w+"px");
      };

      let o = this.warningForUser;
      setTTitle("TitleWarning", o.title);
      setTTitle("codeTWarning-1", o.codeTWarning1);
      setTTitle("codeTWarning-2", o.codeTWarning2, true);
      setTTitle("codeTWarning-3", o.codeTWarning3, true);
      setTTitle("codeTWarning-4", o.codeTWarning4, true);
      setTTitle("codeTWarning-5", o.codeTWarning5, true);
      setTTitle("TBtnSelectedWarning", o.btnSelected);

      adaptation.changeWHInterf("Warning");
    }
  }

  // 
  selectedWarningForUser()
  {
    this.showHideWarningForUser("none");
  }

  // 
  showHideDocumentation(v)
  {
    this.displayID("blMainDocument", v);
    this.setOpenDisplay("documentation", (v=="block"?true:false));

    if (this.display.list["documentation"])
    {
      adaptation.settingsDocument.o = this.settingsDocument;

      this.showHideListChapters(true);

      let setTTitle = (id, title, w=0) => 
      {
        title = title[LANGUAGE];
        $("#"+id).html(this.firstUpperCase(title));
        if (w)
        {
          $(".blBtnCloseDocument").css("width", w+"px");
          $(".blBtnCloseDocumentInternal").css("width", w+"px");
        }
          
      };

      setTTitle("TitleblMainDocument", this.settingsDocument.title);
      setTTitle("blTCloseD", this.settingsDocument.keyH, LANGUAGE=="ru"?105:80);
      setTTitle("noteListDocumentAllPage", this.settingsDocument.note);

      adaptation.changeWHInterf("Document");
    }
  }

  // 
  showHideListChapters(b=false)
  {
    let o = this.settingsDocument.listChapter;

    if (b) 
      o.sh = b;

    let fh = (b, h, img) => 
    {
      $(".blShowHideListChapters").css("height", h+"px");
      $(".imgShowHideListChapters").css("background-image", this.getURLImg(o.imgSH.dir+img))
      o.sh = b;
    };

    if (o.sh)
    {
      fh(false, o.h.max, o.imgSH.show);
      $(".blShowHideListChaptersInter").css("display", "block");
    }
    else
    {
      fh(true, o.h.min, o.imgSH.hide);
      $(".blShowHideListChaptersInter").css("display", "none");
    }

    adaptation.changeWHInterf("Document");
  }

  // 
  getChaptersForDocument()
  {
    $("#blShowHideListChaptersInter").empty().append((new DocumentChapters).getPage(LANGUAGE));
  }

  // 
  getDocumentPage(elm)
  {
    let o = this.settingsDocument.listChapter;

    if (o.previsCh.length > 0)
      $("#"+o.previsCh).css("color", "#FFFFFF");

    o.previsCh = elm.id;

    $("#"+elm.id).css("color", "#3EC14D");

    this.showHideListChapters();

    this.printPage(elm);

    adaptation.settingsDocument.nch = $(elm).attr("data-nch");
    adaptation.changeWHInterf("Document");
  }

  // 
  printPage(elm)
  {
    $("#blListDocumentAllPage")
      .empty()
      .append((LANGUAGE=="ru"?(new DocumentPageRu()):(new DocumentPageEn)).getPage($(elm).attr("data-nch")))
      .scrollTop(0);
  }

  // 
  showPrevisChapter()
  {
    let sh = "none";
    let display = this.display.current.d;

    let n = -1;
    for (let i = 0; i < 2; i++)
    {
      if (display == "language")
      {
        this.showHideSettingsLanguage(sh);
      }
      else if (display == "settingJestik")
      {
        this.showHideSettingsJestik(sh);
        n = 0
      }
      else if (display == "modes")
      {
        this.showHideModes(sh);
        n = 1;
      }
      else if (display == "levelsForMaze")
      {
        this.showHideLevelsForMaze(sh);
        n = 10;
      }
      else if (display == "mathematics")
      {
        this.showHideSettingsModeMathematics(sh);
        n = 2;
      }
      else if (display == "words")
      {
        this.showHideSettingsModeWords(sh);
        n = 2;
      }
      else if (display == "decorationField")
      {
        this.showHideDecorationField(sh);
        n = 2;
      }
      else if (display == "topic")
      {
        this.showHideTopic(sh);

        switch(ctxData.mode.current.title)
        {
          case "jumpFood": case "narrowingOfZone": case "maze": n = 2; break;
          // --
          case "classic": case "infinitely": 
          case "feedMe": case "reverseMove": 
          case "portals": n = 6; break;
          // --
          case "words": n = 5; break;
          // --
          case "mathematics": n = 4; break;
        }
      }
      else if (display == "settingsSnake")
      {
        this.showHideSettingsSnake(sh);
        n = 7;
      }
      else if (display == "settingsFood")
      {
        this.showHideSettingsFood(sh);
        n = 8;
      }
      else if (display == "rulesOfGame")
      {
        this.showHideRulesOfGame(sh);

        switch(ctxData.mode.current.title)
        {
          case "jumpFood": case "narrowingOfZone": 
          case "classic": case "infinitely": 
          case "feedMe": case "reverseMove": 
          case "portals": n = 9; break;
          // --
          case "maze": n = 8; break;
          // --
          case "words": case "mathematics": n = 8; break;
        }
      }

      display = this.display.key[n];
      sh = "block";
    }
  }

  // 
  showHideUnderMenu(v, xb=true)  // xb - изначально пранировалось использовать только для смены языка!
  {
    this.displayID("blUnderMenu", v);
    this.setOpenDisplay("underMenu", (v=="block"?true:false));

    let funMoveSnake = (b) => 
    {
      snake.stopMove(b);
      snake.extraLife = b;
    };

    if ( !this.display.list["gameOverForOther"]       &&
         !this.display.list["gameOverForWM"]          && 
         !this.display.list["gameOverForMaze"]        && 
         !this.display.list["countingRelustsForMaze"] )
      {
        this.showHideCanvas(v=="block"?"none":"block");
      }

    if (this.display.list["underMenu"])
    {
      if (xb)
      {
        if (ctxData.checkSelectedMode("maze"))
          ctxData.mode.current.o.gameplayTime.downtimePoint = Date.now();

        funMoveSnake(true);
        pauseOFF();
      }

      let setTTitle = (id, t, b=false, c="#") => 
      {
        let idBl = (b?t.idBl:"");
        let title = t[LANGUAGE];

        $("#"+id).html(this.firstUpperCase(title.t));

        if (b)
        {
          $(c+idBl).css("width", title.w+"px");
          if (c == '.')
            $(".blShowKeyHDocumentInternal").css("width", title.w+"px");
        }
      };

      let o = this.settingsUnderMenu.linkBtn;
      setTTitle("TBtnSelectionContinue", o.сontinue);
      setTTitle("TBtnSelectionLanguage", o.language);
      setTTitle("TBtnSelectionManagement", o.мanagement);
      setTTitle("TBtnSelectionModes", o.modes);
      setTTitle("TBtnSelectionTopic", o.topic);
      setTTitle("TBtnSelectionRulesOfGame", o.rulesOfGame, true);
      setTTitle("TBtnSelectionSettingsSnake", o.settingsSnake, true);
      setTTitle("blTOpenDForSubmenu", this.settingsUnderMenu.helpDoc);

      this.showHideBtnLinkGUI(setTTitle);

      adaptation.changeWHInterf("UnderMenu");
    }
    else 
    {
      if (xb)
      {
        // Это нужно, чтобы можно было открыть под меню во время первого старта
        // (т.е. Задержка перед началом игры).
        if (!snake.delayBeforeStart())
        {
          funMoveSnake(false);
          pauseON();
        }
        
        if (ctxData.checkSelectedMode("maze")   && 
            this.checkingForAclosedExceptions() && snake.countingDown.start)
        {
          let downtimePoint = ctxData.mode.current.o.gameplayTime.downtimePoint;
          ctxData.mode.current.o.gameplayTime.downtimeTotal += Date.now() - downtimePoint;
        }
      }
    }

    if (xb && this.checkingForAclosedExceptions())
    {
      ctxData.hideShowBlAllValueScore(v=="block"?"none":"block");

      if (snake.delayBeforeStart())
        ctxData.showHideBlMaps(v=="block"?"none":"block");
    }
  }

  // 
  showHideBtnLinkGUI(setTTitle)
  {
    let o = this.settingsUnderMenu.linkBtn;
    let NMode = ctxData.mode.current.n;
    let displayMDF = "";
    let displayFood = "";

    // Показать блок - параметры режима/оформление поля
    switch(NMode)
    {
      case 2: case 7: case 8: displayMDF = "none"; break;
      default: displayMDF = "block"; break;
    }

    // Показать блок - параметры еды
    switch(NMode)
    {
      case 4: case 5: case 8: displayFood = "none"; break;
      default: displayFood = "block"; break;
    }

    let fcss = (v) => { $("#link-settingsMAndDF").css("top", v+"%").css("transform", "translate(-50%, -"+v+"%)"); };

    this.displayID("link-settingsMAndDF", displayMDF);
    
    if (NMode == 4 || NMode == 5) fcss(83.6);
    else fcss(95.5);
    
    this.displayID("link-settingsFood", displayFood);

    if (displayFood=="block")
      setTTitle("TBtnSelectionSettingsFood", o.settingsFood, true);
    if (displayMDF=="block")
    {
      let idBl = "TBtnSelectionSettingsMAndDF";
      switch(NMode)
      {
        case 4: case 5: 
          setTTitle(idBl, o.settingsMAndDF.m, true); 
          break;
        case 0: case 1: case 3: case 6: case 9: 
          setTTitle(idBl, o.settingsMAndDF.df, true); 
          break;
      }
    }
  }

  // 
  showSelectedGUI(elem)
  {
    let linkGUI = $(elem).attr("data-guin");

    switch(linkGUI)
    {
      case "0": this.showHideSettingsLanguage("block"); break;
      case "1": this.showHideSettingsJestik("block");   break;
      case "2": 
      {
        this.showHideUnderMenu("none", false);

        if (this.display.list["gameOverForOther"] || 
            this.display.list["gameOverForWM"]    || 
            this.display.list["gameOverForMaze"]) 
        {
          this.showHideGameOver("none", "off");
        }
        else if (this.display.list["countingRelustsForMaze"])
          this.showHideCountingResults("none", "off");

        this.showHideModes("block");
        break;
      }
      case "546":
      {
        switch(ctxData.mode.current.n)
        {
          case 4: this.showHideSettingsModeWords("block");        break;
          case 5: this.showHideSettingsModeMathematics("block");  break;
          // -- 
          case 0: case 1: case 3: case 6: case 9: 
            this.showHideDecorationField("block");
            break;
        }
        break;
      }
      case "7":  this.showHideTopic("block");         break;
      case "10": this.showHideRulesOfGame("block");   break;
      case "8":  this.showHideSettingsSnake("block"); break;
      case "9":  this.showHideSettingsFood("block");  break;
      case "close": 
      {
        this.showHideUnderMenu("none", this.display.list["gameOverForOther"] || this.display.list["gameOverForWM"]
                                       ? 
                                       false
                                       :
                                       true);
        break;
      }
    }
  }

  // 
  showHideMainGui(v)
  {
    this.displayID("blMainGUI", v);
    this.setOpenDisplay("mainGUI", (v=="block"?true:false));

    if (this.display.list["mainGUI"])
      adaptation.changeWHInterf("MainMenu");
  }

  // 
  beginGUI()
  {
    this.showHideMainGui("none");
    this.showHideSettingsLanguage("block");
  }

  // 
  showHideSettingsLanguage(v)
  {
    document.getElementById("blLanguage").style.display = v;
    this.setOpenDisplay("language", (v=="block"?true:false));

    if (this.display.list["language"])
    {
      let setTTitle = (id, title) => { $("#"+id).html(this.firstUpperCase(title)); };

      setTTitle("TSelectedLanguareRuInternal", this.settingsLanguage.btnSelected["ru"])
      setTTitle("TSelectedLanguareEnInternal", this.settingsLanguage.btnSelected["en"])

      adaptation.changeWHInterf("LanguageSys");
    }
  }

  // 
  setLanguageSys(l)
  {
    LANGUAGE = l;

    this.getChaptersForDocument();
    
    if (this.settingsDocument.listChapter.previsCh.length > 0)
      this.printPage("#"+this.settingsDocument.listChapter.previsCh);
    
    let b = LANGUAGE=="ru"?true:false;
    let idTooltip = "TtooltipAdv";

    let setHTMLT = (id, t, w) => { $("#"+id).html(t).css("width", w+"px"); };

    setHTMLT(idTooltip, this.firstUpperCase(this.tooltip.advertisement[LANGUAGE]), b?160:193)

    setHTMLT("TtooltipCurrentTime", LANGUAGE=="ru"?"Ваше время":"Your time", b?75:56);
    setHTMLT("TtooltipNecessaryTime", LANGUAGE=="ru"?"Требуемое время":"Required time", b?110:81);

    let setTTitle = (id, t, clsBl=false) => 
    {
      let b = (id=="TAnanimusUser-2"?1:0);
      let title = t[LANGUAGE];
      $("."+id).html((b?"> ":"")+this.firstUpperCase(title.t)+(b?" <":""));
      if (clsBl)
        $("."+clsBl).css("width", title.w+"px");
    };

    this.showHideLinkOnInitUser(setTTitle);

    setTTitle("TitleGameOver",        { "ru": {t:"игра окончена!", w:150},          "en": {t:"the game is over!", w: 170} }, "blTitleGameOverModeWordMath");
    setTTitle("TGuessedWordsMath",    { "ru": {t:"отгадано слов"},                  "en": {t:"guessed the words"}         });
    setTTitle("TGuessedExamplesMath", { "ru": {t:"решено примеров"},                "en": {t:"solved examples"}           });
    setTTitle("THintWordsMath",       { "ru": {t:"использована подсказка", w:312},  "en": {t:"a hint was used",   w:250}  }, "textHintWordsMath");
    setTTitle("TGOResurrected",       { "ru": {t:"воскреснуть", w:110},             "en": {t:"to be resurrected", w:142}  }, "textGOResurrected");
    setTTitle("TMiniTAdvWarningM",    { "ru": {t:"после просмотра рекламы", w:135}, "en": {t:"after watching the advertisement", w:158} }, "blMiniTAdvertisementWarningModeWordMath");
    setTTitle("TGOOneMoreTime",       { "ru": {t:"ещё раз", w:70},                  "en": {t:"one more time",     w:120}  }, "textGOOneMoreTime");
    setTTitle("TGOModes",             { "ru": {t:"режимы"},                         "en": {t:"modes"}                     });
    setTTitle("TGetMore",             { "ru": {t:"получить еще"},                   "en": {t:"get more"}                  });
    setTTitle("TYourTime",            { "ru": {t:"ваше время"},                     "en": {t:"your time"}                 });

    if (this.display.list["gameOverForWM"])
      adaptation.changeWHInterf("GameOverForWM");
    else if (this.display.list["gameOverForOther"])
      adaptation.changeWHInterf("GameOverForOther");
    else if (this.display.list["gameOverForMaze"])
      adaptation.changeWHInterf("GameOverForMaze");
    else if (this.display.list["countingRelustsForMaze"])
      adaptation.changeWHInterf("CountingRelustsForMaze");

    this.showHideSettingsLanguage("none");

    if (!this.display.list["underMenu"])
    {
      this.showHideSettingsJestik("block");
      this.showHideWarningForUser("block");

      YaGames.init().then(ysdk => 
      {
        ysdk.getPlayer().then(_player => 
        {
          if (_player.getMode() === 'lite')
          {
            this.showHideInitUser("block");
            this.initUser.anonymousUser = false;
          }
          else 
            this.showHideInitUser("none");
        });
      });
    }
    else 
      this.showHideUnderMenu("block", true);
  }

  // 
  showHideSettingsJestik(v)
  {
    document.getElementById("blSettingJestik").style.display = v;
    this.setOpenDisplay("settingJestik", (v=="block"?true:false));

    if (this.display.list["settingJestik"])
    {
      let setTTitle = (id, t, b=false) => 
      {
        let idBl = (b?t.idBl:"");
        let title = t[LANGUAGE];

        $("#"+id).html(this.firstUpperCase(title.t));

        if (b)
          $("#"+idBl).css("width", title.w+"px");
      };

      let o = this.settingsJestik;
      setTTitle("TitleSettingJestik", o.title);
      setTTitle("TitleKeySpace", o.selectedInput.pause.title);
      $("#TKeySpace").html(o.selectedInput.pause.keyT[LANGUAGE].t.toUpperCase());
      setTTitle("TBtnSettingJestik", o.btnSelected);
      setTTitle("TitleSJ", o.selectedInput.title);
      setTTitle("TextShowActv", o.selectedInput.mauseImgT);
      setTTitle("TNoteWarning-1", o.selectedInput.details.warning, true);
      setTTitle("TNoteWarning-2", o.selectedInput.details.note, true);

      adaptation.changeWHInterf("SettingJestik");

      this.selectedJestik(o.selectedInput.current.n, o.selectedInput.current.s);

      this.displayID("blPrevisChapter-settingJestik", this.display.list["underMenu"]?"none":"block");
    }
  }

  // 
  settingSpecialEffects(n)
  {
    let effect = (ids, b) => 
    {
      let id1 = ids[0];
      let id2 = ids[1];

      let n1 = adaptation.getAttrValueStyle('#'+id1, "px");
      let n2 = adaptation.getAttrValueStyle('.'+id2, "px");

      if (n2 == -1 && (id2 == "blKeyWASD" || id2 == "blKeyArrows"))
        n2 = adaptation.getAttrValueStyle('.'+id2, "px", "border-left:");

      let clr = (b?"#478949":"#973737");
      this.setBorder(id1, clr, n1>=0?n1:3);

      let f = (d) => { $("."+id2).css("border-"+d, (n2>=0?n2:4)+"px solid "+clr); };
      f("left"); f("bottom"); f("right"); f("top");

      if (id2 !== "blKeyMouse")
        $("."+id2).css("border-top", "none");
    };

    effect(["blBtnWASD", "blKeyWASD"], n==0);
    effect(["blBtnMouse", "blKeyMouse"], n==1);
    effect(["blBtnLines", "blKeyArrows"], n==2);

    this.displayID("blNoteWarning", n==1?"block":"none");
  }

  // 
  selectedJestik(n, namejestik)
  {
    this.settingSpecialEffects(n);
    joystick.setNewJoystick(namejestik);

    SELECTEDJOYSTICK = n;
    this.settingsJestik.selectedInput.current.n = n;
    this.settingsJestik.selectedInput.current.s = namejestik;
  }

  // 
  selectedSettingsJestik()
  {
    this.showHideSettingsJestik("none");

    if (!this.display.list["underMenu"])
      this.showHideModes("block");
  }

  // 
  showHideModes(v)
  {
    document.getElementById("blModes").style.display = v;
    this.setOpenDisplay("modes", (v=="block"?true:false));

    if (this.display.list["modes"])
    {
      this.showHideCanvas("none");

      $("#titleMode").html(this.firstUpperCase(this.modes.title[LANGUAGE]));

      for (let i = 1; i <= this.modes.total; i++)
      {
        let mode = this.modes.list[LANGUAGE][i-1];

        $("#nameMode-"+i).html(this.firstUpperCase(mode.title))
        $("#nameMode-"+i).css("width", mode.w+"px");
      }

      adaptation.listModes = this.modes;
      adaptation.changeWHInterf("Modes");
    }
  }

  // 
  showHideDescriptForMode(v, mode=".")  // "." - точко будет означать, что игрок выбрал режим в который хочет сыграть!
  {
    $("#blDescription").css("display", v);
    this.setOpenDisplay("descriptionForModes", (v=="block"?true:false));

    if (mode !== ".")
      this.showHideModes(v=="block"?"none":"block");

    if (this.display.list["descriptionForModes"])
    {
      let selectedMode = this.modes.descript.get(mode)[LANGUAGE];

      let idBl = {blW: "blTitleDescript", interW: "blTitleDescriptInternal"};
      let idT = {blW: "blTitleDescrip", t: "titleDescrip"};
      let idTDescr = "tDescriptMode";

      $("#"+idBl.blW).css("width", selectedMode.wBl+"px")
      $("#"+idBl.interW).css("width", selectedMode.wBl+"px")

      $("#"+idT.t).empty();
      $("#"+idT.t).html(this.firstUpperCase(selectedMode.title));
      $("#"+idT.blW).css("width", selectedMode.wT+"px")

      document.getElementById("blTDescripModeScroll").scrollTop = 0;  // сбрасываем прокрутку

      $("#"+idTDescr).empty();
      $("#"+idTDescr).html(this.firstUpperCase(selectedMode.descr));

      $("#blBtnSelected").attr("onclick", "gui.selectedMode('"+mode+"');");
      $("#btnTextSelected").html(this.firstUpperCase(this.modes.btnSelected[LANGUAGE]));

      adaptation.selectedMode = this.modes.descript.get(mode)[LANGUAGE];
      adaptation.changeWHInterf("Description");
    }
  }

  // 
  selectedMode(mode)
  {
    if (ctxData.mode.current.o !== null)
      ctxData.mode.current.o.reset();

    ctxData.mainSelectedMode(mode);
    this.showHideDescriptForMode("none");

    adaptation.changeWHInterf("blValueForSnake");

    // сброс всего
    snake.reset();
    this.decorationField.current.n = 0;
    this.decorationField.current.dt = null;
    obst.reset();
    food.reset();

    obst.createBorder();

    switch(ctxData.mode.current.title)
    {
      case "maze":
      {
        this.showHideTopic("block");
        break;
      }
      case "classic": case "infinitely": case "feedMe": case "reverseMove": case "portals":
      {
        this.showHideDecorationField("block");
        break;
      }
      case "jumpFood": case "narrowingOfZone":
      {
        this.showHideTopic("block");
        break;
      }
      case "words":
      {
        this.showHideSettingsModeWords("block");
        break;
      }
      case "mathematics":
      {
        this.showHideSettingsModeMathematics("block");
        break;
      }
    }
  }

  // 
  showHideDecorationField(v)
  {
    $("#blDecorationField").css("display", v);
    this.setOpenDisplay("decorationField", (v=="block"?true:false));

    if (this.display.list["decorationField"])
    {
      $("#titleDecorField").html(this.firstUpperCase(this.decorationField.title[LANGUAGE]));

      this.decorationField.current.dt = this.decorationField.arr.get(ctxData.mode.current.title);

      this.btnPrevisNextField("check");

      $("#btnSelectedDecorField").html(this.firstUpperCase(this.decorationField.btnSelected[LANGUAGE]));

      this.displayID("blPrevisChapter-decorationField", this.display.list["underMenu"]?"none":"block");

      adaptation.changeWHInterf("DecorationField");
    }
  }

  // 
  btnPrevisNextField(btn)
  {
    let dir = this.decorationField.dir;
    let dt = this.decorationField.current.dt;
    let img = dir + dt.img;
    let format = dt.format;

    let displayBtn = (s, display) => { $("#"+(s=="previs"?"blBtnPrevisDecorField":"blBtnNextDecorField")).css("display", display); };

    // Умный интерфейс
    if (btn == "check")
    {
      if (this.decorationField.current.n > 0)
        displayBtn("previs", "block");
      else if (this.decorationField.current.n <= 0)
        displayBtn("previs", "none");

      if (this.decorationField.current.n < dt.total)
        displayBtn("next", "block");
      else if (this.decorationField.current.n >= dt.total)
        displayBtn("next", "none");

      img += this.decorationField.current.n + format;
    }
    // =====

    if (btn == "previs")
    {
      if (this.decorationField.current.n - 1 >= 0)
      {
        img += (--this.decorationField.current.n) + format;
        displayBtn("next", "block");
      }
      
      if (this.decorationField.current.n - 1 < 0)
        displayBtn("previs", "none");
    }

    if (btn == "next")
    {
      if (this.decorationField.current.n + 1 < dt.total)
      {
        img += (++this.decorationField.current.n) + format;
        displayBtn("previs", "block");
      }
      
      if (this.decorationField.current.n + 1 >= dt.total)
        displayBtn("next", "none");
    }

    $("#blImgDecorField").css("background-image", "url('" + img + "')");
  }

  // 
  selectedDecorField()
  {
    this.showHideDecorationField("none");

    obst.selectedNumField = this.decorationField.current.n
    obst.reset();
    obst.createAdditionalObstacles();
    // obst.createAdditionalObstacles(0);

    if (!this.display.list["underMenu"])
      this.showHideTopic("block");
    else 
    {
      snake.reset();
      food.reset();

      if (ctxData.checkSelectedMode("portals"))
        ctxData.mode.current.o.reset();

      snake.mainSnake();
      food.mainFood();
    }
  }

  // 
  showHideTopic(v)
  {
    $("#blTopics").css("display", v);
    this.setOpenDisplay("topic", (v=="block"?true:false));

    if (this.display.list["topic"])
    {
      let setTTitle = (id, title, b=true) => 
      {
        if (b)
          title = title[LANGUAGE];
        else 
        {
          let idBl = title.idBl;
          title = title[LANGUAGE];
          $("#"+idBl).css("width", title.w+"px");
          title = title.t;
        }
        $("#"+id).html(this.firstUpperCase(title));
      };

      setTTitle("TitleTopics", this.topic.title);
      setTTitle("TBtnObst", this.topic.chapter["obst"].title);
      setTTitle("TBtnFont", this.topic.chapter["background"].title);
      setTTitle("TNoteClr", this.topic.note, false);
      setTTitle("TNotification", this.topic.notification, false);
      setTTitle("TBtnRandomTopics", this.topic.chapter.random.title);
      setTTitle("TBtnSelectedTopics", this.topic.btnSelected);

      this.showHideLinkOnInitUser(false, 1);

      let blClrID = document.getElementById("blMainListColors");
      let blImgID = document.getElementById("blMainListImgs");

      blClrID.addEventListener('scroll', () => 
      {
        this.createColorsListForTopic("color");
      });

      blImgID.addEventListener('scroll', () => 
      {
        this.createColorsListForTopic("image");
      });

      this.displayID("blPrevisChapter-topic", this.display.list["underMenu"]?"none":"block");

      adaptation.changeWHInterf("Topics");
    }
  }

  // 
  selectedChapter(ch)
  {
    let showHidePalette = (display, bgV=-1) => 
    {
      let selectedClrID = "blSelectedShowColor";

      this.displayID("TNoteClr", display==="block"?"none":"block");
      this.displayID(selectedClrID, display);
      if (bgV != -1)
      {
        let showHideBg = (type, s) => { $("#"+selectedClrID).css("background-"+type, ch==s?bgV.current:""); };
        showHideBg("color", "background");
        showHideBg("image", "obst");
        $("#blSelectedShowColor").attr("data-NClr", bgV.N).attr("data-type", bgV.type); // removeAttr("data-NClr").removeAttr("data-type");
      }

      this.displayID("blMainListColors", ch=="background"?"block":"none");
      this.displayID("blMainListImgs", ch=="obst"?"block":"none");

      this.displayID("blPadlock", "none");
      this.displayID("blNotification", "none");
    };

    let checkSelBl = (id, clr) => 
    {
      let o = adaptation.activeBlock2;
      switch(id)
      {
        case "obst": o.obst = clr; break;
        case "background": o.bg = clr; break;
        case "random": o.random = clr; break;
      }
    };

    checkSelBl(this.topic.chapter.previsCh, "#FFFFFF");

    this.setBorderClr("#blBtn-"+this.topic.chapter.previsCh, "#FFFFFF");
    this.topic.chapter.previsCh = ch;

    this.topic.chapter.selected = ch;

    if (ch === "obst" || ch === "background")
      showHidePalette("block", this.topic.chapter[ch].bgValue);
    else if (ch === "random")
      showHidePalette("none");

    checkSelBl(ch, "#32D042");


    this.setBorderClr("#blBtn-"+ch, "#32D042");
  }

  // 
  rememberColorNum(n, type)
  {
    let selectedCh = this.topic.chapter.selected;
    let ch = [this.topic.chapter["background"], this.topic.chapter["obst"]];

    let bgValue = "";

    if (type == "color")
      bgValue = this.getRGB(ctxData.getColorRGB(n));
    else if (type == "image")
      bgValue = this.getURLImg(ch[1].dir+ch[1].img+n+ch[1].format);

    let b = false;
    let dt = null;
    if ((dt=(selectedCh=="background"?{o:ctxData,n:0}:selectedCh=="obst"?{o:obst,n:1}:null)) !== null && dt.o.history.list[n])
    {
      // console.log(dt.n);
      b = false;
      ch[dt.n].bgValue.N = n;
      ch[dt.n].bgValue.current = bgValue;
    }
    else 
      b = true;

    this.displayID("blNotification", b?"block":"none");
    this.displayID("blPadlock", b?"block":"none");

    $("#blSelectedShowColor").css("background-"+type, bgValue);
    $("#blSelectedShowColor").attr("data-NClr", n);
    $("#blSelectedShowColor").attr("data-type", type);
  }

  // 
  unlockSelectedColor()
  {
    // console.log("Запускаю рекламный ролик для Topic.");

    this.advRewarded(() => 
    {
      let elemID = $("#blSelectedShowColor");
      if (elemID.attr("data-NClr") && elemID.attr("data-type"))
      {
        let NClr = elemID.attr("data-NClr");
        let type = elemID.attr("data-type");
        
        let o = (type=="color"?ctxData:type=="image"?obst:({}));
        o.history.list[NClr] = true;
        o.history.listOpn.push(+NClr);

        this.syncingAvatars("one", {ch: (type=="image"?"obst":type=="color"?"bgClr":""), id: +NClr});

        this.rememberColorNum(NClr, type);
      }
    });
  }

  // 
  setRandomTopic()
  {
    let NBg = this.randomNum(0, ctxData.history.listOpn.length);
    let NObst = this.randomNum(0, obst.history.listOpn.length);

    this.topic.chapter["background"].bgValue.N = ctxData.history.listOpn[NBg];
    this.topic.chapter["obst"].bgValue.N = obst.history.listOpn[NObst];
  }

  // 
  selectedTopic()
  {
    if (this.topic.chapter.selected == "random") this.setRandomTopic();

    let ch = [this.topic.chapter["background"], this.topic.chapter["obst"]];

    let bgNClr = ch[0].bgValue.N;
    let obstNClr = ch[1].bgValue.N;

    $("#canvas").css("background-color", this.getRGB(ctxData.getColorRGB(bgNClr)));

    obst.wallImg = ch[1].dir + ch[1].img + obstNClr + ch[1].format;


    // console.log(obst.wallImg);
    // console.log(this.topic.chapter["background"].bgValue);
    // console.log(this.topic.chapter["obst"].bgValue);
    this.showHideTopic("none");

    if (!this.display.list["underMenu"])
      this.showHideSettingsSnake("block");
    else 
      this.cleanSheet();
  }

  // 
  getRGB(rgb) { return "rgb("+rgb[0]+", "+rgb[1]+", "+rgb[2]+")"; };

  // 
  getURLImg(imgSrc) { return "url('" + imgSrc + "')"; }

  // 
  displayID(id, display) { $("#"+id).css("display", display); };

  // 
  setBorder(id, clr, w=1) { $("#"+id).css("border", w+"px solid "+clr); };

  // 
  setBorderClr(id, clr) { $(id).css("border-color", clr); }

  // 
  setBackground(id, clr) { $("#"+id).css("background-color", clr); }


  // 
  showHideSettingsSnake(v)
  {
    $("#blSettingsSnake").css("display", v);
    this.setOpenDisplay("settingsSnake", (v=="block"?true:false));

    if (this.display.list["settingsSnake"])
    {
      let setTTitle = (id, title, b=false) => 
      {
        let idBl = (b?title.idBl:"");
        title = title[LANGUAGE];
        $("#"+id).html(this.firstUpperCase(title.t));
        if (b)
          $("#"+idBl).css("width", title.w+"px");
      };

      adaptation.snakeDesign = this.settingsSnake.design;

      setTTitle("titleSettingsSnake", this.settingsSnake.title);
      setTTitle("titleSetSnakeSize",  this.settingsSnake.length.title);
      setTTitle("titleDesingSnake",   this.settingsSnake.design.title);
      setTTitle("titleSetSnakeSpeed", this.settingsSnake.speed.title);
      setTTitle("TNoteWarningSpeedSnake", this.settingsSnake.speed.noteWarning, true);
      setTTitle("TBtnSelectedSettingSnake", this.settingsSnake.btnSelected);

      this.showHideLinkOnInitUser(false, 2);

      this.changesLengthOfSnake();
      this.changesSpeedOfSnake();

      document.getElementById("blSetDesingSnakeScrollMain").addEventListener('scroll', () => 
      {
        // console.log("Генерирую еще "+this.settingsSnake.design.portion+" порций аватаров для змейки.");
        this.createAvatarsListForFoodOrSnake("snake");
      });

      if (this.display.list["underMenu"])
      {
        this.displayID("btnMinusLength", "none");
        this.displayID("btnPlusLength", "none");
      }
      else 
      {
        // Показываем, выбранный аватар
        this.setBorder("blBtnSelectedDesignSnake-"+this.settingsSnake.design.selectedBlN, "rgb(16, 220, 26)");

        this.reduceIncreaseLength("check");
      }

      this.displayID("blPrevisChapter-settingsSnake", this.display.list["underMenu"]?"none":"block");

      adaptation.changeWHInterf("SettingsSnake");
    }
  }

  // 
  changesLengthOfSnake()
  {
    let n = this.settingsSnake.design.current;
    let length = this.settingsSnake.length;
    let avatar = this.settingsSnake.design.avatar;
    let format = avatar.format;
    let dir = avatar.dir;

    let setImgAvatar = (id, img) => { $("#"+id).css("background-image", "url('" + dir+img+n+format + "')"); };

    setImgAvatar("avatarHead", avatar.head);
    setImgAvatar("avatarBody", avatar.body);
      
    for (let i = 1; i <= length.current; i++)
      setImgAvatar("avatarBody-"+i, avatar.body);
      
    setImgAvatar("avatarBody-"+(length.current+1), avatar.tail);

    // Изменяем размер змейки.
    snake.lengthSnakeByDefault = length.standard + length.current;
  }

  // 
  reduceIncreaseLength(c)
  {
    let max = this.settingsSnake.length.max;

    let displayBtn = (c, display) => { $("#"+(c=="-"?"btnMinusLength":"btnPlusLength")).css("display", display); };

    // Умный интерфейс
    if (c == "check")
    {
      if (this.settingsSnake.length.current > 0)
        displayBtn("-", "block");
      else if (this.settingsSnake.length.current <= 0)
        displayBtn("-", "none");

      if (this.settingsSnake.length.current < max)
        displayBtn("+", "block");
      else if (this.settingsSnake.length.current >= max)
        displayBtn("+", "none");
    }
    // =====

    if (c == "-")
    {
      if (this.settingsSnake.length.current - 1 >= 0)
      {
        let n = --this.settingsSnake.length.current;
        $("#avatarBody-"+(n+2)).css("display", "none");
        displayBtn("+", "block");
      }
      
      if (this.settingsSnake.length.current - 1 < 0)
        displayBtn("-", "none");
    }

    if (c == "+")
    {
      if (this.settingsSnake.length.current + 1 <= max)
      {
        let n = ++this.settingsSnake.length.current;
        $("#avatarBody-"+(n+1)).css("display", "block");
        displayBtn("-", "block");
      }
      
      if (this.settingsSnake.length.current + 1 > max)
        displayBtn("+", "none");
    }

    this.changesLengthOfSnake();
  }

  // 
  selectedAvatar(n)
  {
    let b = true;

    let selectedBlN = this.settingsSnake.design.selectedBlN;
    this.setBorder("blBtnSelectedDesignSnake-"+(selectedBlN!=="?"?selectedBlN:""), "#C1C1C1");

    this.settingsSnake.design.selectedBlN = n;

    let ff = () => 
    {
      snake.setNewAvatar(this.settingsSnake.design);
      this.changesLengthOfSnake();
    };

    if (n === "?")
    {
      let total = snake.history.design.listAvatarsOpn.length;
      let nm = snake.history.design.listAvatarsOpn[this.randomNum(0, total)];

      this.settingsSnake.design.current = nm;
      
      this.showHideRandImgFood("snake", true);
    }
    else if (snake.history.design.listAvatars[n])
    {
      this.showHideRandImgFood("snake");
      
      this.settingsSnake.design.current = n;
    }
    else 
    {
      this.showHideRandImgFood("snake");

      // console.log("Запускаю рекламный ролик для Snake.");
      b = false;
      n = +n;

      this.advRewarded(() => 
      {
        snake.history.design.listAvatars[n] = true;
        snake.addNewAvatar(n);

        this.settingsSnake.design.current = n;

        this.syncingAvatars("one", {ch: "snake", id: n});

        ff();
      });
    }

    this.setBorder("blBtnSelectedDesignSnake-"+(n!=="?"?n:""), "rgb(16, 220, 26)");

    if (b)
      ff();
  }

  // 
  changesSpeedOfSnake()
  {
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

    $("#TSnakeSpeed").html(speed + this.settingsSnake.speed.second[LANGUAGE].t);
    $("#blSnakeSpeed").css("width", (sz==3?55:sz==4?65:sz==5?75:0)+"px");

    adaptation.changeWHInterf("SettingsSnake");
  }

  // 
  reduceIncreaseSpeed(c)
  {
    let pressTimer = 0;

    let min = this.settingsSnake.speed.min;
    let max = this.settingsSnake.speed.max;

    let id = (c=="-"?"btnMinusSpeed":"btnPlusSpeed");

    let displayBtn = (c, display) => { $("#"+(c=="-"?"btnMinusSpeed":"btnPlusSpeed")).css("display", display); };

    let plusMinus = () => 
    {
      if (c == "-")
      {
        if (snake.speed - 1 >= min)
        {
          --snake.speed;
          displayBtn("+", "block");
        }
        
        if (snake.speed - 1 < min)
          displayBtn("-", "none");
      }

      if (c == "+")
      {
        if (snake.speed + 1 <= max)
        {
          ++snake.speed;
          displayBtn("-", "block");
        }
        
        if (snake.speed + 1 > max)
          displayBtn("+", "none");
      }

      this.changesSpeedOfSnake();
    };

    $("#"+id).click(function()
    {
      /* При обычном клике */
      plusMinus();
    }).mouseup(function()
    {
      clearTimeout(pressTimer);
      return false;
    }).mousedown(function()
    {
      pressTimer = window.setInterval(function() 
      {
        /* При долгом нажатии */
        plusMinus();
      }, 100);
      return false;
    }).mouseout(function()
    {
      clearTimeout(pressTimer);
    });
  }

  // 
  selectedSettingSnake()
  {
    this.showHideSettingsSnake("none");

    if (!this.display.list["underMenu"])
    {
      snake.reset();
      snake.mainSnake();

      if (ctxData.mode.current.title == "words"       || 
          ctxData.mode.current.title == "mathematics" || 
          ctxData.mode.current.title == "maze")
      {
        this.showHideRulesOfGame("block");
      }
      else 
        this.showHideSettingsFood("block");
    }
    else 
      this.cleanSheet();
  }

  // 
  showHideSettingsFood(v)
  {
    let displayBl = (id, v) => { $("#"+id).css("display", v); };
    
    displayBl("blSettingsFood", v);

    this.setOpenDisplay("settingsFood", (v=="block"?true:false));

    if (this.display.list["settingsFood"])
    {
      let setTTitle = (id, title, w=false) => 
      {
        let t = title[LANGUAGE];
        $("#"+id).html(this.firstUpperCase(t.t));
        if (w)
          $("#"+title.id).css("width", t.w+"px");
      };

      adaptation.snakeDesign = this.settingsFood.design;

      setTTitle("titleSettingsFood", this.settingsFood.title);
      setTTitle("titleDesingFood",   this.settingsFood.design.title, true);

      this.showHideLinkOnInitUser(false, 3);

      let idQuanBl = "blSetFoodQuantity";
      if (!ctxData.checkSelectedMode("portals"))
      {
        displayBl(idQuanBl, "block");
        setTTitle("titleSetFoodQuantity", this.settingsFood.quantity.title, true);

        this.changesQuantityOfFood();

        this.reduceIncreaseQuantity('-');
        this.reduceIncreaseQuantity('+');
      }
      else 
        displayBl(idQuanBl, "none");
      
      setTTitle("TbtnSelectedSettingFood", this.settingsFood.btnSelected);


      document.getElementById("blSetDesingFoodScrollMain").addEventListener('scroll', () => 
      {
        // console.log("Генерирую еще "+this.settingsFood.design.portion+" порций аватаров для еды.");
        this.createAvatarsListForFoodOrSnake("food");
      });

      if (!this.display.list["underMenu"])
      {
        // Показываем, выбранный food
        this.setBorder("blBtnSelectedDesignFood-"+this.settingsFood.design.selectedBlN, "rgb(16, 220, 26)");
      }

      this.displayID("blPrevisChapter-settingsFood", this.display.list["underMenu"]?"none":"block");

      adaptation.changeWHInterf("SettingsFood");
    }
  }

  // 
  selectedFood(n)
  {
    let selectedBlN = this.settingsFood.design.selectedBlN;
    $("#blBtnSelectedDesignFood-"+(selectedBlN!=="?"?selectedBlN:"")).css("border", "1px solid #C1C1C1");

    this.settingsFood.design.selectedBlN = n;

    let b = true;

    if (n === "?")
    {      
      let total = food.history.design.listAvatarsOpn.length;
      let nm = food.history.design.listAvatarsOpn[this.randomNum(0, total)];
      
      this.settingsFood.design.current = nm;

      this.showHideRandImgFood("food", true);
    }
    else if (food.history.design.listAvatars[n])
    {
      this.showHideRandImgFood("food");

      this.settingsFood.design.current = n;
    }
    else
    {
      this.showHideRandImgFood("food");

      // console.log("Запускаю рекламный ролик для Food.");
      b = false;
      n = +n;

      this.advRewarded(() => 
      {
        food.history.design.listAvatars[n] = true;
        food.addNewAvatar(n);

        this.settingsFood.design.current = n;

        this.syncingAvatars("one", {ch: "food", id: n});

        food.setNewAvatar(this.settingsFood.design);
      });
    }

    $("#blBtnSelectedDesignFood-"+(n!=="?"?n:"")).css("border", "1px solid rgb(16, 220, 26)");

    if (b)
      food.setNewAvatar(this.settingsFood.design);
  }

  // 
  changesQuantityOfFood()
  {
    $("#textSetQuantityFood").html(food.numFood);
  }

  reduceIncreaseQuantity(c)
  {
    let max = this.settingsFood.quantity.max;

    let displayBtn = (c, display) => { $("#"+(c=="-"?"btnMinusFood":"btnPlusFood")).css("display", display); };

    if (c == "-")
    {
      if (food.numFood - 1 >= 0)
      {
        --food.numFood;
        displayBtn("+", "block");
      }
        
      if (food.numFood - 1 < 0)
        displayBtn("-", "none");
    }

    if (c == "+")
    {
      if (food.numFood + 1 <= max)
      {
        ++food.numFood;
        displayBtn("-", "block");
      }
        
      if (food.numFood + 1 > max)
        displayBtn("+", "none");
    }

    this.changesQuantityOfFood();
  }

  // 
  selectedSettingFood()
  {
    this.showHideSettingsFood("none");

    food.collectionMap.clear();
    food.mainFood();

    if (!this.display.list["underMenu"])
      this.showHideRulesOfGame("block");
    else 
      this.cleanSheet();
  }

  // 
  cleanSheet()
  {
    if (snake.organisms.size > 0)
    {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      obst.drawObst();
      snake.drawOrganism();
      food.drawFood();

      if (ctxData.checkSelectedMode("portals"))
        ctxData.mode.current.o.drawPortals();
    }
  }

  // 
  showHideSettingsModeMathematics(v)
  {
    $("#blSettingsModeMath").css("display", v);
    this.setOpenDisplay("mathematics", (v=="block"?true:false));
  
    if (this.display.list["mathematics"])
    {
      let setTTitle = (id, title, b=false, c="#") => 
      {
        let idBl = (b?title.idBl:"");

        title = title[LANGUAGE];
        $("#"+id).html(this.firstUpperCase(title.t));

        if (b)
        {
          $(c+idBl).css("width", title.w+"px");
          if (c == '.')
            $(".blShowKeyHDocumentInternal").css("width", title.w+"px");
        }
      };

      let o = this.settingsModeMathematics;
      setTTitle("TitleSettingsModeMath", o.title);
      setTTitle("TitleLength", o.operand.title, true);

      setTTitle("TextTitleFirst", o.operand["one"].title);
      setTTitle("TextTitleSecond", o.operand["two"].title);

      $("#TextWholeFirst").html(o.operand["one"].whole.title[LANGUAGE].t);
      $("#TextWholeSecond").html(o.operand["two"].whole.title[LANGUAGE].t);

      $("#TMax").html(o.operand.Tmax[LANGUAGE]);
      $("#TMin").html(o.operand.Tmin[LANGUAGE]);

      setTTitle("TitleOperationSign", o.operationSign.title, true);
      setTTitle("TRandomSigns", o.operationSign.random.title);
      setTTitle("TNote", o.operationSign.note.title, true);

      setTTitle("TBtnByDefaultModeMath", o.valuesByDefault.title, true)

      setTTitle("TBtnSelectedModeMath", o.btnSelected);

      setTTitle("blTOpenDForModeMath", o.helpDoc);

      o.operand.length = (ctxData.checkSelectedMode("mathematics") ? ctxData.mode.current.o.operand.length : 0);

      if (!this.display.list["underMenu"])
        this.byDefaultForModeMath();

      this.displayID("blPrevisChapter-mathematics", this.display.list["underMenu"]?"none":"block");

      adaptation.changeWHInterf("SettingsModeMath");
    }
  }

  // 
  selectedBlValue(dt)
  {
    let smmath = this.settingsModeMathematics;

    smmath.operationSign.selectedBl = false;

    // Регулировка длины операндов
    if ($("#"+dt.id).attr("data-lenopr"))
    {
      smmath.selectedValueID = $("#"+dt.id).attr("data-whole");
      smmath.operand.selectedOperand.opr = $("#"+dt.id).attr("data-opr");
      smmath.operand.selectedOperand.ch = $("#"+dt.id).attr("data-chopr");

      this.setValueOperand("", true);
    }
    else 
    {
      smmath.operand.selectedOperand.opr = "";
      smmath.operand.selectedOperand.ch = "";
    }


    let o = adaptation.activeBlock;

    // Выбор знака-действия
    if ($("#"+dt.id).attr("data-actsign"))
    {
      this.setValueOperand("");
      smmath.operationSign.selectedBl = true;

      let nsign = +($("#"+dt.id).attr("data-nsign"));
      
      if (nsign >= 0)
      {
        let makrSign = (smmath.operationSign.markSigns[nsign].b = (smmath.operationSign.markSigns[nsign].b ? false : true));

        let selectedSign = ctxData.mode.current.o.sign.selecteds;

        let clr = "";
        if (makrSign && !selectedSign.has(nsign))  // добавить знак
        {
          clr = "#32D042";
          o.actSigns.sign[nsign] = "#32D042";
          selectedSign.set(nsign, nsign);
        }
        else if (!makrSign) // удалить знак
        {
          clr = "#C1C1C1";
          o.actSigns.sign[nsign] = "#C1C1C1";
          selectedSign.delete(nsign);
        }

        this.setBorderClr("#"+dt.id, clr);
        ctxData.mode.current.o.exampleActv = false;
      }

      this.selectedRandomSigns(nsign);
    }


    // Выставить значения по умолчанию
    if ($("#"+dt.id).attr("data-oprbydefault"))
    {
      this.setValueOperand("");
      this.byDefaultForModeMath();
    }

    this.setBorderClr("#"+smmath.previsBlValueID, "#C1C1C1");

    let checkSelBl = (id, clr) => 
    {
      switch(id)
      {
        case "blBtnByDefaultSettingsModeMath": o.byDefault = clr; break;
        case "firstBlMax": o.oprLen["first"][0] = clr; break;
        case "firstBlMin": o.oprLen["first"][1] = clr; break;
        case "secondBlMax": o.oprLen["second"][0] = clr; break;
        case "secondBlMin": o.oprLen["second"][1] = clr; break;
      }
    };

    checkSelBl(smmath.previsBlValueID, "#C1C1C1");

    if (!smmath.operationSign.selectedBl)
    {
      smmath.previsBlValueID = dt.id;
      this.setBorderClr("#"+dt.id, "#32D042");
      checkSelBl(dt.id, "#32D042");
    }
  }

  // 
  setValueOperand(c, b=false)
  {
    let smmath = this.settingsModeMathematics;
    let displayBtn = (c, display) => { $("#"+(c=="-"?"btnMinusOperand":"btnPlusOperand")).css("display", display); };

    if (smmath.operand.selectedOperand.opr.length > 0 && smmath.operand.selectedOperand.ch.length > 0)
    {
      let len = ctxData.mode.current.o.operand[smmath.operand.selectedOperand.opr].whole.length;
      let ch = smmath.operand.selectedOperand.ch;

      let length = smmath.operand.length;

      if (b)
      {
        if (len[ch] > length.min && (ch=="max" ? len[ch] > len["min"] : true))
          displayBtn("-", "block");
        else if (len[ch] <= length.min || (ch=="max" ? len[ch] <= len["min"] : false))
          displayBtn("-", "none");

        if (len[ch] < length.max && (ch=="min" ? len[ch] < len["max"] : true))
          displayBtn("+", "block");
        else if (len[ch] >= length.max || (ch=="min" ? len[ch] >= len["max"] : false))
          displayBtn("+", "none");
      }
      else 
      {
        if (c == "-")
        {
          if (len[ch] - 1 >= length.min && (ch=="max" ? len[ch] - 1 >= len["min"] : true))
          {
            --len[ch];
            displayBtn("+", "block");
          }
            
          if (len[ch] - 1 < length.min || (ch=="max" ? len[ch] - 1 < len["min"] : false))
            displayBtn("-", "none");
        }
        
        if (c == "+")
        {
          if (len[ch] + 1 <= length.max && (ch=="min" ? len[ch] + 1 <= len["max"] : true))
          {
            ++len[ch];
            displayBtn("-", "block");
          }
            
          if (len[ch] + 1 > length.max || (ch=="min" ? len[ch] + 1 > len["max"] : false))
            displayBtn("+", "none");
        }

        $("#"+smmath.selectedValueID).html(len[ch]);

        ctxData.mode.current.o.exampleActv = false;
      }
    }
    else 
    {
      displayBtn("-", "block");
      displayBtn("+", "block");
    }
  }
  
  // 
  selectedRandomSigns(nsign)
  {
    let smmath = this.settingsModeMathematics;

    if (nsign == -1)
    {
      for (let i = 0; i < smmath.operationSign.markSigns.length; i++)
      {
        let iElem = smmath.operationSign.markSigns[i];
        this.setBorderClr("#"+iElem.id, "#C1C1C1");
        adaptation.activeBlock.actSigns.sign[i] = "#C1C1C1";
        iElem.b = false;
      }
    }

    if (!smmath.operationSign.markSigns[0].b && 
        !smmath.operationSign.markSigns[1].b && 
        !smmath.operationSign.markSigns[2].b || nsign == -1)
    { // Random вкл.
      this.setBorderClr("#blRandomSigns", "#32D042");
      adaptation.activeBlock.actSigns.random = "#32D042";

      ctxData.mode.current.o.sign.selecteds.clear();
      ctxData.mode.current.o.exampleActv = false;
    }
    else 
    {
      this.setBorderClr("#blRandomSigns", "#C1C1C1");
      adaptation.activeBlock.actSigns.random = "#C1C1C1";
    }
  }

  // 
  byDefaultForModeMath()
  {
    let opr = [{id: "first", ie: "one"}, {id: "second", ie: "two"}];
    
    let setNumOpr = (id, ie, ch) => 
    { 
      let lenNum = ctxData.mode.current.o.operand[ie].whole.lenByDefault[ch];
      ctxData.mode.current.o.operand[ie].whole.length[ch] = lenNum;
      $("#"+id+"Num"+this.firstUpperCase(ch)).html(lenNum);
    };
    
    for (let i = 0; i < opr.length; i++)
    {
      let op = opr[i];
      setNumOpr(op.id, op.ie, "max");
      setNumOpr(op.id, op.ie, "min");
    }

    adaptation.activeBlock.oprLen["first"] = ["#C1C1C1", "#C1C1C1"];
    adaptation.activeBlock.oprLen["second"] = ["#C1C1C1", "#C1C1C1"];

    this.selectedRandomSigns(-1);

    this.setBorderClr("#blBtnByDefaultSettingsModeMath", "#32D042");
    adaptation.activeBlock.byDefault = "#32D042";

    ctxData.mode.current.o.exampleActv = false;
  }

  // 
  selectedSettingsModeMath()
  {
    this.showHideSettingsModeMathematics("none");

    if (!this.display.list["underMenu"])
      this.showHideTopic("block");
  }

  // 
  showHideSettingsModeWords(v)
  {
    $("#blSettingsModeWords").css("display", v);
    this.setOpenDisplay("words", (v=="block"?true:false));
  
    if (this.display.list["words"])
    {
      adaptation.selectedTopic.o = this.settingsModeWords.selectedTopic;

      let setTTitle = (id, title) => 
      {
        $("#"+id).html(this.firstUpperCase(title[LANGUAGE]));
      };

      let smw = this.settingsModeWords;
      setTTitle("TitleSettingsModeWord", smw.title);
      setTTitle("TBtnSelectedModeWords", smw.btnSelected);
      setTTitle("TitleSelectedTopicWords", smw.selectedTopic.title);
      setTTitle("randomTextTopic", smw.selectedTopic.randomTitle);

      let o = this.settingsModeWords.selectedTopic.current;
      this.showHideListTopics(o.l==""?LANGUAGE:o.l);
      this.getTopicNum(o.n, o.l==""?LANGUAGE:o.l);

      let blTopicRuID = document.getElementById("blListTopicRu");
      let blTopicEnID = document.getElementById("blListTopicEn");

      blTopicRuID.addEventListener('scroll', () => 
      {
        this.createTopicListForModeWords("ru");
      });

      blTopicEnID.addEventListener('scroll', () => 
      {
        this.createTopicListForModeWords("en");
      });

      this.displayID("blPrevisChapter-words", this.display.list["underMenu"]?"none":"block");

      adaptation.changeWHInterf("SettingsModeWords");
    }
  }

  // 
  showHideListTopics(language=LANGUAGE)
  {
    let arr = 
    [
      {id: "ru", b: language=="ru"?true:false}, 
      {id: "en", b: language=="en"?true:false}
    ];

    for (let i = 0; i < arr.length; i++)
    {
      this.displayID("blListTopic"+this.firstUpperCase(arr[i].id), arr[i].b?"block":"none");
      this.setBackground("blBtn"+this.firstUpperCase(arr[i].id)+"Topic", arr[i].b?"#838383":"");
    }

    $("#blTopic-").attr("onclick", "gui.getTopicNum(-1, '"+language+"')");

    if (this.settingsModeWords.selectedTopic.current.n == -1)
      this.getTopicNum(-1, language);

    adaptation.selectedTopic.lang = language;
    adaptation.changeWHInterf("SettingsModeWords");
  }

  // 
  getTopicNum(n=this.settingsModeWords.selectedTopic.current.n, language=LANGUAGE)
  {
    let smw = this.settingsModeWords.selectedTopic;
    smw.current.l = language;

    this.setBackground(smw.previsBl, "");

    let b = (n >= 0 ? true : false);
    let Blid = "blTopic"+(b?this.firstUpperCase(smw.current.l):"")+"-"+(b?n:"");
    
    smw.previsBl = Blid

    this.setBackground(Blid, "#488945");

    smw.current.n = n;
  }

  // 
  selectedSettingsModeWords()
  {
    let smw = this.settingsModeWords.selectedTopic.current;

    let o = ctxData.mode.current.o;
    if (o.NTopic != smw.n || o.LANGUAGE != smw.l)
    {
      o.NTopic = smw.n;
      ctxData.mode.current.o.LANGUAGE = smw.l;
      o.separationActv = false;
      o.valueHint.active = false;
    }

    // console.log("Language: "+ctxData.mode.current.o.LANGUAGE);
    // console.log("N: "+o.NTopic);
    // console.log("-----");

    this.showHideSettingsModeWords("none");

    if (!this.display.list["underMenu"])
      this.showHideTopic("block");

  }

  // 
  showHideRulesOfGame(v)
  {
    $("#blRulesOfGame").css("display", v);
    this.setOpenDisplay("rulesOfGame", (v=="block"?true:false));

    if (this.display.list["rulesOfGame"])
    {
      let setTTitle = (id, title, b=false) => 
      {
        let idBl = (b?title.idBl:"");
        title = title[LANGUAGE];
        $("#"+id).html(this.firstUpperCase(title.t));
        if (b)
          $("#"+idBl).css("width", title.w+"px");
      };

      setTTitle("TitleSettingsRulesOfGame", this.rulesOfGame.title);
      setTTitle("TBtnSelectedRulesOfGame", 
        this.display.list["underMenu"] 
        ?
        {
          idBl: "blTBtnSelectedRulesOfGame",
          "ru":{t:"продолжить игру",w:205}, 
          "en":{t:"continue the game",w:205}
        } 
        :
        this.rulesOfGame.btnSelected, true);

      this.showRulesOfGameForMode();

      this.displayID("blPrevisChapter-rulesOfGame", this.display.list["underMenu"]?"none":"block");

      adaptation.changeWHInterf("RulesOfGame");
    }
  }

  // 
  showRulesOfGameForMode()
  {
    let currentMode = ctxData.mode.current.title;

    $("#blRulesOfGameText")
      .empty()
      .append((LANGUAGE=="ru"?(new PagesForRulesOfGameRu()):(new PagesForRulesOfGameEn)).getPage(currentMode))
      .scrollTop(0);
  }

  // 
  playGame()
  {
    this.showHideRulesOfGame("none");

    if (!this.display.list["underMenu"])
    {
      if (ctxData.mode.current.title == "maze")
        this.showHideLevelsForMaze("block");
      else
      {
        this.showHideCanvas("block");

        pauseON();
        ctxData.hideShowBlAllValueScore("block");
        
        if (ctxData.checkSelectedMode("words") || ctxData.checkSelectedMode("mathematics"))
          ctxData.showHideBlMaps("block");

        ctxData.showBlValueScore();
      }
    }
  }


  // 
  showHideCanvas(v)
  {
    $("#canvas").css("display", v);
    this.setOpenDisplay("canvas", (v=="block"?true:false));

    if (this.display.list["canvas"]);
  }


  // Генерация случайных чисел
  randomNum(min, max)
  {
    let ntmp = Math.floor(Math.random() * (max - 0) + min);
    return (ntmp > max ? max : ntmp);
  }


  // 
  tooltipFun(elem, tooltipBl, b=false)
  {
    $(!b?"#"+elem:"."+elem).mousemove(function (e)
    {
      let show = true;

      let nSnake = $(this).attr("data-nsnake");
      let nFood = $(this).attr("data-nfood");
      
      let nClr = $(this).attr("data-NClr");
      let type = $(this).attr("data-type");

      let szw = $(this).attr("data-szw");

      if (nSnake !== undefined && snake.history.design.listAvatars[+nSnake]) show = false;
      if (nFood  !== undefined && food.history.design.listAvatars[+nFood])   show = false;

      if (nClr !== undefined && type !== undefined)
      {
        if (type === "color" && ctxData.history.list[+nClr])   show = false;
        else if (type === "image" && obst.history.list[+nClr]) show = false;
      }

      if (szw !== undefined)
        $("#TtooltipSZW").html((LANGUAGE=="ru"?"слов":"words")+": "+szw);

      if (show)
      {
        $("#"+tooltipBl).css(
        { 
          "top" : e.pageY + 5,
          "left" : e.pageX + 5
        }).show();
      }
    }).mouseout(function () 
    {
      $("#"+tooltipBl).hide().css(
      {
        "top" : 0,
        "left" : 0
      });
    });
  };

  // 
  showHideRandImgFood(s, actv=false)
  {
    let b = (s=="snake"?true:false);
    let design = (b?this.settingsSnake.design:this.settingsFood.design);
    let img = "";

    if (actv)
    {
      let dir = design.avatar.dir;
      let N = design.current;
      let format = design.avatar.format;

      img = dir+(b ? design.avatar.full : design.avatar.food)+N+format;
    }

    $.fn.showHideCounter = function() 
    {
      $(this).css("display", actv?"block":"none");

      if (actv)
        $(this).html(+design.current+1);
      else 
        $(this).empty();
    };

    $.fn.showHideImgRandom = function()
    {
      $(this).css("display", actv?"block":"none");
      
      if (actv)
        $(this).css("background-image", "url('" + img + "')");
    };

    $("#counterBlInScrll"+(b?"Snake":"Food")).showHideCounter();
    $("#imgRandom"+(b?"Snake":"Food")).showHideImgRandom();
  }


  // Определить высоту scroll
  determineHeightScroll(id)
  {
    return Math.max(id.scrollHeight, id.offsetHeight, id.clientHeight);
  }

  // Создать список тем на Ru или En язаке для режима words
  createTopicListForModeWords(type, active=false)  // active - этот нужен только при первом старте из 'start.js'
  {
    let smw = this.settingsModeWords.selectedTopic;

    let b = (type=="ru"?true:false);
    let o = smw[type];
    
    let scrollTopicRuID = document.getElementById("blListTopicRu");
    let scrollTopicEnID = document.getElementById("blListTopicEn");
    let scrollID = (b?scrollTopicRuID:scrollTopicEnID);

    let lowerBound = this.determineHeightScroll(scrollID) - smw.lowerBound;

    let mainWord = new MainWord();
    let totalTopics = mainWord.quantityTopic;
    let quantityShow = o.quantityShow;
    
    if (active || scrollID.scrollTop >= lowerBound && quantityShow < totalTopics)
    {
      let checkB = () => { return (b?"Ru":"En"); };

      $("#blListTopic"+checkB()).css("overflow", "hidden");

      let portion = smw.portion;

      let remains = (totalTopics % portion);

      if (quantityShow + portion <= totalTopics - remains)
      {
        o.quantityShow += portion;
      }
      else
      {
        o.quantityShow += remains;
      }

      totalTopics = o.quantityShow;

      let offsetBl = 
      {
        px: [0, 33.5, 67, 100], 
        py: 0,
        setOffsetXY: (left, top) => 
        {
          let s1 = "left: "+left+"%; ";
          let s2 = "top: "+top+"%; ";
          let s3 = "transform: translate(-"+left+"%, -"+top+"%);";
          return s1+s2+s3;
        }
      };

      let NTopic = quantityShow;
      let NBl = NTopic;
  
      let row = 4;

      let tr = Math.ceil((portion) / row);

      let previsTr = o.NPortion * tr;
      tr = (o.NPortion+1) * tr;

      let NPortionBool = o.NPortion >= 1;

      for (let y = (NPortionBool ? o.pastPos.y : previsTr); y < tr; y++)
      {
        for (let x = (y == 0 || y == o.pastPos.y ? o.pastPos.x : 0); x < row; x++)
        {
          NBl++;
          let n = NBl-1;
  
          let offset = offsetBl.setOffsetXY(offsetBl.px[x], offsetBl.py);
          
          let onClickFun = 'onclick="gui.getTopicNum('+n+', \''+type+'\')"';
          let dt = mainWord.list[type][n];

          let comment = '<!-- blTopic-'+NBl+' -->';
          let blMain = '<div id="blTopic'+checkB()+'-'+n+'" class="blTopic settingsModeWords'+checkB()+'-elm-12-'+NBl+'"'+
                       ' style="'+offset+'" '+onClickFun+' data-szw="'+dt.szw+'">';
          let blTopicInternal = '<div class="blTopicInternal settingsModeWords'+checkB()+'-elm-13-'+NBl+'">';
          let blTextTopic = '<div class="blTextTopic settingsModeWords'+checkB()+'-elm-14-'+NBl+'">';
          let titleTopic = '<span class="t-roboto-black">'+this.firstUpperCase(dt.t)+'</span>';

          blMain += blTopicInternal;
          blMain += blTextTopic;
          blMain += titleTopic+'</div></div></div>';
  
          $("#blListTopic"+checkB()).append(comment, blMain);

          this.tooltipFun("blTopic"+checkB()+"-"+n, "tooltipSZW");
          
          if (NBl >= totalTopics)
          {            
            o.pastPos.y = y;
            o.pastPos.x = x+1;

            o.NPortion++;

            $("#blListTopic"+checkB()).css("overflow", "");
            return ;
          }
        }

        offsetBl.py += 13.25;
      }
    }
  }


  // Создать список цветов/img для темы и препятствий
  createColorsListForTopic(type, active=false)  // active - этот нужен только при первом старте из 'start.js'
  {
    let b = (type=="color"?true:false);
    let o = (b?this.topic.chapter["background"]:this.topic.chapter["obst"]);
    
    let scrollColorID = document.getElementById("blMainListColors");
    let scrollImgID = document.getElementById("blMainListImgs");
    let scrollID = (b?scrollColorID:scrollImgID);

    let lowerBound = this.determineHeightScroll(scrollID) - o.lowerBound;

    let totalColors = (b ? ctxData.getColorRGB() : this.topic.chapter["obst"].totalImg);
    let quantityShow = o.quantityShow;
    
    if (active || scrollID.scrollTop >= lowerBound && quantityShow < totalColors)
    {
      let checkB = () => { return (b?"Colors":"Imgs"); };

      $("#blMainList"+checkB()).css("overflow", "hidden");

      let portion = o.portion;

      let remains = (totalColors % portion);

      if (quantityShow + portion <= totalColors - remains)
      {
        o.quantityShow += portion;
      }
      else
      {
        o.quantityShow += remains;
      }

      totalColors = o.quantityShow;

      let offsetBl = 
      {
        px: 0, 
        py: o.py,
        setOffsetXY: (left, top) => 
        {
          let s1 = "left: "+left+"%; ";
          let s2 = "top: "+top+"%; ";
          let s3 = "transform: translate(-"+left+"%, -"+top+"%);";
          return s1+s2+s3;
        }
      };

      let NColor = quantityShow;
      let NBl = NColor;
  
      let row = 10;

      let tr = Math.ceil((portion) / row);

      let previsTr = o.NPortion * tr;
      tr = (o.NPortion+1) * tr;

      let NPortionBool = o.NPortion >= 1;

      for (let y = (NPortionBool ? o.pastPos.y : previsTr); y < tr; y++)
      {
        for (let x = (y == 0 || y == o.pastPos.y ? o.pastPos.x : 0); x < row; x++)
        {
          NBl++;
          let n = NBl-1;
  
          let offset = offsetBl.setOffsetXY(offsetBl.px, offsetBl.py);
          
          let onClickFun = 'onclick="gui.rememberColorNum('+n+', \''+type+'\')"';
          
          let border = (b?'border: 1px solid '+this.getRGB(ctxData.getColorRGB(n))+';':'');
          
          let background = "";
          
          if (type == "color")
            background = 'background-color: '+this.getRGB(ctxData.getColorRGB(n))+';';
          else if (type == "image")
          {
            background = 'background-image: '+this.getURLImg(o.dir+o.img+n+o.format)+';';
          }

          let blMain = '<div class="'+(b?"blClr":"blSpr")+' topics-elm-26" '+onClickFun+' style="'+offset+border+background+'"></div>';
  
          $(".blMainList"+checkB()).append(blMain);
          
          if (NBl >= totalColors)
          {            
            o.pastPos.y = y;
            o.pastPos.x = x+1;

            o.NPortion++;

            o.py = offsetBl.py;

            adaptation.changeWHInterf("Topics");

            $("#blMainList"+checkB()).css("overflow", "");
            return ;
          }

          offsetBl.px += 10.785;
        }

        offsetBl.px = 0;
        offsetBl.py += 15.8;
      }

      o.py = offsetBl.py;
      adaptation.changeWHInterf("Topics");
    }
  }

  // Создать список аватаров для змейки или еды
  createAvatarsListForFoodOrSnake(design, active=false)  // active - этот нужен только при первом старте из 'start.js'
  {
    let b = (design=="snake"?true:false);
    let o = (b ? this.settingsSnake : this.settingsFood);

    let scrollTopSnakeID = document.getElementById("blSetDesingSnakeScrollMain");
    let scrollTopFoodID = document.getElementById("blSetDesingFoodScrollMain");
    let scrollID = (b?scrollTopSnakeID:scrollTopFoodID);

    let lowerBound = this.determineHeightScroll(scrollID) - o.design.lowerBound;

    let totalAvatars = o.design.avatar.total;
    let quantityShow = o.design.quantityShow;
    
    if (active || scrollID.scrollTop >= lowerBound && quantityShow < totalAvatars)
    {
      let checkB = () => { return (b?"Snake":"Food"); };

      $("#blSetDesing"+checkB()+"ScrollMain").css("overflow", "hidden");
      $("#blSending"+checkB()).css("display", "block");

      let portion = o.design.portion;

      let remains = (totalAvatars % portion);

      if (quantityShow + portion <= totalAvatars - remains)
      {
        o.design.quantityShow += portion;
      }
      else
      {
        o.design.quantityShow += remains;
      }

      totalAvatars = o.design.quantityShow;

      totalAvatars += (quantityShow==0?1:0);
  
      let offsetBl = 
      {
        offsetX: b?70:84,
        offsetY: b?167:77,
        setOffsetXY: (left, top) => { return "margin-left: "+((b?19:14)+left)+"px; margin-top: "+top+"px;"; }
      };

      let imgPadlock = o.design.avatar.padlock;
      let imgAvatar = o.design.avatar.dir + (b ? this.settingsSnake.design.avatar.full : o.design.avatar.food);
      let format = o.design.avatar.format;

      let w = (b?16:40);
      let h = (b?96:40);

      let NAvatar = quantityShow;
      let NBl = NAvatar;
  
      let row = 4;

      let tr = Math.ceil(portion / row); 

      let previsTr = o.design.NPortion * tr;
      tr = (o.design.NPortion+1) * tr;

      let NPortionBool = o.design.NPortion >= 1;

      for (let y = (NPortionBool ? o.design.pastPos.y : previsTr); y < tr; y++)
      {
        for (let x = (y == 0 || y == o.design.pastPos.y ? o.design.pastPos.x : 0); x < row; x++)
        {
          NBl++;
          let n = NBl-1;

          let symb = "?";
          let dataN = "";
          let tooltip = "";

          if (NBl-1 !== 0)
          {
            n = NAvatar++;

            symb = n;
            dataN = 'data-n'+(b?'snake':'food')+'="'+n+'"';
            tooltip = "blDesign"+checkB();
          }
  
          let style = offsetBl.setOffsetXY(offsetBl.offsetX * x, offsetBl.offsetY * y);
  
          let comment = "<!-- Design"+checkB()+"-"+symb+" -->";
          
          let blMain = '<div '+dataN+' '+'id="blBtnSelectedDesign'+checkB()+'-'+(symb==='?'?"":symb)+'"'+
                       ' class="'+tooltip+' blBtnSelectedDesign'+checkB()+
                       '" onclick="gui.selected'+(b?"Avatar":"Food")+'(\''+symb+'\')" style="'+style+'">';
          
          let blMainInternal = '<div class="blBtnSelectedDesign'+checkB()+'Internal settings'+checkB()+'-elm-21">';
          blMainInternal += '<div class="settings'+checkB()+'-elm-22"><span '+(symb=="?"?'id="counterBlInScrll'+checkB()+'"':"")+
                            ' class="t-roboto-medium counterBlInScrll">'+(n+1)+'</span></div>';

          let selfDesign = '<div class="selfDesign'+checkB()+' settings'+checkB()+'-elm-23-'+(symb==='?'?"":symb)+'"';

          if (!dataN)
          {            
            selfDesign += '><span class="t-roboto-black">?</span>';

            let imgRandom = '<div id="imgRandom'+checkB()+'" class="imgRandom'+checkB()+'"></div></div>';
            
            selfDesign += imgRandom;
          }
          else
          {
            selfDesign += ' style="width: '+w+'px; height: '+h+'px; '+
                               (b?"":"background-size: 40px;")+
                               ' background-image: url(\''+imgAvatar+n+format+'\')"></div>';

            if (!(b?snake:food).history.design.listAvatars[n])
            {
              selfDesign += '<div id="blockingDesign'+checkB()+'-'+n+
                                 '" class="selfDesign'+checkB()+
                                 '" style="width: 16px; height: 20px; '+
                                 (b?"":"background-size: 15px;")+
                                 ' background-image: url(\''+imgPadlock+'\');"></div>';
            }
          }
          
          blMain += blMainInternal;
          blMain += selfDesign;
          blMain += "</div></div>";
  
          $(".blSetDesing"+checkB()+"ScrollMain").append(comment, blMain);

          this.tooltipFun("blDesign"+checkB(), "tooltipDesign", true);
          
          if (NBl >= totalAvatars) 
          {            
            o.design.pastPos.y = y;
            o.design.pastPos.x = x+1;

            o.design.NPortion++;

            if (this.display.list["settingsSnake"])
              adaptation.changeWHInterf("SettingsSnake");
            else (this.display.list["settingsFood"])
              adaptation.changeWHInterf("SettingsFood");

            $("#blSetDesing"+checkB()+"ScrollMain").css("overflow", "");
            $("#blSending"+checkB()).css("display", "none");
            return ;
          }
        }
      }

      if (this.display.list["settingsSnake"])
        adaptation.changeWHInterf("SettingsSnake");
      else (this.display.list["settingsFood"])
        adaptation.changeWHInterf("SettingsFood");
    }
  }


  // Создать список доступных режимов
  createModeList()
  {
    let totalModes = this.modes.total;
 
    let offsetBl = 
    {
      px: [0, 50, 100], 
      py: [0, 54.5, 109, 163.5],
      setOffsetXY: (left, top) => 
      {
        let s1 = "left: "+left+"%; ";
        let s2 = "top: "+top+"%; ";
        let s3 = "transform: translate(-"+left+"%, -"+top+"%);";
        return s1+s2+s3;
      }
    };
 
    let NBl = 0;
 
    let tr = Math.ceil(totalModes/ROW);
 
    for (let y = 0; y < tr; y++)
    {
      for (let x = 0; x < ROW; x++)
      {
        NBl++;

        let selectedMode = this.modes.allModes[NBl-1];
 
        let style = offsetBl.setOffsetXY(offsetBl.px[x], offsetBl.py[y]);
 
        let comment = "<!-- Mode-"+NBl+" -->";
        let blMain = '<div class="blMode modes-elm-7-'+NBl+'" style="'+style+'">';
        let blMainInternal = '<div class="blModeInternal modes-elm-8-'+NBl+'">';

        let blBtnInfo = '<div class="blBtnInfo modes-elm-9-'+NBl+'" onclick="gui.showHideDescriptForMode('+"'block', '"+selectedMode+'\')">';
        let blInfoPartInternal = '<div class="blInfoPartInternal modes-elm-10-'+NBl+'">';
        let blInfoPart = '<div class="blInfoPart modes-elm-11-'+NBl+'">';
        let InfoPart1 = '<div class="Info-part-1 modes-elm-12-'+NBl+'"></div>';
        let InfoPart2 = '<div class="Info-part-2 modes-elm-13-'+NBl+'"></div></div></div></div>';

        let blNameMode = '<div class="blNameMode modes-elm-14-'+NBl+'">';
        let blNameModeInternal = '<div class="blNameModeInternal modes-elm-15-'+NBl+'">';
        let nameMode = '<span id="nameMode-'+NBl+'" class="nameMode t-roboto-medium" ></span></div></div>';
 
        blMain += blMainInternal;
        blMain += blBtnInfo;
        blMain += blInfoPartInternal;
        blMain += blInfoPart;
        blMain += InfoPart1;
        blMain += InfoPart2;
        blMain += blNameMode;
        blMain += blNameModeInternal;
        blMain += nameMode
        blMain += "</div></div>";
 
        $(".blSelectedModeInternal").append(comment, blMain);
         
        if (NBl >= totalModes) return ;
      }
    }
  }

  // 
  showHideLevelsForMaze(v)
  {
    document.getElementById("blLevelsForMaze").style.display = v;
    this.setOpenDisplay("levelsForMaze", (v=="block"?true:false));

    if (this.display.list["levelsForMaze"])
    {
      this.showOpenLevelsForMaze();
      this.showEarnedStarsBehindLevelForMaze();

      adaptation.changeWHInterf("LevelsForMaze");
    }
  }

  // 
  showOpenLevelsForMaze()
  {
    let listOpen = historyForMaze.levels.listOpen;
    let totalLVL = historyForMaze.levels.total;

    let opnImg = "./GUI/mainMenu/ico/apple.png";
    let clsImg = "./GUI/modes/maze/padlock.png";
    
    for (let i = 1; i <= totalLVL; i++)
    {
      let img = "";

      if (listOpen[i-1])
      {
        img = opnImg;
        $("#blBtnPlayLvlMaze-"+i).css("border", "none");
        $("#blBtnPlayLvlMaze-"+i).attr("onclick", "ctxData.mode.current.o.openSelectedMaze("+(i-1)+");");
      }
      else
        img = clsImg;

      $("#blBtnPlayLvlMaze-"+i).css("background-image", "url('" + img + "')");
    }
  }

  // 
  showEarnedStarsBehindLevelForMaze()
  {
    let totalLVL = historyForMaze.levels.total;

    let listStar = historyForMaze.earnedStars.list;
    let totalStars = historyForMaze.earnedStars.totalStars;

    let fullStar = "fullStarImg";
    let borderStar = "borderStarImg";

    for (let i = 1; i <= totalLVL; i++)
    {
      for (let j = 0; j < totalStars; j++)
      {
        let iElm = $("#blBtnPlayLvlMaze-"+i+"_"+(j+1));
        let change = (del, add) => { iElm.removeClass(del).addClass(add); };

        if (j < listStar[(i-1)])
          change(borderStar, fullStar);
        else
          change(fullStar, borderStar);
      }
    }
  }

  // 
  showEarnedStarsCurrentLvl(NStars)
  {
    let totalStars = historyForMaze.earnedStars.totalStars;
    
    let fullStar = "./GUI/modes/maze/star.png";
    let borderStar = "./GUI/modes/maze/starBorder.png";

    for (let i = 1; i <= totalStars; i++)
    {
      let img = "";
      if (i <= NStars)
       img = fullStar;
      else 
       img = borderStar;

      $("#blImgStar-"+i).css("background-image", "url('" + img + "')");
    }
  }

  // CountingResults
  showHideCountingResults(display, animation)
  {
    if (ctxData.checkSelectedMode("maze"))
    {
      this.setOpenDisplay("countingRelustsForMaze", (display=="block"?true:false));

      this.showHideCanvas(display=="block"?"none":"block");

      if (display == "block")
      {
        this.showHideBlGift("none");
        
        this.showHideLinkOnInitUser(false, 6);

        adaptation.changeWHInterf("CountingRelustsForMaze");
      }

      document.getElementById("blCountingResultsCurrenLvlForMaze").style.display = display;
    }

    ctxData.hideShowBlAllValueScore(animation=="off"?"none":"block");

    switch(animation)
    {
      case "off": pauseOFF(); resetMouseDt(); break;
      case "on":  pauseON();  break;
    }
  }

  // 
  showHideBlGift(display, num=0)
  {
    document.getElementById("blGiftBehindTime").style.display = display;
    document.getElementById("textGiftBehindTime").innerHTML = "x"+num;

    if (display == "block")
      this.openCloseGift(display);
  }

  // 
  openCloseGift(display)
  {
    document.getElementById("imgGift").style.display = display;
    document.getElementById("blReceivedGift").style.display = (display=="none"?"block":"none");
  }

  // GameOver
  showHideGameOver(display, animation)
  {
    if (ctxData.checkSelectedMode("maze"))
    {
      this.setOpenDisplay("gameOverForMaze", (display=="block"?true:false));

      if (display == "block")
        adaptation.changeWHInterf("GameOverForMaze");

      document.getElementById("blGameOverForMaze").style.display = display;
      ctxData.mode.current.o.showBtnResume("none");
    }
    else if (ctxData.checkSelectedMode("words") || ctxData.checkSelectedMode("mathematics"))
    {
      this.setOpenDisplay("gameOverForWM", (display=="block"?true:false));

      document.getElementById("blGameOverForModeWordMath").style.display = display;

      if (display == "block")
      {
        ctxData.setRecordAndCurScore("1");

        food.setNewScore();
        
        this.showHideLinkOnInitUser(false, 4);

        adaptation.changeWHInterf("GameOverForWM");
      }

      let blNumExamplesWords = (display) => 
      {
        $("#blGuessedExamplesMath").css("display", display?"none":"block");
        $("#blGuessedHintWordsMath").css("display", display?"block":"none");
      }; 

      let num = 0;
      switch(ctxData.mode.current.title)
      {
        case "words":
        {
          num = ctxData.mode.current.o.numOfGuessedWords;
          
          blNumExamplesWords(true);
          $("#numGuessedWordsMath").html(num);
          $("#textHintWordsMath").html(ctxData.mode.current.o.numOfHintsUsed);
          break;
        }
        case "mathematics":
        {
          num = ctxData.mode.current.o.numOfSolvedExamples;

          blNumExamplesWords(false);
          $("#numGuessedExamplesMath").html(num);
          break;
        }
      }
    }
    else
    {
      this.setOpenDisplay("gameOverForOther", (display=="block"?true:false));

      document.getElementById("blGameOverForOther").style.display = display;

      if (display == "block")
      {
        ctxData.setRecordAndCurScore("2");

        this.showHideLinkOnInitUser(false, 5);

        adaptation.changeWHInterf("GameOverForOther");
      }
    }

    ctxData.hideShowBlAllValueScore(animation=="off"?"none":"block");
    this.showHideCanvas(animation=="off"?"none":"block");

    switch(animation)
    {
      case "off": pauseOFF(); resetMouseDt(); break;
      case "on":  pauseON();  break;
    }
  }

  // Создать список уравней (блоков) для режима maze
  createLevelsListForMaze()
  {
    let totalLvls = historyForMaze.levels.total;

    let offsetBl = 
    {
      px: [0, 50, 100], 
      py: [0, 54.5, 109, 163.5, 218],
      setOffsetXY: (left, top) => 
      {
        let s1 = "left: "+left+"%; ";
        let s2 = "top: "+top+"%; ";
        let s3 = "transform: translate(-"+left+"%, -"+top+"%);";
        return s1+s2+s3;
      }
    };

    let NBl = 0;
    
    let NLvl = (n) => 
    {
      n = ""+n;
      switch(n.length)
      {
        case 1: return "00"+n;
        case 2: return "0"+n;
        case 3: return n;
      }
    };

    let tr = Math.ceil(totalLvls/ROW);

    for (let y = 0; y < tr; y++)
    {
      for (let x = 0; x < ROW; x++)
      {
        NBl++;

        let style = offsetBl.setOffsetXY(offsetBl.px[x], offsetBl.py[y]);

        let comment = "<!-- Level-"+NBl+" -->";
        let blMain = '<div class="blLevelForMaze levelsForMaze-elm-6-'+NBl+'" style="'+style+'">';
        let blMainInternal = '<div class="blLevelForMazeInternal levelsForMaze-elm-7-'+NBl+'">';

        let blNumLevel = '<div class="blNumLevel levelsForMaze-elm-8-'+NBl+'">';
        let numLvl = '<span class="t-roboto-bold">#'+NLvl(NBl)+'</span></div>';

        let blBtnPlayLvlMaze = '<div id="blBtnPlayLvlMaze-'+NBl+'" class="blBtnPlayLvlMaze blBtnPlayLvlMaze-'+NBl+'"></div>';

        let blNumberOfStarsLvl = '<div class="blNumberOfStarsLvl levelsForMaze-elm-9-'+NBl+'">';
        let blNumberOfStarsLvlInternal = '<div class="blNumberOfStarsLvlInternal levelsForMaze-elm-10-'+NBl+'">';
        let blStars = '<div class="blStars levelsForMaze-elm-11-'+NBl+'">';
        let blStarsInternal = '<div class="blStarsInternal">';

        let imgStar_1 = '<div id="blBtnPlayLvlMaze-'+NBl+'_1" class="imgStar-1"></div>';
        let imgStar_2 = '<div id="blBtnPlayLvlMaze-'+NBl+'_3" class="imgStar-2"></div>';
        let imgStar_3 = '<div id="blBtnPlayLvlMaze-'+NBl+'_5" class="imgStar-3"></div>';
        let imgStar_4 = '<div id="blBtnPlayLvlMaze-'+NBl+'_4" class="imgStar-4"></div>';
        let imgStar_5 = '<div id="blBtnPlayLvlMaze-'+NBl+'_2" class="imgStar-5"></div></div></div></div></div>';

        blMain += blMainInternal;
        blMain += blNumLevel;
        blMain += numLvl;
        blMain += blBtnPlayLvlMaze;
        blMain += blNumberOfStarsLvl;
        blMain += blNumberOfStarsLvlInternal;
        blMain += blStars;
        blMain += blStarsInternal;
        blMain += imgStar_1 + imgStar_2 + imgStar_3 + imgStar_4 + imgStar_5;
        blMain += "</div></div>";

        $(".blSelectedLevelForMazeInternal").append(comment, blMain);
        
        if (NBl >= totalLvls) return ;
      }
    }
  }
}
