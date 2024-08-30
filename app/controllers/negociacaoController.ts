import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    private inputData: HTMLInputElement
    private inputQuantidade : HTMLInputElement
    private inputValor: HTMLInputElement

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade')
        this.inputValor = document.querySelector('#valor')
    }

    submit(): void {
        console.log(this.conversao())
        this.afterSubmit()
    }
    afterSubmit():void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus()
    }

    conversao(): Negociacao {
        const regEx = /-/g;
        const date:Date = new Date(this.inputData.value.replace(regEx,','))
        const quantidade:number = parseInt(this.inputQuantidade.value)
        const valor:number = parseFloat(this.inputValor.value)
        return new Negociacao(date, quantidade, valor)
    }
}