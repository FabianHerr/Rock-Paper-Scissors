let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice(){
    let input = prompt("Choose paper, rock or scissors?").toLowerCase();
    if (input != "paper" && input != "rock" && input != "scissors"){
        return "Please input either paper, rock or scissors!"
    }
    else{
        return input;
    }
}

function playground(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        return "It's a tie!, paper vs paper. ";
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
        computerScore += 1;
        return "You win! Scissors beats paper. ";
    }
    else if (humanChoice == "scissors" && computerChoice == "rock"){
        computerScore += 1;
        return "You lose! Rock beats scissors. ";
    }
}

function playRound(){
    
    
}

const buttons = document.querySelectorAll("button");

buttons.addEventListener("click", playRound())