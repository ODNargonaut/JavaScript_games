/* Активация прыжка для персонажа
 *
 *
 *  
 */

function traitJumpIfElse()
{
    if (player.clickJump)
    {
        for (let i = 0; i < biomes.skin.stone.arr.length; i++)
            console.log('\n=======================\nSTONE: Y => '+(biomes.skin.stone.arr[i].y));
        // console.log('HERO: Y = '+(player.y));
        console.log('count = '+player.jumpCount+' | HERO: Y = '+(+(player.y-player.jumpHeight).toFixed(0)));
        player.jumpCount++;
        player.jumpHeight = 4*50*Math.sin(Math.PI*player.jumpCount/player.jumpLength);
        if (player.x > 0 && player.x <= adaptation.w-80)
        {
            if (player.clickRight) player.x += player.jumpWidth;
            else if (player.clickLeft) player.x -= player.jumpWidth;
        }
        
    }
    if (player.jumpCount > player.jumpLength)
    {
        player.jumpCount = 0;
        player.clickJump = false;
        player.jumpHeight = 0;
    }
}