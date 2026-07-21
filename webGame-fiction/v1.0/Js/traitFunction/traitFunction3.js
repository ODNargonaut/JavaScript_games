/* Логика движения для всех противников
 *
 *
 *  
 */

function traiteEnemysOffset(obj1, obj2, n)
{
    ctx.drawImage(obj2.g, obj1.skin.default.bool?0:obj1.w*n, 0, obj1.w, obj1.h, obj2.x, obj2.y, obj1.w, obj1.h);

    if (!obj2.damage && !obj2.death && player.activ)
    {
        if (obj2.offsetLeft && obj2.x >= 0)
        {
            if (!(obj2.x <= player.x-obj1.radius[0] && player.activ))
            {
                obj2.g.src = obj1.skin.L;
                obj2.x -= obj1.speed;

                if (player.x >= obj2.x-(obj1.w-obj1.radius[1]) && player.x <= obj2.x+obj1.w && 
                    player.y2 == obj2.y2 && player.health.w > 0) { /* console.log('ATK - L'); */ player.health.w -= obj2.damageN; }

            } else { obj2.offsetLeft = false; obj2.offsetRight = true; }
        } else { obj2.offsetLeft = false; obj2.offsetRight = true; }
        if (obj2.offsetRight && obj2.x <= adaptation.w-80) 
        {
            if (!(obj2.x >= player.x+obj1.radius[2] && player.activ))
            {
                obj2.g.src = obj1.skin.R;
                obj2.x += obj1.speed;
                    
                if (player.x <= obj2.x+obj1.w-obj1.radius[3] && player.x >= obj2.x && 
                    player.y2 == obj2.y2 && player.health.w > 0){ /* console.log('ATK - R'); */ player.health.w -= obj2.damageN; }
                        
            } else { obj2.offsetLeft = true; obj2.offsetRight = false; }
        } else { obj2.offsetLeft = true; obj2.offsetRight = false; }
    }
}