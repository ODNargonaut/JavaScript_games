// ----------- Генерация карты -----------


//
function mapGeneration()
{
    for (let i = 0; i < biomes.skin.stone.arr.length; i++)
        ctx.drawImage(stone, biomes.skin.stone.arr[i].x, biomes.skin.stone.arr[i].y, biomes.skin.stone.w, biomes.skin.stone.h);
    biomesIdentification();
}

// Биома: каменная плита 
function biomeStonePlate(n, pos)
{
    if (+(player.y-player.jumpHeight).toFixed(0) == biomes.skin.stone.arr[n].y+biomes.skin.stone.h && 
        (player.x >= biomes.skin.stone.arr[n].x && player.x <= biomes.skin.stone.arr[n].x+biomes.skin.stone.w || 
        player.x+player.w-20 >= biomes.skin.stone.arr[n].x && player.x+player.w-20 <= biomes.skin.stone.arr[n].x+biomes.skin.stone.w))
    {
        player.jumpCount = 0;
        player.clickJump = false;
        player.jumpHeight = 0;
        biomes.bl = 0;
    }
    else if (+((player.y+player.h+pos)-player.jumpHeight).toFixed(0) == biomes.skin.stone.arr[n].y &&
        (player.x >= biomes.skin.stone.arr[n].x && player.x <= biomes.skin.stone.arr[n].x+biomes.skin.stone.w || 
         player.x+player.w-20 >= biomes.skin.stone.arr[n].x && player.x+player.w-20 <= biomes.skin.stone.arr[n].x+biomes.skin.stone.w))
    {
        // console.log(+((player.y+player.h+pos)-player.jumpHeight).toFixed(0));
        player.clickJump = false;
        player.jumpHeight = 0;
        player.jumpCount = 0;
        player.y = biomes.skin.stone.arr[n].y-player.h;
        player.y2 = biomes.skin.stone.arr[n].y-player.h;
        biomes.bl = 0;
    }
    else if (+(player.y+player.h)-player.jumpHeight.toFixed(0) == biomes.skin.stone.arr[n].y && (player.x+player.w-20 < biomes.skin.stone.arr[n].x || player.x > biomes.skin.stone.arr[n].x+biomes.skin.stone.w))
    {
        if (player.clickJump)
        {
            player.jumpCount = 13;
            player.jumpHeight = 111;
        }
        else 
        {
            player.clickJump = true;
            player.jumpCount = 11;
            player.jumpHeight = 141;
        }
        player.y = 634;
        player.y2 = 634;
    }
    else biomes.bl = 1;
}

let plateN = 0;
// Индентификация биом
function biomesIdentification()
{
    let combiPOS = 11;
    
    for (let i = 0; i < biomes.skin.stone.arr.length; i++)
    {
        if (+(player.y-player.jumpHeight).toFixed(0) == biomes.skin.stone.arr[i].y+biomes.skin.stone.h && 
            (player.x >= biomes.skin.stone.arr[i].x && player.x <= biomes.skin.stone.arr[i].x+biomes.skin.stone.w || 
             player.x+player.w-20 >= biomes.skin.stone.arr[i].x && player.x+player.w-20 <= biomes.skin.stone.arr[i].x+biomes.skin.stone.w))
        {
            plateN = i;
            break;
        }
        else if (+((player.y+player.h+combiPOS)-player.jumpHeight).toFixed(0) == biomes.skin.stone.arr[i].y &&
        (player.x >= biomes.skin.stone.arr[i].x && player.x <= biomes.skin.stone.arr[i].x+biomes.skin.stone.w || 
         player.x+player.w-20 >= biomes.skin.stone.arr[i].x && player.x+player.w-20 <= biomes.skin.stone.arr[i].x+biomes.skin.stone.w))
        {
            plateN = i;
            break;
        }
    }
    biomeStonePlate(plateN, combiPOS);
}