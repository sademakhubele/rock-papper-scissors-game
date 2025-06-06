const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

const buttons = {
    rock: document.getElementById("rockBtn"),
    paper: document.getElementById("paperBtn"),
    scissors: document.getElementById("scissorsBtn")
};

let playerScore = 0;
let computerScore = 0;

function resetRound() {
    playerDisplay.textContent = "PLAYER:";
    computerDisplay.textContent = "COMPUTER:";
    resultDisplay.textContent = "RESULT";

    resultDisplay.classList.remove("greenText", "redText", "animate");

    for (let btn in buttons) {
        buttons[btn].classList.remove("fade-out");
        buttons[btn].classList.add("fade-in");
    }
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    resetRound();
}

function playGame(playerChoice, button) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice.toUpperCase()}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice.toUpperCase()}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }

    button.classList.remove("bounce");
    void button.offsetWidth;
    button.classList.add("bounce");

    resultDisplay.classList.remove("animate");
    void resultDisplay.offsetWidth; 
    resultDisplay.classList.add("animate");

    for (let choice in buttons) {
        const btn = buttons[choice];
        if (choice !== playerChoice && choice !== computerChoice) {
            btn.classList.remove("fade-in");
            btn.classList.add("fade-out");
        } else {
            btn.classList.remove("fade-out");
            btn.classList.add("fade-in");
        }
    }
} 
