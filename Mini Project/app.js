let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "purple"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2")

document.addEventListener("keypress", function () {
    if (started == false) {
        //console.log("Game Started");
        started = true;
        levelUp();
    }
})

function levelUp() {
    level++;
    h2.innerText = `Lwvel ${level}`;
    let randomIndex = Math.floor(Math.random() * 4);
    //console.log('randomIndex: ', randomIndex);
    let randomColor = btns[randomIndex]
    //console.log('randomColor: ', randomColor);
    let randomBtn = document.querySelector(`.${randomColor}`)
    //console.log('randomBtn: ', randomBtn);
    gameSeq.push(randomColor);
    //console.log('gameSeq: ', gameSeq);
    btnFlash(randomBtn, 'flash',400);
    userSeq = [];
}

function btnFlash(btn, clsName, time) {
    //console.log('btn: ', btn);
    btn.classList.add(clsName)
    setTimeout(function () {
        btn.classList.remove(clsName);
    }, time);
}

function btnPress() {
    //console.log('this: ', this);
    let btn = this
    btnFlash(btn, 'pink',150)
    userColor = btn.getAttribute('id');
    // //console.log('userColor: ', userColor);
    userSeq.push(userColor);
    //console.log('userSeq: ', userSeq);

    checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click",btnPress)
}

function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 300);
            
        } 
        }else {
            h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br>Press any key to start`;
            document.querySelector("body").style.backgroundColor = 'red';
            setTimeout(function () {
                document.querySelector("body").style.backgroundColor = 'white';
            },150)
            reset();
    }
}

function reset() {
    started = false;
    gameSeq = []
    userSeq = []
    level = 0
}