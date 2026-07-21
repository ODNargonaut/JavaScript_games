// --------- Инвентарь персонажа ---------

// Сохраняем все предметы из БД в рюгзак персонажа
traitFor(player.inventory.items, 'BCcell');

// Сохраняем все скины персонажа из БД
for (let i = 0; i < player.skin.length; i++)
{
    let CScell = document.getElementById('CScell'+(i+1));
    CScell.style.backgroundImage = 'url('+player.skin[i].avatar+')';
}

document.addEventListener("keydown", inventoryUserONE);

// При входе/выходе из инвенторя
function whenExitingInventory(bool, color, cell, num, img, property, pos, id='')
{
    if (cell != '') cell.style.backgroundColor = color;
    if (bool)
    {
        item.cell = cell;
        item.num = num;
        item.img = img;
        item.property = property;
        item.id = id;
    }
    if (item.id != 'MGcell2')
    {
        let arr = property;
        elevImg = document.getElementById('elemImg');
        elemImg.style.backgroundImage = img;
        elemImg.style.backgroundPosition = pos;
        for (let i = 0; i < (bool?item.property:arr).length; i++)
        {
            let property = document.getElementById('num'+(i+1));
            property.innerHTML = (bool?item.property:arr)[i];
        }
    }
}

// Открытие и закрытие инвенторя user
function inventoryUserONE(e) 
{
    if (e.keyCode === 69 && !player.inventory.openInv) 
    {
        player.inventory.elem.style.marginTop = '35px';
        player.inventory.openInv = true;
        whenExitingInventory(0,'','','', 'url('+player.skin[player.Nskin].avatar+')', player.inventory.propertySkin[player.Nskin], 'left');
    }
    else if (e.keyCode === 69 && player.inventory.openInv)
    {
        player.inventory.elem.style.marginTop = '-800px';
        player.inventory.openInv = false;
        whenExitingInventory(1, '#B0B0B0', item.cell,'', 'url('+player.skin[player.Nskin].avatar+')', player.inventory.propertySkin[player.Nskin], 'left');
        h.src = traitSwitchCase2(player.directiOfTravel, player.skin[player.Nskin].default);
        deleteCopyOfItem();
    }
}

// Скопировать предмет
let item = {cell: '', num: '', img: '', property: '', id: ''};  // предметы

// Скопировать скин
let skin = {cell: '', num: '', img: '', property: ''};  // скины

// Удалить копию предмета
function deleteCopyOfItem()
{
    item.cell = '';
    item.num = '';
    item.img = '';
    item.property = '';
    item.id = '';
}

//
function swapPlaces(n, cell, url, items, ctOfTh, v, v2)
{
    cell.style.backgroundImage = item.img;
    item.cell.style.backgroundImage = url;
    item.cell.style.backgroundColor = item.id!='MGcell2'?'#B0B0B0':'#FFFFFF';
    whenExitingInventory(0,'','','', 'url('+player.skin[player.Nskin].avatar+')', player.inventory.propertySkin[player.Nskin], 'left');
    switch(item.id)
    {
        case 'BCcell': 
            player.inventory.items.set(item.num, v); 
            player.inventory.cteristicOfThings.backpack[item.num] = v2; break;
        case 'MGcell': 
            player.inventory.mainGun.items.set(item.num, v); 
            player.inventory.cteristicOfThings.mainGun[item.num] = v2; break;
        case 'MGcell2': 
            player.inventory.mainGun.items.set(item.num, v); 
            player.inventory.cteristicOfThings.mainGun[item.num] = v2; break;
        case 'WCcell': 
            player.inventory.workbench.items.set(item.num, v); 
            player.inventory.cteristicOfThings.workbench[item.num] = v2; break;
    }
    items.set(n, item.img);
    ctOfTh[n] = item.property;
}

// Условия: для вызова swapPlaces()
function conditForSwapPlaces(n, items, id, ctOfTh, str)
{
    if (item.cell != '' && (items.get(n) == 'url("")' || items.get(n) == '') && str != 'MGcell2')
    {
        swapPlaces(n, id, 'url("")', items, ctOfTh, 'url("")', '');
        if (player.inventory.workbench.bool && item.id == 'WCREScell')
        {
            player.inventory.workbench.bool = false;
            for (let i = 1; i <= 15; i++) player.inventory.workbench.items.set(String(i), 'url("")');
            traitFor(player.inventory.workbench.items, 'WCcell');
        }
        deleteCopyOfItem();
    }
    if (item.num != n && item.cell != '' && (items.get(n) != 'url("")' || items.get(n) != '') && item.id != 'WCREScell' && str != 'MGcell2')
    {
        swapPlaces(n, id, items.get(n), items, ctOfTh, items.get(n), ctOfTh[n]);
        deleteCopyOfItem();
    }
    else if (item.num == n && 
            (item.id == 'WCcell' && str == 'BCcell') || (item.id == 'BCcell' && str == 'WCcell') || 
            (item.id == 'BCcell' && str == 'MGcell') || (item.id == 'MGcell' && str == 'BCcell') ||
            (item.id == 'MGcell' && str == 'WCcell') || (item.id == 'WCcell' && str == 'MGcell') ||
            (item.id == 'MGcell2' && str == 'sw'))
    {
        swapPlaces(n, id, items.get(n), items, ctOfTh, items.get(n), ctOfTh[n]);
        deleteCopyOfItem();
    }
}

