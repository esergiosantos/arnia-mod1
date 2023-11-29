const io = require("../IO/io");

let soma = 0;
let contador = 0;

while (contador <= 20) {
  io.write(`Digite o numero: ${contador}`);
  let numero = io.readInt();

  soma += numero;
  contador++;
}

let media = soma / 20;

io.write(`A media aritmetica dos numeros digitados é: ${media}`);
