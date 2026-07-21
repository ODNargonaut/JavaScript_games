// Враги
function enemy1(n) 
{
    ctx.drawImage(g, goblin.skin.default.bool?0:goblin.w*n, 0, goblin.w, goblin.h, goblin.x, goblin.y, goblin.w, goblin.h);
}  


// Босс level - 1
function bossLev1(n) 
{
    ctx.drawImage(BLevel1, bossLevel1.w*n, 0, bossLevel1.w, bossLevel1.h, bossLevel1.x, bossLevel1.y, bossLevel1.w, bossLevel1.h);
}  