function getComputerChoice(){
    let randNum = Math.floor(Math.random() * 3);

    switch(randNum){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";      
    }
}

function playRound(humanChoice, computerChoice){
    
    const results = document.querySelector("#results");
    const score = document.querySelector("#score");
    
    if((humanChoice == 'rock' && computerChoice == 'scissors') ||
       (humanChoice == 'scissors' && computerChoice == 'paper') ||
       (humanChoice == 'paper' && computerChoice == 'rock') ){
        
        results.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    }
    else if(humanChoice == computerChoice){
        results.textContent = `It's a draw. You both picked ${humanChoice}.`;
    }
    else{
        results.textContent = `You lost.. ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    score.textContent = `You ${humanScore} : ${computerScore} Computer`;

    const finish = document.createElement("div");

    if(humanScore === 5){
        finish.textContent = `You won, congratulations!`;
        humanScore = 0;
        computerScore = 0;
    }
    if(computerScore === 5){
        finish.textContent = `You lost, better luck next time!`;
        humanScore = 0;
        computerScore = 0;
    }

    results.appendChild(finish);
}

let humanScore = 0, computerScore = 0;

let choice;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) =>  {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    })
})









