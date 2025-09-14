// for fun

const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const computerChoiceDisplay = document.getElementById('computerChoiceDisplay');
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoiceDisplay.textContent = "Computer choice: " + computerChoice;
    let result = ""
    
    if (playerChoice === computerChoice){
        result = "It's a tie!"
    } 
    
    else {
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "paper") ? "You lose!" : "You win!";
                break;
           case "paper":
                result = (computerChoice === "scissors") ? "You lose!" : "You win!";
                break;
            case "scissors":
                result = (computerChoice === "rock") ? "You lose!" : "You win!";
                break;
        }
    }

    updateResultDisplay(result);
    updateScoreDisplay(result);
}

function updateResultDisplay(result){
    resultDisplay.textContent = result;
}

function updateScoreDisplay(result){
    if (result === "You win!"){
        playerScore++;
    } else if (result === "You lose!"){
        computerScore++;
    }

    playerDisplay.textContent = "Player: " + playerScore;
    computerDisplay.textContent = "Computer: " + computerScore;
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    playerDisplay.textContent = "Player: " + playerScore;
    computerDisplay.textContent = "Computer: " + computerScore;
    resultDisplay.textContent = "";
    computerChoiceDisplay.textContent = "";
}