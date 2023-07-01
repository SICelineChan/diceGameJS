let randomNumber1 = Math.floor(Math.random()*6) + 1;
console.log(randomNumber1)

let randomDiceImage = "dice" + randomNumber1 + ".png"
let randomImageSource = "images/" + randomDiceImage;

let image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", randomImageSource);

// For the player 2 dice
let randomNumber2 = Math.floor(Math.random()*6) + 1;
let randomImageSource2 = "images/dice" + randomNumber2 + ".png"
let image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src", randomImageSource2)

if (randomImageSource > randomImageSource2) {
    document.querySelector("h1").innerHTML = " 🫲 Player 1 wins"
    console.log("Player 1 wins")
} else if (randomImageSource < randomImageSource2) {
    document.querySelector("h1").innerHTML = "Player 2 wins 🫱"
    console.log("Player 2 wins")
} else {
    document.querySelector("h1").innerHTML = "we have a draw";
    console.log("we have a draw")}







