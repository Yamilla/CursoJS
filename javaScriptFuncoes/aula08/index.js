// funções fábrica (factory functions)

function criaPessoa(nome, sobrenome,altura,peso){
    return {
        nome,
        sobrenome,
        //Getter
       get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        //setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
           
        },
        fala: function(assunto){
            return `${this.nome} está ${assunto}.`;
        },

        altura,
        peso,
        //getter 
       get imc(){
            const indice = this.peso / (this.altura**2);
            return indice.toFixed(2);
        }

    };
}

const p1 = criaPessoa('Luiz', 'Otávio',1.8,80);
console.log(p1.fala('triste'));
console.log(p1.imc);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nome);
console.log(p1.sobrenome);