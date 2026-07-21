 
// 
function showHideSoftly() { }

let button = document.getElementById("button");
let rect = document.getElementById("rect");

button.addEventListener("click", () => 
{
  toggleTwoClasses(rect, "is-visible", "is-hidden", 500);
});

function toggleTwoClasses(elem, visible, hidden, timeOfAnimation) 
{
  console.log(elem.classList.contains(visible));
  if (!elem.classList.contains(visible)) 
  {
    elem.classList.add(visible);
    elem.classList.remove(hidden);
  } 
  else 
  {
    elem.classList.add(hidden);  
    window.setTimeout(() => { elem.classList.remove(visible); }, timeOfAnimation);
  }
}