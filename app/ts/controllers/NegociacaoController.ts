class NegociacaoController {

    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes: Negociacoes = new Negociacoes();
    private _negociacoesView: Views.NegociacaoView = new Views.NegociacaoView('#negociacaoView');
    private _message: Message = new Message();
    private _messageView: Views.MessageView = new Views.MessageView('#messageView');

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = <HTMLInputElement>$('#data');
        this._inputQuantidade = <HTMLInputElement>$('#quantidade');
        this._inputValor = <HTMLInputElement>$('#valor');
        this._updateList();
    } 

    private showMessage(text: string) {
        this._message.set(text);
        this._messageView.show(this._message);
    }

    private _updateList() {
        this._negociacoesView.show(this._negociacoes);
    }

    private _criaNegociacao(): Negociacao {
        return new Negociacao(
            DateHelper.textToDate(this._inputData.value),
            parseFloat(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
    }

    adiciona(event: Event) {
        event.preventDefault();

        this._negociacoes.add(this._criaNegociacao());

        console.log(this._negociacoes.list());
        this._updateList();
        this.showMessage('Negociacao criada com sucesso!');
    }
}