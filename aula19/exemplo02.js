const io = require("../IO/io");

// Faça um programa de computador que recebe do usuario um numero inteiro e acuse se este numero é par ou impar

io.write("Digite um numero inteiro: ");
const numero = io.readInt();
const resto = numero % 2; // numero "mod" 2

if (resto === 0) {
  //res resto for igual à 0
  io.write("O numero é par!");
}

if (resto !== 0) {
  //se resto for diferente 0
  io.write("O numero é impar!");
}
