const precosLivros = require('./listaLivros');
const livros = require('./listaLivros');

let maisBarato = 0;

 for (let atual = 0; atual < livros.length; atual++) {
    if (livros[atual].preco < livros[maisBarato].preco) {
        maisBarato = atual;
    }
 }

 console.log(`O livro mais barato custa R$ ${livros[maisBarato].preco},00 e o título é ${livros[maisBarato].titulo}.`);

 let maisCaro = 0;
for (let atual = 0; atual < livros.length; atual++) {
 if (livros[atual].preco > livros[maisCaro].preco) {
   maisCaro = atual;
 }
}

console.log(`O livro mais caro custa R$ ${livros[maisCaro].preco},00 e o título é ${livros[maisCaro].titulo}.`);