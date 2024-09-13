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
}

function playGame(){
    
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`The Score is [${humanScore}:${computerScore}]`);
}





let humanScore = 0, computerScore = 0;

let choice;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) =>  {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    })
})









