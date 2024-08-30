import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    submit() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.add(negociacao);
        console.log(this.negociacoes.lista());
        this.afterSubmit();
    }
    afterSubmit() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    criaNegociacao() {
        const regEx = /-/g;
        const date = new Date(this.inputData.value.replace(regEx, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
}
