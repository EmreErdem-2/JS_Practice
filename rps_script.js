let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice = Math.random%3;
    if (choice < 1) {
        return "rock";
    } else if (choice < 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Enter rock, paper, or scissors: ");
    choice = choice.toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        console.log("Invalid choice, please try again.");
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}.`);
        return "tie";
    }else if ((humanChoice === "rock" && computerChoice === "scissors") ||
              (humanChoice === "paper" && computerChoice === "rock") ||
              (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
        return "human";
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
        return "computer";
    }
}

playRound(getHumanChoice(), getComputerChoice());

console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);