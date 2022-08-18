// DOM elements
let messageEl = document.getElementById("messageEl");
let cardsEl = document.getElementById("cardsEl");
let sumEl = document.getElementById("sumEl");
let startGameBtn = document.getElementById("startGameBtn");
let newCardBtn = document.getElementById("newCardBtn");
let root = document.documentElement;
let ace = document.getElementById("ace");
const oneBtn = document.getElementById("one");
const elevenBtn = document.getElementById("eleven");
let totalOne = document.getElementById("totalOne");
let totalEleven = document.getElementById("totalEleven");

// global variables
let firstCard;
let secondCard;
let randomNumber;
let firstCardSum;
let secondCardSum;
let sum = [];
// should this be declared without a value?
let sumTotal = 0;
let cards = [];
let message = "";
let isPlaying = false;
let hasBlackjack = false;

// game play functions
const startGame = () => {
    root.style.setProperty("--green-light", "b1ffbb");
    startGameBtn.textContent = "Start Game";
    isPlaying = true;
    // draw first 2 cards
    firstCard = drawRandomCard(); // if Ace, go to aceChoice
    if (firstCard === "Ace") {
        aceChoice();
    };
    secondCard = drawRandomCard(); // if Ace, go to aceChoice
    if (secondCard === "Ace") {
        aceChoice();
    };
    // display cards & sum
    initialResults();
};

const drawRandomCard = () => {
    randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        // not sure if this actually runs
        randomNumber = 10;
        console.log(`value of randomNumber manually changed to 10`);
        return 10;
    } else if (randomNumber === 1) {
        return "Ace";
    } else {
        return randomNumber;
    };
    // send control to either startGame or aceChoice if randomNumber === 1
};

// give user choice of Ace's value: 1 or 11 & add "Ace" to cards array
const aceChoice = () => {
    console.log(`~~~ running aceChoice ~~~`);
    messageEl.textContent = "Choose 1 or 11 points by clicking below";
    ace.style.visibility = "visible";
    // display possible sum on each ace btn
    // but need to first calculate sum, especially if first or second card
    if (sum.length === 0) {
        totalOne.textContent = "1";
        totalEleven.textContent = "11";
    } else if (sum.length === 1) {
        let tempTotalOne = calculateSum() + 1;
        // THINK THIS WORKS WITH VARIABLE, BUT NOT SURE IF CAN HANDLE FUNCTIONS
        totalOne.textContent = tempTotalOne;
        let tempTotalEleven = calculateSum() + 11
        totalEleven.textContent = tempTotalOne;
    } else {
        calculateSum();
    };
    oneBtn.addEventListener("click", () => {
        cards.push("Ace");
        sum.push(1);
        ace.style.visibility = "hidden";
        if (cards.length <= 2) {
            initialResults();
        } else {
            subsequentResults();
        };
    });
    elevenBtn.addEventListener("click", () => {
        cards.push("Ace");
        sum.push(11);
        ace.style.visibility = "hidden";
        if (cards.length <= 2) {
            initialResults();
        } else {
            subsequentResults();
        };
    });
};

// need to calculate sum multiple times
const calculateSum = () => {
    if (sum.length === 1) {
        sumTotal = parseInt(sum);
        return sumTotal;
    } else if (sum.length === 0) {
        return sumTotal;
    } else {
        sumTotal = sum.reduce((total, amount) => total + amount);
        return sumTotal;
    }
};

const initialResults = () => {
    console.log(`~~~ running initialResults ~~~`);
    // add to cards array
    cards = [firstCard, secondCard];
    console.log(cards);
    // display first 2 cards
    cardsEl.textContent = ` ${cards[0]}   ${cards[1]}   `;
    // display initial sum
    sumTotal = calculateSum();
    console.log(`initialResults sum: ${sumTotal}`);
    subsequentResults();
};

const subsequentResults = () => {
    console.log(`~~~ running subsequentResults ~~~`);
    if (cards.length > 2) {
        cardsEl.textContent += `${cards.slice(-1)}   `;
    };
    calculateSum();
    sumEl.textContent = ` ${sumTotal}`;
    displayMessage();
};

const displayMessage = () => {
    if (sumTotal < 21) {
        messageEl.textContent = "Do you want another card?";
    } else if (sumTotal === 21) {
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

const newCard = () => {
    console.log(`~~~ running newCard ~~~`);
    if (isPlaying === true && hasBlackjack === false) {
        let card = drawRandomCard();
        if (card === "Ace") {
            aceChoice();
        };
        cards.push(card);
        sum.push(card);
        console.log(`newCard: ${cards} for a sum of ${sumTotal}`);
        subsequentResults();
    };
};

const resetGame = () => {
    messageEl.textContent = "Ready to play?";
    cardsEl.textContent = "";
    sumEl.textContent = "";
};