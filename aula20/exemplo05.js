const io = require("../IO/io");

io.write("Informe o seu nome:");
const nome = io.read();
let iterador = 0;

while (iterador < 10) {
  io.write(nome);
  iterador++;
}