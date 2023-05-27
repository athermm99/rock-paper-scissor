function getComputerChoice(){
    let choice=["rock","paper","scissors"];
    let ranChoice=(Math.random()*choice)+1;
    if(ranChoice==1){
        return "rock";
    }else if(ranChoice==2){
        return "paper";
    }else{
        return "scissors";
    }
}
console.log(getComputerChoice());


function playRound(playerSelection, getComputerChoice) {
    if (playerSelection === "rock") {  
      if (getComputerChoice === "rock") {
        return "It is a tie!!"
      } else if (getComputerChoice === "paper") {
          return "The computer wins!";
        } else {
          return "You win this game!";
        }
    }
    else if (playerSelection === "paper") {  
      if (getComputerChoice === "paper") {
        return "It is a tie!!"
      } else if (getComputerChoice === "rock") {
          return "The computer wins!";
        } else {
          return "You win this game!";
        }
    } else {
      if (getComputerChoice === "rock") {
        return "Computer wins!";
    } else if (getComputerChoice === "paper") {
        return "User wins!";
    } else {
        return "Draw!";
    }
    }
  
  
  }

  function game(){
    for(let i=0;i<5;i++){
        console.log(playRound(prompt("enter your choice"),getComputerChoice));
    }
  }