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
        frontend: "A",
        id: "1"
    },

    {
        suit: "hearts",
        name: "two",
        value: 2,
        frontend: "2",
        id: "2"
    },

    {
        suit: "hearts",
        name: "three",
        value: 3,
        frontend: "3",
        id: "3"
    },

    {
        suit: "hearts",
        name: "four",
        value: 4,
        frontend: "4",
        id: "4"
    },

    {
        suit: "hearts",
        name: "five",
        value: 5,
        frontend: "5",
        id: "5"
    },

    {
        suit: "hearts",
        name: "six",
        value: 6,
        frontend: "6",
        id: "6"
    },

    {
        suit: "hearts",
        name: "seven",
        value: 7,
        frontend: "7",
        id: "7"
    },

    {
        suit: "hearts",
        name: "eight",
        value: 8,
        frontend: "8",
        id: "8"
    },

    {
        suit: "hearts",
        name: "nine",
        value: 9,
        frontend: "9",
        id: "9"
    },

    {
        suit: "hearts",
        name: "ten",
        value: 10,
        frontend: "10",
        id: "10"
    },

    {
        suit: "hearts",
        name: "jack",
        value: 10,
        frontend: "J",
        id: "11"
    },

    {
        suit: "hearts",
        name: "queen",
        value: 10,
        frontend: "Q",
        id: "12"
    },

    {
        suit: "hearts",
        name: "king",
        value: 10,
        frontend: "K",
        id: "13"
    },

    {
        suit: "diamonds",
        name: "ace",
        value: 11,
        frontend: "A",
        id: "14"
    },

    {
        suit: "diamonds",
        name: "two",
        value: 2,
        frontend: "2",
        id: "15"
    },

    {
        suit: "diamonds",
        name: "three",
        value: 3,
        frontend: "3",
        id: "16"
    },

    {
        suit: "diamonds",
        name: "four",
        value: 4,
        frontend: "4",
        id: "17"
    },

    {
        suit: "diamonds",
        name: "five",
        value: 5,
        frontend: "5",
        id: "18"
    },

    {
        suit: "diamonds",
        name: "six",
        value: 6,
        frontend: "6",
        id: "19"
    },

    {
        suit: "diamonds",
        name: "seven",
        value: 7,
        frontend: "7",
        id: "20"
    },

    {
        suit: "diamonds",
        name: "eight",
        value: 8,
        frontend: "8",
        id: "21"
    },

    {
        suit: "diamonds",
        name: "nine",
        value: 9,
        frontend: "9",
        id: "22"
    },

    {
        suit: "diamonds",
        name: "ten",
        value: 10,
        frontend: "10",
        id: "23"
    },

    {
        suit: "diamonds",
        name: "jack",
        value: 10,
        frontend: "J",
        id: "24"
    },

    {
        suit: "diamonds",
        name: "queen",
        value: 10,
        frontend: "Q",
        id: "25"
    },

    {
        suit: "diamonds",
        name: "king",
        value: 10,
        frontend: "K",
        id: "26"
    },

    {
        suit: "spades",
        name: "ace",
        value: 11,
        frontend: "A",
        id: "27"
    },

    {
        suit: "spades",
        name: "two",
        value: 2,
        frontend: "2",
        id: "28"
    },

    {
        suit: "spades",
        name: "three",
        value: 3,
        frontend: "3",
        id: "29"
    },

    {
        suit: "spades",
        name: "four",
        value: 4,
        frontend: "4",
        id: "30"
    },

    {
        suit: "spades",
        name: "five",
        value: 5,
        frontend: "5",
        id: "31"
    },

    {
        suit: "spades",
        name: "six",
        value: 6,
        frontend: "6",
        id: "32"
    },

    {
        suit: "spades",
        name: "seven",
        value: 7,
        frontend: "7",
        id: "33"
    },

    {
        suit: "spades",
        name: "eight",
        value: 8,
        frontend: "8",
        id: "34"
    },

    {
        suit: "spades",
        name: "nine",
        value: 9,
        frontend: "9",
        id: "35"
    },

    {
        suit: "spades",
        name: "ten",
        value: 10,
        frontend: "10",
        id: "36"
    },

    {
        suit: "spades",
        name: "jack",
        value: 10,
        frontend: "J",
        id: "37"
    },

    {
        suit: "spades",
        name: "queen",
        value: 10,
        frontend: "Q",
        id: "38"
    },

    {
        suit: "spades",
        name: "king",
        value: 10,
        frontend: "K",
        id: "39"
    },

    {
        suit: "clubs",
        name: "ace",
        value: 11,
        frontend: "A",
        id: "40"
    },

    {
        suit: "clubs",
        name: "two",
        value: 2,
        frontend: "2",
        id: "41"
    },

    {
        suit: "clubs",
        name: "three",
        value: 3,
        frontend: "3",
        id: "42"
    },

    {
        suit: "clubs",
        name: "four",
        value: 4,
        frontend: "4",
        id: "43"
    },

    {
        suit: "clubs",
        name: "five",
        value: 5,
        frontend: "5",
        id: "44"
    },

    {
        suit: "clubs",
        name: "six",
        value: 6,
        frontend: "6",
        id: "45"
    },

    {
        suit: "clubs",
        name: "seven",
        value: 7,
        frontend: "7",
        id: "46"
    },

    {
        suit: "clubs",
        name: "eight",
        value: 8,
        frontend: "8",
        id: "47"
    },

    {
        suit: "clubs",
        name: "nine",
        value: 9,
        frontend: "9",
        id: "48"
    },

    {
        suit: "clubs",
        name: "ten",
        value: 10,
        frontend: "10",
        id: "49"
    },

    {
        suit: "clubs",
        name: "jack",
        value: 10,
        frontend: "J",
        id: "50"
    },

    {
        suit: "clubs",
        name: "queen",
        value: 10,
        frontend: "Q",
        id: "51"
    },

    {
        suit: "clubs",
        name: "king",
        value: 10,
        frontend: "K",
        id: "52"
    },
];

