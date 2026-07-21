// =========== - Персонажи - ===========
let h = new Image();  // Heros

// =========== - ----- - ===========


// =========== - Патроны - ===========
let bullet = new Image();

// =========== - ----- - ===========


// =========== - Звуки - ===========
let shot = new Audio();
let machineGun = new Audio();
let treatmentAudio = new Audio();

// =========== - ----- - ===========


// =========== - Лечение - ===========
let treatment = new Image();

// =========== - ----- - ===========

// Персонаж
let player =
{
    activ: 0,
    x: 170,
    y: 634,
    y2: 634,
    w: 72,
    h: 90,
    clickLeft: false,
    clickRight: false,
    clickJump: false,
    clickAttaks: false,
    BonusAttaks: false,
    jumpCount: 0,
    jumpHeight: 0,
    jumpLength: 16,
    jumpWidth: 10,
    JMiddle: 739,
    speed: 10,
    damage: 28,
    level: {n:0,ar:[{boss:false,bl:false}]},
    victory: false,
    loss: false,
    Nskin: 0,
    skin: 
    [
        {
            R: './characters/running/hero1/runR_cl1.png',
            L: './characters/running/hero1/runL_cl1.png',
            ATKR: './characters/attacks/hero1/attacksR_cl1.png',
            ATKL: './characters/attacks/hero1/attacksL_cl1.png',
            default: 
            {
                idleR: './characters/idle/hero1/idleDefaultR_cl1.png',
                idleL: './characters/idle/hero1/idleDefaultL_cl1.png',
                bool: true,
                direction: null
            }
        }
    ],
    bullet: 
    {
        img:'./characters/attacks/hero1/bullet/bullet.png',
        audio: 
        {
            shot: './characters/attacks/hero1/bullet/audio/shot02.mp3',
            machineGun: './characters/attacks/hero1/bullet/audio/machineGun02.mp3',
        },
        x: 271,
        y: 50,
        w: 10,
        h: 6,
        arr: []
    },
    money:
    {
        m: 0,
        bonus: {n:100, bl:false}
    },
    health:
    {
        w: 1110, clonW: 1110,
        treatment: 
        {
            img: './biomes/treatment/treatment.png',
            audio: './biomes/treatment/audio/treatment.mp3',
            w: 36,
            h: 39,
            x: 100,
            y: 664,
            n: 150,
            m: 1000,
            bl: false,
            fall: true,
            fallCount: 58,
            fallHeight: 104,
            fallLength: 116,
        },
        fun: function(w)
        {
            ctx.fillStyle = '#d04648';
            ctx.fillRect(130, 14, w/6, 15);
            ctx.fillStyle = 'black';
        }
    },
    death: false
};
bullet.src = player.bullet.img;
money.src = player.money.img;
shot.src = player.bullet.audio.shot;
machineGun.src = player.bullet.audio.machineGun;
treatment.src = player.health.treatment.img;
treatmentAudio.src = player.health.treatment.audio;