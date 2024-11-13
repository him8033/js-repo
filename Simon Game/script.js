let game_seq = [];
let user_seq = [];
let level = 0;
let started = false;
let color = ["red", "green", "blue", "yellow"];
let cur_lvl = document.querySelector("h3");

document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        levelup();
    }
})

function levelup() {
    level++;
    user_seq = [];
    cur_lvl.innerText = `Level : ${level}`;
    let randidx = Math.floor(Math.random() * 3);
    let randcolor = color[randidx];
    let randbox = document.querySelector(`.${randcolor}`);
    game_seq.push(randcolor);
    console.log(game_seq);
    game_flash(randbox);
}

function game_flash(box) {
    box.classList.add("game-flash");
    setTimeout(function () {
        box.classList.remove("game-flash");
    }, 250)
}

function user_flash(box) {
    box.classList.add("user-flash");
    setTimeout(function () {
        box.classList.remove("user-flash");
    }, 250)
}

function checkAns(idx) {
    if (game_seq[idx] === user_seq[idx]) {
        console.log("match");
        if (user_seq.length == game_seq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        cur_lvl.innerHTML = `Game Over!<br> Your level is: ${level} <br>Press any key for restart Game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        },250)
        reset();
    }
}

function box_press() {
    console.log("btn pressed");
    console.log(this);
    btn = this;
    user_flash(btn);
    let getcolor = btn.getAttribute("id");
    user_seq.push(getcolor);
    console.log(`user sequence=${user_seq}`);
    checkAns(user_seq.length - 1);
}


let allbtns = document.querySelectorAll(".box");
for (btn of allbtns) {
    btn.addEventListener("click", box_press);
}

function reset() {
    started = false;
    game_seq = [];
    user_seq = [];
    level = 0;
}