// const nome = 'luiz';
// const sobrenome = 'Miranda';

// const falaNome = function (){
//     console.log(nome,sobrenome);
// }
// //falaNome();

// // module.exports.nome = nome;
// // console.log(module.exports);

// exports.nome = nome;
// exports.falaNome = falaNome;
// //console.log(exports);

class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}
exports.Pessoa = Pessoa;