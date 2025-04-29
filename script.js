let carrinho = [];
let saldo = 200;
let cond_saldo = "";

function adicionarProduto(nome, preco){
    let produto = { nome: nome, preco: preco}
    carrinho.push(produto)
    console.log(`${nome} foi adicionado.`)
}

function calcularTotal(){
    let total = 0;

    for(let i = 0; i < carrinho.length; i++){
        total += carrinho[i].preco
    }

    return total;
}

adicionarProduto("Tênis", 110)
adicionarProduto("Boné", 25)

console.log("\nItens no carrinho:")
carrinho.forEach(produto => console.log(`-${produto.nome}: R${produto.preco}`))

let totalCompra = calcularTotal()
console.log(`\nTotal da compra ; R$${totalCompra}`)

if(totalCompra > 200){
    cond_saldo = "insuficiente"
} else{
    cond_saldo = ""
    saldo -= totalCompra
}

let mensagem = cond_saldo = "insuficiente"? "Compra Aprovada!" : "Compra recusada por saldo insuficiente!"
console.log(`\n${mensagem}`)
console.log(`\nValor final a pagar: R$${totalCompra}`)