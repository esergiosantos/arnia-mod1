const io = require("../IO/io");

//Faça um programa de computador que receba do usuário dois números e diga qual é o maior

io.write("Informe o primeiro numero");
const numero1 = io.readInt();

io.write("Informe o segundo numero");

const numero2 = io.readInt();

if (numero1 > numero2) {
  io.write("O primeiro numero é maior");
} else {
  io.write("O segundo numero é maior");
}