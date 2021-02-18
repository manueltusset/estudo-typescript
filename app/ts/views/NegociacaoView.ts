class NegociacaoView extends View<Negociacoes> {

    template(negociacaoList: Negociacoes): string {
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
}