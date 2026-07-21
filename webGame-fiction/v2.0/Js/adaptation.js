// ---------- Адаптировынный canvas ------------------


adaptation = 
{
    w: innerWidth,
    h: innerHeight,
    pos: 1760
};
canvas.width = adaptation.w;
document.getElementById('canvas').style.backgroundSize = adaptation.w+"px 880px";
document.getElementById('blimg').style.width = adaptation.w+"px";
document.getElementById('topic').style.marginLeft = '-120px';



// ---------- --------------------- ------------------