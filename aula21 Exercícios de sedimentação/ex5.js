const io = require("../io/io")

// Escreva um algoritmo para ler o salário mensal atual de um funcionário e
// o percentual de reajuste. Calcular e escrever o valor do novo salário.

let salario = 0;
let reajuste = 0;

io.write("Digite o salário atual: ");

salario = io.readInt();

io.write("Digite o percentual de reajuste: ");

reajuste = io.readInt();

io.write("O salário apos o reajuste ficou :" + (salario + (salario * reajuste / 100)));