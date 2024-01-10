const io = require("../io/io")

// Escreva um algoritmo para ler o número total de eleitores de um
// município, o número de votos brancos, nulos e válidos. Calcular e escrever
// o percentual que cada um representa em relação ao total de eleitores.

let eleitores = 0;
let brancos = 0;
let nulos = 0;
let validos = 0;

io.write("Digite o número total de eleitores: ");
eleitores = io.readInt();

io.write("Digite o número de votos brancos: ");
brancos = io.readInt();

io.write("Digite o número de votos nulos: ");
nulos = io.readInt();

validos = eleitores - brancos - nulos;

brancos = brancos / eleitores * 100;
nulos = nulos / eleitores * 100;
validos = validos / eleitores * 100;

io.write("Percentual de votos brancos: " + brancos + "%");
io.write("Percentual de votos nulos: " + nulos + "%");
io.write("Percentual de votos válidos: " + validos + "%");