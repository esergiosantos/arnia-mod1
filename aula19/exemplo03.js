const io = require("../io/io")

io.write("Digite um numero maior que 10: ");

const numero = io.readInt();

if (numero > 10) {
  io.write("Número recebido com sucesso");
} else {
  io.write("O Número informa é inválido!");
}
