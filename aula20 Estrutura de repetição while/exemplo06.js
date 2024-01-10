const io = require("../io/io")

//Programa de computador que escreve, em ordem crescente, os naturais menores que 100 

let iterador = 0;
while (iterador <= 100) {
  io.write(iterador);
  iterador++;
}