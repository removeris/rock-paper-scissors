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

function getHumanChoice(){
    let choice;
    do{
        choice = prompt("Choose rock, paper or scissors");
        choice = choice.toLowerCase();

        if (choice === 'rock' || choice === 'paper' || choice === 'scissors'){
            break;
        }
        else{
            alert('Invalid Input');
        }
    } while(true)
    
    return choice;
}

function playRound(humanChoice, computerChoice){
    if((humanChoice == 'rock' && computerChoice == 'scissors') ||
       (humanChoice == 'scissors' && computerChoice == 'paper') ||
       (humanChoice == 'paper' && computerChoice == 'rock') ){
        
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    }
    else if(humanChoice == computerChoice){
        console.log(`It's a draw. You both picked ${humanChoice}.`);
    }
    else{
        console.log(`You lost.. ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`The Score is [${humanScore}:${computerScore}]`);
    }
}

let humanScore = 0, computerScore = 0;

playGame();








