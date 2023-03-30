// métodos úteis para objetos 

const produto = {nome: 'Produto', preco: 1.8};
// Object.freeze(produto);
// produto.nome = 'teste';
//const outraCoisa  = Object.assign({}, produto, {material: 'porcelana'});
// console.log(Object.keys(produto));
Object.defineProperty(produto,'nome',{
    value: 'qualquer coisa',
    writable: false,
    configurable: false
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(Object.values(produto));
console.log(Object.entries(produto));