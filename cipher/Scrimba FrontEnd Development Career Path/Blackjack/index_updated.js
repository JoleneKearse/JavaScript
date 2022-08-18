// VARIABLES
// initialized variables
let sum = 0;
let randomNumber;
let firstCardDisplay;
let secondCardDisplay;
let cardDisplay;
let cards = [];
let message = "";
let hasBlackjack = false;
let isPlaying = false;
// interactive elements
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let theAce = document.getElementById("the-ace");
// buttons
const resetButton = document.getElementById("reset-btn");
const startGameButton = document.getElementById("start-game-btn");
const newCardButton = document.getElementById("new-card-btn");
const ace1Button = document.getElementById("ace1");
const ace11Button = document.getElementById("ace11");

// FUNCTIONS

function startGame() {
    // display beginning content
    cardsEl.textContent = "Cards => ";
    sumEl.textContent = "Sum => ";
    // put them in the game
    isAlive = true;
    // draw first 2 cards
    let firstCard = calculateSum(drawRandomCard());
    firstCardDisplay = setCardsDisplay(randomNumber);
    console.log(firstCardDisplay);
    secondCardDisplay = calculateSum(drawRandomCard());
    let secondCard = calculateSum(drawRandomCard());
    secondCardDisplay = setCardsDisplay(randomNumber);
    console.log(secondCardDisplay);
    // show player the info
    cards = [`${firstCardDisplay}, ${secondCardDisplay}`];
    sum = firstCard + secondCard;
    renderGame(); 
}

function drawRandomCard() {
    randomNumber = Math.floor(Math.random() * 12);
    return randomNumber;
}

function calculateSum(randomNumber){
    let sum = 0;
    switch(randomNumber) {
        case 0: 
            sum += 11;
            break;
        case 1:
            sum += 2;
            break;
        case 2:
            sum += 3;
            break;
        case 3: 
            sum += 4;
            break;
        case 4:
            sum += 5;
            break;
        case 5:
            sum += 6;
            break;
        case 6:
            sum += 7;
            break;
        case 7:
            sum += 8;
            break;
        case 8:
            sum += 9;
            break;
        default:
            sum +=10;
            break;
    }
    return sum;
}

function setCardsDisplay(randomNumber) {
    let drawnCard = "";
    let lookup = {
        0: "A",
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: "J",
        11: "Q",
        12: "K"
    }
    drawnCard = lookup[randomNumber];
    return drawnCard;
}

function renderGame() {
    // render out all the cards with a for loop
    // NOT SURE IF NEED CODE ON LINE 155
    // cardsEl.textContent = "Cards => ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += `${cards[i]} `;
    }
    sumEl.textContent = "Sum => " + sum;
    displayMessage();
}

function displayMessage() {
    if (sum < 21) {
        messageEl.textContent = "Do you want another card?";
        newCardButton.addEventListener("click", newCard());
    } else if (sum === 21) {
        isPlaying = false;
        hasBlackjack = true;
        messageEl.textContent = "Blackjack!!!";
        resetBtn.style.visibility = "visible";
    } else {
        messageEl.textContent = "You're out of the game!";
        isPlaying = false;
        resetBtn.style.visibility = "visible";
        reset();
    } 
}

function newCard() {
    if (isPlaying === true && hasBlackjack === false) {
        let card = calculateSum(drawRandomCard());
        sum += card;
        cardDisplay = setCardsDisplay(randomNumber);
        cards.push(cardDisplay);
        renderGame();
    }
}