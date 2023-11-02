function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    console.log("Draw");
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    console.log("You lost. Paper beats Rock");
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    console.log("You won. Rock beats Scissors");
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    console.log("You won. Paper beats Rock");
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    console.log("You lost. Scissors beat Paper");
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    console.log("You won. Scissors beat Paper");
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    console.log("You lost. Rock beats Scissors");
  }
}