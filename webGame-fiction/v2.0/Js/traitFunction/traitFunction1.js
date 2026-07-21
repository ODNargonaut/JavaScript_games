/* Меняем скин-атака в зовисимости от направления персонажа
 *
 *
 *  
 */

function traitSwitchCase()
{
    switch(player.skin[player.Nskin].default.direction)
    {
        case 'R': h.src = player.skin[player.Nskin].ATKR; break;
        case 'L': h.src = player.skin[player.Nskin].ATKL; break;
    }
}