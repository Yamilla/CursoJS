// métodos de instância e estáticos 

class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    // método de instância
    aumentarVolume(){
        this.volume +=2;
    }
    // método de instância
    diminuirVolume(){
        this.volume -=2;
    }
    // método estático
    static trocarPilha(){
       console.log('Ok, vou trocar a pilha.'); 
    }

}
const controle = new ControleRemoto('LG');
controle.aumentarVolume();
ControleRemoto.trocarPilha();
console.log(controle);