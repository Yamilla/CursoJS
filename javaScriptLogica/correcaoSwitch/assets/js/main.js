const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana) {
    const diasSemanas = ['domingo','segunda', 'terca','quarta','quinta','sexta'];
    return diasSemanas[diaSemana];
}
function getNomeMes(numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
    return meses[numeroMes];
}
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();
    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);
   return (
    `${diaSemana}, ${data.getDay()} de ${nomeMes}` +
    ` de ${data.getFullYear()}` +
    ` ${zeroAEsquerda(data.getHours())}: ${zeroAEsquerda(data.getMinutes())} `
   );
}

 h1.innerHTML = criaData(data);

// const h1 = document.querySelector('.container h1');
// const data = new Date();

// h1.innerHTML = data.toLocaleDateString('pt-Br', {dateStyle: 'full'});