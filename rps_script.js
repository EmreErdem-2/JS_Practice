

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
        return "human";
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        return "computer";
    }
}

const roundNumber = 5;
function playGame(roundNumber){
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < roundNumber; i++) {
        console.log(`Round ${i + 1}`);
        const humanChoice = getHumanChoice();
        console.log(`You chose: ${humanChoice}`);
        const computerChoice = getComputerChoice();
        console.log(`Computer chose: ${computerChoice}`);
        const winner = playRound(humanChoice, computerChoice);

        if (winner === "human") {
            humanScore++;
        } else if (winner === "computer") {
            computerScore++;
        }
        console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log(`You win the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    }    

}

playGame(roundNumber)