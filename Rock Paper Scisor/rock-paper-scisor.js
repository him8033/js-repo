let userScore = 0;
let comScore = 0;
let drawScore = 0;

const choices = document.querySelectorAll(".box");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#com-score");
const drawScorePara = document.querySelector("#draw-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

const playGame = (userChoice) => {
    const comChoice = genChoice();
    if (userChoice === comChoice) {
        drawGame();
    } else {
        let userWin;
        if (userChoice === "rock") {
            userWin = comChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = comChoice === "rock" ? true : false;
        } else {
            userWin = comChoice === "paper" ? true : false;
        }
        showWinner(userWin);
    }
}

const genChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const index = Math.floor(Math.random() * 3);
    return option[index];
}

const drawGame = () => {
    drawScore++;
    drawScorePara.innerText = drawScore;
    msg.innerText = "Match was Draw. Play Again!"
    msg.style.backgroundColor = "grey";
}

const showWinner = (userWin) => {
    if (userWin === true) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "Green";
    } else {
        comScore++;
        comScorePara.innerText = comScore;
        msg.innerText = "You Lose.";
        msg.style.backgroundColor = "Red";
    }
}