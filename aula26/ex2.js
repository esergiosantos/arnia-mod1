// Faça um programa que receba do usuário um array de números. Faça uma função que recebe o array de números e retorna a soma desses números. A soma deve ser mostrada em tela ao usuário.

const io = require("../io/io")

function soma(array) {

    const soma = array.reduce((acumulador, numero) => acumulador + numero, 0);
  
    return soma;
  }
  
  const array = [1, 2, 3, 4, 5];
  
  io.write(soma(array));
