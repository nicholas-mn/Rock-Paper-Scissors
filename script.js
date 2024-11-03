
let humanScore = 0
let computerScore = 0

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

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
    
}