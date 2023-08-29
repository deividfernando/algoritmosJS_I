const livros = require('../aula1/listaLivros');
const menorValor = require('../aula1/livros');
const troca = require('../aula3/troca');

for (let i = 0; i < livros.length; i++) {
    let menor = menorValor(livros, i);

    troca(livros, menor);
}

console.log(livros);

livros.forEach((_, indice) => {
    let menor = menorValor(livros, indice)
   
    let livroAtual = livros[indice];
    let livroMenorPreco = livros[menor];
   
    livros[indice] = livroMenorPreco;
    livros[menor] = livroAtual;
   })
   
   console.log(livros);