// --------- Движение персонажа ---------


// --------- Джостик ---------
document.addEventListener("keydown", joystickONE); 
document.addEventListener("keyup", joystickOFF);

let atkL = true;
let atkPausa = false;
let pausa = true;

//
function joystickONE(e)
{
    // Начать игру
    if (e.keyCode === 80 && pausa)
    {
        player.activ = true;
        pausa = false;
        bkAudio.play();
        document.getElementById('pausa').style.top = '-150px';
    }
    // Пауза
    else if (e.keyCode === 80 && !pausa && !atkPausa && !player.clickLeft && !player.clickRight && !player.clickJump && !player.victory && !player.loss)
    {
        player.activ = false;
        pausa = true;
        bkAudio.pause();
        document.getElementById('pausa').style.top = '450px';
    } 

    // --------- движение влево ---------
    if (e.keyCode === 65 && player.activ) 
    {
        player.skin[player.Nskin].default.bool = false;
        player.clickLeft = true;
        h.src = player.skin[player.Nskin].L;
    }

    // --------- движение вправо ---------
    if (e.keyCode === 68 && player.activ) 
    {
        player.skin[player.Nskin].default.bool = false;
        player.clickRight = true;
        h.src = player.skin[player.Nskin].R;
    }

    // --------- Прыжок ---------
    if (e.keyCode === 32 && player.activ) 
    {
        player.clickJump = true;
    }

    // --------- Атака ---------
    if (e.keyCode === 90 && player.activ) 
    {
        player.w = 105;
        player.h = 90;
        if (player.money.bonus.bl) player.money.bonus.bl = false;
        if (atkL&&player.skin[player.Nskin].default.direction=='L') { player.x -= 79; player.bullet.x -= 243; atkL = false; atkPausa = 1; }
        player.skin[player.Nskin].default.bool = false;
        player.clickAttaks = true;
        player.money.bonus.bl = false;
        switch(player.skin[player.Nskin].default.direction)
        {
            case 'R': h.src = player.skin[player.Nskin].ATKR; break;
            case 'L': h.src = player.skin[player.Nskin].ATKL; break;
        }
    }
}

//
function joystickOFF(e)
{
    // --------- движение влево ---------
    if (e.keyCode === 65 && player.activ) 
    {
        player.skin[player.Nskin].default.bool = true;
        player.clickLeft = false;
        h.src = player.skin[player.Nskin].default.idleL;
        player.skin[player.Nskin].default.direction = 'L';
    }

    // --------- движение вправо ---------
    if (e.keyCode === 68 && player.activ) 
    {
        player.skin[player.Nskin].default.bool = true;
        player.clickRight = false;
        h.src = player.skin[player.Nskin].default.idleR;
        player.skin[player.Nskin].default.direction = 'R';
    }

    // --------- Атака ---------
    if (e.keyCode === 90 && player.activ) 
    {
        player.w = 72;
        player.h = 90;
        if (!atkL) { player.x += 79; player.bullet.x += 243; atkL = true; atkPausa = 0; }
        player.skin[player.Nskin].default.bool = true;
        player.clickAttaks = false;
        switch(player.skin[player.Nskin].default.direction)
        {
            case 'R': h.src = player.skin[player.Nskin].default.idleR; break;
            case 'L': h.src = player.skin[player.Nskin].default.idleL; break;
        }
    }
}


// --------- ------------------ ---------