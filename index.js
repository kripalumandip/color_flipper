//list of colors array
let colors = [
    "rgb(193, 193, 246)", 
    "rgb(246, 201, 193)", 
    "rgb(246, 228, 193)",
    "rgb(245, 246, 193)",
    "rgb(206, 246, 193)",
    "rgb(246, 193, 218)",
    "rgb(193, 246, 215)"
];

let button = document.querySelector('button');
// generating background color changer function
function changecolor() {
    //generating random number between 0 to 10
    let randomNumber = Math.floor(Math.random()*colors.length);
//selecting background color from array and inserting to body
document.body.style.backgroundColor = colors[randomNumber];};
// on click event listener to button 
button.addEventListener("click", changecolor);

