class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacaoView('#negociacaoView');
        this._message = new Message();
        this._messageView = new MessageView('#messageView');
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._updateList();
    }
    showMessage(text) {
        this._message.set(text);
        this._messageView.show(this._message);
    }
    _updateList() {
        this._negociacoesView.show(this._negociacoes);
    }
    _criaNegociacao() {
        return new Negociacao(DateHelper.textToDate(this._inputData.value), parseFloat(this._inputQuantidade.value), parseFloat(this._inputValor.value));
    }
    adiciona(event) {
        event.preventDefault();
        this._negociacoes.add(this._criaNegociacao());
        console.log(this._negociacoes.list());
        this._updateList();
        this.showMessage('Negociacao criada com sucesso!');
    }
}
