const paper = "paper" ;
const scissors = "scissors"
const rock = "rock" ;

/* function to generate computerchoice */
function getComputerChoice() {
   let choice1 = Math.floor(Math.random()*3)+1;
   if(choice1 == 1) {return paper}
   else if(choice1 == 2){return scissors}
   else if(choice1 ==3 ) {return rock};
}

/* function that prompts user for a number and prints rock,
   paper or scissors based on the choice */
function playerChoice() {
    let choice2 = prompt('Pick A Number From 1 to 3')
    if (choice2 == 1) {return rock}
    else if(choice2 == 2) {return paper}
    else if(choice2 == 3) {return scissors}
    else { return "Invalid Input"}
}

/* function that plays a rock paper input game using 
   inputs from the playerchoice() and getcomputerchoice() 
   functions above to display a winner */
function playround(ch1,ch2) {
   ch1 = getComputerChoice();
   ch2 = playerChoice();
  /* console.log(`computer plays ${ch1} while player played ${ch2}`) */
  if (ch1 == paper && ch2 == scissors) {return("you win, scissors beat paper")}
  else if (ch1 == scissors && ch2 == paper){ return("you lose, scissors beat paper")}
  else if(ch1 == scissors && ch2 == rock) {return('you win, rock beats scissors')}
  else if (ch1 ==rock && ch2 == scissors) {return("you lose, rock beats scissors")}
  else if (ch1 == rock && ch2 == paper) {return('you win, paper beats rock')}
  else if (ch1 == paper && ch2 == rock) {return("you lose, paper beats rock")}
  else if (ch2 == "Invalid Input") {return('player didnt play')}
  else if (ch1 === ch2) {return("Draw") }
  
}


function exp(a) {
   a = playround();
   if (a=== "you win, scissors beat paper" || a ===
   'you win, rock beats scissors'|| a ==='you win, paper beats rock') {
      return('player wins')}
   else if (a === "you lose, scissors beat paper" || a ===
"you lose, rock beats scissors" || a ==="you lose, paper beats rock" ) { 
         return('computer wins') }
         else {return("tie")}

      }



/* function that takes input from the playround() function
   and plays a 5 rounds game returning theoverall  winner at the end */
function game(){
   let playerScore = 0;
   let computerScore = 0;
   let result;
  for(let i=0; i < 5; i++){
    result = playround();
  if(result.includes('you win,')){playerScore++;}
  else if(result.includes('you lose')){computerScore++;}
  else if(result.includes("Draw")) (console.log('draw'))
  else if (result.includes('player didnt')){console.log(`round doesnt count`)}
  console.log (`Round ${i+1} player score ${playerScore} while computer score ${computerScore}`)
  }
 if(playerScore > computerScore){console.log(`Player wins! congratulations`)}
 else if(computerScore > playerScore){console.log(`Computer wins, better luck next time`)}
 else if( computerScore === playerScore){console.log(`Tie, Good Game`)};
}
game()