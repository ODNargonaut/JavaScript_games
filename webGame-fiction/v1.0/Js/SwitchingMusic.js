document.addEventListener("keydown", playMusic);

//
function playMusic(e)
{
    // Переключить саунтрек
    switch(e.keyCode)
    {
        case 49: bkAudio.src = music.mp3[0]; bkAudio.play(); break;
        case 50: bkAudio.src = music.mp3[1]; bkAudio.play(); break;
        case 51: bkAudio.src = music.mp3[2]; bkAudio.play(); break;
        case 52: bkAudio.src = music.mp3[3]; bkAudio.play(); break;
        case 53: bkAudio.src = music.mp3[4]; bkAudio.play(); break;
    }
}