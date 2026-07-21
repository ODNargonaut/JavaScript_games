/* Магические числа */

// Выбранный язык
let LANGUAGE = "ru";

// Направления
let DLEFT  = "left";
let DUP    = "up";
let DRIGHT = "right";
let DDOWN  = "down";

// Подсказка
let DHINT = "hint";

// Кол-во столбиков в строке для режима maze
let ROW = 3;

// Игровые объкты
let ctxData, snake, obst, food, gui, adaptation;

// Выбранный джестик
let SELECTEDJOYSTICK = null

// Боковая точка-выхода
let SIDEPOINTL = 0;
let SIDEPOINTR = 1;

// Размер клетки
let SZCELL = 16;
let SZCELL2 = 16;  // нужна только при масштабировании экрана


// Холст в виде сетки
let canvasWidth = ctx.canvas.width / SZCELL2;
let canvasHeight = ctx.canvas.height / SZCELL2;


/* Error */
let OK = 200;
let EMAXSZ = 3;  // Maximum size of has been exceeded