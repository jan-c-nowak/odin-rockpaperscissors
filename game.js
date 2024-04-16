//Play Rock, Paper, Scissors with computer

const choices = ["Rock", "Paper", "Scissors"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// ~ -> String
function getComputerChoice(){
    return choices[getRandomInt(3)];
}

// String -> String
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === "rock" && computerSelection === "scissors") {return [`You win! ${playerSelection} beats ${computerSelection}`, "WIN"]};
    if(playerSelection === "rock" && computerSelection === "paper") {return [`You lose! ${computerSelection} beats ${playerSelection}`, "LOSE"]};

    if(playerSelection === "paper" && computerSelection === "rock") {return [`You win! ${playerSelection} beats ${computerSelection}`, "WIN"]};
    if(playerSelection === "paper" && computerSelection === "scissors") {return [`You lose! ${computerSelection} beats ${playerSelection}`, "LOSE"]};

    if(playerSelection === "scissors" && computerSelection === "paper") {return [`You win! ${playerSelection} beats ${computerSelection}`, "WIN"]};
    if(playerSelection === "scissors" && computerSelection === "rock") {return [`You lose! ${computerSelection} beats ${playerSelection}`, "LOSE"]}; 

    if(playerSelection === computerSelection) {return ["It's a draw!", "DRAW"]};
}

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.addEventListener("click", () => {
    const result = playRound("rock", getComputerChoice());
    const roundEnd = new CustomEvent("roundEnd", {detail: result});
    btnRock.dispatchEvent(roundEnd);
})

btnPaper.addEventListener("click", () => {
    const result = playRound("paper", getComputerChoice());
    const roundEnd = new CustomEvent("roundEnd", {detail: result});
    btnRock.dispatchEvent(roundEnd);
})

btnScissors.addEventListener("click", () => {
    const result = playRound("scissors", getComputerChoice());
    const roundEnd = new CustomEvent("roundEnd", {detail: result});
    btnRock.dispatchEvent(roundEnd);
})

function playGame(){
    userScore = 0;
    machineScore = 0;

    


}

playGame();