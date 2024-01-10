const io = require("../IO/io");

// Faça um programa que solicite ao usuario um numero entre 1 e 100. Se ele informar um numero dentro das condicções retorne "Numero Valido" se nao, retorne "numero Invalido"

io.write("Informe um número: ");
const numero = io.read();

if (numero >= 1 && numero <= 100) {
  io.write("Numero Valido!");
} else {
  io.write("Numero Invalido!");
}
