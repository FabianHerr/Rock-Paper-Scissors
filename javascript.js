
// score variables
let humanScore = 0;
let computerScore = 0;
let round_num = 0;
let humanCh = ""; //keep track of the button pressed


// Randomly chooses between rock, paper and scissors
function getComputerChoice(){
    let choice;
    if (Math.random() < 1/3){
        choice = "scissors";
    }
    else if(Math.random() >= 1/3 && Math.random() < 2/3 ){
        choice = "paper";
    }
    else{
        choice = "rock";
    }

    return choice;
}

// returns the result of the game depending on the players choice
function playground(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        return `It's a tie! ${humanChoice} vs ${computerChoice}.`;;
    }
    else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore += 1;
        return "You win! Paper beats Rock. ";
    }
    else if (humanChoice == "paper" && computerChoice == "scissors"){
        computerScore += 1;
        return "You lose! Scissors beats paper. ";
    }
    else if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore += 1;
        return "You lose! Paper beats Rock. " ;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore += 1;
        return "You win! Rock beats scissors. " ;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore += 1;
        return "You win! Scissors beats paper. ";
    }
    else if (humanChoice == "scissors" && computerChoice == "rock"){
        computerScore += 1;
        return "You lose! Rock beats scissors. ";
    }
}

// score and Round display variables
const scoreH = document.querySelector("#scoreH");
const scoreC = document.querySelector("#scoreC");
const round = document.querySelector("#round");

// Constants for each button (Rock, paper and scissors)
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// event listeners on-click assign value to humanCH variable
rock.addEventListener("click", () =>{
    humanCh = "rock";
    resultDisplay(playground(humanCh,getComputerChoice()));
    scoreH.textContent = humanScore;
    scoreC.textContent = computerScore;
    round.textContent = round_num + 1;

    // Ends game if reached 5 pts
    if ( humanScore == 5 || computerScore == 5){
        setTimeout(endGame(),3000);
    }
})

paper.addEventListener("click", () =>{
    humanCh = "paper";
    resultDisplay(playground(humanCh,getComputerChoice()));
})

scissors.addEventListener("click", () =>{
    humanCh = "scissors";
    resultDisplay(playground(humanCh,getComputerChoice()));
})

// adds letter by letter effect and displays it in the result div
function resultDisplay(display){
    const result = document.querySelector(".result");
    result.textContent = "";
    let i = 0;
    function typeEffect(){
        if ( i < display.length){
            result.textContent += display[i];
            i ++;
            setTimeout(typeEffect,80)
        }
    }
    typeEffect()
}

// overlay (popup window) variable
const overlay = document.querySelector(".overlay");

function endGame(){
    overlay.style.display = "flex";
}

