// funções construtoras (construtor functions )
// o nome das funções construtoras devem começar com letra maiuscula

function Pessoa(nome,sobrenome){
    
    // atributos ou métodos públicos
    const id = 123456;

    const metodoInterno = function(){

    };
    // atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': sou um método');
    }
}

const p1 = new Pessoa('Luiz', 'otavio');
const p2 = new Pessoa('Maria', 'Oliveira');

console.log(p1.nome);
p1.metodo();
