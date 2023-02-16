
function mostrarData(diaSemana,mes) {
    const data = getDiaSemanaTexto(diaSemana);
    const mees= getmesTexto(mes);
    const dia = dataCriada.getDate();
    const ano = dataCriada.getFullYear();
    const hora = dataCriada.getHours();
    const min = dataCriada.getMinutes();
    const msg = `${data}, ${dia} de ${mees} de ${ano} </br> ${hora}:${min} `;
    
    setResultado(msg);
}

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabádo';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
    }
}

function getmesTexto(mes) {
    let mesTexto;
    switch (mes) {
        case 0:
            mesTexto = 'Janeiro';
            return mesTexto;
        case 1:
            mesTexto = 'Fevereiro';
            return mesTexto;
        case 2:
            mesTexto = 'Março';
            return mesTexto;
        case 3:
            mesTexto = 'Abril';
            return mesTexto;
        case 4:
            mesTexto = 'Maio';
            return mesTexto;
        case 5:
            mesTexto = 'Junho';
            return mesTexto;
        case 6:
            mesTexto = 'Julho';
            return mesTexto;
        case 7:
            mesTexto = 'Agosto';
            return mesTexto;
        case 8:
            mesTexto = 'Setembro';
            return mesTexto;
        case 9:
            mesTexto = 'Outubro';
            return mesTexto;
        case 10:
            mesTexto = 'Novembro';
            return mesTexto;
        case 11:
            mesTexto = 'Dezembro';
            return mesTexto;
        default:
            mesTexto = '';
    }
}

function criaDate() {
    const data = new Date();
    return data;
}
function criaElemento() {
    const elemento = document.createElement('p');
    return elemento;
}

function setResultado(msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = msg;
}
const dataCriada = criaDate();
const diaSemana = dataCriada.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
const mes = dataCriada.getMonth();
const mesTexto = getmesTexto(mes);

mostrarData(diaSemana,mes);


