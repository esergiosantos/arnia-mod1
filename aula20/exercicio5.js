const io = require("../io/io")
//Faça um programa de computador para escrever o numero de 1 a 10 e na frente se é impar ou par

let iterador = 1;
while (iterador <= 10) {
  io.write(`O valor do iterador atual é ${iterador}`);
  if (iterador % 2 == 0) {
    io.write(`É par`);
  } else {
    io.write(`É impar`);
  }
  io.write(`------------------------------------------`)
  iterador++;
}