// Изготовление предметов в верстоке
function craft()
{
    let combinationElems = ['',''];
    for (let i = 1; i <= player.inventory.workbench.items.size-3; i++)
    {
        if (player.inventory.workbench.items.get(String(i)) != 'url("")')
        {
            let elm = player.inventory.workbench.items.get(String(i)).substr(5);
            elm = 'url('+elm.substr(0, elm.indexOf('"'))+')';
            combinationElems[0] = combinationElems[0]+String(i);
            combinationElems[1] = combinationElems[1]+crafting.items.get(elm);
        }
    }
    if (crafting.combination[combinationElems[0]] != undefined)
    {
        let CrafResult = crafting.combination[combinationElems[0]].get(combinationElems[1]);
        if (CrafResult != undefined)
        {
            player.inventory.workbench.items.set('13', CrafResult[0]);
            player.inventory.workbench.items.set('14', CrafResult[1]);
            player.inventory.workbench.items.set('15', CrafResult[2]);
            player.inventory.workbench.bool = true;
            // Выводим полученые предметы
            traitFor(player.inventory.workbench.items, 'WCcell');
        }
        else traitCleaning();
    }
    else if (player.inventory.workbench.bool) traitCleaning();
}

let some = true;
function movingItemsInABackpack(n, str)
{
    switch(event.button)
    {
        case 0:
        {
            if (!(n > 10) && str == 'BCcell' && !event.ctrlKey)
            {
                traitIfEleseIf('BCcell', player.inventory.cteristicOfThings.backpack, player.inventory.items, str, n);
                craft();
            }
            else if (!(n > 12) && str == 'WCcell' && !event.ctrlKey && item.id != 'WCREScell')
            {
                traitIfEleseIf('WCcell', player.inventory.cteristicOfThings.workbench, player.inventory.workbench.items, str, n);
                craft();
            }
            else if ((12 < n && n <= 15) && str == 'WCREScell' && player.inventory.workbench.bool && !event.ctrlKey)
            {
                let tmpObj = {13:'',14:'',15:''};
                for (let i = 13; i <= 15; i++) tmpObj[i] = crafting.cteristicOfThings[player.inventory.workbench.items.get(String(i))];
                traitIfEleseIf('WCcell', tmpObj, player.inventory.workbench.items, str, n);
            }
        }; break;
        case 2:
        {
            if (!(n > 2) && str == 'MGcell')
            {
                let MGcell = document.getElementById('MGcell'+n);
                if (MGcell.style.backgroundImage != 'url("")')
                {
                    console.log(MGcell.style.backgroundImage);
                    if (player.inventory.mainGun.items.get(n) != 'url("")' && item.num == '' && !event.ctrlKey)
                    {
                        if (some)
                        {
                            whenExitingInventory(0,'#C6C6C6',MGcell,'', MGcell.style.backgroundImage, player.inventory.cteristicOfThings.mainGun[n], 'center');
                            some = false;
                        }
                        else
                        {
                            whenExitingInventory(0,'#B0B0B0',MGcell,'', 'url('+player.skin[player.Nskin].avatar+')', player.inventory.propertySkin[player.Nskin], 'left');
                            some = true;
                        }
                    }
                    MGcell.onclick = function(event)
                    {
                        if (event.ctrlKey && item.cell == '' && player.inventory.mainGun.items.get(n) != 'url("")')
                            whenExitingInventory(1, '#C6C6C6', MGcell, n, MGcell.style.backgroundImage, player.inventory.cteristicOfThings.mainGun[n], 'center', str);
                    }
                }
                if (!event.ctrlKey && item.id != 'MGcell')
                {
                    conditForSwapPlaces(n, player.inventory.mainGun.items, MGcell, player.inventory.cteristicOfThings.mainGun, str);
                    craft();
                }
            }
            else if (!(n > 2) && str == 'CScell')
            {
                let CScell = document.getElementById('CScell'+n);
                player.Nskin = n-1;
                whenExitingInventory(0,'', CScell,'', 'url('+player.skin[player.Nskin].avatar+')', player.inventory.propertySkin[player.Nskin], 'center');
            }
        }; break;
    }
}

// --------- ------------------- ---------