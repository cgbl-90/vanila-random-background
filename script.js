let box = document.getElementById("box");
let btn = document.getElementById("btn");
let clr = document.getElementById("clr-code");
btn.addEventListener("click", generateColor);
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function generateColor() {
  let colorCode = "#";
  for (let i = 0; i < 6; i++) {
    colorCode = colorCode + array[Math.floor(Math.random() * 15)];
  }
  box.style.backgroundColor = colorCode;
  clr.innerHTML = colorCode;
}
