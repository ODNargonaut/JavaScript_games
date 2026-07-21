// --------- Движение персонажа ---------


// --------- движение вверх --------- 
document.addEventListener("keydown", UpMoveONE);     
document.addEventListener("keyup", UpMoveOFF);     

//
function UpMoveONE(e) 
{
    if (e.keyCode === 87) 
    {
        player.skin[player.Nskin].default.bool = false;
        player.clickUp = true;
        h.src = player.skin[player.Nskin].T;
        player.directiOfTravel = '';
    }
}

//
function UpMoveOFF(e)
{
    if (e.keyCode === 87) 
    {
        player.skin[player.Nskin].default.bool = true;
        player.clickUp = false;
        h.src = player.skin[player.Nskin].default.T;
        player.directiOfTravel = 'T';
    }
}
// ---------  ------------- ---------



// --------- движение вниз --------- 
document.addEventListener("keydown", DownMoveONE); 
document.addEventListener("keyup", DownMoveOFF); 

//
function DownMoveONE(e) 
{
    if (e.keyCode === 83) 
    {
        player.skin[player.Nskin].default.bool = false;
        player.clickDown = true;
        h.src = player.skin[player.Nskin].B;
        player.directiOfTravel = '';
    }
}

//
function DownMoveOFF(e)
{
    if (e.keyCode === 83) 
    {
        player.skin[player.Nskin].default.bool = true;
        player.clickDown = false;
        h.src = player.skin[player.Nskin].default.B;
        player.directiOfTravel = 'B';
    }
}
// ---------  ------------- ---------



// --------- движение влево --------- 
document.addEventListener("keydown", LeftMoveONE); 
document.addEventListener("keyup", LeftMoveOFF); 

//
function LeftMoveONE(e) 
{
    if (e.keyCode === 65) 
    {
        player.skin[player.Nskin].default.bool = false;
        player.clickLeft = true;
        h.src = player.skin[player.Nskin].L;
        player.directiOfTravel = '';
    }
}

//
function LeftMoveOFF(e)
{
    if (e.keyCode === 65) 
    {
        player.skin[player.Nskin].default.bool = true;
        player.clickLeft = false;
        h.src = player.skin[player.Nskin].default.L;
        player.directiOfTravel = 'L';
    }
}
// ---------  ------------- ---------



// --------- движение вправо --------- 
document.addEventListener("keydown", RightMoveONE); 
document.addEventListener("keyup", RightMoveOFF); 

//
function RightMoveONE(e) 
{
    if (e.keyCode === 68) 
    {
        player.skin[player.Nskin].default.bool = false;
        player.clickRight = true;
        h.src = player.skin[player.Nskin].R;
        player.directiOfTravel = '';
    }
}

//
function RightMoveOFF(e)
{
    if (e.keyCode === 68) 
    {
        player.skin[player.Nskin].default.bool = true;
        player.clickRight = false;
        h.src = player.skin[player.Nskin].default.R;
        player.directiOfTravel = 'R';
    }
}
// ---------  ------------- ---------


// --------- ------------------ ---------