class View {
    constructor(selector) {
        this._element = document.querySelector(selector);
    }
    show(model) {
        this._element.innerHTML = this.template(model);
    }
}
