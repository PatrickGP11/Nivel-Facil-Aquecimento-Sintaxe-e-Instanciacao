// 9. Filme

class Filme {

    constructor(titulo, anoLancamento) {

        this.titulo = titulo;

        this.anoLancamento = anoLancamento;

    }

    ehAntigo() {

        return (new Date().getFullYear() - this.anoLancamento) > 10;

    }

}