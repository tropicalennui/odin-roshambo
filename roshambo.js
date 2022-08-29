function playRound() {
    playerChoice = arguments;
    computerChoice = getComputerChoice();
    message = '';

    if ((playerChoice == 'rock' && computerChoice == 'scissors') || 
        (playerChoice == 'scissors' && computerChoice == 'paper') || 
        (playerChoice == 'paper' && computerChoice == 'rock')) {
            message = 'Congratulations! ' + playerChoice + ' beats ' + computerChoice;
    } else if (playerChoice == computerChoice) {
        message = 'Its a draw, nobody wins...';
    } else {
        message = 'You lose! ' + computerChoice + ' beats ' + playerChoice;
    }

}

function getComputerChoice() {    
    //randomly selects one of the defined options
    let options = ['rock','paper','scissors'];
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

const startBtn = document.querySelector('#startBtn');
startBtn.addEventListener('click', () => {
    const startGame = document.getElementById('startGame');
    startGame.remove();
});