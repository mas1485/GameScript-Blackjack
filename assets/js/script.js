const sum = [];

const playerHand = [];

const dealerHand = [];

let deck = [];

const resetDeck = [
    {
        suit: "hearts",
        name: "ace",
        value: 11,
        id: "1"
    },

    {
        suit: "hearts",
        name: "two",
        value: 2,
        id: "2"
    },

    {
        suit: "hearts",
        name: "three",
        value: 3,
        id: "3"
    },

    {
        suit: "hearts",
        name: "four",
        value: 4,
        id: "4"
    },

    {
        suit: "hearts",
        name: "five",
        value: 5,
        id: "5"
    },

    {
        suit: "hearts",
        name: "six",
        value: 6,
        id: "6"
    },

    {
        suit: "hearts",
        name: "seven",
        value: 7,
        id: "7"
    },

    {
        suit: "hearts",
        name: "eight",
        value: 8,
        id: "8"
    },

    {
        suit: "hearts",
        name: "nine",
        value: 9,
        id: "9"
    },

    {
        suit: "hearts",
        name: "ten",
        value: 10,
        id: "10"
    },

    {
        suit: "hearts",
        name: "jack",
        value: 10,
        id: "11"
    },

    {
        suit: "hearts",
        name: "queen",
        value: 10,
        id: "12"
    },

    {
        suit: "hearts",
        name: "king",
        value: 10,
        id: "13"
    },

    {
        suit: "diamonds",
        name: "ace",
        value: 11,
        id: "14"
    },

    {
        suit: "diamonds",
        name: "two",
        value: 2,
        id: "15"
    },

    {
        suit: "diamonds",
        name: "three",
        value: 3,
        id: "16"
    },

    {
        suit: "diamonds",
        name: "four",
        value: 4,
        id: "17"
    },

    {
        suit: "diamonds",
        name: "five",
        value: 5,
        id: "18"
    },

    {
        suit: "diamonds",
        name: "six",
        value: 6,
        id: "19"
    },

    {
        suit: "diamonds",
        name: "seven",
        value: 7,
        id: "20"
    },

    {
        suit: "diamonds",
        name: "eight",
        value: 8,
        id: "21"
    },

    {
        suit: "diamonds",
        name: "nine",
        value: 9,
        id: "22"
    },

    {
        suit: "diamonds",
        name: "ten",
        value: 10,
        id: "23"
    },

    {
        suit: "diamonds",
        name: "jack",
        value: 10,
        id: "24"
    },

    {
        suit: "diamonds",
        name: "queen",
        value: 10,
        id: "25"
    },

    {
        suit: "diamonds",
        name: "king",
        value: 10,
        id: "26"
    },

    {
        suit: "spades",
        name: "ace",
        value: 11,
        id: "27"
    },

    {
        suit: "spades",
        name: "two",
        value: 2,
        id: "28"
    },

    {
        suit: "spades",
        name: "three",
        value: 3,
        id: "29"
    },

    {
        suit: "spades",
        name: "four",
        value: 4,
        id: "30"
    },

    {
        suit: "spades",
        name: "five",
        value: 5,
        id: "31"
    },

    {
        suit: "spades",
        name: "six",
        value: 6,
        id: "32"
    },

    {
        suit: "spades",
        name: "seven",
        value: 7,
        id: "33"
    },

    {
        suit: "spades",
        name: "eight",
        value: 8,
        id: "34"
    },

    {
        suit: "spades",
        name: "nine",
        value: 9,
        id: "35"
    },

    {
        suit: "spades",
        name: "ten",
        value: 10,
        id: "36"
    },

    {
        suit: "spades",
        name: "jack",
        value: 10,
        id: "37"
    },

    {
        suit: "spades",
        name: "queen",
        value: 10,
        id: "38"
    },

    {
        suit: "spades",
        name: "king",
        value: 10,
        id: "39"
    },

    {
        suit: "clubs",
        name: "ace",
        value: 11,
        id: "40"
    },

    {
        suit: "clubs",
        name: "two",
        value: 2,
        id: "41"
    },

    {
        suit: "clubs",
        name: "three",
        value: 3,
        id: "42"
    },

    {
        suit: "clubs",
        name: "four",
        value: 4,
        id: "43"
    },

    {
        suit: "clubs",
        name: "five",
        value: 5,
        id: "44"
    },

    {
        suit: "clubs",
        name: "six",
        value: 6,
        id: "45"
    },

    {
        suit: "clubs",
        name: "seven",
        value: 7,
        id: "46"
    },

    {
        suit: "clubs",
        name: "eight",
        value: 8,
        id: "47"
    },

    {
        suit: "clubs",
        name: "nine",
        value: 9,
        id: "48"
    },

    {
        suit: "clubs",
        name: "ten",
        value: 10,
        id: "49"
    },

    {
        suit: "clubs",
        name: "jack",
        value: 10,
        id: "50"
    },

    {
        suit: "clubs",
        name: "queen",
        value: 10,
        id: "51"
    },

    {
        suit: "clubs",
        name: "king",
        value: 10,
        id: "52"
    },
]

