class NegociacaoView {

    private _element: HTMLElement;

    constructor(element: string) {
        this._element = <HTMLElement>document.querySelector(element);
    }

    private _template(negociacaoList: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
                ${negociacaoList
                    .list()
                    .map((negociacao) => {
                        return `
                            <tr>
                                <td>${DateHelper.dateToText(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                                <td>${negociacao.volume}</td>
                            </tr>
                        `
                    }).join('')
                }
            </tbody>
            <tfoot>
                <td colspan="3"></td>
                <td>
                    ${negociacaoList
                        .list()
                        .reduce((total, negociacao) => {
                            return total += negociacao.volume;
                        }, 0.0)
                    }
                </td>
            </tfoot>
        </table>
        `;
    }

    update(negociacaoList: Negociacoes) {
        this._element.innerHTML = this._template(negociacaoList);
    }
}