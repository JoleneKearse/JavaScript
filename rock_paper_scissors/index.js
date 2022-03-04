const computerChoiceDisplay = document.getElementById("computerChoice");
const userChoiceDisplay = document.getElementById("userChoice");
const resultDisplay = document.getElementById("result");
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
        computerChoice = "rock✊";
    } else if (randomNumber === 2) {
        computerChoice = "paper✋";
    } else {
        computerChoice = "scissors✌️";
    };
    computerChoiceDisplay.innerHTML = computerChoice;
};

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a Tie 🤷";
    } else if (computerChoice === "rock✊" && userChoice === "paper✋") {
        result = "You Win! 🥳";
    } else if (computerChoice === "rock✊" && userChoice === "scissors✌️") {
        result = "You Lose! 😰";
    } else if (computerChoice === "paper✋" && userChoice === "scissors✌️") {
        result = "You Win! 🥳";
    } else if (computerChoice === "paper✋" && userChoice === "rock✊") {
        result = "You Lose! 😰";
    } else if (computerChoice === "scissors✌️" && userChoice === "rock✊") {
        result = "You Win! 🥳";
    } else if (computerChoice === "scissors✌️" && userChoice === "paper✋") {
        result = "You Lose! 😰";
    };
    resultDisplay.innerHTML = result;
};