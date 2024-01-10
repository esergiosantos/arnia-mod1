const io = require("../io/io")

//Faça um programa de computador para calcular as raízes de uma equação do segundo-grau na forma ax^2 + bx + c = 0 sendo o valores de a, b e c fornecidos pelo usuário. Caso a equação não tenha raízes, o usuário deverá ser informado desse fato.

io.write("Informe o valor de a");
const a = io.readInt();

io.write("Informe o valor de b");
const b = io.readInt();

io.write("Informe o valor de c");
const c = io.readInt();

const delta = b * 2 - 4 * a * c;

io.write("Seu delta é: " + delta);

if (delta < 0) {
  io.write("A equação não possui raízes reais");
} else {
  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);
  io.write("As raízes são: " + x1 + " e " + x2);
}
