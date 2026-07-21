/* При выходе из инвенторя меняем скин по умолчанию
 * в зависимости от направления персонажа
 *
 * 
*/

function traitSwitchCase2(directiOfTravel, plSkDeflt)
{
    switch(directiOfTravel)
    {
        case 'T': return plSkDeflt.T;
        case 'B': return plSkDeflt.B;
        case 'L': return plSkDeflt.L;
        case 'R': return plSkDeflt.R;
    }
}