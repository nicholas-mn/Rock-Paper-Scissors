console.log("Hello world.");

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

    const choice = prompt("Rock, Paper or Scissor?")

    if (choice == "Rock" || choice == "Paper" || choice == "Scissors") {    
        return choice;
    } else {
        return "Error: Choose between 'Rock', 'Paper' or 'Scissors'"
    }

}