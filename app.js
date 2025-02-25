/* You are a beginner, it is okay to be stuck all the time
   and not get anything. It is part of the process. You learn
   to then understand which helps you learn more and understand
   more. Learning is challenging but the growth is exponentional */

/*function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    //console.log(number);
    if (number == 1) {
        choice = 'rock';
    }
    else if (number == 2) {
        choice = 'paper';
    }
    else if(number == 3) {
        choice = 'scissors';
    }
    else {
        choice = 'Computer choice is invalid';
    }
    return choice;
}*/
//console.log(getComputerChoice());

/*function getPlayerChoice() {
    let playerInput = prompt('Type your choice!')

    if (playerInput.toLowerCase() == 'rock') {
        return 'rock';
    }
    else if (playerInput.toLowerCase() == 'paper') {
        return 'paper';
    }
    else if (playerInput.toLowerCase() == 'scissors') {
        return 'scissors';
    }
    else {
        return 'That is not a valid option.';
    }
}*/
//console.log(getPlayerChoice());
/*  set the rules on what beats what
    set the win conditions
    based on win add a score */
/*let cpuPoints = 0;
let pPoints = 0;
function playRound(playerSelection, computerSelection) {
    if((playerSelection == 'rock') && (computerSelection == 'paper')) {
        //Add point to computer here
        cpuPoints ++;
        return `You lost this round ${computerSelection} beats ${playerSelection}!`;
    }
    else if((playerSelection == 'paper') && (computerSelection == 'scissors')) {
        //Add point to computer here
        cpuPoints ++;
        return `You lost this round ${computerSelection} beats ${playerSelection}!`;
    }
    else if((playerSelection == 'scissors') && (computerSelection == 'rock')) {
        //Add point to computer here
        cpuPoints ++;
        return `You lost this round ${computerSelection} beats ${playerSelection}!`;
    }
    else if ((playerSelection == 'rock') && (computerSelection == 'scissors')) {
        //Add point to player here
        pPoints ++;
        return `You won this round ${computerSelection} loses to ${playerSelection}!`;
    }
    else if ((playerSelection == 'paper') && (computerSelection == 'rock')) {
        //Add point to player here
        pPoints ++;
        return `You won this round ${computerSelection} loses to ${playerSelection}!`;
    }
    else if ((playerSelection == 'scissors') && (computerSelection == 'paper')) {
        //Add point to player here
        pPoints ++;
        return `You won this round ${computerSelection} loses to ${playerSelection}!`;
    }
    else if (playerSelection == computerSelection) {
        //No point added
        return 'It is a tie ' + `${computerSelection} ${playerSelection}`;
    }
    else {
        return `This round cannot be played! ${playerSelection}`;
    }
}*/

//let playerSelection = getPlayerChoice();
//let computerSelection = getComputerChoice();
//console.log(playRound(getPlayerChoice(), getComputerChoice()));

/* Create a function to play game
    keep score
    report a winner
    5 rounds */
/*function playGame() {
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log(`CPU Score ${cpuPoints}`, `Player Score ${pPoints}`);
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log(`CPU Score ${cpuPoints}`, `Player Score ${pPoints}`);
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log(`CPU Score ${cpuPoints}`, `Player Score ${pPoints}`);
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log(`CPU Score ${cpuPoints}`, `Player Score ${pPoints}`);
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log(`CPU Score ${cpuPoints}`, `Player Score ${pPoints}`);

    if (cpuPoints > pPoints) {
        console.log('The BOT has won!')
    }
    else {
        console.log('You win!')
    }
}
console.log(playGame());*/

// Start over using the DOM for interactivity
const buttons = document.querySelectorAll("button");
let playerSelection = '';
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        //alert(button.id);
        if(button.id == 'rock') {
            //alert('first');
            playerSelection = 'rock';
            playRound();
        }
        else if(button.id == 'paper') {
            //alert('second');
            playerSelection = 'paper';
            playRound();
        }
        else if(button.id == 'scissors') {
            //alert('third');
            playerSelection = 'scissors';
            playRound();
        }
        //console.log(playerSelection);
    })
})

function playRound() {
    getComputerChoice();
    if(playerSelection == 'rock' && cpuChoice == 'scissors') {
        alert('You Win!');
    }
    else if(playerSelection == 'paper') {
        alert('FATALITY');
    }
    else if(playerSelection == 'scissors') {
        alert('BRUTALITY');
    }
    else {
        alert('You Lose!');
    }
}

let cpuChoice = '';
function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    //console.log(number);
    if (number == 1) {
        cpuChoice = 'rock';
    }
    else if (number == 2) {
        cpuChoice = 'paper';
    }
    else if(number == 3) {
        cpuChoice = 'scissors';
    }
    else {
        cpuChoice = 'Computer choice is invalid';
    }
    return cpuChoice;
}