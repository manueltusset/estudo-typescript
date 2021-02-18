class MessageView {

    private _element: HTMLElement;

    constructor(seletor: string) {
        this._element = <HTMLElement>document.querySelector(seletor);
    }

    private _template(message: Message): string {
        return `<p class="alert alert-info">${message.get()}</p>`;
    }

    show(message: Message) {
        this._element.innerHTML = this._template(message);
    }
}