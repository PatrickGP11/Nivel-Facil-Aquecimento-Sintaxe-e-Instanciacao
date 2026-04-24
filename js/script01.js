class Livro {
    constructor(titulo, autor) {
        this.tituloLivro = titulo
        this.nomeAutor = autor
    }
}

const livro01 = new Livro("Massis", "Chorro")
const livro02 = new Livro("Patrick", "Perino")

console.log("O nome do livro comprado é: " + livro01.tituloLivro + " | O nome do autor é: " + livro01.nomeAutor)
console.log("O nome do livro comprado é: " + livro02.tituloLivro + " | O nome do autor é: " + livro02.nomeAutor)