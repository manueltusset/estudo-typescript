class Negociacoes {

    private _negociacaoList: Array<Negociacao> = [];

    add(negociacao: Negociacao) {
        this._negociacaoList.push(negociacao);
    }

    list(): Negociacao[] {
        return [].concat(this._negociacaoList);
    }
}