let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let img1 = './img/user/user_shooter.png';  // 265x112

let img2 = './img/enemys/enemy1.png';  // 132x98
let img3 = './img/enemys/enemy2.png';  // 85x91
let img4 = './img/enemys/enemy3.png';  // 44x32

let img5 = './img/bullets/bullet1.png';  // 10x6
let img6 = './img/bullets/bullet2.png';  // 22x10
let img7 = './img/bullets/bullet3.png';  // 45x28
let img8 = './img/bullets/bullet4.png';  // 16x10
let img9 = './img/bullets/bullet5.png';  // 65x10
let img10 = './img/bullets/bullet6.png'; // 49x22 
let img11 = './img/bullets/bullet7.png'; // 22x10 

let img12 = './img/bullets/bullet_babax/babax.png'; // 83x78

let img13 = './img/love/love.png'; // 171x152

let img = new Image();
img.src = img13;
let shot = 1;  // кадр

function animation()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // img1 -> ctx.drawImage(img, shot*265, 0, 265, 112, 30, 10, 225, 82);
    
    // img2 -> ctx.drawImage(img, 30, 10, 132, 98);
    // img3 -> ctx.drawImage(img, 30, 10, 85, 91);
    // img4 -> ctx.drawImage(img, 30, 10, 44, 32);

    // img5 -> ctx.drawImage(img, 30, 10, 10, 6);
    // img6 -> ctx.drawImage(img, 30, 10, 22, 10);
    // img7 -> ctx.drawImage(img, 30, 10, 45, 28);
    // img8 -> ctx.drawImage(img, 30, 10, 16, 10);
    // img9 -> ctx.drawImage(img, 30, 10, 65, 10);
    // img10 -> ctx.drawImage(img, 30, 10, 49, 22);
    // img11 -> ctx.drawImage(img, 30, 10, 22, 10);

    // img12 -> ctx.drawImage(img, shot*83, 0, 80, 78, 30, 10, 83, 78);

    // img13 -> ctx.drawImage(img, 30, 10, 48, 42);
    
    shot++;
    if (shot == 5)
        shot = 1; 

}

setInterval(animation, 100);