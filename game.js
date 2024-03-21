//Play Rock, Paper, Scissors with computer


const choices = ["Rock", "Paper", "Scissors"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// ~ -> String
function getComputerChoice(){
    return choices[getRandomInt(3)];
}