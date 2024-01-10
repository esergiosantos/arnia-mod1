const io = require("../io/io")

//Programa de computador para calcular a soma dos naturais de 1 a 10.

let iterador = 1;
let soma = 0;
while (iterador <= 10) { // 1 2 3 4 5 6 7 8 9 ...
  io.write(`O valor do iterado atual é ${iterador}`);
  soma += iterador; //1
  io.write(`O valor de soma atual é ${soma}`);
  iterador++; //iterador = iterador + 1
  io.write(`------------------------------------------`)
}
io.write(soma);