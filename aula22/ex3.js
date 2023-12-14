const io = require("../io/io")

//Faça um programa para pedir 10 nomes de pessoas ao usuário e acusar quantas se chamam “Maria”

for (let i = 0; i < 10; i++) {
  io.write("Digite seu nome: ");
  let nome = io.read();

  if (nome === "Maria") {
    io.write("Você é Maria!");
  }
}
