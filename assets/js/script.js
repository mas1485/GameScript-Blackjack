let playerHand = [];

let dealerHand = [];

let deck = [];

let pot = [];

let splitHand = [];

let score = 1000;

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

let playerTurn = false;
let dealerTurn = false;
let allowDoubleBet = false;
let betStage = true;
let allowSplitGame = false;

/**
 * Wait for dom to load before starting game 
 */
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "hit" && playerTurn) {
                hit(playerHand);
                allowDoubleBet = false;
                toggleSplitHide();
                toggleDoubleHide();
                toggleBetHide();
                dealCards(playerHand, 'player');
                checkPlayerScore();
            }
            if (this.getAttribute("data-type") === "double" && playerTurn && allowDoubleBet) {
                allowDoubleBet = false;
                doubleBet();
                toggleBetHide();
            }
            if (this.getAttribute("data-type") === "split" && playerTurn && allowSplitGame) {
                splitPlayerHand();
                toggleSplitHide();
            }
            if (this.getAttribute("data-type") === "stand" && playerTurn) {
                playerStand();
                toggleSplitHide();
            }
            if (this.getAttribute("data-type") === "new-game") {
                newGame();
                toggleNewGameHide();
            }
            if (this.getAttribute("data-type") === "play-again") {
                newGameNoBet();
                toggleContinueHide();
            }
            if (this.getAttribute("data-type") === "bet10" && betStage) {
                placeBet(10);
            }
            if (this.getAttribute("data-type") === "bet50" && betStage) {
                placeBet(50);
            }
            if (this.getAttribute("data-type") === "bet100" && betStage) {
                placeBet(100);
            }
            if (this.getAttribute("data-type") === "bet500" && betStage) {
                placeBet(500);
            }
            if (this.getAttribute("data-type") === "bet1000" && betStage) {
                placeBet(1000);
            }
            if (this.getAttribute("data-type") === "lock-bet" && betStage) {
                runGame("blackjack");
                if (score >= getPotValue()) {
                    allowDoubleBet=true;
                    toggleDoubleShow();
                }
            }
        });
    }

    toggleBetShow();
    toggleConHide();
    toggleNewGameHide();
    toggleContinueHide();
    updateScore();

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
    betStage = false;
    playerTurn = true;
    allowDoubleBet = true;
    toggleDoubleShow();
    toggleBetHide();
    toggleConShow();
    deck = [...resetDeck];
    hit(playerHand);
    hit(playerHand);
    hit(dealerHand);
    hit(dealerHand);
    dealCards(playerHand, 'player');
    dealCards(dealerHand, 'dealer');
    checkPlayerScore();
    checkDealerScore();
    if (playerHand[0].value === playerHand[1].value) {
        allowSplitGame = true;
        toggleSplitShow();
    } else {
        allowSplitGame = false;
        toggleSplitHide();
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
function hit(hand) {
    let cardHit = getCardFromDeck(deck);
    toggleDoubleHide();
    deck = removeCardFromDeck(deck, cardHit);
    hand.push (cardHit);
}

/**
 * doubles the bet placed into the pot
 */
function doubleBet() {
    let sum = getPotValue();
    pot.push(sum);
    score -= sum;
    document.getElementById('pot').innerHTML = getPotValue();
    document.getElementById('score').innerHTML = score;
    allowDoubleBet = false;
    toggleDoubleHide();
}

/**
 * splits the hand allowing the player to play twice for the pot
 */
function splitPlayerHand() {
    // createDiv();
    allowSplitGame = true;
    storeSecondCard();
    removeSecondCard();
    dealCards(playerHand, 'player');
    dealCards(splitHand, 'player-split');
}

// /**
//  * creates div for the split hand
//  */
// function createDiv() {
//     const newDiv = document.createElement('div');
//     newDiv.id = 'player-split';
//     document.getElementById("player").appendChild(newDiv);
// }

/**
 * stores the second card so that the first hand can be set to only have the first card
 */
function storeSecondCard() {
    splitHand.push (playerHand[1]);
}

/**
 * removes the second card from the players hand
 */
function removeSecondCard() {
    playerHand.splice(1);
}

// /**
//  * pulls the split card and puts it into the secondary hand
//  */
// function createSplitHand() {
//     dealCards(splitCard, 'player-split');
// }

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

/**
 * ends the player turn and initiates dealer turn
 */
function playerStand() {
    playerTurn = false;
    allowDoubleBet = false;
    toggleDoubleHide();
    toggleConHide();
    playDealerTurn();
}

/**
 * ends dealer turn
 */
function dealerStand() {
    dealerTurn = false;
}

/**
 * checks player score and alerts player when bust - places sum into tracker
 */
function checkPlayerScore() {
    let playerScore = getHandValue(playerHand);
    document.getElementById('tracker-player').innerHTML = playerScore;
    if (playerScore > 21) {
        alert ("Bust!");
        alert (`You Scored: ${playerScore}`);
        player = false;
    }
}

/**
 * checks dealer score and alerts player if dealer bust - places sum into tracker
 */
function checkDealerScore() {
    let dealerScore = getHandValue(dealerHand);
    document.getElementById('tracker-dealer').innerHTML = dealerScore;
    if (dealerScore > 21) {
        alert ("Dealer Bust!");
        alert (`Dealer Scored: ${dealerScore}`);
        dealerTurn = false;
    }
}

/**
 * plays the dealers turn
 */
function playDealerTurn() {
    dealerTurn = true;
    let playerScore = getHandValue(playerHand);
    let dealerScore = getHandValue(dealerHand);

    while (dealerTurn) {
        playerScore = getHandValue(playerHand);
        dealerScore = getHandValue(dealerHand);
                
        if (dealerScore < playerScore) {
            // dealer will hit when less than playerScore
            hit(dealerHand);
            dealCards(dealerHand, 'dealer');
            checkDealerScore();
        } else if (dealerScore === playerScore && dealerScore <= 15) {
            // dealer will hit to try and beat player
            hit(dealerHand);
            dealCards(dealerHand, 'dealer');
            checkDealerScore();
        } else {
            // dealer will stand to draw/win
            dealerStand();
            checkDealerScore();
        }
    }
    
    if (dealerScore > playerScore && dealerScore <= 21) {
        playerLost();
    } else if (dealerScore === playerScore && dealerScore <=21 ) {
        draw();
    } else {
        playerWon();
    }
}

/**
 * places the chip from the score into the pot and settles the balances
 */
function placeBet(chip) {
    if (score >= chip) {
        pot.push(chip);
        let sum = getPotValue();
        score -= chip;
        document.getElementById('pot').innerHTML = sum;
        document.getElementById('score').innerHTML = score;
    }
}

/**
 * gets value of the pot for the above function so that the pot is added correctly
 */
function getPotValue() {
    let sum = 0;
    for (let i = 0 ; i < pot.length ; i++) {
        var chipValue = pot[i];
        sum += chipValue;
    }
    return sum;
}

/**
 * resets pot to 0
 */
function resetPot() {
    document.getElementById('pot').innerHTML = 0;
}

/**
 * updates score sent to html
 */
function updateScore() {
    document.getElementById('score').innerHTML = score;
}

/**
 * displays player won, awards them value of the pot before allowing player to reset by playing new game
 */
function playerWon() {
    let sum = getPotValue();
    score += sum*2;
    document.getElementById('score').innerHTML = score;
    playerTurn = false;
    dealerTurn = false;
    betStage = false;
    allowSplitGame = false;
    alert ("You Won!");
    toggleNewGameShow();
    toggleConHide();
}

/**
 * displays player lost, removes functions before allowing player to reset by playing new game
 */
function playerLost() {
    playerTurn = false;
    dealerTurn = false;
    allowSplitGame = false;
    betStage = false;
    alert ("You Lost!");
    toggleNewGameShow();
    toggleConHide();
}

/**
 * displays a draw, removes functions before allowing player to continue to play a new game
 */
function draw() {
    playerTurn = false;
    dealerTurn = false;
    allowSplitGame = false;
    betStage = false;
    alert ("You Drew!");
    toggleContinueShow();
    toggleConHide();
}

/**
 * resets all the arrays and clears the stages
 */
function newGame() {
    betStage = true;
    playerHand = [];
    dealerHand = [];
    deck = [];
    pot = [];
    dealCards(playerHand, 'player');
    dealCards(dealerHand, 'dealer');
    resetPot();
    toggleBetShow();
    toggleConHide();
    placeBet();
}

/**
 * plays a new game that bypasses the betting stage but resets the cards
 */
function newGameNoBet() {
    playerHand = [];
    dealerHand = [];
    deck = [];
    dealCards(playerHand, 'player');
    dealCards(dealerHand, 'dealer');
    betStage = false;
    playerTurn = true;
    allowDoubleBet = false;
    toggleBetHide();
    toggleConShow();
    toggleDoubleHide();
    deck = [...resetDeck];
    hit(playerHand);
    hit(playerHand);
    hit(dealerHand);
    hit(dealerHand);
    dealCards(playerHand, 'player');
    dealCards(dealerHand, 'dealer');
}

/**
 * toggles the betting button on when the player is in the betting stage
 */
function toggleBetShow() {
    var div = document.getElementsByClassName('toggle-bet');
    for (var i = 0; i < div.length; i ++) {
        div[i].style.visibility = 'visible';
    }
}

/**
 * toggles the betting button off when the player finishes the betting stage
 */
function toggleBetHide() {
    var div = document.getElementsByClassName('toggle-bet');
    for (var i = 0; i < div.length; i ++) {
        div[i].style.visibility = 'hidden';
    }
}

/**
 * toggles the control buttons on when it is the player's turn
 */
function toggleConShow() {
    var div = document.getElementsByClassName('toggle-con');
    for (var i = 0; i < div.length; i ++) {
        div[i].style.visibility = 'visible';
    }
}

/**
 * toggles the control buttons off when the player ends their turn
 */
function toggleConHide() {
    var div = document.getElementsByClassName('toggle-con');
    for (var i = 0; i < div.length; i ++) {
        div[i].style.visibility = 'hidden';
    }
}

/**
 * shows the double button when it can be played
 */
function toggleDoubleShow() {
    var div = document.getElementsByClassName('double');
    for (var i = 0; i < div.length; i ++) {
        div[i].style.visibility = 'visible';
    }
}

/**
 * hides the double button when it cannot be played
 */
function toggleDoubleHide() {
    var div = document.getElementsByClassName('double');
    for (var i = 0; i < div.length; i ++) {
        div[i].style.visibility = 'hidden';
    }
}

/**
 * shows the split button when it can be played
 */
function toggleSplitShow() {
    var div = document.getElementsByClassName('split');
    for (var i = 0; i < div.length; i ++) {
        div[i].style.visibility = 'visible';
    }
}

/**
 * hides the split button when it cannot be played
 */
function toggleSplitHide() {
    var div = document.getElementsByClassName('split');
    for (var i = 0; i < div.length; i ++) {
        div[i].style.visibility = 'hidden';
    }
}

/**
 * shows the new game button when it can be played
 */
function toggleNewGameShow() {
    var div = document.getElementsByClassName('new-game');
    for (var i = 0; i < div.length; i ++) {
        div[i].style.visibility = 'visible';
    }
}

/**
 * hides the new game button when it cannot be played
 */
function toggleNewGameHide() {
    var div = document.getElementsByClassName('new-game');
    for (var i = 0; i < div.length; i ++) {
        div[i].style.visibility = 'hidden';
    }
}

/**
 * shows the continue button when it can be played
 */
function toggleContinueShow() {
    var div = document.getElementsByClassName('play-again');
    for (var i = 0; i < div.length; i ++) {
        div[i].style.visibility = 'visible';
    }
}

/**
 * hides the continue button when it cannot be played
 */
function toggleContinueHide() {
    var div = document.getElementsByClassName('play-again');
    for (var i = 0; i < div.length; i ++) {
        div[i].style.visibility = 'hidden';
    }
}