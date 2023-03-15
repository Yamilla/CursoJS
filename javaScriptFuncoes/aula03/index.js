// Retorno na função

// function soma(a,b){
//     return a + b;
// }
// console.log(soma(1,2)) ;

// function criaPessoa(nome,sobrenome){
//     return {nome, sobrenome};
// }
// const pessoa = criaPessoa('Luiz','Otavio');
// console.log(pessoa);

function criaMultplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    };
}
const duplica = criaMultplicador(2);
const triplica = criaMultplicador(3);
const quadriplica = criaMultplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));