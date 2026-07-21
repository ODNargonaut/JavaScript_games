// ----------- Запуск web-game -----------


let n = 0;
let fps = 0;
let i = 1;

//
function animation()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    fps++;
    background();
    usr(n);
    if (fps%2 == 0)
    {
        n++;
        if (n > 3) n = 0
    }    
    HeroOffset();
    displayBiomesWithinCamera(i);
    ++i;
    if (i > biomes.home.h1.totalNumBlocks) i = 1;
    
}

setInterval(animation, 40);

// ----------- --------------- -----------