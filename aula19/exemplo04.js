const io = require("../IO/io");

// Faça um  programa que receba uma idade e retorne para o usuario a faixa etaria

io.write("Informe sua idade: ");
const idade = io.readInt();
//30
if (idade < 12) {
  io.write("Infância");
  //&& => e / || => ou
} else if (idade >= 12 && idade < 18) {
  io.write("Adolescência");
} else if (idade >= 18 && idade < 60) {
  io.write("Fase adulta");
} else {
  io.write("Idoso");
}
