export const nome = 'luiz';
export const sobrenome = 'miranda';
export const idade = 30

export function soma (x,y){
    return x + y;
}
export class Pessoa{
    constructor (nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
//export { nome, sobrenome, idade, soma };