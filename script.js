// TO DO LIST
// 1.) emulate selection choice to UI
// 2.) find out why  game isn't ending with conditional of 5pts
// 3.) represent round outcomes in UI
// 4.) new date in copyright
// 5.) make footer absolute so it stays at bottom of page

let pScore = 0;
let cScore = 0;
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const choices = ["Rock", "Paper", "Scissors"];
const rock = document.querySelector("rock");
const paper = document.querySelector("paper");
const scissors = document.querySelector("scissors");
const buttons = document.querySelectorAll("button");

const updateScores = function () {
  player.textContent = `Player Score = ${pScore}`;
  computer.textContent = `Computer score = ${cScore}`;
};

const getComputerChoice = function () {
  return choices[Math.trunc(Math.random() * choices.length)];
};

const playRound = function () {
  const computerChoice = getComputerChoice();
  const playerChoice =
    this.textContent[0].toUpperCase() + this.textContent.slice(1).toLowerCase();
  console.log(`You chose ${playerChoice}`);
  console.log(`Computer chose ${computerChoice}`);
  if (playerChoice === computerChoice) {
    console.log("Its a Draw");
    // return "Its a Draw!";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Rock")
  ) {
    cScore++;
    updateScores();
    // return "You Lose!";
  } else {
    pScore++;
    updateScores();
    // return "You Win!";
  }
};

buttons.forEach((btn) => btn.addEventListener("click", playRound));

// this isnt working for some reason
if (pScore == 5) {
  console.log("*****Game over, you win*****");
}
if (cScore == 5) {
  console.log("*****Game over, you lose*****");
}

////////////////////////////////////////////////////
// const game = function () {
//   for (i = 0; i < 5; i++) {
//     const playerChoice = prompt('Choose between "Rock", "Paper" or "Scissors"');
//     const computerChoice = getComputerChoice();
//     console.log(playRound(playerChoice, computerChoice));
//     console.log(`Current score is player: ${pScore} | Computer: ${cScore}`);
//   }
//   if (pScore === cScore) {
//     console.log("*****Game over, Its a Draw!*****");
//   } else if (pScore < cScore) {
//     console.log(C);
//   } else {
//     console.log("*****Game over, you win*****");
//   }
// };

// const game = function () {
//   playRound();
//   for (i = 0; i < 5; i++) {
//     console.log(`Current score is player: ${pScore} | Computer: ${cScore}`);
//     if (pScore === cScore) {
//       console.log("*****Game over, Its a Draw!*****");
//     } else if (pScore < cScore) {
//       console.log("****Game over, you lose!*****");
//     } else {
//       console.log("*****Game over, you win*****");
//     }
//   }
// };
// game();

// const rock = document.createElement("button");
// rock.style.cssText = "width: 60px; height: 30px;";
// rock.textContent = "Rock";
// document.body.append(rock);

// const scissors = document.createElement("button");
// scissors.style.cssText = "width: 60px; height: 30px;";
// scissors.textContent = "Scissors";
// document.body.append(scissors);

// const paper = document.createElement("button");
// paper.style.cssText = "width: 60px; height: 30px;";
// paper.textContent = "Paper";
// document.body.append(paper);
