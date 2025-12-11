const userImg = document.getElementById("userImg");
const compImg = document.getElementById("compImg");
const resultText = document.getElementById("resultText");

let userChoice = "";
let compChoice = "";
let you = 0;
let comp = 0;
let draw = 0;

const images = {
    rock: "https://img.freepik.com/free-psd/grey-boulder-rock-isolated-transparent-background_632498-25568.jpg?semt=ais_hybrid&w=740&q=80",
    paper: "https://img.freepik.com/premium-photo/white-paper-ripped-message-torn-white-paper-ripped-message-torn-transparent_1028938-327852.jpg?semt=ais_hybrid&w=740&q=80",
    scissors: "https://i.pinimg.com/736x/cf/98/eb/cf98eb7c95b93d90b3de01232abc08b9.jpg"
};

document.querySelectorAll(".choice").forEach(choice => {
    choice.addEventListener("click", () => {
        userChoice = choice.dataset.choice;
        userImg.src = images[userChoice];

        const arr = ["rock", "paper", "scissors"];
        compChoice = arr[Math.floor(Math.random() * 3)];
        compImg.src = images[compChoice];
    });
});

document.getElementById("checkBtn").addEventListener("click", () => {
    if (userChoice === compChoice) {
        resultText.innerText = "Draw";
        draw++;
        document.getElementById("drawScore").innerText = draw;
    } else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        resultText.innerText = "You Win";
        you++;
        document.getElementById("youScore").innerText = you;
    } else {
        resultText.innerText = "Computer Wins";
        comp++;
        document.getElementById("compScore").innerText = comp;
    }
});
