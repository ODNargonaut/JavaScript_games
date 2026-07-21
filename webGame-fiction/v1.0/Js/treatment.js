// лекарство
function medicine() 
{
    ctx.drawImage(treatment, player.health.treatment.w*0, 0, player.health.treatment.w, player.health.treatment.h, player.health.treatment.x, player.health.treatment.y-player.health.treatment.fallHeight, player.health.treatment.w, player.health.treatment.h);
}

// Зелье исцеления
function HealingPotion()
{
    if (player.health.treatment.bl)
    {
        medicine();
        if (player.health.treatment.fall)
        {
            player.health.treatment.fallCount++;
            player.health.treatment.fallHeight = 4*140*Math.sin(Math.PI*player.health.treatment.fallCount/player.health.treatment.fallLength);
        }
        if (player.health.treatment.fallCount > player.health.treatment.fallLength)
        {
            player.health.treatment.fallCount = 0;
            player.health.treatment.fall = false;
            player.health.treatment.fallHeight = 0;
        }

        if ((player.health.treatment.y-player.health.treatment.fallHeight).toFixed(0) >= player.y && 
            !player.clickJump && (player.x >= player.health.treatment.x && player.x <= player.health.treatment.x+player.health.treatment.w || 
            player.x+player.w-20 >= player.health.treatment.x && player.x+player.w-20 <= player.health.treatment.x+player.health.treatment.w))
        {
            treatmentAudio.play();
            player.health.treatment.bl = false;
            player.health.w += player.health.treatment.n;
            if (player.health.w > player.health.clonW) player.health.w = player.health.clonW;
        }
    }
}