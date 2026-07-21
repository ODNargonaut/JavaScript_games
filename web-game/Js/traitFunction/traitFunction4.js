/* Выводит изображения предметов
 *
 *
 */

function traitFor(obj, id, size=0)
{
    for (let i = 1; i <= (size==0?obj.size:size); i++)
    {
        let cell = document.getElementById(id+i);
        cell.style.backgroundImage = obj.get(String(i));
    }
}