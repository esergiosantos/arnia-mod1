// Faça um programa que receba do usuário um array de números. Faça
// uma função que recebe o array e retorna outro array com os valores em
// ordem invertida, fala o codigo sem utilizar o reverse.

const io = require("../io/io")

function ordemInversa(array) {

    return array.reverse();
  }
  
  const array = [1, 2, 3, 4, 5];
  
  io.write(ordemInversa(array));



