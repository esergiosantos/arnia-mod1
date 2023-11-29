const io = require("../IO/io");

/* Faça um programa de computador que recebe de usuario um nome de um pais e caso este pais seja "Brasil" o programa deve responder: "Pais recebido com sucesso"! */

io.write("Informar o nome do pais: ");
let pais = io.read();

if (pais === "Brasil") {
  io.write("Pais recebido com sucesso!");
} else {
  io.write("Pais não reconhecido!");
}
