// --------- Генерация карты ---------


// Генерация биом по координатам
function biomeGeneration(x, y, Xmin, Ymin)
{
    for (let N = 0; N < biomes.clones.length; N++)
    {
        if (cameraMove.borderR >= biomes.clones[N].distance[0].x && cameraMove.borderB+80 >= biomes.clones[N].distance[0].y 
            && y == Ymin+biomes.clones[N].Ycell && x == Xmin+biomes.clones[N].Xcell) return biomes.clones[N].n;
    }
    return false;
}

// 
function background()
{
    let posX = 0;
    let posY = 0;

    let bk = null;

    // При положительном смещении игрока генерируем карту
    let Ymax = 11;
    let Xmax = 22;
    // for (let y = 0; y < Ymax; y++)
    //     for (let x = 0; x < Xmax; x++)
    //         ctx.drawImage(bkGrass, 80*(posX+x*biomes.w), posY+y*biomes.h, biomes.w, biomes.h);  

    // При отрицательном смещении игрока генерируем карту
    let Ymin = -Ymax;
    let Xmin = -Xmax;
    for (let y = 0; y > Ymin; y--)
        for (let x = 0; x > Xmin; x--)
        {
            if (!biomes.home.bl)
            {
                switch(biomeGeneration(x, y, Xmin, Ymin))
                {
                    case 1: bk = bkBushes2; break;
                    case 2: bk = bkRoad01; break;

                    case 101: bk = bkHome101; break;
                    case 102: bk = bkHome102; break;
                    case 103: bk = bkHome103; break;
                    case 104: bk = bkHome104; break;
                    case 105: bk = bkHome105; break;
                    case 106: bk = bkHome106; break;
                    case 107: bk = bkHome107; break;
                    case 108: bk = bkHome108; break;
                    case 109: bk = bkHome109; break;
                    
                    case 201: bk = bkHome201; break;
                    case 202: bk = bkHome202; break;
                    case 203: bk = bkHome203; break;
                    case 204: bk = bkHome204; break;
                    case 205: bk = bkHome205; break;
                    case 206: bk = bkHome206; break;
                    case 207: bk = bkHome207; break;
                    case 208: bk = bkHome208; break;
                    case 209: bk = bkHome209; break;
                    case 210: bk = bkHome210; break;
                    case 211: bk = bkHome211; break;
                    case 212: bk = bkHome212; break;
                    default: bk = bkGrass;
                }
            }
            else
            {
                switch(biomeGeneration(x, y, Xmin, Ymin))
                {
                    case 0: bk = homeDoor1; break;
                    default: bk = bkClosedBk;
                }
            }

            ctx.drawImage(bk, 80*(Xmax-1)+posX+x*biomes.w, 80*(Ymax-1)+posY+y*biomes.h, biomes.w, biomes.h);
        }  
}

let bl = 0;
let bl2 = 0;

//
function displayBiomesWithinCamera(i)
{
    // console.log("Camera T - "+cameraMove.borderT);
    // console.log("Отображение части N "+(i+100)+" .. Xpos = "+biomes.home.h1.allDetails[i+100].distance[0].y);
    i = i+100;
    if ((biomes.home.h1.allDetails[i].distance[0].y >= 0 & biomes.home.h1.allDetails[i].distance[0].y <= 800 &&
         biomes.home.h1.allDetails[i].distance[0].x <= 1740) && bl < 9)
    {
        biomes.clones.push(biomes.home.h1.allDetails[i]);
        ++bl;
    }

    // За пределами камеры обзора
    if (( (biomes.home.h1.allDetails[i].distance[0].y <= 0 || biomes.home.h1.allDetails[i].distance[0].y <= 800) && 
         biomes.home.h1.allDetails[i].distance[0].x >= 1740) && bl2 < 9)
    {
        console.log("----");
        for (let j = 0; j < biomes.clones.length; j++)
            if (biomes.clones[j].n == i) { biomes.clones.splice(); break; }
        ++bl2;
    }
}


// --------- --------------- ---------