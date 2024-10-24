let playerHand = [];

let dealerHand = [];

let deck = [];

let pot = [];

let splitHand = [];

let hiddenCard = [];

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
let allowDoubleBet = true;
let betStage = true;
let allowSplitGame = true;
let splitGame = false;
let useSplitHand = false;

/**
 * Wait for dom to load before starting game 
 */
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "hit" && playerTurn) {
                hit(playerHand);
                toggleSplitHide();
                toggleDoubleHide();
                toggleBetHide();
                dealCards(playerHand, 'player');
                checkPlayerScore();
            }
            if (this.getAttribute("data-type") === "split-hit" && playerTurn) {
                hit(splitHand);
                dealCards(splitHand, 'player-split');
                checkSplitScore();
            }
            if (this.getAttribute("data-type") === "double" && playerTurn && allowDoubleBet) {
                doubleBet();
                toggleBetHide();
                toggleSplitHide();
            }
            if (this.getAttribute("data-type") === "split" && playerTurn && allowSplitGame) {
                doubleBet();
                splitPlayerHand();
                toggleSplitHide();
                toggleSplitConShow();
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
                if (score >= getPotValue() && allowDoubleBet) {
                    toggleDoubleShow();
                }
            }
        });
    }

    checkPlayerScore();
    checkDealerScore();
    toggleBetShow();
    toggleConHide();
    toggleNewGameHide();
    toggleContinueHide();
    toggleSplitConHide();
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
    toggleDoubleShow();
    toggleBetHide();
    toggleConShow();
    deck = [...resetDeck];
    hit(playerHand);
    hit(playerHand);
    hit(dealerHand);
    hit(dealerHand);
    hideDealerCard();
    dealCards(playerHand, 'player');
    dealCards(dealerHand, 'dealer');
    checkPlayerScore();
    checkDealerScore();
    if (playerHand[0].value === playerHand[1].value && allowSplitGame) {
        toggleSplitShow();
    } else {
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
 * Sums the hand and adds logic if ace is in hand this can be treated as 11 or 1
 */
function getHandValue(hand) {
    let sum = 0;
    for (let i = 0 ; i < hand.length ; i++) {
        sum += hand[i].value;
    }

    if (sum > 21 && doesHandContainAce(hand)) {
        sum -= 10;
    }    
    return sum;
}

/**
 * finds out if the hand contains an ace
 */
function doesHandContainAce(hand) {
    for (let i = 0 ; i < hand.length ; i++) {
        if (hand[i].name === 'ace') {
            return true;
        }
    }
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
    toggleDoubleHide();
}

/**
 * splits the hand allowing the player to play twice for the pot
 */
function splitPlayerHand() {
    allowDoubleBet = false;
    allowSplitGame = false;
    splitGame = true;
    storeSecondCard();
    removeSecondCard();
    hit(playerHand);
    hit(splitHand);
    dealCards(playerHand, 'player');
    dealCards(splitHand, 'player-split');
    checkPlayerScore();
    checkSplitScore();
}

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
 * treats the dealer card as if "face-down"
 */
function hideDealerCard () {
    hiddenCard = dealerHand.pop();
    console.log(hiddenCard);
}

/**
 * reveals the "face-down" dealer card
 */
function revealDealerCard () {
    dealerHand.push(hiddenCard);
    console.log(dealerHand);
}

/**
 * ends the player turn and initiates dealer turn
 */
function playerStand() {
    playerTurn = false;
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
        if (!splitGame) {
            player = false;
        }
    }
}

/**
 * checks split player score and alerts player when bust - places sum into tracker
 */
