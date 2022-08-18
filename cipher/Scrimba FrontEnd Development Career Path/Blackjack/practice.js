let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");

function drawRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard === 1) {
        return 11;
    } else if (randomCard >= 10) {
        return 10;
    } else {
        return randomCard;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = drawRandomCard();
    let secondCard = drawRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}
// displayMessage()
function renderGame() {
    cardsEl.textContent = "Cards => ";
    // Render out all the cards with a for loop
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum => " + sum;
    if (sum < 21) {
        message = "Do you want another card?";
    } else if (sum === 21) {
        message = "Blackjack!!!" ;
        hasBlackjack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = drawRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}