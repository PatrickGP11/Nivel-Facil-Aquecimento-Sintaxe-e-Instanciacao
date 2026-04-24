class Carro{
    constructor(velocidade) {
        this.velocidadeDoCarro = velocidade
    }
    acelerar(){
        this.velocidadeDoCarro = this.velocidadeDoCarro+10
        return console.log("A velocidade do carro está em : " + this.velocidadeDoCarro)
    }
}

const carroPatrick = new Carro(0)
carroPatrick.acelerar()