class Message {
    constructor(text = '') {
        this._text = text;
    }
    get() {
        return this._text;
    }
    set(text) {
        this._text = text;
    }
}
