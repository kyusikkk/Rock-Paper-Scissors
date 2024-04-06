function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function singleRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "Tie";
    }else if(
        (playerSelection === 'Rock' && computerSelection === 'Scissors')  || 
        (playerSelection === 'Paper' && computerSelection === 'Rock')     ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') 


    )
    {
        return "You win " + playerSelection + " beats " + computerSelection;
    }else {
        return "You Lose! " + computerSelection + " beats " + computerSelection;
    }
}
function playRound(){
    for (let i = 0; i <5; i++){
        const playerSelection = prompt("Enter your choice");
        const computerSelection = getComputerChoice();
        console.log(singleRound(playerSelection, computerSelection));
    }
}

playRound();
