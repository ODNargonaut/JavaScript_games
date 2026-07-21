let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let usr = new Image();  // корабль user
let enm = new Image();  // корабль врага
let bllt = new Image(); // пуля user
let bbx = new Image();  // взрыв от пули
let XP = new Image();   // XP игрока

let theEndGame = false;

let enemys = [];
let enemysInfo = // инфо об враге
{ 
    img: './img/enemys/enemy1.png',  // 132x98
    dx: [1750, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300],
    dy: [400, 90, 140, 190, 240, 290, 340, 390, 440, 490, 540, 590, 640, 690, 740, 790, 80],
    dWidth: 132,
    dHeight: 98, 
    change_direc_UFO_Y: true,  // изменить направление Врага по оси Y
    change_direc_UFO_X: true,  // изменить направление Врага по оси X
    enemyUp: 0,    // движение врага вверх
    enemyDown: 0,  // движение врага вниз
    enemyLeft: 3,  // движение врага влево
    Num_enemy: 0,  // всего исчезнувших врагов с холста 
    EnemyMaxs: 100  // максимально кол-во врагов
};
enm.src = enemysInfo.img;
let EnemyMax = enemysInfo.EnemyMaxs; 

let spaceshipUser = // инфо об игроке
{
    img: './img/user/user_shooter.png',  // 265x112
    sx: 265,
    sy: 0,
    sWidth: 265,
    sHeight: 112,
    dx: 50,
    dy: 300,
    dWidth: 225,
    dHeight: 82,
    shotUsr: 1,       // кадр для корабля user
    userPlayUp: 13,   // движение игрока вверх
    userPlayDown: 13, // движение игрока вниз
    imgLove:
    {
        img: './img/love/love.png', // 171x152
        dx: 1750,
        dy: 5,
        dWidth: 48,
        dHeight: 42, 
    }, 
    XP: 300
}
usr.src = spaceshipUser.img;
XP.src = spaceshipUser.imgLove.img;

let clickSpace = false; // off стрельба
let clickUp = false;    // off движение вверх
let clickDown = false;  // off движение вниз

let bullet = []; // все наши пули
let bulletsInfo = // инфо об пуле
{
    img: './img/bullets/bullet_user1.png',
    imgBabax: 
    {
        img: './img/bullets/bullet_babax/babax.png',
        sx: 83,
        sy: 0,
        sWidth: 80,
        sHeight: 78,
        dWidth: 83,
        dHeight: 78
    },
    dx: 175,
    dy: 309,
    dWidth: 138,
    dHeight: 8, 
    timer: 0, 
    bullets: 0
};
bllt.src = bulletsInfo.img;
bbx.src = bulletsInfo.imgBabax.img;

let score = 0; // счет игрока



// Рисуем текст
function drawText(font, color, text, num, x, y)
{
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.fillText(text+num, x, y);
}

document.addEventListener("keydown", spaceNO, false); // стрельба вкл
document.addEventListener("keyup", spaceOFF, false); // стрельба выкл

// стрельба при нажатии ------
function spaceNO(e) 
{
    if (e.keyCode === 32) 
    {
        clickSpace = true;
    }
}

function spaceOFF(e)
{
    if (e.keyCode === 32) 
    {
        clickSpace = false;
    }
}
//------------------------------


document.addEventListener("keydown", move_upNO, false); 
document.addEventListener("keyup", move_upOFF, false);
document.addEventListener("keydown", move_downNO, false); 
document.addEventListener("keyup", move_downOFF, false);  

// изменение высоты пуль при нажатии стрелок на клаве ----
// смещение вверх ----
function move_upNO(e)
{
    if (e.keyCode === 87) 
    {
        clickUp = true;
    }
}

function move_upOFF(e)
{
    if (e.keyCode === 87) 
    {
        clickUp = false;
    }
}
//-----------------------
// смещение вниз ----
function move_downNO(e)
{
    if (e.keyCode === 83) 
    {
        clickDown = true;
    }
}

function move_downOFF(e)
{
    if (e.keyCode === 83) 
    {
        clickDown = false;
    }
}
//------------------------
//-------------------------------
function clear()
{
    for (i = enemys.length; i > 0; i--)
        enemys.pop();
    
    for (i = 0; i < bullet.length; i++)
        bullet.pop();
}


