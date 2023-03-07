const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criarTarefa(inputTarefa.value);
    }
});

function limpaInput(){
    inputTarefa. value = ' ';
    inputTarefa.focus();
}
function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class','apagar');
    botaoApagar.setAttribute('title','Apagar esta tarefa');
    li.appendChild(botaoApagar);


}
function criarTarefa(textoinput) {
    const li = criaLi();
    li.innerText = textoinput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();

}

btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);

});

document.addEventListener('click',function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
});
function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listasDeTarefas = [];
    for (let tarefa of  liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', ' ').trim();
        listasDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listasDeTarefas);
    localStorage.setItem('tarefas',tarefasJSON);
}

function adicionaTarefas(){
    const tarefas = localStorage.getItem('tarefas');
    const listasDeTarefas = JSON.parse(tarefas);
    for(let tarefa of listasDeTarefas){
        criarTarefa(tarefa);
    }
}
adicionaTarefas();