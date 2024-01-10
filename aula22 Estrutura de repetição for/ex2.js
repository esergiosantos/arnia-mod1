const io = require("../io/io")

//Faça um programa para escrever seu nome n vezes, sendo nome fornecido pelo usuário

io.write("Digite seu nome: ");
const nome = io.read();

io.write("Digite a quantidade de vezes que deseja escrever seu nome: ");
const n = io.readInt();

for (let i = 0; i < n; i++) {
  io.write(nome);
}