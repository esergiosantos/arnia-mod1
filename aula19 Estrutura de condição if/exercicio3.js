const io = require("../io/io")

// Faça um programa de computador que receba do usuário três tamanhos de segmentos de reta e acuse se estes segmentos formam ou não os lados de um triângulo. Para formar um triângulo o maior segmento deve ser menor que a soma dos outros dois. Suponha que o maior lado sempre será digitado primeiro.

io.write("Informe o primeiro segmento");
const segmento1 = io.readInt();

io.write("Informe o segundo segmento");

const segmento2 = io.readInt();

io.write("Informe o terceiro segmento");

const segmento3 = io.readInt();

if (segmento1 < segmento2 + segmento3 && segmento2 < segmento1 + segmento3 && segmento3 < segmento1 + segmento2) {
    io.write("Os segmentos formam um triângulo");
} else {
    io.write("Os segmentos não formam um triângulo");
}
