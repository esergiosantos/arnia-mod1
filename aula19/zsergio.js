const io = require("../IO/io");

io.write("Informe o termo 1:");
const a = io.readInt();

io.write("Informe o termo 2:");
const b = io.readInt();

io.write("Informe o termo 3:");
const c = io.readInt();

const delta = b * b - 4 * a * c;

if (delta < 0) {
  io.write("Não existem raizes reais para equação");
} else if (delta > 0) {
  let raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
  let raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
  io.write(`A primeira raiz é ${raiz1} A segunda raiz é ${raiz2}`);
} else if ((delta = 0)) {
  let raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
  io.write(`A  raiz é ${raiz1}`);
}
