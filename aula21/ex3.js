const io = require("../IO/io");

//Faça um algoritmo que leia a idade de uma pessoa expressa em anos,
// meses e dias e escreva a idade dessa pessoa expressa apenas em dias.
// Considerar ano com 365 dias e mês com 30 dias.

let anos = 0;
let meses = 0;
let dias = 0;

io.write("Digite a idade em anos: ");

anos = io.readInt();

io.write("Digite a idade em meses: ");

meses = io.readInt();

io.write("Digite a idade em dias: ");

dias = io.readInt();

io.write(anos * 365 + meses * 30 + dias);