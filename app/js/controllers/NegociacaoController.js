class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }
    adiciona(event) {
        event.preventDefault();
        let negociacao = this._criaNegociacao();
        console.log(negociacao);
    }
    _criaNegociacao() {
        return new Negociacao(DateHelper.textToDate(this._inputData.value), parseFloat(this._inputQuantidade.value), parseFloat(this._inputValor.value));
    }
}
