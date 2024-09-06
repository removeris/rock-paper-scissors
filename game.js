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
        if (choice === 'rock' || choice === 'paper' || choice === 'scissors'){
            break;
        }
        else{
            alert('Invalid Input');
        }
    } while(true)
    
    return choice;
}
