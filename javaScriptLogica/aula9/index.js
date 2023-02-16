// objeto date
// const tresHoras = 60 * 60 * 3 * 1000;
// const data = new Date(0 + tresHoras);

// const data = new Date(2019,3,20,15,14,27);

// const data = new Date('2019-04-20 20:15:59');
// console.log('Dia', data.getDate());
// console.log('Mes', data.getMonth()+1); // mes comeca do zero
// console.log('Ano', data.getFullYear());
// console.log('hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('Ms', data.getMilliseconds());
// console.log('Dia semana', data.getDay()); // 0 = domingo , 6 == sabado
// console.log(data.toString()); // converte no a data uma string
    function zeroAEsquerda(num){
        return num >= 10 ? num : `0${num}`
    }
    function formantData(data){
        const dia = zeroAEsquerda(data.getDate());
        const mes = zeroAEsquerda(data.getMonth() + 1);
        const ano = zeroAEsquerda(data.getFullYear());
        const hora = zeroAEsquerda(data.getHours());
        const min = zeroAEsquerda(data.getMinutes());
        const seg = zeroAEsquerda(data.getSeconds());
        return `${dia}/${mes}/${ano} ${hora}:${min}: ${seg}`;
    }
    const data = new Date();
    const dataBrasil = formantData(data);
    console.log(dataBrasil);