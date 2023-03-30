// Revisando objetos
// Factory functions/ constructot functions / classes
function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}
const p1 = new Pessoa ('luiz', 'miranda');
Object.freeze(p1);
p1.nome = 'teste';
console.log(p1);

// function criaPessoa(nome, sobrenome){
//     return{
//         nome, 
//         sobrenome,
//         nomeCompleto(){
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }
// const p1 = criaPessoa('luiz','otavio');
// console.log(p1.nomeCompleto());

// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Otávio',
//     idade: 26
// };
// pessoa.falaNome = function(){
//     console.log(`${this.nome} está falando seu nome.`);
// };
// pessoa.getDataNascimento = function(){
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
    
// };
// pessoa.falaNome();
// console.log(pessoa.getDataNascimento());

// for(let chave in pessoa){
//     console.log(chave);
// }
// delete pessoa.nome;
// console.log(pessoa);

// const pessoa1 = new Object();
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otávio';

// console.log(pessoa1.nome);

