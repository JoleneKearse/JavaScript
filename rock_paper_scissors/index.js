const computerChoiceDisplay = document.getElementById("computerChoice");
const userChoiceDisplay = document.getElementById("userChoice");
const resultDisplay = document.getElementById("resultMsg");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

    if (randomNumber === 1) {
        computerChoice = "✊";
    } else if (randomNumber === 2) {
        computerChoice = "✋";
    } else {
        computerChoice = "✌️";
    };
    computerChoiceDisplay.innerHTML = computerChoice;
};

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a Tie 🤷";
    } else if (computerChoice === "✊" && userChoice === "✋") {
        result = "You Win! 🥳";
    } else if (computerChoice === "✊" && userChoice === "✌️") {
        result = "You Lose! 😰";
    } else if (computerChoice === "✋" && userChoice === "✌️") {
        result = "You Win! 🥳";
    } else if (computerChoice === "✋" && userChoice === "✊") {
        result = "You Lose! 😰";
    } else if (computerChoice === "✌️" && userChoice === "✊") {
        result = "You Win! 🥳";
    } else if (computerChoice === "✌️" && userChoice === "✋") {
        result = "You Lose! 😰";
    };
    resultDisplay.innerHTML = result;
};