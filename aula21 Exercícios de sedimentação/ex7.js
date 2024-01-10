const io = require("../io/io")

// Faça um programa de computador que receba do usuário um ano e
// acuse se este ano é ou não bissexto.

let ano = 0;

io.write("Digite um ano: ");

ano = io.readInt();

if (ano % 4 === 0 && ano % 100!== 0 || ano % 400 === 0) {
    io.write("O ano é bissexto");
} else {
    io.write("O ano não é bissexto");
}