function checkSplitScore() {
    let splitScore = getHandValue(splitHand);
    document.getElementById('tracker-split').innerHTML = splitScore;
    if (splitScore > 21) {
        alert ("Bust!");
        alert (`You Scored: ${splitScore}`);
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
    let splitPlayerScore = getHandValue(splitHand);
    let dealerScore = getHandValue(dealerHand);
    revealDealerCard();

    while (dealerTurn) {
        if (!splitGame) {
            playerScore = getHandValue(playerHand);
            splitPlayerScore = getHandValue(splitHand);
            dealerScore = getHandValue(dealerHand);

            if (dealerScore < playerScore && playerScore <= 21) {
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
        
        if (splitGame) {
            playerScore = getHandValue(playerHand);
            splitPlayerScore = getHandValue(splitHand);
            dealerScore = getHandValue(dealerHand);

            if (dealerScore < playerScore && playerScore <= 21 || dealerScore < splitPlayerScore && splitPlayerScore <= 21) {
                // dealer will hit when less than playerScore
                hit(dealerHand);
                dealCards(dealerHand, 'dealer');
                checkDealerScore();
            } else if (dealerScore === playerScore && dealerScore === splitPlayerScore && dealerScore <= 15 ) {
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
    }
    
    if (dealerScore > playerScore && dealerScore <= 21 && !splitGame) {
        playerLost();
    } else if (dealerScore > playerScore && dealerScore > splitPlayerScore && dealerScore <= 21 && splitGame) {
        playerLost();
    } else if (dealerScore === playerScore && dealerScore <=21 && !splitGame) {
        draw();
    } else if (dealerScore === playerScore && dealerScore === splitPlayerScore && dealerScore <=21 &&splitGame) {
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
    pot = [];
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
    alert ("You Won!");
    toggleNewGameShow();
    toggleConHide();
    toggleSplitConHide();
}

/**
 * displays player lost, removes functions before allowing player to reset by playing new game
 */
function playerLost() {
    playerTurn = false;
    dealerTurn = false;
    betStage = false;
    alert ("You Lost!");
    toggleNewGameShow();
    toggleConHide();
    toggleSplitConHide();
}

/**
 * displays a draw, removes functions before allowing player to continue to play a new game
 */
function draw() {
    playerTurn = false;
    dealerTurn = false;
    betStage = false;
    alert ("You Drew!");
    toggleContinueShow();
    toggleConHide();
    toggleSplitConHide();
}

/**
 * resets all the arrays and clears the stages
 */
function newGame() {
    betStage = true;
    allowDoubleBet = true;
    splitGame = false;
    useSplitHand = false;
    playerHand = [];
    splitHand = [];
    dealerHand = [];
    deck = [];
    dealCards(playerHand, 'player');
    dealCards(playerHand, 'player-split');
    dealCards(dealerHand, 'dealer');
    checkPlayerScore();
    checkSplitScore();
    checkDealerScore();
    resetPot();
    toggleBetShow();
    toggleConHide();
    toggleSplitConHide();
    placeBet();
}

/**
 * plays a new game that bypasses the betting stage but resets the cards
 */
function newGameNoBet() {
    playerHand = [];
    splitHand = [];
    dealerHand = [];
    deck = [];
    dealCards(playerHand, 'player');
    dealCards(playerHand, 'player-split');
    dealCards(dealerHand, 'dealer');
    checkPlayerScore();
    checkSplitScore();
    checkDealerScore();
    betStage = false;
    playerTurn = true;
    allowDoubleBet = true;
    splitGame = false;
    useSplitHand = false;
    toggleBetHide();
    toggleConShow();
    toggleSplitConHide();
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

/**
 * shows the hit/stand buttons when a split game is played
 */
function toggleSplitConShow() {
    var div = document.getElementsByClassName('toggle-con-split');
    for (var i = 0; i < div.length; i ++) {
        div[i].style.display = 'block';
    }
}

/**
 * shows the hit/stand buttons when a split game is played
 */
function toggleSplitConHide() {
    var div = document.getElementsByClassName('toggle-con-split');
    for (var i = 0; i < div.length; i ++) {
        div[i].style.display = 'none';
    }
}