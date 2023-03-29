// Map - mapeando o array

// dobre os números 

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);
console.log('--------------------------------------------');
// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remove apenas a chave nome do objeto 
// adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47}
];

const nomes = pessoas.map(objeto => objeto.nome);
console.log(nomes);
const idade = pessoas.map(objeto => ({idade: objeto.idade}));
console.log(idade);
const comIds = pessoas.map(function(objeto,indice){
    const newObj = {...objeto};
    newObj.id = indice;
    return newObj;
});
console.log(comIds);
console.log('--------------------------------------------');
console.log(pessoas);