import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
    private inputData: HTMLInputElement
    private inputQuantidade : HTMLInputElement
    private inputValor: HTMLInputElement
    private negociacoes:Negociacoes = new Negociacoes()

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade')
        this.inputValor = document.querySelector('#valor')
    }

    submit(): void {
        const negociacao:Negociacao = this.criaNegociacao()
        this.negociacoes.add(negociacao)
        console.log(this.negociacoes.lista())
        this.afterSubmit()
    }
    afterSubmit():void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus()
    }

    criaNegociacao(): Negociacao {
        const regEx = /-/g;
        const date:Date = new Date(this.inputData.value.replace(regEx,','))
        const quantidade:number = parseInt(this.inputQuantidade.value)
        const valor:number = parseFloat(this.inputValor.value)
        return new Negociacao(date, quantidade, valor)
    }
}