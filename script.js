
let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const resultsDiv = document.querySelector("#results");

const humanScoreUi = document.querySelector("#humanScore");
const computerScoreUi = document.querySelector("#computerScore");

rockBtn.addEventListener("click", () => {
    const humanSelection = "rock";
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    updateScores()
});

paperBtn.addEventListener("click", () => {
    const humanSelection = "paper";
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    updateScores()
});

scissorsBtn.addEventListener("click", () => {
    const humanSelection = "scissors";
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    updateScores()
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

function updateScores() {
    
    humanScoreUi.textContent = humanScore;
    computerScoreUi.textContent = computerScore;

    // failsafe so the user doesn't just spam click into the timeout and mess up the logic
    if (humanScore === 5 || computerScore === 5) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }

    // had to use a timeout, without it the UI didn't change in time before the alert came up.
    setTimeout(function() {
        if (humanScore === 5) {
            alert("Congratulations, you win!");
            resultsDiv.textContent = "Click above to play the game";
            humanScore = 0;
            computerScore = 0;
            updateScores(); 

            rockBtn.disabled = false;
            paperBtn.disabled = false;
            scissorsBtn.disabled = false;
        } else if (computerScore === 5) {
            alert("Too bad, you lost!");
            resultsDiv.textContent = "Click above to play the game";
            humanScore = 0;
            computerScore = 0;
            updateScores();

            rockBtn.disabled = false;
            paperBtn.disabled = false;
            scissorsBtn.disabled = false;
        }
    }, 200);
}
