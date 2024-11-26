
let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const resultsDiv = document.querySelector("#results");

rockBtn.addEventListener("click", () => {
    const humanSelection = "rock";
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
});

paperBtn.addEventListener("click", () => {
    const humanSelection = "paper";
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
});

scissorsBtn.addEventListener("click", () => {
    const humanSelection = "scissors";
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
});

function getComputerChoice() {
    
    const roll = Math.floor(Math.random() * 100)

    if (roll <= 33) {
        return "rock"
    } else if (roll <= 66) {
        return "paper"
    } else {
        return "scissors"
    }

}

function playRound(humanChoice, computerChoice) {

    if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
        
        console.log(`Computer: ${computerChoice}, Human: ${humanChoice}`)
        
    } else {
        console.log("Error: Choose Rock, Paper or Scissors. Case insensitive.")
        return
    }

    if (humanChoice == "rock") {

        return computerChoice == "paper" ? (++computerScore, resultsDiv.textContent = "You lose! Paper beats Rock.")
        : computerChoice == "scissors" ? (++humanScore, resultsDiv.textContent = "You win! Rock beats Scissors!")
        : resultsDiv.textContent = "It's a tie - Rock vs. Rock.";

    } else if (humanChoice == "paper") {

        return computerChoice == "rock" ? (++humanScore, resultsDiv.textContent = "You win! Paper beats Rock") 
        : computerChoice == "scissors" ? (++computerScore, resultsDiv.textContent = "You lose! Scissors beats paper")
        : resultsDiv.textContent = "It's a tie - Paper vs. Paper.";

    } else {

        return computerChoice == "rock" ? (++computerScore, resultsDiv.textContent = "You lose! Rock beats Scissors.")
        : computerChoice == "paper" ? (++humanScore, resultsDiv.textContent = "You win! Scissor beats Paper.")
        : resultsDiv.textContent = "It's a tie - Scissors vs. Scissors.";

    }
    
}

