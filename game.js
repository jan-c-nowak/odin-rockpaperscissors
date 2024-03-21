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

function playGame(){
    let userScore = 0;
    let machineScore = 0;

    for(let i=0; i<5; i++){
        playerSelection = prompt("Type either rock, paper or scissors", "Rock");
        results = playRound(playerSelection, getComputerChoice());

        if(results[1] === "WIN"){
            userScore++;
        }
        else if(results[1] ==="LOSE"){
            machineScore++;
        }

        console.log(results[0]);
    }
    console.log(`Your points: ${userScore}, computer points: ${machineScore}`);
}

playGame();