// getters e setters 
const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }
    set velocidade(valor){
        console.log('SETTER');
        if(typeof valor !== 'number') return;
        if (valor >=100 || valor <= 0) return;
        this[_velocidade] = valor;
    }
    get velocidade(){
        console.log('GETTER');
        return this[_velocidade];
    }
    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }
    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}
const c1 = new Carro('Fusca');

// for (let i = 0; i <= 200; i++){
//     c1.acelerar();
// }
c1.velocidade = 99;
console.log(c1.velocidade);

console.log('---------------------------------------------');
console.log('Outro exemplo');

class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get nomeCompleto(){
        return this.nome + ' ' + this.sobrenome;
    }
    set nomeCompleto(valor){
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}
const p1 = new Pessoa ('Luiz', 'Miranda');
p1.nomeCompleto = 'Luiz miranda';
console.log(p1.nome);
console.log(p1.sobrenome);