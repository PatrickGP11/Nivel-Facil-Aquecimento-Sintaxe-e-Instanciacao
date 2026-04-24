class Contador{
    constructor(valor){
        this.valor = valor
    }
    incrementar(){
        let valorIncrementado = this.valor + this.valor
        console.log("\n O valor digitado é: " + this.valor + "\n O valor com o incremento é: " + valorIncrementado)
    }

    decrementar(){
        let valorDecrementado = this.valor - this.valor
        console.log("\n O valor digitado é: " + this.valor + "\n O valor em decremento é: " +  valorDecrementado)
    }
}

const valor01 = new Contador(10)
valor01.incrementar()
valor01.decrementar()