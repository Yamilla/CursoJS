// for of

const nomes = ['luiz', 'otávio', 'maria'];

for (let valor of nomes){
 console.log(valor)
}

console.log('###');

nomes.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
}); 

const pessoa = {
    nome:'luiz',
    sobrenome: 'otavio'
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}


