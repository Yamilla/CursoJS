function meuEscopo (){
    const form = document.querySelector(' .form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    

    
    function recebeEventoForm(evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const salvarPessoas = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        };
        pessoas.push(salvarPessoas);
        console.log(pessoas);
    
        resultado.innerHTML += `<p> NOME: ${salvarPessoas.nome}  SOBRENOME: ${salvarPessoas.sobrenome} PESO: ${salvarPessoas.peso} ALTURA: ${salvarPessoas.altura} </p>`;

        // console.log(nome.value,sobrenome.value,peso.value,altura.value);
        // console.log(pessoas);
        
    }
    form.addEventListener('submit',recebeEventoForm);

}
meuEscopo();