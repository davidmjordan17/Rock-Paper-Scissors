const totalScores = { computerScore: 0, playerScore: 0 };

function getComputerChoice() {
  const computerChoice = ['Rock', 'Paper', 'Scissors'];
  let result = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[result];
}

function getResult(playerChoice, computerChoice) {
  let score;
  if (playerChoice === computerChoice) {
    score = 0;
  } else if (
    (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
    (playerChoice === 'Paper' && computerChoice === 'Rock') ||
    (playerChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    score = 1;
  } else {
    score = -1;
  }
  return score;
}

function showResult(score, playerChoice, computerChoice) {
  const playerScore = document.getElementById('player-score');
  const hands = document.getElementById('hands');
  const result = document.getElementById('result');

  if (score === 1) {
    result.innerText = 'You Win!';
  } else if (score === -1) {
    result.innerText = 'You Lose!';
  } else {
    result.innerText = `It's a Draw!`;
  }

  hands.innerText = `You chose ${playerChoice} vs Computer chose ${computerChoice}`;
  playerScore.innerText = `Your Score: ${totalScores.playerScore}`;
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);

  if (score === 1) {
    totalScores['playerScore']++;
  } else if (score === -1) {
    totalScores['computerScore']++;
  }

  showResult(score, playerChoice, computerChoice);
}

function playGame() {
  const rpsButtons = document.querySelectorAll('.rpsButton');
  rpsButtons.forEach(rpsButton => {
    rpsButton.addEventListener('click', () => onClickRPS(rpsButton.value));
  });

  const endGameButton = document.getElementById('endGameButton')
  endGameButton.addEventListener('click', () => endGame())
}

function endGame() {
  totalScores[`playerScore`] = 0
  totalScores[`computerScore`] = 0

  const playerScore = document.getElementById('player-score');
  const hands = document.getElementById('hands');
  const result = document.getElementById('result');

  result.innerText = ''
  hands.innerText = ''
  playerScore.innerText = ''

}

playGame();
