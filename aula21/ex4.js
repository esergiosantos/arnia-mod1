const io = require("../IO/io");

// Escreva um algoritmo para ler o número total de eleitores de um
// município, o número de votos brancos, nulos e válidos. Calcular e escrever
// o percentual que cada um representa em relação ao total de eleitores.

let eleitores = 0;
let brancos = 0;
let nulos = 0;
let validos = 0;

io.write("Digite o número de eleitores: ");

eleitores = io.readInt();

io.write("Digite o número de votos brancos: ");

brancos = io.readInt();

io.write("Digite o número de votos nulos: ");

nulos = io.readInt();

io.write("Digite o número de votos válidos: ");

validos = io.readInt();

io.write("O Percentual em relação ao total de eleitores é: " + ((eleitores * 100) / (eleitores + brancos + nulos + validos)));
