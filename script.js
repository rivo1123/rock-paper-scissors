const buttons = document.querySelectorAll(".buttons button");
const roundResult = document.querySelector(".round");
const score = document.querySelector(".score");

let playerScore = 0;
let computerScore = 0;
score.textContent = `Score: ${playerScore}:${computerScore}`;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "Draw";
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return "You lost. Paper beats Rock";
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return "You won. Rock beats Scissors";
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return "You won. Paper beats Rock";
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return "You lost. Scissors beat Paper";
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return "You won. Scissors beat Paper";
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return "You lost. Rock beats Scissors";
  }
}

//Compare player and computer scores and declare the winner
function declareWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return `Score: ${playerScore}:${computerScore}. Player won!`;
  } else {
    return `Score: ${playerScore}:${computerScore}. Computer won!`;
  }
}

//Update the score and display a winner 
function updateScore(playerScore, computerScore) {
  score.textContent = `Score: ${playerScore}:${computerScore}`;
  if (playerScore === 5 || computerScore === 5) {
    score.textContent =  declareWinner(playerScore, computerScore);
  }
}

// Add event listener that calls playRound when button is clicked
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const result = playRound(button.id, getComputerChoice());
    roundResult.textContent = result;

    if (result.includes("won")) {
      playerScore++;
    } else if (result.includes("lost")) {
      computerScore++;
    }
    updateScore(playerScore, computerScore);
  });
});