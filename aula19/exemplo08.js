const io = require("../io/io")

// Receba um numero e informe se ele é igual ou diferente de 10

io.write("Informa um numero: ");
const numero = io.readInt();
let resultado = "";

if (numero === 10) {
  //io.write("Onumero é igual a 10");
  resultado = "O numero é igual que 10";
} else {
  resultado = "O numero é menor que 10";
}

io.write(resultado);