const io = require("../IO/io");
//Faça um programa que receba do usuário 20 números e imprima a média aritmética desses números

let soma = 0;
let contador = 1;

while (contador <= 5) {
  io.write(`Digite o numero: ${contador}`);
  let numero = io.readInt();

  soma += numero;
  contador++;
}

let media = soma / 5;

io.write(`A media aritmetica dos numeros digitados é: ${media}`);
