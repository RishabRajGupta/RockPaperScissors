function getComputerChoice() {
  let x = Math.random();
  if (x <= 0.33) return "rock";
  else if (x <= 0.66) return "paper";
  else return "scissors";
}

function getHumanChoice(choice) {
  return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
  let computerChoice = getComputerChoice();

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return "Human Scored!";
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore++;
    return "Computer Scored!";
  } else {
    return "It's a draw!";
  }
}

// Setup buttons after DOM loads
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", function (e) {
    const humanChoice = getHumanChoice(e.target.textContent);
    const result = playRound(humanChoice);

    document.getElementById("player-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("result").textContent = result;
  });
});
