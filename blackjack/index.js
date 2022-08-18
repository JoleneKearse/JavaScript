// DOM elements
let messageEl = document.getElementById("messageEl");
let cardsEl = document.getElementById("cardsEl");
let sumEl = document.getElementById("sumEl");
let startGameBtn = document.getElementById("startGameBtn");
let newCardBtn = document.getElementById("newCardBtn");
let root = document.documentElement;
let ace = document.getElementById("ace");
const one = document.getElementById("one");
const eleven = document.getElementById("eleven");
let totalOne = document.getElementById("totalOne");
let totalEleven = document.getElementById("totalEleven");

// global variables
let firstCard;
let secondCard;
let randomNumber;
let firstCardSum;
let secondCardSum;
let sum = [];
let sumTotal = 0;
let cards = [];
let message = "";
let isPlaying = false;
let hasBlackjack = false;

// lookups for card & value


// game play functions
const startGame = () => {
    console.log(`running startGame`);
    root.style.setProperty("--green-light", "#b1ffbb");
    startGameBtn.textContent = "Start Game";
    isPlaying = true;
    // draw first 2 cards
    firstCard = drawRandomCard();
    console.log(`first card: ${firstCard}`);
// NEED ANOTHER VARIABLE IN drawRandomCard TO ADD APPROPRIATE SUM
// MAY JUST ADD SUMS TO ARRAY AND USE REDUCE OR ANOTHER METHOD?
    if (firstCard === "Ace") {
        aceChoice();
    };
    secondCard = drawRandomCard();
    console.log(`second card: ${secondCard}`);
// NEED ANOTHER VARIABLE IN drawRandomCard TO ADD APPROPRIATE SUM
// MAY JUST ADD SUMS TO ARRAY AND USE REDUCE OR ANOTHER METHOD?
    if (secondCard === "Ace") {
        aceChoice();
    };
    initialResults();
};

const drawRandomCard = () => {
    console.log(`running drawRandomCard`);
    randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        randomNumber = 10;
        return 10;
    } else if (randomNumber === 1) {
        // IMPLEMENT ACE CHOICE FEATURE
        return "Ace";
    } else {
        return randomNumber;
    } 
};

// how to handle the ace by giving user choice
const aceChoice = () => {
    console.log(`running aceChoice`);
    messageEl.textContent = "Choose 1 or 11 points below";
    ace.style.visibility = "visible";
    totalOne.textContent = sum + 1;
    totalEleven.textContent = sum + 11;
    one.addEventListener("click", ()=>{
        cards.push("Ace");
        sum.push(1);
        if (cards.length <= 2) {
            initialResults();
        } else {
            laterResults();
        };
    });
    eleven.addEventListener("click", () => {
        cards.push("Ace");
        sum.push(11);
        if (cards.length <= 2) {
            initialResults();
        } else {
            laterResults();
        };
    });  
};

const initialResults = () => {
    console.log(`running initialResults`);
    // add to cards array
    cards = [firstCard, secondCard];
    console.log(cards);
    // display first 2 cards
    cardsEl.textContent = ` ${cards[0]}   ${cards[1]}   `;
    // set initial sum
    sum = [firstCard, secondCard];
    sumTotal = sum.reduce((total, amount) => total + amount);
    console.log(`initialResults sum: ${sumTotal}`);
    laterResults();
};

const laterResults = () => {
    console.log(`running laterResults`);
    ace.style.visibility = "hidden";
    console.log(cards);
    // display additional cards
    if (cards.length > 2) {
        cardsEl.textContent += `${cards.slice(-1)}   `;
    };
    sum.push(cards.slice(-1));
    sumTotal = sum.reduce((total, amount) => total + amount);
    sumEl.textContent = ` ${sumTotal}`;
    displayMessage();
};

const newCard = () => {
    console.log(`running newCard`);
    if (isPlaying === true && hasBlackjack === false) {
        let card = drawRandomCard();
        sum.push(card);
        cards.push(card);
        laterResults();
    }
};

const displayMessage = () => {
    console.log(`running displayMessage`);
    if (sum < 21) {
        messageEl.textContent = "Do you want another card?";
    } else if (sum === 21) {
        hasBlackjack = true;
        messageEl.textContent = "Blackjack!!!";
        root.style.setProperty("--green-light", "#F1D302");
        startGameBtn.textContent = "Play Again";
        resetGame();
    } else {
        messageEl.textContent = "You're out of the game!";
        isPlaying = false;
        root.style.setProperty("--green-light", "#F1D302");
        startGameBtn.textContent = "Play Again";
        resetGame();
    };
};

const resetGame = () => {
    console.log(`running resetGame`);
    messageEl.textContent = "Ready to play?";
    cardsEl.textContent = "";
    sumEl.textContent = "";
};
