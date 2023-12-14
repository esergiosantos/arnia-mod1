const io = require("../io/io");

//Escreva uma função chamada filtrarPalavras que recebe um array de palavras e uma função de callback. A função filtrarPalavras deve aplicar a função de callback a cada palavra do array e retornar um novo array contendo apenas as palavras que satisfazem a condição definida pela função de callback.

const filtrarPalavras = (palavras, callback) => {
  return palavras.filter((palavra) => {
    return callback(palavra);
  });
};

console.log(
    filtrarPalavras(["casa", "carro", "bicicleta", "abacaxi", "livro"], (palavra) => {
        return palavra.length > 5;
    })

);