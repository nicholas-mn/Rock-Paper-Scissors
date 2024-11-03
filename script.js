console.log("Hello world.");

function getComputerChoice() {
    
    let roll = Math.floor(Math.random() * 100)

    if (roll <= 33) {
        return "rock"
    } else if (roll <= 66) {
        return "paper"
    } else {
        return "scissors"
    }

}