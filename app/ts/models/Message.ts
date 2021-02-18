class Message {

    private _text: string;

    constructor(text: string = '') {
        this._text = text;
    }

    get(): string {
        return this._text;
    }

    set(text: string) {
        this._text = text;
    }
}