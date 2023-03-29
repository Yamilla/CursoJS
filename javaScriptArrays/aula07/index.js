// filter  + map + reduce

// Retorne a soma do dobro de todos os pares
// -> filtrar pares 
// -> dobrar os valores 
// -> Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosPares = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((accumulador, valor) => accumulador + valor);
console.log(numerosPares);