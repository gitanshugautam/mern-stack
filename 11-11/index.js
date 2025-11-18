let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompCkoice = ()=> {
    const options = ["rock" , "paper" , "scissor"];  
    const randIdx = Math.floor(Math.random() *3);
     return options[randIdx];

};
const drawGame = () => {
    console.log("game is draw");
    msg.innerText = "Game was draw / please play again";
     
}
const shoWinner = (userWin) => {
    if(userWin){
        console.log("user Win!")
        msg.innerText = "you Win!"
        msg.style.backgroundColor = "green";

         
    } else {
        console.log("you Lose")
        msg.innerText = "you Lose";
         msg.style.backgroundcolor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice)
    const compChoice =genCompCkoice();
    console.log("comp choice = " , compChoice);
  

if (userChoice === compChoice)  {
   drawGame();
} else {
    let userWin = true;
    if(userChoice === "rock") {
        userWin = compChoice === "paper" ? false : true;
         
    } else if  (userChoice === "paper") {
        compChoice === "scissor" ? false : true;
    }else {
        compChoice === "rock" ? false : true;
    }
    shoWinner(userWin);
}
} 


choices.forEach((choice) => {
   
    choice.addEventListener("click", () => {
        const userChoice =choice.getAttribute("id");
        

        playGame(userChoice);

    })
})