function getComputerChoice() {
      
    //console.log("I'll kick you in the nuts!");
    
    //randomly selects one of the defined options
    let options = ["rock","paper","scissors"];
    let choice = options[Math.floor(Math.random()*options.length)];

    return choice;

}

function playRound(playerSelection) {

    let result = [];
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();

    if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")) {
        result[0] = true;
	    result[1] = 'Congratulations! ' + playerSelection + ' beats ' + computerSelection;
    } else if (computerSelection == playerSelection) {
        result[0] = false;
	    result[1] = 'Its a draw, nobody wins...';
    } else if (playerSelection != "rock" && playerSelection != "paper" & playerSelection != "scissors") {
        result[0] = false;
        result[1] = 'Ummm....do you even know how to play? You lose';
    } else {
        result[0] = false;
	    result[1] = 'You lose! ' + computerSelection + ' beats ' + playerSelection;
    }

    return result;

}

function game() {
    let ready;
    let overallResult = 0;
    let message = '';

    alert('Best of 5! Loser gets kicked in the nuts. Lets go');
    
    for (let i=0; i < 5; i++) {
        ready = prompt("Choose your weapon","");
        gameResult = playRound(ready);

        console.log(gameResult[1]);

        if (gameResult[0]) {
            overallResult++
        }
    }

    if (overallResult >= 3) {
        message = 'Winner winner! Chicken dinner! You won ' + overallResult + '/5 games';
    } else {
        message = 'Sucked in loser! You only won ' + overallResult + '/5 games';
    }

    return message;

}