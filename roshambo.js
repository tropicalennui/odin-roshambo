function playRound(choice) {
    playerChoice = choice;
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

    console.log(message);

}

function getComputerChoice() {    
    //randomly selects one of the defined options
    let options = ['rock','paper','scissors'];
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

function newGame(){
    const gameWrapper = document.getElementById('gameWrapper');
    gameWrapper.classList.toggle("show");
    gameWrapper.classList.toggle("hide");
}

function startGame(){
    const startGame = document.getElementById('startGame');
    startGame.classList.toggle("show");
    startGame.classList.toggle("hide");
    newGame();
}

const startBtn = document.querySelector('#startBtn');
startBtn.addEventListener('click', startGame);

const rock = document.getElementById('rock');
rock.addEventListener('click',function(e) {
    playRound('rock');
});

const paper = document.getElementById('paper');
paper.addEventListener('click',function(e) {
    playRound('paper');
});

const scissors = document.getElementById('scissors');
scissors.addEventListener('click',function(e) {
    playRound('scissors');
});