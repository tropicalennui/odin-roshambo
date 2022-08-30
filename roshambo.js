function playRound(choice) {
    let playerChoice = choice;
    let computerChoice = getComputerChoice();
    let score = document.getElementById('score');
    let result = document.getElementById('result');

    if ((playerChoice == 'rock' && computerChoice == 'scissors') ||
        (playerChoice == 'scissors' && computerChoice == 'paper') ||
        (playerChoice == 'paper' && computerChoice == 'rock')) {
        score.innerText = 'Congratulations! ' + playerChoice + ' beats ' + computerChoice;
        playerCount++
        player.innerText = playerCount;
    } else if (playerChoice == computerChoice) {
        score.innerText = 'Its a draw, nobody wins...';
    } else {
        score.innerText = 'You lose! ' + computerChoice + ' beats ' + playerChoice;
        computerCount++
        computer.innerText = computerCount;
    }

    if (playerCount == 5) {
        result.innerText = 'Winner, winner! Chicken dinner!';
    } else if (computerCount == 5) {
        result.innerText = 'Sucked in, loser!';
    }

}

function getComputerChoice() {
    //randomly selects one of the defined options
    let options = ['rock', 'paper', 'scissors'];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function newGame() {
    const gameWrapper = document.getElementById('gameWrapper');
    gameWrapper.classList.toggle("show");
    gameWrapper.classList.toggle("hide");
    player.innerText = playerCount;
    computer.innerText = computerCount;
}

function startGame() {
    const startGame = document.getElementById('startGame');
    startGame.classList.toggle("show");
    startGame.classList.toggle("hide");
    newGame();
}

let playerCount = 0;
let computerCount = 0;
let player = document.getElementById('player');
let computer = document.getElementById('computer')

const startBtn = document.querySelector('#startBtn');
startBtn.addEventListener('click', startGame);

const rock = document.getElementById('rock');
rock.addEventListener('click', function (e) {
    playRound('rock');
});

const paper = document.getElementById('paper');
paper.addEventListener('click', function (e) {
    playRound('paper');
});

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', function (e) {
    playRound('scissors');
});