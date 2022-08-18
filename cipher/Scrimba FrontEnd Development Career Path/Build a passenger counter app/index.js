let countEl = document.getElementById("count-ele");
let saveEl = document.getElementById("save-ele");
let count = 0;

function increment() {
    count++;
    countEl.textContent = count;
}

function save() {
    let saveStr = " " + count + " - ";
    saveEl.textContent += saveStr;
    countEl.textContent = 0;
    count = 0;
}