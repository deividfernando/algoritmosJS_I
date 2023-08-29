const livros = require('../aula1/listaLivros');
const menorValor = require('../aula1/livros');

for (let i = 0; i < livros.length; i++) {
    let menor = menorValor(livros, i);

    let livroAtual = livros[i];
    console.log('livro atual', livroAtual);

    let livroMenorPreco = livros[menor];
    console.log('livro menor preço', livroMenorPreco);

    livros[i] = livroMenorPreco;
    livros[menor] = livroAtual;
}

console.log(livros);

livros.forEach((_, indice) => {
    let menor = menorValor(livros, indice)
   
    let livroAtual = livros[indice];
    let livroMenorPreco = livros[menor];
   
    livros[indice] = livroMenorPreco
    livros[menor] = livroAtual 
   })
   
   console.log(livros)