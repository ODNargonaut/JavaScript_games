// --------- Дуэль ---------


document.addEventListener("keydown", DuelONE);

// Открытие и закрытие дуэли
function DuelONE(e) 
{
    if (e.keyCode === 86 && !player.vs.openDuel)
    {
        player.vs.elem.style.marginTop = '-880px';
        player.vs.openDuel = true;
        // Выводим скины главных орудий
        traitFor(player.inventory.mainGun.items, 'MGcell2', 2);
    }
    else if (e.keyCode === 86 && player.vs.openDuel)
    {
        player.vs.elem.style.marginTop = '-1780px';
        player.vs.openDuel = false;
        traitFor(player.inventory.mainGun.items, 'MGcell', 2);
        whenExitingInventory(0, '#FFFFFF', item.cell,'', '', [], 'left');
        deleteCopyOfItem();
    }
}

function movingItemsInABackpackDuel(n, str)
{
    switch(event.button)
    {
        case 0:
        {
            if (!(n > 2) && str == 'MGcell2')
            {
                traitIfEleseIf('MGcell2', player.inventory.cteristicOfThings.mainGun, player.inventory.mainGun.items, str, n);
            }
            else if (n == 1 && str == 'sw')
            {
                traitIfEleseIf('sw', player.vs.sw.characteris, player.vs.sw.item, str, n);
            }
        }; break;
    }
}


// --------- ----- ---------