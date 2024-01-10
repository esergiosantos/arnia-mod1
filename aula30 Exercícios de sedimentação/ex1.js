const io = require("../io/io");

// Escreva uma função chamada somarValores que recebe um array de números e retorna a soma de todos os valores do array utilizando a função reduce.

const somarValores = (array) => {
  return array.reduce((acumulador, valor) => {
    return acumulador + valor;
  });
};

console.log(somarValores([1, 2, 3, 4, 5]));
