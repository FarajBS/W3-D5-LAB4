let btnRed = document.getElementById('stopButton');
let btnYel = document.getElementById('slowButton');
let btnGre = document.getElementById('goButton');


let lightRed = document.getElementById('stopLight');
let lightYel = document.getElementById('slowLight');
let lightGre = document.getElementById('goLight');


btnRed.addEventListener("click", () => {
    lightRed.classList.add('red');
    lightYel.classList.remove('yellow');
    lightGre.classList.remove('green');
});

btnYel.addEventListener("click", () => {
    lightRed.classList.remove('red');
    lightYel.classList.add('yellow');
    lightGre.classList.remove('green');
});

btnGre.addEventListener("click", () => {
    lightRed.classList.remove('red');
    lightYel.classList.remove('yellow');
    lightGre.classList.add('green');
});