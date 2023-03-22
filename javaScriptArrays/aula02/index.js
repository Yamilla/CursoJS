// Método splice
// nomes.splice(índice,delete, elem1,elem2)
const nomes = ['Maria', 'joão', 'Eduardo', 'Gabriel','Júlia'];
const removidos = nomes.splice(3,0, 'luiz','Otavio');
console.log('Array original:', nomes, 'Array dos removidos:', removidos );