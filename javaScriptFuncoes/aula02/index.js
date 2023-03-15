// parametros da função
 
// argumentos que sustenta todos os argumentos envidados
// function funcao (){
//     let total = 0;
//     for(let argumento of arguments){
//         total += argumento;
//     }
//     console.log(total);
// }
// funcao(1,2,3);

// function funcao(a,b,c,d,e,f){
//     console.log(a,b,c,d,e,f);
   
// }
// funcao(1,2,3,4,5,6,7);

// function funcao(a,b){
//     console.log(a + b);
// }
// funcao(1);

// function funcao ({nome,sobrenome,idade}){
//     console.log(nome,sobrenome,idade);
// }
// funcao({nome:'luiz',sobrenome:'otavio',idade: 20});

function conta(operador,acumulador,...numeros){
    for(let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta("*",0,20,30,40,50);