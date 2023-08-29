const precosLivros = require("./listaLivros");
const livros = require("./listaLivros");

function menorValor(arrProdutos, posInit) {
  let maisBarato = posInit;

  for (let atual = posInit; atual < arrProdutos.length; atual++) {
    if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
      maisBarato = atual;
    }
  }

  return maisBarato;
}

console.log(
  `O livro mais barato custa R$ ${
    livros[menorValor(livros, 0)].preco
  },00 e o título é ${livros[menorValor(livros, 0)].titulo}.`
);

function maiorValor(arrProdutos, posInit) {
  let maisCaro = posInit;
  for (let atual = posInit; atual < arrProdutos.length; atual++) {
    if (arrProdutos[atual].preco > arrProdutos[maisCaro].preco) {
      maisCaro = atual;
    }
  }

  return maisCaro;
}

console.log(
  `O livro mais caro custa R$ ${livros[maiorValor(livros, 0)].preco},00 e o título é ${livros[maiorValor(livros, 0)].titulo}.`
);

module.exports = menorValor;