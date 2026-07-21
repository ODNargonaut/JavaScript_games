// =========== - Враги - ===========
let g = new Image();        // goblin
let BLevel1 = new Image();  // boss level - 1

// =========== - ----- - ===========


// =========== - Звуки - ===========
let damageGoblin = new Audio();

// =========== - ----- - ===========


// Гоблин
let goblin =
{
    x: 0,
    y: 634,
    w: 90,
    h: 90,
    fps: 5,
    radius: [10,50,10,0],
    offsetLeft: false,
    offsetRight: false,
    Attaks: false,
    damage: 1,
    speed: 4,
    // clickJump: false,
    // jumpCount: 0,
    // jumpHeight: 0,
    // jumpLength: 16,
    clones: 
    [
        {x:900,y2:634,g: new Image(),w:200,fps:5, offsetRight: false, offsetLeft: true, damage: false, damageN: 1, death: false, incre: 0, lifeDivider: 2},
        {x:1000,y2:634,g: new Image(),w:200,fps:5, offsetRight: true, offsetLeft: false, damage: false, damageN: 1, death: false, incre: 0, lifeDivider: 2},
        {x:1100,y2:634,g: new Image(),w:200,fps:5, offsetRight: true, offsetLeft: false, damage: false, damageN: 1, death: false, incre: 0, lifeDivider: 2},
        {x:1200,y2:634,g: new Image(),w:200,fps:5, offsetRight: true, offsetLeft: false, damage: false, damageN: 1, death: false, incre: 0, lifeDivider: 2}
    ],
    skin: 
    {
        // 144x144
        R: './enemys/goblin/running/runR_cl1.png',
        L: './enemys/goblin/running/runL_cl1.png',
        ATKR: 'attacksR.png',
        ATKL: 'attacksL.png',
        damage:
        {
            R: './enemys/goblin/damage/damageR_cl1.png',
            L: './enemys/goblin/damage/damageL_cl1.png',
            audio: './enemys/goblin/damage/audio/damage.mp3',
            bl: false
        },
        death:
        {
            R: './enemys/goblin/death/deathR_cl1.png',
            L: './enemys/goblin/death/deathL_cl1.png',
            bl: false
        },
        default: 
        {
            // 144x144
            idleR: 'idleDefaultR.png',
            idleL: 'idleDefaultL.png',
            bool: 0,
            direction: null
        }
    },
    health:
    {
        w: 200,
        fun: function(x,y,w,direction,lifeDivider)
        {
            ctx.fillStyle = 'red';
            ctx.fillRect(x+(direction.offsetRight?10:-5), y-15, w/lifeDivider, 7);
            ctx.fillStyle = 'black';
            ctx.lineWidth = 1;
            ctx.strokeRect(x+(direction.offsetRight?10:-5), y-15, 100, 7);
        }
    },
    death: false
};
goblin.skin.default.bool = false;
damageGoblin.src = goblin.skin.damage.audio;
// g.src = goblin.skin.L;
// ctx.drawImage(g, goblin.w*1, 0, goblin.w, goblin.h, goblin.clones[0].x, goblin.clones[0].y2, goblin.w, goblin.h);


// Босс: level - 1
let bossLevel1 = 
{
    x: 750,
    y: 362,
    y2: 634,
    w: 434, 
    h: 362,
    fps: 7,
    radius: [400,400,50,100],
    offsetLeft: true,
    offsetRight: false,
    g: new Image(),
    damage: false,
    damageN: 1,
    speed: 1.5,
    skin: 
    {
        // 920x611
        R: './enemys/boss/Boss_level-1/running/Boss__spite_runR.png',
        L: './enemys/boss/Boss_level-1/running/Boss__spite_runL.png',
        damage:
        {
            R: './enemys/goblin/damage/damageR_cl1.png',
            L: './enemys/goblin/damage/damageL_cl1.png',
            audio: './enemys/goblin/damage/audio/damage.mp3',
            bl: false
        },
        death:
        {
            R: './enemys/goblin/death/deathR_cl1.png',
            L: './enemys/goblin/death/deathL_cl1.png',
            bl: false
        },
        default: 
        {
            // 144x144
            idleR: 'idleDefaultR.png',
            idleL: 'idleDefaultL.png',
            bool: false,
            direction: null
        }
    },
    death: false,
};
bossLevel1.g.src = bossLevel1.skin.L;