let playerTurn = false;
let dealerTurn = false;
let allowDoubleBet = true;
let betStage = true;
let allowSplitGame = true;
let firstHand = true;
let splitGame = false;
let useSplitHand = false;
let buttonPress = false;

/**
 * Wait for dom to load before starting game 
 */
document.addEventListener("DOMContentLoaded", function() {
    buttonPress = false;
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            buttonPress = true;
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
                toggleSplitConShow();
                toggleSplitHide();
                toggleSplitNone();
                toggleSplitTrackerShow();
            }
            if (this.getAttribute("data-type") === "stand" && playerTurn) {
                playerStand();
                toggleSplitHide();
            }
            if (this.getAttribute("data-type") === "new-game") {
                newGame();
                toggleNewGameHide();
            }
            if (this.getAttribute("data-type") === "bet10" && betStage) {
                placeBet(10);
                togglePotShow();
            }
            if (this.getAttribute("data-type") === "bet50" && betStage) {
                placeBet(50);
                togglePotShow();
            }
            if (this.getAttribute("data-type") === "bet100" && betStage) {
                placeBet(100);
                togglePotShow();
            }
            if (this.getAttribute("data-type") === "bet500" && betStage) {
                placeBet(500);
                togglePotShow();
            }
            if (this.getAttribute("data-type") === "bet1000" && betStage) {
                placeBet(1000);
                togglePotShow();
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
    toggleSplitConHide();
    toggleSplitRevert();
    togglePlayerTrackerHide();
    toggleSplitTrackerHide();
    toggleDealerTrackerHide();
    updateScore();

    document.addEventListener("click", function() {
        if (!buttonPress) {
            hideAlert();
        } else {
            buttonPress = false;
        }
    });
    
});

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
    togglePlayerTrackerShow();
    toggleDealerTrackerShow();
    let cost = getPotValue();
    if (cost > 0) {
        document.getElementById('double-cost').innerHTML = cost;
        document.getElementById('split-cost').innerHTML = cost;
    }
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
 * deals the cards to the html
 */
function dealCards(hand, idString) {
    let htmlHand = "";
    for (let i = 0 ; i < hand.length ; i++) {
        var cardName = hand[i].name;
        var cardSuit = hand[i].suit;
        var cardFrontend = hand[i].frontend;
        var htmlValue = `<container class="card ${cardName} ${cardSuit}">${cardFrontend}</container>`;
        htmlHand += htmlValue;
    }
    document.getElementById(idString).innerHTML = htmlHand;
}

