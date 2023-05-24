var diceImageNumber = Math.floor(Math.random() * 6) + 1; //1 - 6

var diceImage = "dice" + diceImageNumber + ".png"; //dice1.png - dice6.png

var diceImageSource = "images/" + diceImage; //./images/dice1.png - ./images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", diceImageSource);

var diceImageNumber2 = Math.floor(Math.random() * 6) + 1;

var diceImage2 = "dice" + diceImageNumber2 + ".png";

var diceImageSource2 = "images/" + diceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", diceImageSource2);

if (diceImageNumber > diceImageNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (diceImageNumber2 > diceImageNumber) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}