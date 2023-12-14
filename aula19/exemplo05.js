const io = require("../io/io")

// Faça um programa que receba o nome de um páis e se o páis for [Brasil] ou [Portugal] mostrea  mensagem> "Este páis fala português"

io.write("Informar o nome do pais: ");
const pais = io.read();

if (pais === "Brasil") {
  io.write("Este pais fala português!");
} else if (pais === "Portugal") {
  io.write("Este pais fala inglês!");
} else {
  io.write("Pais não reconhecido!");
}
