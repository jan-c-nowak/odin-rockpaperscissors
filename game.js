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

    if(playerSelection === "rock" && computerSelection === "scissors") {return `You win! ${playerSelection} beats ${computerSelection}`};
    if(playerSelection === "rock" && computerSelection === "paper") {return `You lose! ${computerSelection} beats ${playerSelection}`};

    if(playerSelection === "paper" && computerSelection === "rock") {return `You win! ${playerSelection} beats ${computerSelection}`};
    if(playerSelection === "paper" && computerSelection === "scissors") {return `You lose! ${computerSelection} beats ${playerSelection}`};

    if(playerSelection === "scissors" && computerSelection === "paper") {return `You win! ${playerSelection} beats ${computerSelection}`};
    if(playerSelection === "scissors" && computerSelection === "rock") {return `You lose! ${computerSelection} beats ${playerSelection}`}; 

    if(playerSelection === computerSelection) {return "It's a draw!"};
}