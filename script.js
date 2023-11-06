const buttons = document.querySelectorAll(".buttons button");

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
function compareScores(playerScore, computerScore) {
  console.log(`The score is ${playerScore}:${computerScore}`)
  if (playerScore === computerScore) {
    console.log("It's a draw!");
  } else if (playerScore > computerScore) {
    console.log("Player won!");
  } else {
    console.log("Computer won!");
  }
}

// Add event listener that calls playRound when button is clicked
buttons.forEach(button => {
  button.addEventListener('click', () => playRound(button.id, getComputerChoice()));
});