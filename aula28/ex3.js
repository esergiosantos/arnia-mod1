const io = require("../io/io");

//Faça um programa para receber nome e idade de 2 funcionários (nome, matrícula, cargo e salário). Depois faça um método que aumente o salário de cada um em 10%. Mostre a soma dos salários antes e depois do aumento (use o método de array .reduce() para somar).

let funcionarios = [];

for (let i = 0; i < 2; i++) {
  io.write("Informe o nome: ");
  const nome = io.read();
  io.write("Informe a matrícula: ");
  const matricula = io.readInt();
  io.write("Informe o cargo: ");
  const cargo = io.read();
  io.write("Informe o salário: ");
  const salario = io.readInt();

  const funcionario = {
    nome,
    matricula,
    cargo,
    salario,
  };

  funcionarios.push(funcionario);
}

io.write(funcionarios);

funcionarios.forEach((funcionario) => {
  funcionario.salario = funcionario.salario * 1.1;
});

io.write(funcionarios);


const soma = funcionarios.reduce((aculumador, funcionario) => {
    return aculumador + funcionario.salario
}, 0)

console.log(`Soma: R$ ${soma}`)


