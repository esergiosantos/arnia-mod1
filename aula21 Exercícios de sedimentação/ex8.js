const io = require("../io/io")

// Escreva um algoritmo para ler uma temperatura em graus Fahrenheit,
// calcular e escrever o valor correspondente em graus Celsius (baseado na
// fórmula abaixo):

let fahrenheit = 0;

io.write("Digite a temperatura em graus Fahrenheit: ");

fahrenheit = io.readInt();

let celsius = (fahrenheit - 32) * 5 / 9;

io.write("A temperatura em graus Celsius é: " + celsius);