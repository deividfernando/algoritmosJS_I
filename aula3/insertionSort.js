const livros = require('../aula1/listaLivros');
const troca = require('./troca');

function insertionSort (lista) {
    
    for (let i = 0; i < lista.length; i++) {
        let analise = i;

        while (analise > 0 && lista[analise].titulo < lista[analise - 1].titulo) {

            troca(lista, analise);

            analise--;

        }
    }
    console.log(lista);
}

insertionSort(livros);