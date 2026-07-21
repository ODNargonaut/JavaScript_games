// ------------ Движение игрока и камеры за ним ------------


// ======== Изменение координат препятствия при движении: ======== 

// Вниз
function changCoordOfObstaclWhenMovDown(v)
{
    biomes.clones[v].Ycell -= 2
    biomes.clones[v].distance[0].y -= 2*80;
}

// Вверх
function changCoordOfObstaclWhenMovUp(v)
{
    biomes.clones[v].Ycell += 2;
    biomes.clones[v].distance[0].y += 2*80;
}

// Вправо
function changCoordOfObstaclWhenMovRight(v)
{
    biomes.clones[v].Xcell -= 2;
    biomes.clones[v].distance[0].x -= 2*80;
}

// Влево
function changCoordOfObstaclWhenMovLeft(v)
{
    biomes.clones[v].Xcell += 2;
    biomes.clones[v].distance[0].x += 2*80;
}

// ======== ============================================= ========


// ======== Граница препятствия: ========

function border(v)
{
    let border = '';
    switch(biomes.clones[v].n)
    {
        case 1: border = biomes.border[1]; break;
        
        case 101: border = biomes.border[101]; break;
        case 102: border = biomes.border[102]; break;
        case 103: border = biomes.border[103]; break;
        case 104: border = biomes.border[104]; break;
        case 105: border = biomes.border[105]; break;
        case 106: border = biomes.border[106]; break;
        case 107: border = biomes.border[107]; break;
        case 108: border = biomes.border[108]; break;
        case 109: border = biomes.border[109]; break;

        case 201: border = biomes.border[201]; break;
        case 202: border = biomes.border[202]; break;
        case 203: border = biomes.border[203]; break;
        case 204: border = biomes.border[204]; break;
        case 205: border = biomes.border[205]; break;
        case 206: border = biomes.border[206]; break;
        case 207: border = biomes.border[207]; break;
        case 208: border = biomes.border[208]; break;
        case 209: border = biomes.border[209]; break;
        case 210: border = biomes.border[210]; break;
        case 211: border = biomes.border[211]; break;
        case 212: border = biomes.border[212]; break;
    }
    return [{L: border.L,
             R: border.R,
             T: border.T,
             B: border.B}];
}

// Слева
function obstacleBoundarieLeft()
{
    for (let v = 0; v < biomes.clones.length; v++)
    {
        if (biomes.clones[v].n == 2) continue;
        if (player.x == biomes.clones[v].distance[0].x-border(v)[0].L && player.y >= biomes.clones[v].distance[0].y-border(v)[0].T
                                                                      && player.y <= biomes.clones[v].distance[0].y+border(v)[0].B) return true;
    }
    return false;
}

// Справа
function obstacleBoundarieRight()
{
    for (let v = 0; v < biomes.clones.length; v++)
    {
        if (biomes.clones[v].n == 2) continue;
        if (player.x == biomes.clones[v].distance[0].x+border(v)[0].R && player.y >= biomes.clones[v].distance[0].y-border(v)[0].T
                                                                      && player.y <= biomes.clones[v].distance[0].y+border(v)[0].B) return true;
    }
    return false;
}

// Сверху
function obstacleBoundarieTop()
{
    for (let v = 0; v < biomes.clones.length; v++)
    {
        if (biomes.clones[v].n == 2) continue;
        if (player.x > biomes.clones[v].distance[0].x-border(v)[0].L  && player.x < biomes.clones[v].distance[0].x+border(v)[0].R && 
            player.y >= biomes.clones[v].distance[0].y-border(v)[0].T && player.y < biomes.clones[v].distance[0].y+border(v)[0].B) return true;
    }
    return false;
}

// Снизу
function obstacleBoundarieBottom()
{
    for (let v = 0; v < biomes.clones.length; v++)
    {
        if (biomes.clones[v].n == 2) continue;
        if (player.x > biomes.clones[v].distance[0].x-border(v)[0].L && player.x < biomes.clones[v].distance[0].x+border(v)[0].R 
                                                                     && player.y == biomes.clones[v].distance[0].y+border(v)[0].B) return true;
    }
    return false;
}

// ======== ==================== ========


// ======================================
function iteratingOverElemsAForLoop(method)
{
    for (let v = 0; v < biomes.clones.length; v++)
    {
        switch(method)
        {
            case 1: changCoordOfObstaclWhenMovDown(v); break;
            case 2: changCoordOfObstaclWhenMovUp(v); break;
            case 3: changCoordOfObstaclWhenMovRight(v); break;
            case 4: changCoordOfObstaclWhenMovLeft(v); break;
        }
    }
}
// ======================================

console.log('STONE => '+biomes.skin.stone.arr[0].y);
console.log('HERO => '+(player.y+player.h));
//
function HeroOffset()
{
    // console.log('=============');
    // console.log('HERO: Y = '+player.y);
    // console.log('--------------------');
    // console.log('--------------------');
    if (player.health.w <= 0) player.death = true;
    if (player.clickLeft && player.x > 0)
    {
        // if (!(obstacleBoundarieRight()))
        // { 
            player.x -= player.speed;
            player.bullet.x -= player.speed;

            player.clickLeft = true;
            player.clickRight = false;
        // }
        // if (player.x <= cameraMove.borderL)
        // {
        //     player.x += player.cellX*80;
        //     iteratingOverElemsAForLoop(4);
        // }
    }
    if (player.clickRight && player.x <= adaptation.w-80) 
    {
        // if (!(obstacleBoundarieLeft()))
        // { 
            player.x += player.speed;
            player.bullet.x += player.speed;

            player.clickLeft = false;
            player.clickRight = true;
        // }
        // if (player.x >= cameraMove.borderR-60)
        // {
        //     player.x -= player.cellX*80;
        //     iteratingOverElemsAForLoop(3);
        // }
    }

    player.y2 = +(player.y-player.jumpHeight).toFixed(0);
    
    // biomesIdentification();
    if (biomes.bl) traitJumpIfElse();
}


// ------------ ------------------------------- ------------