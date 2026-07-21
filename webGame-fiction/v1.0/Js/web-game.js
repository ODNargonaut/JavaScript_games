// ----------- Запуск web-game -----------


let n = 0;
let n2 = 0;
let fps = 0;
let fpsN = 3;
let nM = 0;

//
function rand(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

//
function animation()
{
    // ctx.save();
    // ctx.scale(innerWidth / canvas.width, innerHeight / canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    
    if(bkAudio.currentTime >= bkAudio.duration - 0.05)
    {
        bkAudio.currentTime = 0;
        bkAudio.play();
    }
    document.getElementById('atk').innerHTML = player.damage;
    document.getElementById('money').innerHTML = player.money.m;
    
    //mapGeneration();
    
    player.health.fun(player.health.w);
    if (player.money.m < 1000000)
    {
        if (!player.death)
        {
            fps++;
            EnemysOffset(n2);

            if (player.money.m >= player.money.bonus.n || player.money.bonus.bl) document.getElementById('bimg').style.top = '160px';
            else document.getElementById('bimg').style.top = '-150px';
            
            if (player.clickAttaks)
            {
                n++;
                if (n > 23) n = 0;
                if (n == 15 && player.clickAttaks)
                {
                    if (player.money.m >= player.money.bonus.n)
                    {
                        player.bullet.arr.push
                        (
                            {x: player.x, im: player.bullet.img, dir: player.skin[player.Nskin].default.direction},
                            {x: player.x+12, im: player.bullet.img, dir: player.skin[player.Nskin].default.direction},
                            {x: player.x+24, im: player.bullet.img, dir: player.skin[player.Nskin].default.direction},
                            {x: player.x+36, im: player.bullet.img, dir: player.skin[player.Nskin].default.direction},
                            {x: player.x+48, im: player.bullet.img, dir: player.skin[player.Nskin].default.direction}
                        );
                        player.money.bonus.n += 200;
                        player.money.bonus.bl = true;
                        machineGun.play();
                    }
                    else
                    {
                        player.bullet.arr.push
                        (
                            {x: player.x, im: player.bullet.img, dir: player.skin[player.Nskin].default.direction},
                            {x: player.x+12, im: player.bullet.img, dir: player.skin[player.Nskin].default.direction}
                        );
                        shot.play();
                    }
                }
            }
            if (fps%2 == 0)
            {
                if (!player.clickAttaks)
                {
                    if (n > 23) n = 0;
                    n++;
                }
                if (1)
                {
                    n2++;
                    for (let i2 = 0; i2 < goblin.clones.length; i2++)
                    {
                        if (n2 > goblin.clones[i2].fps && !goblin.clones[i2].death)
                        {
                            if (goblin.clones[i2].damage) { goblin.clones[i2].damage = false; goblin.clones[i2].fps = 5; } 
                            if (!player.activ) goblin.clones[i2].fps = 3; 
                            n2 = 0;
                        }
                    }
                    for (let i2 = 0; i2 < goblin.clones.length; i2++)
                    {
                        if (goblin.clones[i2].death && n2 > 3)
                        {
                            goblin.clones.splice(i2, 1);
                            goblin.clones.push({x:rand(100,1550),y2:goblin.y,g: new Image(),w:goblin.health.w,fps:goblin.fps, offsetRight: true, offsetLeft: false, damage: false, damageN: goblin.damage, death: false, incre: 0, lifeDivider: 2}); 
                        }
                    }
                }
            }

            for (let i = 0; i < player.bullet.arr.length; i++)
            {
                switch (player.bullet.arr[i].dir)
                {
                    case 'R': player.bullet.arr[i].x += Math.pow(2, 5); break;
                    case 'L': player.bullet.arr[i].x -= Math.pow(2, 5); break;
                }
                ctx.drawImage(bullet, player.bullet.arr[i].x, player.y2+player.bullet.y, player.bullet.w, player.bullet.h);
                for (let i2 = 0; i2 < goblin.clones.length; i2++)
                {
                    if (player.y2 == goblin.clones[i2].y2 && (player.bullet.arr[i].x >= goblin.clones[i2].x && player.bullet.arr[i].x <= goblin.clones[i2].x+100 && player.skin[player.Nskin].default.direction=='R' ||
                        player.bullet.arr[i].x-144 <= goblin.clones[i2].x && player.bullet.arr[i].x >= goblin.clones[i2].x-40 && player.skin[player.Nskin].default.direction=='L')&&!goblin.clones[i2].death) 
                    {
                        if (player.money.bonus.bl) player.money.bonus.bl = false;
                        goblin.clones[i2].damage = true;
                        goblin.clones[i2].fps = 3;
                        n2 = 0;
                        damageGoblin.play();
                        if (goblin.clones[i2].w > 0) goblin.clones[i2].w -= player.damage;
                        if (goblin.clones[i2].offsetRight) goblin.clones[i2].g.src = goblin.skin.damage.R;
                        if (goblin.clones[i2].offsetLeft)  goblin.clones[i2].g.src = goblin.skin.damage.L;
                        if (goblin.clones[i2].w <= 0)
                        {
                            player.money.m += goblin.point;
                            goblin.clones[i2].death = true;
                            if (goblin.clones[i2].offsetRight) goblin.clones[i2].g.src = goblin.skin.death.R;
                            if (goblin.clones[i2].offsetLeft)  goblin.clones[i2].g.src = goblin.skin.death.L;
                        }
                        player.bullet.arr.shift(); break;
                    }
                    else if(player.bullet.arr[i].x >= adaptation.w+80 || player.bullet.arr[i].x <= -170)
                    {
                        if (player.money.bonus.bl) player.money.bonus.bl = false;
                        player.bullet.arr.shift(); 
                        break;
                    }
                }
            }
            HeroOffset();
            if (player.money.m == player.health.treatment.m) 
            {
                player.health.treatment.bl = true;
                player.health.treatment.fall = true;
                player.health.treatment.m += 1000;
                player.health.treatment.fallCount = 58;
                player.health.treatment.fallHeight = 104;
            }
            if (player.money.m >= 1900) player.damage = 32;
            // if (!(player.money.m < 800)) player.level.ar[player.level.n].bl = true;
            HealingPotion();
            usr(n);
        }
        else { document.getElementById('loss').style.top = '450px'; player.loss = true; bkAudio.pause(); bkAudio.currentTime = 0; }
    }
    else { document.getElementById('victory').style.top = '450px'; player.victory = true; bkAudio.pause(); bkAudio.currentTime = 0; } 

    // ctx.restore();
}

setInterval(animation, 42);

// ----------- --------------- -----------