let pScore = 0;
let cScore = 0;
const choices = ["Rock", "Paper", "Scissors"];

const getComputerChoice = function () {
  return choices[Math.trunc(Math.random() * choices.length)];
};

const playRound = function (playerChoice, computerChoice) {
  const pc =
    playerChoice[0].toUpperCase() + playerChoice.slice(1).toLowerCase();
  console.log(`You chose ${pc}`);
  console.log(`Computer chose ${computerChoice}`);
  if (pc === computerChoice) {
    return "Its a Draw!";
  } else if (
    (pc === "Rock" && computerChoice === "Paper") ||
    (pc === "Paper" && computerChoice === "Scissors") ||
    (pc === "Scissors" && computerChoice === "Rock")
  ) {
    cScore++;
    return "You Lose!";
  } else {
    pScore++;
    return "You Win!";
  }
};

const game = function () {
  for (i = 0; i < 5; i++) {
    const playerChoice = prompt('Choose between "Rock", "Paper" or "Scissors"');
    const computerChoice = getComputerChoice();
    console.log(playRound(playerChoice, computerChoice));
    console.log(`Current score is player: ${pScore} | Computer: ${cScore}`);
  }
  if (pScore === cScore) {
    console.log("*****Game over, Its a Draw!*****");
  } else if (pScore < cScore) {
    console.log("****Game over, you lose!*****");
  } else {
    console.log("*****Game over, you win*****");
  }
};

game();
