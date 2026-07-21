/* Условия: для выбора/для перемещения/для перестановки местами, элемента(ов) 
 *
 *
 * 
*/

function traitIfEleseIf(id, elem1, elem2, str, n)
{
    let obj = document.getElementById(id+n);
    if (item.num == n && str != 'sw' && item.id != 'MGcell' && (str != 'WCcell' || item.id == 'WCcell') && (str != 'BCcell' || item.id == 'BCcell')) 
    {
        if (str != 'MGcell2')
        {
            whenExitingInventory(1, '#B0B0B0', item.cell,'', 'url('+player.skin[player.Nskin].avatar+')', player.inventory.propertySkin[player.Nskin], 'left', str);
            deleteCopyOfItem();
        }
        else
        {
            whenExitingInventory(1, '#FFFFFF', item.cell,'', '', '', '', str);
            deleteCopyOfItem();
        }
    }
    else if (item.cell == '' && obj.style.backgroundImage != 'url("")' && obj.style.backgroundImage != '' && str != 'sw')
    {
        if (str != 'MGcell2')
            whenExitingInventory(1, '#C6C6C6', obj, n, obj.style.backgroundImage, elem1[n], 'center', str);
        else 
            whenExitingInventory(1, '#DCD8D7', obj, n, obj.style.backgroundImage, elem1[n], 'center', str);
    }
    conditForSwapPlaces(n, elem2, obj, elem1, str);
}