// ------------ Движение врагов ------------


//
function EnemysOffset(n)
{
    for (let i2 = 0; i2 < goblin.clones.length; i2++)
    {
        if (player.money.m >= 5000 && player.money.m < 7300 && goblin.clones[i2].incre == 1)
        {
            goblin.damage = 8;
            goblin.clones[i2].w = 400;
            goblin.clones[i2].lifeDivider = 4;
            goblin.clones[i2].incre = 2;
        }
        else if (player.money.m >= 7300 && player.money.m < 8000 && goblin.clones[i2].incre == 2)
        {
            goblin.damage = 9;
            goblin.clones[i2].w = 5000;
            goblin.clones[i2].lifeDivider = 50;
            goblin.clones[i2].incre = 3;
        }
        // console.log('GOBLIN: X = '+goblin.clones[i2].x);
        if(player.level.ar[player.level.n].bl)
        {
            // if (!goblin.clones[i2].death && player.activ) goblin.health.fun(goblin.clones[i2].x, goblin.clones[i2].y,goblin.clones[i2].w,goblin.clones[i2],goblin.clones[i2].lifeDivider); 
            
            // traiteEnemysOffset(goblin, goblin.clones[i2], n);
        }
        else traiteEnemysOffset(bossLevel1, bossLevel1, n);
    }
    // if (player.clickJump)
    // {
    //     player.jumpCount++;
    //     player.jumpHeight = 4*50*Math.sin(Math.PI*player.jumpCount/player.jumpLength);
    // }
    // if (player.jumpCount > player.jumpLength)
    // {
    //     player.jumpCount = 0;
    //     player.clickJump = false;
    //     player.jumpHeight = 0;
    // }
}


// ------------ --------------- ------------