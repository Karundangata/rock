function getComputerChoice() {
    const randomNumber = Math.random();
    return randomNumber < 0.34 ? 'rock' : randomNumber < 0.67 ? 'paper' : 'scissors';
  }
  const determineWinner = function (userChoice, computerChoice) {
    if (userChoice === computerChoice) return "It's a tie!";
    return (userChoice === 'rock' && computerChoice === 'scissors') ||
           (userChoice === 'paper' && computerChoice === 'rock') ||
           (userChoice === 'scissors' && computerChoice === 'paper')
      ? 'You win!'
      : 'Computer wins!';
  };
  const displayResult = (userChoice, computerChoice, winner) => {
    console.log(`You chose ${userChoice}. Computer chose ${computerChoice}. ${winner}`);
  };
  function play(userChoice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);
    displayResult(userChoice, computerChoice, winner);
  }
  const score = { user: 0, computer: 0 };
  const updateScore = winner => {
    if (winner === 'You win!') score.user++;
    if (winner === 'Computer wins!') score.computer++;
    console.log(`Score: You - ${score.user}, Computer - ${score.computer}`);
  };
  function playWithScore(userChoice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);
    displayResult(userChoice, computerChoice, winner);
    updateScore(winner);
  }
  const cheatMode = (userChoice, cheat = false) => {
    const computerChoice = cheat ? 'scissors' : getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);
    displayResult(userChoice, computerChoice, winner);
    updateScore(winner);
  };
  play('rock'); 
  playWithScore('scissors'); 
  cheatMode('paper', true); 
  