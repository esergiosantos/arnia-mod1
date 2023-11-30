const io = require("../IO/io");

//Faça um programa de computador que receba do usuário três tamanhos de segmentos de reta em ordem aleatória e acuse se estes segmentos formam ou não os lados de um triângulo. Para isso, um lado deve ser sempre menor que a soma dos outros dois lados.

let lado1 = 0;
let lado2 = 0;
let lado3 = 0;

io.write("Digite o lado 1: ");

lado1 = io.readInt();

io.write("Digite o lado 2: ");

lado2 = io.readInt();

io.write("Digite o lado 3: ");

lado3 = io.readInt();

if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
    io.write("Os segmentos formam um triângulo!");
} else {
    io.write("Os segmentos não formam um triângulo!");
}