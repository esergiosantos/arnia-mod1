// Faça um programa para receber 10 números do usuário e acusar qual deles é o maior número.
const io = require("../io/io");

let maior = -Infinity;

for (let i = 1; i <= 10; i++) {
  io.write(`Digite o ${i}º número: `);
  let numero = io.readInt();

  if (numero > maior) {
    maior = numero;
  }
}

io.write(`O maior número digitado foi: ${maior}`);