class Produto {
    constructor(nome,preco){
        this.nomeProduto = nome
        this.precoProduto = preco
    }
    aplicarDesconto(porcentagem){
        let desconto = (this.precoProduto * porcentagem)/100
        let precoFinal = this.precoProduto - desconto
        console.log("O produto " + this.nomeProduto + "custa" + this.precoProduto + "com o desconto, o total é: " + (this.precoProduto - desconto))
    }
}

const produto1 = new Produto ("Coca-Kolla", 12)
const produto2 = new Produto ("Giní", 45)

produto1.aplicarDesconto(10)
produto2.aplicarDesconto(15)