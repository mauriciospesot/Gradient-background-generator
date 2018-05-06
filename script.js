var CurrentCss = document.querySelector("h3");
var inputColor1 = document.querySelector(".color1");
var inputColor2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var leftArrow = document.querySelector(".left");
var rightArrow = document.querySelector(".right");
var previousColors = [["#02AAB0", "#00CDAC"]];
var lastElementArray = 0;
body.style.background = "linear-gradient(to right, #02AAB0, #00CDAC)";
CurrentCss.textContent = body.style.backgroundImage + ";";


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
    CurrentCss.textContent = body.style.backgroundImage + ";";
}

function setRandomGradient() {
    var randomColor1 = getRandomColor();
    var randomColor2 = getRandomColor();

    previousColors.push([randomColor1,randomColor2]);

    lastElementArray = previousColors.length - 1;
    body.style.background = "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";
    inputColor1.value = randomColor1;
    inputColor2.value = randomColor2;
    CurrentCss.textContent = body.style.backgroundImage + ";";
}

function setPreviousGradient() {
    if (lastElementArray > 0) {
        lastElementArray = lastElementArray - 1;
        body.style.background = "linear-gradient(to right, " + previousColors[lastElementArray][0] + ", " + previousColors[lastElementArray][1] + ")";
        inputColor1.value = previousColors[lastElementArray][0];
        inputColor2.value = previousColors[lastElementArray][1];
        CurrentCss.textContent = body.style.backgroundImage + ";";
    }
}

inputColor1.addEventListener("input", setGradient);

inputColor2.addEventListener("input", setGradient);

rightArrow.addEventListener("click", setRandomGradient);

leftArrow.addEventListener("click", setPreviousGradient);
