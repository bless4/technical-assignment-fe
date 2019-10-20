  "use strict"



//instantiation of variables
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div =document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// to get computer choice
function getComputerChoice(){
    const choices =['r','p','s'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
    

}
//converting letters to words
function convertToWord(letter) {
    if (letter=== "r") return "Rock";
    if (letter==="p") return "Paper";
    return "Scissors";
}

// if its a win
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats 
    ${convertToWord(computerChoice)}${smallComputerWord} . You win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},300);

}

function lose(userChoice, computerChoice) {

   computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} lose to
    ${convertToWord(computerChoice)}${smallComputerWord} . You win!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},300);

}

function draw(userChoice, computerChoice) {
    
   
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals
    ${convertToWord(computerChoice)}${smallComputerWord} . Its a draw!`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow')},300);


}



// comparing choices, 
function game(userChoice){
   const computerChoice = getComputerChoice();
   switch (userChoice + computerChoice){
       case "rs":
       case "pr":   
       case "sp":
           win(userChoice, computerChoice);
           break;
        case "rp":  
        case "sp":
        case "sr":    
        lose(userChoice, computerChoice);
           break; 
        case "rr":
        case "rp":    
        case "ss":
        draw(userChoice, computerChoice);
         break;
   }

}

//events listener
function main(){
rock_div.addEventListener('click', function(){
    game ("r")
})
paper_div.addEventListener('click', function(){
    game("p")
})
scissors_div.addEventListener('click', function(){
    game("s")
})
}
main();
