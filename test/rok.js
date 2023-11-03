const choices = ["rock", "paper", "scissors"];

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `Computer wins! ${computerSelection} beats ${playerSelection}`;
    }
}

const choiceButtons = document.querySelectorAll('.choice-btn');
const resultDiv = document.getElementById('result');

choiceButtons.forEach(button => {
    button.addEventListener('click', function() {
        const playerSelection = button.id;
        const computerSelection = computerPlay();
        const roundResult = playRound(playerSelection, computerSelection);
        resultDiv.textContent = roundResult;
    });
});
