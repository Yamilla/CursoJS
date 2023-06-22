import GeraCpf from './modules/geraCpf';
import './assets/css/style.css'


(function(){
    const gera = new GeraCpf();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
})();
