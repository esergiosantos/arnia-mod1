// Faça um programa que receba do usuário um array de números.
// Implemente uma função que recebe o array de números e retorna um
// outro array que contém somente os números pares

const io = require("../io/io")

function NumerosPares(array) {

    const numerosPares = array.filter((numero) => numero % 2 === 0);
  
    return numerosPares;
  } 
  
  const array = [1, 2, 3, 4, 5];
  
  io.write(NumerosPares(array));


