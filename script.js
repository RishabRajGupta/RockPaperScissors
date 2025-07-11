function getComputerChoice(){
    let x = Math.random();
    if(x >= 0 && x <= 0.33){
        return "rock";
    } else if(x > 0.33 && x <= 0.66){
        return "paper";
    } else {
        return "scissor";
    }
}
function getHumanChoice(){
    let a = prompt(`Enter Rock, Paper or Scissor : `);
    return a.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(){
    let a = getComputerChoice();
    let b = getHumanChoice();

    if(a == "rock" && b == "paper"){
        humanScore++;
        return "Human Scored!";
    }
    else if(a == "rock" && b == "scissor"){
        computerScore++;
        return "Computer Scored!";
    }
    else if(a == "paper" && b == "rock"){
        computerScore++;
        return "Computer Scored!";
    }
    else if(a == "paper" && b == "scissor"){
        humanScore++;
        return "Human Scored!";
    }
    else if(a == "scissor" && b == "rock"){
        humanScore++;
        return "Human Scored!";
    }
    else if(a == "scissor" && b == "paper"){
        computerScore++;
        return "Computer Scored!";
    }
}

for(let i = 0; i < 10; i++){
    let x = playRound();
    if(x == undefined){
        alert("Enter Correct Value!");
        i--;
        continue;
    }
    alert(x);
    alert(`Human : ${humanScore}
Computer : ${computerScore}`);
}