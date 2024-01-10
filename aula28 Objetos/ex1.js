const io = require("../io/io");
// Faça um programa para receber dados de 2 pessoas (nome, idade e documento) criando um objeto para cada pessoa. Depois mostrar as que são maiores de idade (use o método de array .filter() para filtrar).

const pessoas = [];

for (let i = 0; i < 2; i++) {
  io.write("Informe o nome: ");
  const nome = io.read();
  io.write("Informe a idade: ");
  const idade = io.readInt();
  io.write("Informe o documento: ");
  const documento = io.readInt();

  const pessoa = {
    nome,
    idade,
    documento,
  };

  pessoas.push(pessoa);
}

console.log(pessoas);

const maioresDeIdade = pessoas.filter((pessoa) => {
  return pessoa.idade > 17;
});

console.log(maioresDeIdade);
