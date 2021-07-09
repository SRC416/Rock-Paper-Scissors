// global variables
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

function playGame() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();

  if(playerScore > computerScore) {
  console.log("**********");
  console.log("GAME OVER");
  console.log("you win");
  scoreLog();
  console.log("**********");
  } else {
  console.log("**********");
  console.log("GAME OVER");
  console.log("you lose");
  scoreLog();
  console.log("**********");
  }
}

// function to display score
function scoreLog() {
  console.log(`Player Score: ${playerScore}`);
  console.log(`Computer Score: ${computerScore}`);
}

// function to play one round of rps
function playRound() {
  let playerChoice = prompt("Rock Paper or Scissors")
  let computerChoice = computerPlay();
  if(playerChoice === computerChoice) {
    rounds++
    console.log(`It's a tie.`);
    scoreLog();
  } else if(playerChoice === "rock" && computerChoice === "paper"){
    rounds++
    computerScore++
    console.log(`You lose ${computerChoice} beats ${playerChoice}`);
    scoreLog();
  } else if(playerChoice === "rock" && computerChoice === "scissors") {
    rounds++
    playerScore++
    console.log(`You win ${playerChoice} beats ${computerChoice}`);
    scoreLog();
  };

  if(playerChoice === "paper" && computerChoice === "scissors"){
    rounds++
    computerScore++
    console.log(`You lose ${computerChoice} beats ${playerChoice}`);
    scoreLog();
  } else if(playerChoice === "paper" && computerChoice === "rock") {
    rounds++
    playerScore++;
    console.log(`You win ${playerChoice} beats ${computerChoice}`);
    scoreLog();
  };

  if(playerChoice === "scissors" && computerChoice === "rock"){
    rounds++
    computerScore++
    console.log(`You lose ${computerChoice} beats ${playerChoice}`);
    scoreLog();
  } else if(playerChoice === "scissors" && computerChoice === "paper") {
    rounds++
    playerScore++;
    console.log(`You win ${playerChoice} beats ${computerChoice}`);
    scoreLog();
  }
}


// function for the computer to make a choice
function computerPlay(){
  let num = Math.floor(Math.random() * 3);
  if(num === 0) {
      return "rock"
  } else if(num === 1) {
      return "paper"
  } else if(num === 2) {
      return "scissors"
  }
}










