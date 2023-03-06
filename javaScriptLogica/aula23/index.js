// tratando e lançando erros com (try,catch,finally) 

// try{
//     // é executada quando não há erros
// }catch(e){
//     // é executada quando há erros
// } finally{
//     // é executado sempre
// }

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date');
    }
    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', { 
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12 : false
    } );
}
try{
const data = new Date('03-07-1996 11:30:53')
const hora = retornaHora(data);
console.log(hora);
}catch(e){
    console.log('Informe uma data correta, por favor.');
}finally{
    console.log('Tenha um bom dia');
}