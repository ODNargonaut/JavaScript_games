// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");

// =========== - Карта - ===========
let bkGrass   = new Image();  // Трава
let bkBushes2 = new Image();  // Куст_2


// =========== - ----- - ===========



// Биомы
let biomes = 
{
    w: 80,
    h: 80,
    grass:                          // трава
    {
        1:
        {
            x: 0,
            y: 0,
            img: './biomes/grass/grass2.png'
        }
    },
    bushes:                         // кусты
    {
        1: {},
        2:
        {
            img: './biomes/bushes/bushe_11.png',
            XcellLR: 4,
            YcellTB: 1,
            border: [{R: 320, L: -100, T: -80, B: 200}]
        }
    }
};
bkGrass.src = biomes.grass[1].img;
bkBushes2.src = biomes.bushes[2].img;

// Персонаж
let player =
{
    x: 0,
    y: 0,
    w: 50,
    h: 50,
    clickUp: false,
    clickDown: false,
    clickLeft: false,
    clickRight: false,
    speed: 10,
    skin: ['']
};

// Камера персонажа
let cameraMove = 
{
    cellL: 0,
    cellR: 0,
    cellT: 0,
    cellB: 0,
    borderL: -20,
    borderR: 240,
    borderT: -80,
    borderB: 200,
};



// --------- Движение персонажа ---------


// --------- движение вверх --------- 
document.addEventListener("keydown", UpMoveONE);     
document.addEventListener("keyup", UpMoveOFF);     

//
function UpMoveONE(e) 
{
    if (e.keyCode === 87) 
    {
        player.clickUp = true;
    }
}

//
function UpMoveOFF(e)
{
    if (e.keyCode === 87) 
    {
        player.clickUp = false;
    }
}
// ---------  ------------- ---------



// --------- движение вниз --------- 
document.addEventListener("keydown", DownMoveONE); 
document.addEventListener("keyup", DownMoveOFF); 

//
function DownMoveONE(e) 
{
    if (e.keyCode === 83) 
    {
        player.clickDown = true;
    }
}

//
function DownMoveOFF(e)
{
    if (e.keyCode === 83) 
    {
        player.clickDown = false;
    }
}
// ---------  ------------- ---------



// --------- движение влево --------- 
document.addEventListener("keydown", LeftMoveONE); 
document.addEventListener("keyup", LeftMoveOFF); 

//
function LeftMoveONE(e) 
{
    if (e.keyCode === 65) 
    {
        player.clickLeft = true;
    }
}

//
function LeftMoveOFF(e)
{
    if (e.keyCode === 65) 
    {
        player.clickLeft = false;
    }
}
// ---------  ------------- ---------



// --------- движение вправо --------- 
document.addEventListener("keydown", RightMoveONE); 
document.addEventListener("keyup", RightMoveOFF); 

//
function RightMoveONE(e) 
{
    if (e.keyCode === 68) 
    {
        player.clickRight = true;
    }
}

//
function RightMoveOFF(e)
{
    if (e.keyCode === 68) 
    {
        player.clickRight = false;
    }
}
// ---------  ------------- ---------


// --------- ------------------ ---------



// --------- Генерация карты ---------

// 
function background(cellR, cellL, cellT, cellB)
{
    let posX = 500;
    let posY = 160;

    let bk = null;

    let bushe2LR = biomes.bushes[2].XcellLR;
    let bushe2TB = biomes.bushes[2].YcellTB;


    // При положительном смещении игрока генерируем карту
    let Ymax = 4+cellB;
    let Xmax = 4+cellR;
    for (let y = 0; y < Ymax; y++)
        for (let x = 0; x < Xmax; x++)
            ctx.drawImage(bkGrass, 80*(posX+x*biomes.w), posY+y*biomes.h, biomes.w, biomes.h);  

    // При отрицательном смещении игрока генерируем карту
    let Ymin = -Ymax-cellT;
    let Xmin = -Xmax-cellL;
    for (let y = 0; y > Ymin; y--)
        for (let x = 0; x > Xmin; x--)
        {
            if (cameraMove.borderR >= biomes.bushes[2].border[0].R && y == Ymin+bushe2TB && x == Xmin+bushe2LR ||
                cameraMove.borderB >= biomes.bushes[2].border[0].B && y == Ymin-bushe2TB && x == Xmin-bushe2LR) 
                bk = bkBushes2
            else 
                bk = bkGrass
            ctx.drawImage(bk, 80*(Xmax-1)+posX+x*biomes.w, 80*(Ymax-1)+posY+y*biomes.h, biomes.w, biomes.h);  
        }     
}


// --------- --------------- ---------



// Пример персонажа
function usr() 
{
    ctx.beginPath();
    ctx.rect(520+player.x, 230+player.y, 50, 50);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}   

//
function animation()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    background(cameraMove.cellR, cameraMove.cellL, cameraMove.cellT, cameraMove.cellB);
    usr();    
    
    // ------------ Движение игрока и камеры за ним ------------
    if (player.clickUp)
    {
        player.y -= player.speed;
        if (player.y <= cameraMove.borderT) 
        {
           cameraMove.cellT += 1;
           cameraMove.cellB -= 1;
           cameraMove.borderB -= 80;
           cameraMove.borderT -= 80;
           if (cameraMove.borderT != biomes.bushes[2].border[0].T)
           {
                biomes.bushes[2].YcellTB++;
                console.log("YcellTB = "+biomes.bushes[2].YcellTB);
           }
        }
    }
    if (player.clickDown)
    {
        player.y += player.speed;
        if (player.y >= cameraMove.borderB) 
        {
           cameraMove.cellT -= 1;
           cameraMove.cellB += 1;
           cameraMove.borderT += 80;
           cameraMove.borderB += 80;
           console.log(cameraMove.borderB+" == "+biomes.bushes[2].border[0].B);
           if (cameraMove.borderB != biomes.bushes[2].border[0].B)
           {
                biomes.bushes[2].YcellTB--;
                console.log("YcellTB = "+biomes.bushes[2].YcellTB);
           }
        }
    }
    if (player.clickLeft)
    {
        player.x -= player.speed;
        if (player.x <= cameraMove.borderL) 
        {
            cameraMove.cellL += 1;
            cameraMove.cellR -= 1;
            cameraMove.borderL -= 80;
            cameraMove.borderR -= 80;
            if (cameraMove.borderL != biomes.bushes[2].border[0].L)
            {
                biomes.bushes[2].XcellLR++;
                console.log("XcellLR = "+biomes.bushes[2].XcellLR);
            }
        }

    }
    if (player.clickRight) 
    {
        player.x += player.speed;
        if (player.x >= cameraMove.borderR) 
        {
            cameraMove.cellL -= 1;
            cameraMove.cellR += 1;
            cameraMove.borderR += 80;
            cameraMove.borderL += 80;
            if (cameraMove.borderR != biomes.bushes[2].border[0].R)
            {
                biomes.bushes[2].XcellLR--;
            }
        }
    }
    
    // ------------ ------------------------------- ------------
}

setInterval(animation, 70);