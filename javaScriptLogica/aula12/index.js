// Atribuição via desestruturação (Arrays)
// ... rest,  ... spread
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

// const [um, ,tres] = numeros;

// console.log(um,tres);

const numeros = [ [1,2,3], [4,5,6], [7,8,9] ];
// const [,[, ,seis]] = numeros;
// console.log(seis);
// console.log(numeros[1][1]);
const[lista1,lista2,lista3] = numeros;
console.log(lista3[2]);