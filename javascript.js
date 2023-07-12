function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function playRound(player, computer) {
    if (player == 1 && computer == 2) {
        return "You lose! Paper beats rock.";
    } else if (player == 1 && computer == 3) {
        return "You win! Rock beats scissors.";
    } else if (player == 2 && computer == 1) {
        return "You win! Paper beats rock.";
    } else if (player == 2 && computer == 3) {
        return "You lose! Scissors beats paper.";
    } else if (player == 3 && computer == 1) {
        return "You lose! Rock beats scissors.";
    } else if (player == 3 && computer == 2) {
        return "You win! Scissors beats paper.";
    } else {
        return "It's a tie!";
    }
}

let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    result = playRound(1, getComputerChoice());
    updateGame(result);
    });

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    result = playRound(2, getComputerChoice());
    updateGame(result);
    });

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    result = playRound(3, getComputerChoice());
    updateGame(result);
    });

const resultDiv = document.querySelector('#result');
const scoreDiv = document.querySelector('#score');
function updateGame(result) {
    if (result.includes("win")) {
        playerScore++;
    } else if (result.includes("lose")) {
        computerScore++;
    }
    resultDiv.textContent = result;
    scoreDiv.textContent = "Player: " + playerScore + " Computer: " + computerScore;
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            resultDiv.textContent = "You win!";
        } else {
            resultDiv.textContent = "You lose!";
        }
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
}