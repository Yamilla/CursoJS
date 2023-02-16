// operador ternário  ? : 
// condiçaõ ? valor para o verdadeiro : valor para falso
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >=  1000 ?  'Usuário vip' : 'Usuário normal';


const corUsuario = 'pink';
const corPadrao = corUsuario || 'PRETA';
console.log(nivelUsuario,corPadrao);




// if (pontuacaoUsuario >= 1000){
//     console.log('Usuario vip');
// }else{
//     console.log('usuario normal');
// }

