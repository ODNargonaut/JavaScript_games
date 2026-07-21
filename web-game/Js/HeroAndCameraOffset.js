// ------------ Движение игрока и камеры за ним ------------


// ======== Изменение координат препятствия при движении: ======== 

// Вниз
function changCoordOfObstaclWhenMovDown(v)
{
    biomes.clones[v].Ycell -= 2;
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
        // =-==
        case 0:   border = biomes.border[0]; break;

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
        if (biomes.home.bl && player.x == biomes.clones[v].distance[0].x-border(v)[0].L && player.y >= biomes.clones[v].distance[0].y-border(v)[0].T
                                                                                        && player.y <= biomes.clones[v].distance[0].y+border(v)[0].B) return true;
        if (!biomes.home.bl && player.x == biomes.clones[v].distance[0].x-border(v)[0].L && player.y >= biomes.clones[v].distance[0].y-border(v)[0].T
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
        if (biomes.home.bl && player.x == biomes.clones[v].distance[0].x+border(v)[0].R && player.y >= biomes.clones[v].distance[0].y-border(v)[0].T
                                                                                        && player.y <= biomes.clones[v].distance[0].y+border(v)[0].B) return true;
        if (!biomes.home.bl && player.x == biomes.clones[v].distance[0].x+border(v)[0].R && player.y >= biomes.clones[v].distance[0].y-border(v)[0].T
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
        if (biomes.home.bl && player.x > biomes.clones[v].distance[0].x-border(v)[0].L && player.x < biomes.clones[v].distance[0].x+border(v)[0].R 
                                                                                       && player.y == biomes.clones[v].distance[0].y+border(v)[0].B)
        {
            switch(biomes.clones[v].n)
            {
                case biomes.home.h1.ps.external.n:
                {
                    biomes.clones.splice(v,1);
                    
                    biomes.home.bl = false;
                    biomes.home.h1.door = false;

                    player.x = biomes.home.h1.ps.external.distance[0].x;
                    player.y = biomes.home.h1.ps.external.distance[0].y+80;
                    h.src = player.skin[player.Nskin].default.B;
                    break;
                }
            }
            return true;
        }
        if (!biomes.home.bl && player.x > biomes.clones[v].distance[0].x-border(v)[0].L && player.x < biomes.clones[v].distance[0].x+border(v)[0].R && 
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
        if (!biomes.home.bl && player.x > biomes.clones[v].distance[0].x-border(v)[0].L && player.x < biomes.clones[v].distance[0].x+border(v)[0].R 
                                                                                        && player.y == biomes.clones[v].distance[0].y+border(v)[0].B)
        {
            switch(biomes.clones[v].n)
            {
                case biomes.home.h1.n:
                {
                    biomes.home.h1.allDetails[108] = biomes.clones[v];

                    biomes.home.h1.ps.external.Xcell = biomes.home.h1.allDetails[108].Xcell;
                    biomes.home.h1.ps.external.Ycell = biomes.home.h1.allDetails[108].Ycell;
                    biomes.home.h1.ps.external.distance[0].x = biomes.home.h1.allDetails[108].distance[0].x;
                    biomes.home.h1.ps.external.distance[0].y = biomes.home.h1.allDetails[108].distance[0].y;
                    
                    biomes.clones.push(biomes.home.h1.ps.internal);
                    
                    biomes.home.bl = true;
                    biomes.home.h1.door = true;

                    player.x = biomes.home.h1.ps.internal.distance[0].x;
                    player.y = biomes.home.h1.ps.internal.distance[0].y-80;
                    h.src = player.skin[player.Nskin].default.T;
                    break;
                }
            }
            return true;
        }
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


//
function HeroOffset()
{
    if (player.clickUp)
    {
        if (!(obstacleBoundarieBottom()))
        {
            if (!(player.y <= cameraMove.borderT)) player.y -= player.speed;
        } 
        if (player.y <= cameraMove.borderT)
        {
            player.y += player.cellY*80;
            iteratingOverElemsAForLoop(2);
        }
    }
    if (player.clickDown)
    {
        if (!(obstacleBoundarieTop()))
        { 
            if (!(player.y >= cameraMove.borderB)) player.y += player.speed;
            player.y2 += player.speed;
        } 
        if (player.y >= cameraMove.borderB)
        {
            player.y -= player.cellY*80;
            iteratingOverElemsAForLoop(1);
        }
    }
    if (player.clickLeft)
    {
        if (!(obstacleBoundarieRight()))
        { 
            if (!(player.x <= cameraMove.borderL)) player.x -= player.speed;
        }
        if (player.x <= cameraMove.borderL)
        {
            player.x += player.cellX*80;
            iteratingOverElemsAForLoop(4);
        }
    }
    if (player.clickRight) 
    {
        if (!(obstacleBoundarieLeft()))
        { 
            if (!(player.x >= cameraMove.borderR-60)) player.x += player.speed;
        }
        if (player.x >= cameraMove.borderR-60)
        {
            player.x -= player.cellX*80;
            iteratingOverElemsAForLoop(3);
        }
    }
}


// ------------ ------------------------------- ------------