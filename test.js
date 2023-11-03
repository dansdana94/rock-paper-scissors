let inpdiv = document.querySelector('#inpdiv');
let resdiv = document.querySelector('#resultdiv');
let winDiv = document.querySelector('#windiv')
let btns = document.querySelectorAll('.btn');
let choices = ['Rock','Paper','Scissors'];

let playerScore = 0;
let computerScore = 0;
function compInp() {
    let cI = Math.floor(Math.random()*3);
    return(choices[cI].toLowerCase())
}

function playRound(pI,cI) {
   /* pI = prompt('play rock paper scissors').toLowerCase();
    cI = compInp().toLowerCase(); */

    if (
        pI === 'rock' && cI === 'scissors' ||
        pI === 'paper' && cI === 'rock' ||
        pI === 'Scissors' && cI === 'paper'
    ) {playerScore++;  winDiv.textContent=('player wins round');
        inpdiv.textContent=(`pc:${pI} beats cc:${cI}`);}

    else if (cI === pI) {
        winDiv.textContent=('Its a tie'); 
        inpdiv.textContent=(`cc:${cI} = pc:${pI}`);
    }

    else{computerScore++; winDiv.textContent=('computer wins round'); 
          inpdiv.textContent=(`cc:${cI} beats pc:${pI}`);}
}
btns.forEach(button => {
    button.addEventListener('click', ()=>{
        let playerSelection = button.id;
        let computerSelection = compInp();
        let round = playRound(playerSelection,computerSelection);

        if (playerScore === 5){resdiv.textContent=
            ('player won the game')}

        else if (computerScore === 5){resdiv.textContent=
                 ('computer won the game');}

        else {resdiv.textContent=
              (`playerScore${playerScore}, computerScore:${computerScore}`)}
    })
}
    )