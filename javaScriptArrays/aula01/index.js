// Revisão do básico em arrays
// valor por referencia
//const nomes = new Array('Eduardo','Maria', 'Joana');
const nomes = ['Eduardo','Maria', 'Joana'];
//nomes [2] = 'João';
//delete nomes[2];
// const novo = [...nomes];
// novo.pop();
// console.log(novo);
//console.log(nomes.length);
// const removido = nomes.pop();
// console.log(nomes,removido);
// const removido2 = nomes.shift();
// console.log(nomes,removido2);
// nomes.push('jõao');
//nomes.unshift('jõao');
const novo = nomes.slice(1,3);
console.log(novo);