// usando classe (validando CPF)

class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            writable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    geraNovoCpf() {

        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.criaDigito(cpfParcial);
        const digito2 = ValidaCPF.criaDigito(cpfParcial + digito1);
        this.novoCpf = cpfParcial + digito1 + digito2;
    }
    eSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
    static criaDigito(cpfParcial) {
        let total = 0;
        let reverso = cpfParcial.length + 1;

        for (let stringNumerica of cpfParcial) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }
    valida() {

        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false
        if (this.eSequencia()) return false;
        this.geraNovoCpf();

        return this.novoCpf === this.cpfLimpo;
    }


}
const cpf = new ValidaCPF('070.987.720-03');


if (cpf.valida()) {
    console.log('Cpf valido');
} else {
    console.log('Cpf invalido');
}