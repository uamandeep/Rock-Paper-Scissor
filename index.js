const attacks = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let index = Math.floor(Math.random() * attacks.length);
    let cpuAttack = attacks[index];
}

function getHumanChoice(){
    let humanAttack = prompt("Enter your attack ['rock','paper','scissors']").toLocaleLowerCase;
    if(humanAttack==='rock' || humanAttack==='scissors' || humanAttack==='paper'){
        return humanAttack;
    }
    else{
        return humanAttack = prompt("Please try again: [rock, paper, scissors]");
    }
}

function playRound(humanChoice, computerChoice){
    if(humanChoice==='rock' && computerChoice === 'rock' || humanChoice==='scissors' && computerChoice === 'scissors' || humanChoice==='paper' && computerChoice === 'paper' ){
        console.log('DRAW!');
    }
    else if(humanChoice==='rock' && computerChoice === 'paper' || humanChoice==='scissors' && computerChoice === 'rock' || humanChoice==='paper' && computerChoice === 'scissors'){
        console.log('COMPUTER WINS!');
    }
    else{
        console.log("YOU WIN!");
    }
}