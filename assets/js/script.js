// wait for the dom the finish loading before running the game

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "stand") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

// Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu or bar icon
function burgerNav() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function burgerChip() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// randomly selects four cards using the value and suit

function runGame() {
    
}

const suit = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
const value = [];

for (let i = 1 ; i < 14 ; i++) {
    value.push (i);
}

const randomSuit = suit[Math.floor(Math.random() * suit.length)];
const randomValue = value[Math.floor(Math.random() * value.length)];
const card =  randomValue + ' of ' + randomSuit;
console.log(card);