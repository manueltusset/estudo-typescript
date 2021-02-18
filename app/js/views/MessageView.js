class MessageView {
    constructor(seletor) {
        this._element = document.querySelector(seletor);
    }
    _template(message) {
        return `<p class="alert alert-info">${message.get()}</p>`;
    }
    show(message) {
        this._element.innerHTML = this._template(message);
    }
}
