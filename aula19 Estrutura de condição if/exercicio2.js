const io = require("../io/io")

//Faça um programa de computador que receba do usuário 2 números,calcule o produto entre eles e acuse se o produto é maior que 10

io.write("Informe o primeiro numero");
const numero1 = io.readInt();

io.write("Informe o segundo numero");

const numero2 = io.readInt();

const produto = numero1 * numero2;

if (produto > 10) {
  io.write("O produto é maior que 10");
} else {
  io.write("O produto é menor que 10");
}

