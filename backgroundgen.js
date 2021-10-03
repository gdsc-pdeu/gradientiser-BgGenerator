let color1 = document.getElementById("c1");
let color2 = document.getElementById("c2");
let css = document.getElementById("code");
let body = document.getElementById("gradient");
let button = document.getElementById("random");
let degree = document.getElementById("degree");
degree.setAttribute('value', 90)
let direction;

//the event listner is to be added.
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
  return color;
}


function setgradient() {
  body.style.background =
    "linear-gradient(" + degree.value + "deg ," + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
  // console.log(body.style.background);
}

function randomgradient() {
  let randomColor1 = getRandomColor();
  let randomColor2 = getRandomColor();
  color1.value = randomColor1;
  color2.value = randomColor2;
  body.style.background =
    "linear-gradient(" + degree.value + "deg ," + randomColor1 + ", " + randomColor2 + ")";
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setgradient);
color2.addEventListener("input", setgradient);
degree.addEventListener("input", setgradient);
button.addEventListener("click", randomgradient);

window.onload = randomgradient();
