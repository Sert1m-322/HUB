const btn = document.getElementById("btn_generator");

const lt = document.getElementById("lt");
const rt = document.getElementById("rt");

const copy1 = document.getElementById("copy1");
const copy2 = document.getElementById("copy2");

const LB = document.querySelector(".L");
const RB = document.querySelector(".R");

let points = [];

const list = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

let R1 = "#222222";
let R2 = "#444444";



btn.addEventListener("click", (e) =>{
    R1 = "#";
    R2 = "#";

    for (let i = 1; i <= 6; i++){
        R1 += list[Math.floor(Math.random() * list.length)];
        R2 += list[Math.floor(Math.random() * list.length)];
    }
    console.log(R1, R2);
    document.body.style.setProperty("--c1", R1);
    document.body.style.setProperty("--c2", R2);

    lt.textContent = R1;
    rt.textContent = R2;
})

const copy = (x, text) =>{
    let id;
    navigator.clipboard.writeText(x);
    text.textContent = "Copied to clipboard!"
    clearTimeout(text.timerId)

    text.timerId = setTimeout(() =>{
        text.textContent = "Click to copy";
    },2000)
}

LB.addEventListener("click", (e) =>{
    copy(R1, copy1)
})

RB.addEventListener("click", (e) =>{
    copy(R2, copy2)
})


