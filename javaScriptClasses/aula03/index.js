// herança com classes

class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false
    }
    ligar(){
        if (this.ligado){
            console.log(`${this.nome} já ligado`);
            return;
        }
        this.ligado = true;
    }
    desligar(){
        if (!this.ligado){
            console.log(`${this.nome} já desligado`);
            return;
        }
        this.ligado = false;

    }
}
class Smartphone extends DispositivoEletronico{
    constructor(nome,cor,modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo
    }
}
class Tablet extends DispositivoEletronico{
    constructor(nome,temWifi){
        super(nome);
        this.temWifi = temWifi;
    }
    ligar(){
        console.log('Olha, você alterou o método ligar');
    }
}
const s1 = new Smartphone ('Samsung', 'Preto', 'Galaxy S10');
s1.ligar(); 
console.log(s1);
const t1 = new Tablet('Ipad', true);
t1.ligar();
t1.ligar();
console.log(t1);
