const io = require("../IO/io");
// Faça um programa que escreva o nome da pessoa que foi fonrecido pelo usuário //

io.write("Digite o seu nome:"); // = console.log('Digite o seu nome:')
const nome = io.read();
io.write("O nome informado foi: " + nome);
io.write(`O nome informado foi: ${nome}`); //interpolação de variação

