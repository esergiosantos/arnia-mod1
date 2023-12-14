const io = require("../io/io")

//Faça um programa para escrever de 1 a n, sendo n fornecido pelo usuário

let n = 0;

io.write("Digite um número: ");

n = io.readInt();

for (let i = 1; i <= n; i++) {
  io.write(i + " ");
}