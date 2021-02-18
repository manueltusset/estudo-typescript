class NegociacaoController {

    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = <HTMLInputElement>$('#data');
        this._inputQuantidade = <HTMLInputElement>$('#quantidade');
        this._inputValor = <HTMLInputElement>$('#valor');
    }

    adiciona(event: Event) {
        event.preventDefault();

        let negociacao = this._criaNegociacao();
        console.log(negociacao);
    }

    private _criaNegociacao() {
        return new Negociacao(
            DateHelper.textToDate(this._inputData.value),
            parseFloat(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
    }
}