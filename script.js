// TO DO LIST
// 1.) emulate selection choice to UI
// 2.) find out why  game isn't ending with conditional of 5pts
// 3.) represent round outcomes in UI
// 4.) new date in copyright
// 5.) make footer absolute so it stays at bottom of page

let pScore = 0;
let cScore = 0;
let round = 0;
let info;
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const choices = ["Rock", "Paper", "Scissors"];
const rock = document.querySelector("rock");
const paper = document.querySelector("paper");
const scissors = document.querySelector("scissors");
const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");
const resetbtn = document.createElement("button");
resetbtn.textContent = "Play Again?";

const updateScores = function (info) {
  player.textContent = `Player Score = ${pScore}`;
  computer.textContent = `Computer score = ${cScore}`;
  result.textContent = `${info}`;
};

const getComputerChoice = function () {
  return choices[Math.trunc(Math.random() * choices.length)];
};

const checkWinner = function () {
  if (pScore === 5) {
    result.textContent = "Game Over, You Win!";
    result.append(resetbtn);
    buttons.forEach((btn) => btn.removeEventListener("click", play));
  }
  if (cScore === 5) {
    result.textContent = "Game Over, You lose!";
    result.appendChild(resetbtn);
    buttons.forEach((btn) => btn.removeEventListener("click", play));
  }
};

const play = function () {
  const computerChoice = getComputerChoice();
  const playerChoice =
    this.textContent[0].toUpperCase() + this.textContent.slice(1).toLowerCase();
  document.querySelector(".player-choice").textContent = playerChoice;
  document.querySelector(".computer-choice").textContent = computerChoice;

  if (playerChoice === computerChoice) {
    round++;
    info = `Round ${round}: Draw`;
    updateScores(info);
    // return "Its a Draw!";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Rock")
  ) {
    round++;
    cScore++;
    info = `Round ${round}: You lost `;

    updateScores(info);
    // return "You Lose!";
  } else {
    round++;
    pScore++;
    info = `Round ${round}: You win`;
    updateScores(info);
    // return "You Win!";
  }
  checkWinner();
};

const resetGame = function () {
  cScore = 0;
  pScore = 0;
  player.textContent = ``;
  computer.textContent = ``;
  result.textContent = "Fight";
};

const game = function () {
  buttons.forEach((btn) => btn.addEventListener("click", play));
  resetbtn.addEventListener("click", resetGame);
};

game();
