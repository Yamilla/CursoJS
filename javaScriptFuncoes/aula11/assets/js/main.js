function Calculadora() {

    this.display = document.querySelector('.display');

    this.inicia = function () {
        this.cliqueBotoes();
        this.pressionaEnter();
    }

    this.realizaConta = function () {
        let conta = this.display.value;
        try {
            conta = eval(conta);
            if (!conta){
                alert('Conta inválida');
                return;
            }
            this.display.value = String(conta);
        } catch (error) {
            alert('Conta inválida');
            return;
        }
    }

    this.clearDisplay = function () {
        this.display.value = ' ';
    }

    this.apagaUm = function () {
        this.display.value = this.display.value.slice(0,-1);
    }

   
    this.pressionaEnter = function (){
        this.display.addEventListener('keyup',(e) => {
            if (e.keyCode === 13){
                this.realizaConta();
            }
        }); 
    }

    this.cliqueBotoes = function () {
        document.addEventListener('click', (e) => {
            const elemento = e.target;
            if (elemento.classList.contains('btn-num')) {
                this.btnParaDisplay(elemento.innerText);
            }
            if (elemento.classList.contains('btn-clear')) {
                this.clearDisplay();
            }
            if (elemento.classList.contains('btn-del')) {
                this.apagaUm();
            }
            if (elemento.classList.contains('btn-eq')){
                this.realizaConta();
            }
            this.display.focus();
        });
    }

    this.btnParaDisplay = function (valor) {
        this.display.value += valor;
    }


}

const calculadora = new Calculadora();
calculadora.inicia();