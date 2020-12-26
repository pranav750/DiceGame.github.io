var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

var firstDice = document.querySelector(".img1");
var secondDice = document.querySelector(".img2");
var heading = document.querySelector("h1");

firstDice.setAttribute("src", "images/dice" + randomNumber1 + ".svg");
secondDice.setAttribute("src", "images/dice" + randomNumber2 + ".svg");

if (randomNumber1 > randomNumber2) {
  heading.textContent = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  heading.textContent = "Player 2 Wins!";
} else {
  heading.textContent = "Draw!";
}
