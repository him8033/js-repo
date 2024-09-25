let boxes = document.querySelectorAll(".box");
let resetGame = document.querySelector("#reset-btn");
let newGame=document.querySelector("#new-btn");
let msgArea=document.querySelector(".msg-area");
let msg=document.querySelector("#msg");
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
        console.log("box was clicked");
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
const boxesDisabled =()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText=(`Congratulation ${winner} is Winner`);
    msgArea.classList.remove("hide");
    boxesDisabled();
}
const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("Winner",pos1);
                showWinner(pos1);
            }
        }
    }
}

