const io = require("../IO/io");

let soma = 0;
let contador = 1;

while (contador <= 20) {
  io.write(`Digite um número: ${contador}`);
  let numero = io.readInt();

  soma += numero;
  contador++;
}

let media = soma / 20;

io.write(`A media aritmetica dos numeros digitados é: ${media}`);
