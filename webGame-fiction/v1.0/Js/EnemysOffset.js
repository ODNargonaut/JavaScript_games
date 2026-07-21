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
        else if (player.money.m >= 7300 && goblin.clones[i2].incre == 2)
        {
            goblin.damage = 9;
            goblin.clones[i2].w = 5000;
            goblin.clones[i2].lifeDivider = 50;
            goblin.clones[i2].incre = 3;
        }

        if (!goblin.clones[i2].death && player.activ) goblin.health.fun(goblin.clones[i2].x, goblin.clones[i2].y2,goblin.clones[i2].w,goblin.clones[i2],goblin.clones[i2].lifeDivider);         
        
        ctx.drawImage(goblin.clones[i2].g, goblin.skin.default.bool?0:goblin.w*n, 0, goblin.w, goblin.h, goblin.clones[i2].x, goblin.clones[i2].y2, goblin.w, goblin.h);

        if (!goblin.clones[i2].damage && !goblin.clones[i2].death && player.activ)
        {
            goblin.skin.idle.bl = false;
            if (goblin.clones[i2].offsetLeft && goblin.clones[i2].x >= 0)
            {
                if (!(goblin.clones[i2].x <= player.x-goblin.radius[0] && player.activ))
                {
                    goblin.clones[i2].g.src = goblin.skin.L;
                    goblin.clones[i2].x -= goblin.speed;

                    if (player.x >= goblin.clones[i2].x-(goblin.w-goblin.radius[1]) && player.x <= goblin.clones[i2].x+goblin.w && 
                        player.y2 == goblin.clones[i2].y2 && player.health.w > 0) player.health.w -= goblin.clones[i2].damageN;

                } else { goblin.clones[i2].offsetLeft = false; goblin.clones[i2].offsetRight = true; }
            } else { goblin.clones[i2].offsetLeft = false; goblin.clones[i2].offsetRight = true; }
            if (goblin.clones[i2].offsetRight && goblin.clones[i2].x <= adaptation.w-80) 
            {
                if (!(goblin.clones[i2].x >= player.x+goblin.radius[2] && player.activ))
                {
                    goblin.clones[i2].g.src = goblin.skin.R;
                    goblin.clones[i2].x += goblin.speed;
                        
                    if (player.x <= goblin.clones[i2].x+goblin.w-goblin.radius[3] && player.x >= goblin.clones[i2].x && 
                        player.y2 == goblin.clones[i2].y2 && player.health.w > 0) player.health.w -= goblin.clones[i2].damageN;
                            
                } else { goblin.clones[i2].offsetLeft = true; goblin.clones[i2].offsetRight = false; }
            } else { goblin.clones[i2].offsetLeft = true; goblin.clones[i2].offsetRight = false; }
        }
        else if (!player.activ)
        {
            if (goblin.clones[i2].offsetRight)
            {
                goblin.clones[i2].g.src = goblin.skin.idle.R;
                goblin.skin.idle.bl = true;
            }
            else if (goblin.clones[i2].offsetLeft)
            {
                goblin.clones[i2].g.src = goblin.skin.idle.L;
                goblin.skin.idle.bl = true;
            }
        }
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