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
    //console.log("computer choice: " + computerChoice);
    let result = ""
    
    if (playerChoice === computerChoice){
        resultDisplay.textContent = "It's a tie!"
    } else{
        switch(playerChoice){
            case "rock":
                if(computerChoice === "paper"){
                    result = "You lose!"
                    computerScore++;
                    updateScoreDisplay();
                    updateResultDisplay(result);
                    break;
            } else if(computerChoice === "scissors"){
                result = "You win!"
                playerScore++;
                updateScoreDisplay();
                updateResultDisplay(result);
                break;
            }
            case "paper":
                if (computerChoice === "scissors"){
                    result = "You lose!"
                    computerScore++;
                    updateScoreDisplay();
                    updateResultDisplay(result);
                    break;
                } else if (computerChoice === "rock"){
                    result = "You win!"
                    playerScore++;
                    updateScoreDisplay();
                    updateResultDisplay(result);
                    break;
                }
            case "scissors":
                if (computerChoice === "rock"){
                    result = "You lose!"
                    computerScore++;
                    updateScoreDisplay();
                    updateResultDisplay(result);
                    break;
                } else if (computerChoice === "paper"){
                    result = "You win!"
                    playerScore++;
                    updateScoreDisplay();
                    updateResultDisplay(result);
                    break;
                }
            default:
                result = "You win!"
                playerScore++;
                updateScoreDisplay();
                updateResultDisplay(result);
                break;
        }
    }
}

function updateResultDisplay(result){
    resultDisplay.textContent = result;
}

function updateScoreDisplay(){
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