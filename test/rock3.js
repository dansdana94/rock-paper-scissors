/* function to generate a random computer choice*/
function getComputerChoice() {
    let choices = ["rock","paper","scissors"]
    const randomchoice = Math.floor(Math.random()*3)
    return choices[randomchoice]
}

function playRound(playerChoice,computerChoice) {
   playerChoice = prompt('Play rock paper scissors').toLowerCase()
   computerChoice = getComputerChoice();
   if (playerChoice === "rock" && computerChoice === "rock" ||
      playerChoice === "paper" && computerChoice === "paper" ||
      playerChoice === "paper" && computerChoice === "scissors") {
      return('Tie, Good Game')
   }
   else if (playerChoice == "rock" && computerChoice === "paper" 
      || playerChoice === "paper" && computerChoice === "scissors"
      || playerChoice === "scissors" && computerChoice === "rock") {
        return(`You Lose, ${computerChoice} beats ${playerChoice}`)
      }
  else if (playerChoice === "paper" && computerChoice === "rock"
      || playerChoice === "scissors" && computerChoice ==="paper"
      || playerChoice === "rock" && computerChoice === "scissors") {
        return(`You win,${playerChoice} beats ${computerChoice}`)
      }
  else if (playerChoice != "paper" || playerChoice != "scissors" 
          || playerChoice !="rock") {return(`player did not play`)}
}
function game() {
    let playerScore = 0;
    let computerChoice = 0;

    for (let i=0; i<5; i++){
        const result = playRound()
  if (result.includes(`You win`)) {
    playerScore++;
  } else if (result.includes(`You Lose`)) {
    computerChoice++;
  }
  else {console.log(`play doesnt count`)}

  console.log(`Round ${i + 1} ${result} `)
}
if (playerScore > computerChoice){
    console.log(`Player Wins, Congratulation`)
} else if (playerScore < computerChoice){
    console.log(`Computer wins, better luck next time`)
} else if (playerScore === computerChoice) {
    console.log(`Tie!, Good Game`)
}
}
game()