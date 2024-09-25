let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgArea = document.querySelector(".msg-area");
let msg = document.querySelector("#msg");
let turn = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (turn === true) {
            box.innerText = "X";
            turn = false;
        }
        else {
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
    })
});

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }
        }
    }
}

const showWinner = (winner) => {
    msg.innerText = (`Congratulation ${winner} is Winner \nClick Here! to Start a\n New Game`);
    msgArea.classList.remove("hide");
    boxesDisabled();
}

const boxesDisabled = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}

const boxesEnabled = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () => {
    turn = true;
    boxesEnabled();
    msgArea.classList.add("hide");
}
resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);