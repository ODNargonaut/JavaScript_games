/* Обнуляет в исходное состаяние
 *
 *
 */

function traitCleaning()
{
    player.inventory.workbench.bool = false;
    for (let i = 13; i <= 15; i++) player.inventory.workbench.items.set(String(i), 'url("")');
    traitFor(player.inventory.workbench.items, 'WCcell');
}