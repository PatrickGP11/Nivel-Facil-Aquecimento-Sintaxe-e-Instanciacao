class Pessoa {
    constructor(nome) {
        this.meuNome = nome
    }

    falar() {
        console.log("Olá, meu nome é: " + this.meuNome)
    }
}

const candidato01 = new Pessoa("Patrick")

candidato01.falar() 