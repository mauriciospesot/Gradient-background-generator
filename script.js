var css = document.querySelector("h3");
var inputColor1 = document.querySelector(".color1");
var inputColor2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var container = document.querySelector(".container");
var previousColors = [["#02AAB0", "#00CDAC"]];
var lastElementArray = 0;


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " + inputColor1.value + ", " + inputColor2.value + ")";
    css.textContent = body.style.backgroundImage + ";";
}

function setRandomGradient() {
    var randomColor1 = getRandomColor();
    var randomColor2 = getRandomColor();

    previousColors.push([randomColor1,randomColor2]);
    
    lastElementArray = previousColors.length - 1;
    body.style.background = "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";
    inputColor1.value = randomColor1;
    inputColor2.value = randomColor2;
    css.textContent = body.style.backgroundImage + ";";
}

function setKeyRandomGradient(event) {
    if (event.keyCode === 13) {
        setRandomGradient();
    } else if (event.keyCode === 8 && lastElementArray > 0) {
        lastElementArray = lastElementArray - 1;
        body.style.background = "linear-gradient(to right, " + previousColors[lastElementArray][0] + ", " + previousColors[lastElementArray][1] + ")";
        inputColor1.value = previousColors[lastElementArray][0];
        inputColor2.value = previousColors[lastElementArray][1];
        css.textContent = body.style.backgroundImage + ";";
    }
}

inputColor1.addEventListener("input", setGradient);

inputColor2.addEventListener("input", setGradient);

container.addEventListener("click", setRandomGradient);

body.addEventListener("keydown", setKeyRandomGradient);