/**
 * treats the dealer card as if "face-down"
 */
function hideDealerCard () {
    hiddenCard = dealerHand.pop();
}

/**
 * reveals the "face-down" dealer card
 */
function revealDealerCard () {
    dealerHand.push(hiddenCard);
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
    if (playerScore > 21 && !splitGame) {
        playerLost();
    } else {
        firstHand = false;
        checkSplitScore();
    }
}

/**
 * checks split player score and alerts player when bust - places sum into tracker
 */
function checkSplitScore() {
    let splitScore = getHandValue(splitHand);
    document.getElementById('tracker-split').innerHTML = splitScore;
    if (splitScore > 21 && !firstHand) {
        playerLost();
    } else {
        splitGame = false;
        checkPlayerScore();
    }
}

/**
 * checks dealer score and alerts player if dealer bust - places sum into tracker
 */
function checkDealerScore() {
    let dealerScore = getHandValue(dealerHand);
    document.getElementById('tracker-dealer').innerHTML = dealerScore;
    if (dealerScore > 21) {
        dealerTurn = false;
    }
}

/**
 * plays the dealers turn
 */
function playDealerTurn() {
    dealerTurn = true;
    let dealerScore;
    let betterScore;
    revealDealerCard();
    dealCards(dealerHand, 'dealer');

    while (dealerTurn) {
        dealerScore = getHandValue(dealerHand);
        betterScore = getHighestPlayerScore();

        if (dealerScore < betterScore && betterScore <= 21) {
            // dealer will hit when less than playerScore
            hit(dealerHand);
            dealCards(dealerHand, 'dealer');
            checkDealerScore();
        } else if (dealerScore === betterScore && dealerScore <= 15) {
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

    endDealerTurn();

}

/**
 * ends dealer turn and resolves game
 */
function endDealerTurn() {
    let dealerScore = getHandValue(dealerHand);
    let betterScore = getHighestPlayerScore(playerHand);    
    
    if (dealerScore > betterScore && dealerScore <= 21) {
        playerLost();
    } else if (dealerScore === betterScore && dealerScore <=21) {
        draw();
    } else {
        playerWon();
    }
}

/**
 * gets the highest player score that is equal/less than 21
 */
function getHighestPlayerScore() {
    let firstScore = getHandValue(playerHand);
    let secondScore = getHandValue(splitHand);
    let highestScore;

    if (firstScore >= secondScore && firstScore <= 21) {
        highestScore = firstScore;
    } else {
        highestScore = secondScore;
    }

    return highestScore;
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
    displayAlert("You Won!");
    toggleNewGameShow();
    toggleConHide();
    toggleSplitConHide();
    toggleSplitRevert();
}

/**
 * displays player lost, removes functions before allowing player to reset by playing new game
 */
function playerLost() {
    playerTurn = false;
    dealerTurn = false;
    betStage = false;
    displayAlert("You Won!");
    toggleNewGameShow();
    toggleConHide();
    toggleSplitConHide();
    toggleSplitRevert();
}

/**
 * displays a draw, removes functions before allowing player to continue to play a new game
 */
function draw() {
    let sum = getPotValue();
    score += sum;
    document.getElementById('score').innerHTML = score;
    playerTurn = false;
    dealerTurn = false;
    betStage = false;
    displayAlert("You Won!");
    toggleNewGameShow();
    toggleConHide();
    toggleSplitConHide();
    toggleSplitRevert();
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
    toggleSplitRevert();
    toggleSplitTrackerHide();
    toggleDealerTrackerHide();
    togglePlayerTrackerHide();
    togglePotHide();
    hideAlert();
    placeBet();
}

/**
 * toggles the betting button on when the player is in the betting stage
 */
function toggleBetShow() {
    var div = document.getElementsByClassName('toggle-bet');
    for (var i = 0; i < div.length; i ++) {
        div[i].style.display = "block";
    }
}

/**
 * toggles the betting button off when the player finishes the betting stage
 */
function toggleBetHide() {
    var div = document.getElementsByClassName('toggle-bet');
    for (var i = 0; i < div.length; i ++) {
        div[i].style.display = 'none';
    }
}

/**
 * toggles the control buttons on
 */
function toggleConShow() {
    var div = document.getElementsByClassName('toggle-con');
    for (var i = 0; i < div.length; i ++) {
        div[i].style.display = 'flex';
    }
}

/**
 * toggles the control buttons off
 */
function toggleConHide() {
    var div = document.getElementsByClassName('toggle-con');
    for (var i = 0; i < div.length; i ++) {
        div[i].style.display = 'none';
    }
}

/**
 * toggles the double button on when it can be played
 */
function toggleDoubleShow() {
    var div = document.getElementsByClassName('double');
    for (var i = 0; i < div.length; i ++) {
        div[i].style.display = 'block';
    }
}


/**
 * hides the double button when it cannot be played
 */
function toggleDoubleHide() {
    var div = document.getElementsByClassName('double');
    for (var i = 0; i < div.length; i ++) {
        div[i].style.display = 'none';
    }
}

/**
 * shows the split button when it can be played
//  */
function toggleSplitShow() {
    var div = document.getElementsByClassName('split');
    for (var i = 0; i < div.length; i ++) {
        div[i].style.display = 'block';
    }
}

/**
 * hides the split button when it cannot be played
 */
function toggleSplitHide() {
    var div = document.getElementsByClassName('split');
    for (var i = 0; i < div.length; i ++) {
        div[i].style.display = 'none';
    }
}

/**
 * hides the split and double button when a split game is run by display none rather than visibility
 */
function toggleSplitNone() {
    var double = document.getElementsByClassName('double');
    var split = document.getElementsByClassName('split');
    for (var allDouble = 0; allDouble < double.length; allDouble ++) {
        double[allDouble].style.display = 'none';
    }
    for (var allSplit = 0; allSplit < split.length; allSplit ++) {
        split[allSplit].style.display = 'none';
    }
}

/**
 * shows the split and double button when split game ends
 */
function toggleSplitRevert() {
    var double = document.getElementsByClassName('double');
    var split = document.getElementsByClassName('split');
    for (var allDouble = 0; allDouble < double.length; allDouble ++) {
        double[allDouble].style.display = "";
    }
    for (var allSplit = 0; allSplit < split.length; allSplit ++) {
        split[allSplit].style.display = "";
    }
}

/**
 * shows the new game button when it can be played
 */
function toggleNewGameShow() {
    var div = document.getElementsByClassName('new-game');
    for (var i = 0; i < div.length; i ++) {
        div[i].style.display = 'block';
    }
}

/**
 * hides the new game button when it cannot be played
 */
function toggleNewGameHide() {
    var div = document.getElementsByClassName('new-game');
    for (var i = 0; i < div.length; i ++) {
        div[i].style.display = 'none';
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

/**
 * toggles split tracker off
 */
function toggleSplitTrackerShow() {
    var div = document.getElementById('tracker-split');
    div.style.display = 'block';
    div.style.visibility = 'visible';
}

/**
 * toggles split tracker off
 */
function toggleSplitTrackerHide() {
    var div = document.getElementById('tracker-split');
    div.style.display = 'none';
    div.style.visibility = 'hidden';
}

/**
 * toggles player tracker on
 */
function togglePlayerTrackerShow() {
    var div = document.getElementById('tracker-player');
    div.style.display = 'block';
    div.style.visibility = 'visible';
}

/**
 * toggles player tracker off
 */
function togglePlayerTrackerHide() {
    var div = document.getElementById('tracker-player');
    div.style.display = 'none';
    div.style.visibility = 'hidden';
}

/**
 * toggles dealer tracker on
 */
function toggleDealerTrackerShow() {
    var div = document.getElementById('tracker-dealer');
    div.style.display = 'block';
}

/**
 * toggles dealer tracker off
 */
function toggleDealerTrackerHide() {
    var div = document.getElementById('tracker-dealer');
    div.style.display = 'none';
}

/**
 * toggles pot on
 */
function togglePotShow() {
    var div = document.getElementById('pot');
    div.style.display = 'block';
}

/**
 * toggles pot off
 */
function togglePotHide() {
    var div = document.getElementById('pot');
    div.style.display = 'none';
}

/**
 * alert message shown
 */
function displayAlert(message) {
    var div = document.getElementById('alert');
    div.style.display = 'flex';
    div.innerText = message;
}

/**
 * alert message hide
 */
function hideAlert() {
    var div = document.getElementById('alert');
    div.style.display = 'none';
}