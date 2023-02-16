// AVALIAÇÃO DE CURTO-CURCUITO
// && false && true false 'o valor mesmo'
// || false || false VAI RETORNAR O VALOR VEDADEIRO
/** FALSY
 * false
 * 0
 * ' ' " " ` `
 * null / undefined
 * NaN
 */

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a|| b || c|| d || e);