function obj() 
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Счет игры
    drawText("24px Courier", "white", "Счет: ", score, 20, 30);

    // Здоровье игрока
    ctx.drawImage(XP, spaceshipUser.imgLove.dx, spaceshipUser.imgLove.dy, spaceshipUser.imgLove.dWidth, spaceshipUser.imgLove.dHeight);
    drawText("24px Courier", "white", "", spaceshipUser.XP, 1810, 32);

    // Генерируем врагов
    if (EnemyMax != 0)
    {
        for (i = EnemyMax; i > 0; i--, EnemyMax--)
        {
            enemys.push( {
                          x: enemysInfo.dx[Math.floor(Math.random()*(enemysInfo.dx.length-1))], 
                          y: enemysInfo.dy[Math.floor(Math.random()*(enemysInfo.dy.length-1))],
                          change_direc_UFO_Y: enemysInfo.change_direc_UFO_Y,
                          change_direc_UFO_X: enemysInfo.change_direc_UFO_X,
                          enemyLeft: enemysInfo.enemyLeft
                         } );
        }
    }
    // движение врага
    if (!theEndGame)
    {
        for (i = 0; i < enemys.length; i++)
        {
            if (enemys[i].change_direc_UFO_X)
            {    
                enemys[i].x -= enemys[i].enemyLeft;
                if (enemys[i].x <= -140 && spaceshipUser.XP > 0)
                {
                    // enemys[i].change_direc_UFO_X = false;
                    enemys[i] = 0;
                    enemysInfo.Num_enemy++; 
                    spaceshipUser.XP -= 1;
                }
            }
            // if (enemys[i].change_direc_UFO_Y)
            // {    
            //     enemys[i].y += enemysInfo.enemyDown[0];
            //     if (enemys[i].y >= 850)
            //         enemys[i].change_direc_UFO_Y = false;
            // }
            // if (!enemys[i].change_direc_UFO_Y)
            // {
            //     enemys[i].y -= enemysInfo.enemyUp[0];
            //     if (enemys[i].y <= 50)
            //         enemys[i].change_direc_UFO_Y = true;
            // }
            if (enemys[i]) ctx.drawImage(enm, enemys[i].x, enemys[i].y, enemysInfo.dWidth, enemysInfo.dHeight);
        }
    }

    // Генерируем игрока и изменяем pos выстрелов пуль
    if (!theEndGame)
    {
        ctx.drawImage(usr, spaceshipUser.shotUsr*spaceshipUser.sx, spaceshipUser.sy, spaceshipUser.sWidth, spaceshipUser.sHeight,
                    spaceshipUser.dx, spaceshipUser.dy, spaceshipUser.dWidth, spaceshipUser.dHeight);

        if (clickUp) 
        {
            spaceshipUser.dy -= spaceshipUser.userPlayUp;
            bulletsInfo.dy -= spaceshipUser.userPlayUp;
        }
        if (clickDown) 
        {
            spaceshipUser.dy += spaceshipUser.userPlayDown;
            bulletsInfo.dy += spaceshipUser.userPlayDown;
        }
        // за пределы холста залезать игроку нельзя
        if (spaceshipUser.dy < 50)
        {
            spaceshipUser.dy = 50;
            bulletsInfo.dy = 60;
        }
        if (spaceshipUser.dy > 810)
        {
            spaceshipUser.dy = 810;
            bulletsInfo.dy = 820;
        }
        spaceshipUser.shotUsr++;
        if (spaceshipUser.shotUsr == 6) spaceshipUser.shotUsr = 1; 
    }

    // Генерация пуль
    for (i = 0; i < bullet.length && !theEndGame; i++) 
    {
        bullet[i].x += 12;
        ctx.drawImage(bllt, bullet[i].x, bullet[i].y, bulletsInfo.dWidth, bulletsInfo.dHeight);
        if (enemys.length != 0)
        {
            for (IndexEnemy = 0; IndexEnemy < enemys.length; IndexEnemy++)
            {
                for (EnemyPosY = enemys[IndexEnemy].y; EnemyPosY <= enemys[IndexEnemy].y+enemysInfo.dHeight; EnemyPosY++)
                {
                    let loop_exit = false; //  выход из внешнего цикла
                    for (EnemyPosX = enemys[IndexEnemy].x; EnemyPosX < enemys[IndexEnemy].x+enemysInfo.dWidth; EnemyPosX++)
                    {
                        if (bullet[i].x+151 === EnemyPosX && bullet[i].y === EnemyPosY)
                        {
                            // анимация взрыва
                            for (xxx = 1; xxx < 6; xxx++)
                            {
                                ctx.drawImage(bbx, xxx*bulletsInfo.imgBabax.sx, bulletsInfo.imgBabax.sy, bulletsInfo.imgBabax.sWidth, bulletsInfo.imgBabax.sHeight,
                                              enemys[IndexEnemy].x, enemys[IndexEnemy].y, bulletsInfo.imgBabax.dWidth, bulletsInfo.imgBabax.dHeight);
                            }
                            bullet[i] = 0;
                            enemys[IndexEnemy] = 0;
                            enemysInfo.Num_enemy++; 
                            score += 100;
                            loop_exit = true;
                            break;
                        }
                    }
                    if (loop_exit) break;
                }
            }
        }
        // удаление пуль, вышедших за границу холста
        if (bullet[i].x >= canvas.width+30)
            bullet.shift();
    }

    bulletsInfo.timer++; 

    if (bulletsInfo.timer % 16 === 0)  // задержка между выстреломи 
    { 
        bulletsInfo.bullets = 0; 
    }

    if (clickSpace)  // нажал пробел 
    { 
        if (bulletsInfo.bullets < 1)  // max кол-во пуль 
        { 
            bullet.push( {x: bulletsInfo.dx, y: bulletsInfo.dy} );
            bulletsInfo.bullets++; // ограничение пуль
        }
    }
    
    // КОНЕЦ ИГРЫ!
    // если врагов больше нет, очищаем массив врагов и arr пуль
    if (spaceshipUser.XP == 0)
    {
        drawText("65px Courier", "black", "Вы проиграли", '', 765, 380);
        theEndGame = true;
        clear();
    }
    else if (enemysInfo.Num_enemy == enemysInfo.EnemyMaxs && spaceshipUser.XP > 0)
    {
        drawText("65px Courier", "black", "Победа", '', 855, 380);
        theEndGame = true;
        clear();
    }
}

setInterval(obj, 10);