// setInterval e setTimeout

function mostraHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    });
}

// setInterval(function (){
//     console.log(mostraHora());
// }, 1000);

const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

setTimeout (function() {
    clearInterval(timer);
}, 10000);

setTimeout (function() {
    console.log('Olá mundo');
}, 5000);