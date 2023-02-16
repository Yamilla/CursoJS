// OBJETOS (BÁSICO)

const pessoa1 = {
    nome: 'luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){
        console.log(`A minha idade atual é ${this.idade}.`)
    },
    incrementaIdade(){
      this.idade++;
    }
};
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.incrementaIdade();
pessoa1.fala();

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);

// function criaPessoa (nome, sobrenome, idade){
//     return {nome, sobrenome, idade}
// }
// const pessoa1 = criaPessoa('luiz', 'otavio', 25);
// console.log(pessoa1);