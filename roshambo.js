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
    const body = document.querySelector('body');
        const gameWrapper = document.createElement('div');
        gameWrapper.setAttribute('id','gameWrapper');
    body.appendChild(gameWrapper);
            const title = document.createElement('div');
            title.classList.add('bangers');
            title.setAttribute('id','title');
            title.textContent = 'choose your weapon';
        gameWrapper.appendChild(title);
            const tiles = document.createElement('div');
            tiles.setAttribute('id','tiles');
        gameWrapper.appendChild(tiles);
                rock.setAttribute('id','rock');
                rock.innerHTML = "<i class='fa-solid fa-hand-back-fist fa-flip-horizontal choice'></i>";
            tiles.appendChild(rock);
                paper.setAttribute('id','paper');
                paper.innerHTML = "<i class='fa-solid fa-hand choice'></i>";
            tiles.appendChild(paper);
                scissors.setAttribute('id','scissors');
                scissors.innerHTML = "<i class='fa-solid fa-hand-scissors choice'></i>";
            tiles.appendChild(scissors);
}

function startGame(){
    const startGame = document.getElementById('startGame');
    startGame.remove();
    newGame();
}

const startBtn = document.querySelector('#startBtn');
startBtn.addEventListener('click', startGame);

const rock = document.createElement('div');
rock.addEventListener('click',function(e) {
    playRound('rock');
});

const paper = document.createElement('div');
paper.addEventListener('click',function(e) {
    playRound('paper');
});

const scissors = document.createElement('div');
scissors.addEventListener('click',function(e) {
    playRound('scissors');
});