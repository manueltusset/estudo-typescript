abstract class View<T> {

    protected _element: HTMLElement;

    constructor(selector: string) {
        this._element = <HTMLElement>document.querySelector(selector);
    }

    abstract template(model: T): string;

    show(model: T) {
        this._element.innerHTML = this.template(model);
    }
}