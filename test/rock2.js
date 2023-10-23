

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return 'It\'s a draw!';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} 
        beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
    } else {
        return `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} 
        beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors").toLowerCase();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        if (result.includes('Win')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        }

        console.log(`Round ${i + 1}: ${result}`);
    }

    if (playerScore > computerScore) {
        console.log("You win the game! Congratulations!");
    } else if (playerScore < computerScore) {
        console.log("Computer wins the game! Better luck next time!");
    } else {
        console.log("It's a tie! Good game!");
    }
}
game()

/* To start the game, call the game() function
In this code, the getComputerChoice() function randomly selects 'Rock', 'Paper', or 'Scissors'. 
The playRound() function takes two parameters (playerSelection and computerSelection), compares them, 
and determines the winner of a single round.The game() function plays 5 rounds, keeps score, 
and reports the winner or loser at the end. The game is case-insensitive, 
 allowing users to input their choices in various formats.
 */