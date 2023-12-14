const io = require("../io/io")
//Faça um programa para imprimir os múltiplos de 5 menores ou igual ao numero fornecido, peça para o usuario digitar o numero

let n = 0;

io.write("Digite um número: ");
n = io.readInt();

for (let i = 5; i <= n; i += 5) {
    io.write(i);
}