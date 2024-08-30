export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        return this._data;
    }
    get volume() {
        return this.valor * this.quantidade;
    }
}
