function getComputerChoice() {
      
    //console.log("I'll kick you in the nuts!");
    
    //randomly selects one of the defined options
    let options = ["rock","paper","scissors"];
    let choice = options[Math.floor(Math.random()*options.length)];

    return choice;

}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();

    return playerSelection + ' ' + computerSelection;

}