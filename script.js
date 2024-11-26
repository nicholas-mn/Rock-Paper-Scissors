
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
        return "Rock"
    } else if (roll <= 66) {
        return "Paper"
    } else {
        return "Scissors"
    }

}

function getHumanChoice() {

    const choice = prompt("Rock, Paper or Scissors?")

    return choice

}

function playRound(humanChoice, computerChoice) {
    
    humanChoice = humanChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()

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

// function playGame() {
//     for (i = 0; i < 5; i++) {

//         let humanSelection = getHumanChoice();
//         let computerSelection = getComputerChoice();

//         console.log(`Starting round ${i + 1}..`)

//         playRound(humanSelection, computerSelection);
//     }

//     if (humanScore == computerScore) {
//         console.log("The game is a tie!")
//     } else if (humanScore < computerScore) {
//         console.log("You lost the game!")
//     } else {
//         console.log("You won the game!")
//     }

// }

// playGame()
