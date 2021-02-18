class Negociacoes {
    constructor() {
        this._negociacaoList = [];
    }
    add(negociacao) {
        this._negociacaoList.push(negociacao);
    }
    list() {
        return [].concat(this._negociacaoList);
    }
}
