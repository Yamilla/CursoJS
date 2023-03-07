const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', iniciarTimer);

pausar.addEventListener('click', pausarTimer);

zerar.addEventListener('click', zerarTimer);

let segundo = 0;
let minuto = 0;
let hora = 0;

let timer;

function criarTimer() {
    segundo++;
    if (segundo >= 59) {
        segundo = 0;
        minuto += 1;
    }
    if (minuto >= 59) {
        minuto = 0;
        hora = 1;
    }
    return relogio.innerHTML = `${hora}:${minuto}:${segundo}`;
}

function iniciarTimer(event) {
    timer = setInterval(function () {
        relogio.style.color = 'black'
        relogio.innerHTML = criarTimer();
    }, 1000);
}

function pausarTimer(event) {
    clearInterval(timer);
    relogio.style.color = 'red';

}

function zerarTimer(event) {
    clearInterval(timer);
    segundo = 0;
    minuto = 0;
    hora = 0;
    relogio.style.color = 'black'
    return relogio.innerHTML = '00:00:00';
}
