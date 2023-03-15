// As várias maneiras de declarar funções em javaScript

// Declarção de função (function hoisting)
function falaOi(){
    console.log('oi');
}
falaOi();

// first-class object (objetos de primeira classe)
// function expression
const souUmDado = function(){
    console.log('Sou um dado');
};
souUmDado();

function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo:')
    funcao();
}
executaFuncao(souUmDado);

// Arrow function 
const funcaoArrow = () =>{
    console.log('sou uma arrow function')
};

funcaoArrow(); 

// dentro de um objeto

const obj = {
    falar(){
        console.log('Estou falando..')
    }
};
obj.falar();