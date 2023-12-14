const io = require("../io/io");

// Escreva uma função chamada dobrarNumeros que recebe um array de números e uma função de callback. A função dobrarNumeros deve aplicar a função de callback a cada número do array e retornar um novo array com os valores resultantes.

const dobrarNumeros = (numeros, callback) => {
  return numeros.map((numero) => {
    return callback(numero);
  });
};

console.log(
    dobrarNumeros([1, 2, 3, 4, 5], (numero) => {
    return numero * 2;
  })
);
