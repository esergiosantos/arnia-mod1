const io = require("../io/io")

// Fatorial de um número natural é a multiplicação dos naturais menores ou
// igual a ele. 5! = 5x4x3x2x1. Faça um programa que receba do usuário um
// número n calcule seu fatorial (use while)

let numero = 0;

io.write("Digite um número: ");

numero = io.readInt();

let fat = 1;

while (numero > 0) {
    fat = fat * numero;
    numero--;
}

io.write("O fatorial é: " + fat);

