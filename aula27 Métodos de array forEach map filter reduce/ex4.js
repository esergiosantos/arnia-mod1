const io = require("../io/io");

// Escreva uma função que recebe um array  e multiplica cada número desse array por 3 quando o número for ímpar e por 4 quando o número for par. E depois filtre deste array os números menores que 100

function multiplicaEFiltra(array) {
  return array
    .map((numero) => {
      if (numero % 2 === 1) {
        return numero * 3;
      } else {
        return numero * 4;
      }
    })
    .filter((numero) => numero <= 100);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayMultiplicadoEFiltrado = multiplicaEFiltra(array);

console.log(arrayMultiplicadoEFiltrado);