let playerTurn = true;
let dealerTurn = false;

/**
 * Wait for dom to load before starting game 
 */
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "hit" && playerTurn) {
                hit(playerHand);
                dealCards(playerHand, 'player');
                checkPlayerScore();
            }
            if (this.getAttribute("data-type") === "stand" && playerTurn) {
                playerStand();
            }
        });
    }
    runGame("blackjack");
})

/**
 * Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu or bar icon
 */
function burgerNav() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

/**
 * Burger icon for player to see balance and use chips to bet
 */
function burgerChip() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

/**
 * runs blackjack game with two cards dealt to player and two cards dealt to dealer
 */
function runGame(gameType) {

    deck = [...resetDeck];

    hit(playerHand);
    hit(playerHand);

    hit(dealerHand);
    hit(dealerHand);

    if (gameType === "blackjack") {
        dealCards(playerHand, 'player');
        dealCards(dealerHand, 'dealer');
    } else {
        alert (`Unknown game type: ${gameType}`);
    } 
}

/**
 * Gets card from deck
 */
function getCardFromDeck(deck) {
    var newCard = deck[Math.floor(Math.random() * deck.length)];
    return newCard;
}

/**
 * Removes from deck
 */
function removeCardFromDeck(deck, cardToRemove) {
    deck = deck.filter((card) => card.id !== cardToRemove.id);
    return deck;
}

/**
 * Sums the hand
 */
function getHandValue(hand) {
    let sum = 0;
    for (let i = 0 ; i < hand.length ; i++) {
        sum += hand[i].value;
    }
    return sum;
}

/**
 * adds card to the hand
 */
function hit (hand) {
    let cardHit = getCardFromDeck(deck);
    deck = removeCardFromDeck(deck, cardHit);
    hand.push (cardHit);
}

/**
 * ends the player turn and initiates dealer turn
 */
function playerStand () {
    playerTurn = false;
    playDealerTurn();
}

/**
 * ends dealer turn
 */
function dealerStand () {
    dealerTurn = false;
}

/**
 * Deals cards and inputs into html
 */
function dealCards(hand, idString) {
    let htmlHand = "";
    for (let i = 0 ; i < hand.length ; i++) {
        var cardName = hand[i].name + " of " + hand[i].suit;
        var htmlValue = `<span>${cardName}</span> `;
        htmlHand += htmlValue;
    }
    document.getElementById(idString).innerHTML = htmlHand;
}

function checkPlayerScore () {
    let playerScore = getHandValue(playerHand);
    if (playerScore > 21) {
        alert ("Bust!");
        alert (`You Scored: ${playerScore}`);
        player = false;
    }
}

function checkDealerScore () {
    let dealerScore = getHandValue(dealerHand);
    if (dealerScore > 21) {
        alert ("Dealer Bust!");
        alert (`Dealer Scored: ${dealerScore}`);
        dealerTurn = false;
    }
}

function playDealerTurn () {
    dealerTurn = true;
    while (dealerTurn) {
        let playerScore = getHandValue(playerHand);
        let dealerScore = getHandValue(dealerHand);
                
        if (dealerScore < playerScore) {
            // dealer will hit when less than playerScore
            hit(dealerHand);
            dealCards(dealerHand, 'dealer');
        } else if (dealerScore === playerScore && dealerScore <= 15) {
            // dealer will hit to try and beat player
            hit(dealerHand);
            dealCards(dealerHand, 'dealer');
        } else {
            // dealer will stand to draw/win
            dealerStand();
        }
        
        checkDealerScore();
    }
}