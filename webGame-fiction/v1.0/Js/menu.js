// ----------- Главное меню ---------


document.getElementById('btnPlay').onclick = function() 
{
    document.getElementById('blPlay').style.top = '-890px';
    player.activ = true;
    pausa = false;
    bkAudio.play();
};

// ----------------------------------


//
function btnOptions()
{
    document.getElementById('btnPlay').style.display = 'none';
    document.getElementById('btnOpt').style.display = 'none';
    document.getElementById('topic').style.display = 'none';
    document.getElementById('Opt').style.display = 'block';
}