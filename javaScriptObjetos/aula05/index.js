// Prototypes 

function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
   // this.nomeCompleto = () => 'teste' + this.nome + ' ' + this.sobrenome;
}
Pessoa.prototype.nomeCompleto = function(){
     return this.nome + ' ' + this.sobrenome;
};

const pessoa1 = new Pessoa('luiz', 'O');
const data = new Date();

console.dir(pessoa1.nomeCompleto());
console.dir(data);