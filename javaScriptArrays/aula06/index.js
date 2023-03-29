// Reduce - Reduzindo o array

// some todos os números 
// retorne um array com os pares (filter)
// retorne um array com o dobro dos valores (map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const soma = numeros.reduce(function (acumulador, valor, indice, array) {
    acumulador += valor
    return acumulador;
}, 0);
console.log(soma);

const pares = numeros.reduce(function (acumulador, valor, indice, array) {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
console.log(pares);

const dobro = numeros.reduce(function (acumulador, valor, indice, array) {
    acumulador.push(valor * 2);
    return acumulador;
}, []);
console.log(dobro);
console.log('-----------------------------------------------');

const paresFilter = numeros.filter(function (valor) {
    return valor % 2 === 0;

});
console.log(paresFilter);
console.log('-----------------------------------------------');

const dobroMap = numeros.map(valor => valor * 2);
console.log(dobroMap);
console.log('-----------------------------------------------');

// Retorne a pessoa mais velha

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 200 },
    { nome: 'Letícia', idade: 10 },
    { nome: 'Rosana', idade: 64},
    { nome: 'Wallace', idade: 63}
];

const maisVelha = pessoas.reduce(function(acumulador,valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);