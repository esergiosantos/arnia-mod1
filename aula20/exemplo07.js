const io = require("../IO/io");

//Programa de computador passe pór todos os números naturais menores que 100 e escreva no terminal os que forem pares

let iterador = 1;
while (iterador <= 100) {
  if (iterador % 2 == 0) {
    io.write(iterador);
  }
  iterador++;
}

