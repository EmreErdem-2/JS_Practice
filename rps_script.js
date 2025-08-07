function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}
let choice;
playerChoiceText = document.querySelector("#playerChoice");

rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", ()=>{
    playerChoiceText.textContent = "You chose Rock";
    choice = getHumanChoice("rock");
});
paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", ()=>{
    playerChoiceText.textContent = "You chose Paper";
    choice = getHumanChoice("paper");

});
scissorButton = document.querySelector("#scissors");
scissorButton.addEventListener("click", ()=>{
    playerChoiceText.textContent = "You chose Scissors";
    choice = getHumanChoice("scissors");
});

roundResults = document.querySelector("#roundResults");

playRoundButton = document.querySelector("#playRound");
playRoundButton.addEventListener("click", ()=>{
    playRound(choice);
});



function getHumanChoice(choice){
    choice = choice.toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        alert("Invalid choice, please try again.");
    }
}

let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    
    if(humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}.`);
        roundResults.textContent = `It's a tie! You both chose ${humanChoice}.`;
    }else if ((humanChoice === "rock" && computerChoice === "scissors") ||
              (humanChoice === "paper" && computerChoice === "rock") ||
              (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        roundResults.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        roundResults.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }
    
    console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
    roundResults.innerHTML = roundResults.textContent + 
         `<br>Current Score - You: ${humanScore}, Computer: ${computerScore}`;
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