function meuEscopo() {
    const form = document.querySelector(' .form');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;
        let imc = peso / (altura * altura);
        if (imc <= 18.5) {
            resultado.innerHTML += `<p> Seu iMC é ${imc.toFixed(1)} (Abaixo do peso)</p>`;
        } else if (imc >= 18.5 && imc <= 24.9) {
            resultado.innerHTML += `<p> Seu iMC é ${imc.toFixed(1)} (Peso normal)</p>`;
        } else if (imc >= 25 && imc <= 29.9) {
            resultado.innerHTML += `<p> Seu iMC é ${imc.toFixed(1)} (Sobrepeso)</p>`;
        } else if (imc >= 30 && imc <= 34.9) {
            resultado.innerHTML += `<p> Seu iMC é ${imc.toFixed(1)} (Obesidade grau 1)</p>`;
        } else if (imc >=  35  && imc <= 39.9) {
            resultado.innerHTML += `<p> Seu iMC é ${imc.toFixed(1)} (Obesidade grau 2)</p>`;
        } else if (imc >= 40) {
            resultado.innerHTML += `<p> Seu iMC é ${imc.toFixed(1)} (Obesidade grau 3)</p>`;
         }
    
    }
    form.addEventListener('submit', recebeEventoForm);


}
meuEscopo();

