class Animal {
    constructor(nome, dataNascimento, raca) {
        this.nomeAnimal = nome;
        this.dataNascimentoAnimal = dataNascimento;
        this.racaAnimal = raca;
    }
    exibirDadosAnimal(tipoAnimal){
        return console.log("O nome do " + tipoAnimal + " é : " + this.nomeAnimal + ", sua data de nascimento é: " + this.dataNascimentoAnimal + " e sua raça é: " + this.racaAnimal);
    }
}

const gato = new Animal("Beto","22/06/2006","Persa");
const cachorro = new Animal("Romeu","25/12/2025","Golden");
const passaro = new Animal("Piu","03/06/2023","Calopsita");

gato.exibirDadosAnimal("gato");
cachorro.exibirDadosAnimal("cachorro");
passaro.exibirDadosAnimal("passaro");