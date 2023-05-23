// Metodos uteis para promises
// Promise.all  Promise.race Promise.resolve Promise.rejec 

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(mgs, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof mgs !== 'string') {
                reject('Cai no erro');
                return;
            }
            resolve(mgs.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

// const promises = [
//     //'primeiro valor',
//     esperaAi(1000,rand(1,5)),
//     esperaAi('Promise 1', rand(1,5)),
//     esperaAi('Promise 2', rand(1,5)),
//     esperaAi('Promise 3', rand(1,5)),
    
//     //'Outro valor'
// ];

// // Promise.all(promises)
// //     .then(function (valor) {
// //         console.log(valor);
// //     })
// //     .catch(function (erro) {
// //         console.log(erro);
// //     });

// Promise.race(promises)
//     .then(function (valor) {
//         console.log(valor);
//     })
//     .catch(function (erro) {
//         console.log(erro);
//     });

// function baixaPagina(){
//     const emCache = true;

//     if (emCache){
//         return Promise.resolve('Página em cache');
//     }else{
//         return esperaAi('Baixei a página', 3000);
//     }
// }

// baixaPagina()
// .then(dadosPagina => console.log(dadosPagina))
// .catch(e => console.log(e));

function baixaPagina(){
    const emCache = true;

    if (emCache){
        return Promise.reject('Página em cache');
    }else{
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
.then(dadosPagina => console.log(dadosPagina))
.catch(e => console.log('erro',e));