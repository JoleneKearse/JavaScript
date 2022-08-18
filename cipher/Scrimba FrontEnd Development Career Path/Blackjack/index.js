let sum = 0;
let randomNumber;
let possibleCards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let firstCardDisplay;
let secondCardDisplay;
let cardDisplay;
let cards = [];
let message = "";
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let hasBlackjack = false;
let isPlaying = false;
let startGameButton = document.getElementById("start-game-btn");
let ace1Button = document.querySelector("#ace1");
let ace11Button = document.querySelector("ace11");
let theAce = document.getElementById("the-ace");
const resetBtn = document.getElementById("reset-btn");

// opening settings
theAce.style.visibility = "hidden";
resetBtn.style.visibility = "hidden";

function drawRandomCard() {
    // will return card & sum
    randomNumber = Math.floor(Math.random() * 12);
    return randomNumber;
}

function calculateSum(randomNumber) {
    let sum = 0;
    switch(randomNumber) {
        case 0: 
            theAce.style.visibility = "visible";
            if (ace1Button.click === true) {
                subtract10();
                theAce.style.visibility = "hidden";
                break;
            } else if (ace11Button.clicked === true) {
                theAce.style.visibility = "hidden";
                keep11();
            }
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

function choose1Or11() {
    theAce.style.visibility = "visible";
}

function subtract10() {
    sum -= 10;
    return sum;
}

function keep11() {
    calculateSum();
    setCardsDisplay();
    return;
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


function displayMessage() {
    if (sum < 21) {
        messageEl.textContent = "Do you want another card?";
    } else if (sum === 21) {
        hasBlackjack = true;
        // startGameButton.textContent = "RESET";
        // startGameButton.style.color = "#e637bf";
        messageEl.textContent = "Blackjack!!!";
        resetBtn.style.visibility = "visible";
    } else {
        messageEl.textContent = "You're out of the game!";
        isPlaying = false;
        resetBtn.style.visibility = "visible";
        reset();
    }  
}

function startGame() {
    // set start button & game initial values
    cardsEl.textContent = "Cards => ";
    sumEl.textContent = "Sum => ";
    // startGameButton.textContent = "START GAME";
    // startGameButton.style.color = "#ff9b71";
    isAlive = true;
    // draw firstCard values for sum
    firstCard = calculateSum(drawRandomCard());
    firstCardDisplay = setCardsDisplay(randomNumber);
    // draw secondCard values for sum
    secondCard = calculateSum(drawRandomCard());
    secondCardDisplay = setCardsDisplay(randomNumber);
    // Display card in proper fashion
    cards = [firstCardDisplay, secondCardDisplay];
    sum = firstCard + secondCard;
    renderGame();
}



function reset() {
    cardsEl.textContent = "Cards => ";
    sumEl.textContent = "Sum => ";
}

function renderGame() {
    cardsEl.textContent = "Cards => ";
    // Render out all the cards with a for loop
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum => " + sum;
    displayMessage();
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = calculateSum(drawRandomCard());
        console.log(randomNumber);
        sum += card;
        cardDisplay = setCardsDisplay(randomNumber);
        cards.push(cardDisplay);
        renderGame();
    }
}