const io = require("../io/io");

//Faça um programa para receber os dados de 2 alunos (nome, matrícula e nota) criando um objeto para cada aluno. Depois aumentar em 10% as notas dos alunos com matrícula maior que 1000 e mostrar a lista de alunos atualizada.

const alunos = [];

for (let i = 0; i < 2; i++) {
  io.write("Informe o nome: ");
  const nome = io.read();
  io.write("Informe a matrícula: ");
  const matricula = io.readInt();
  io.write("Informe a nota: ");
  const nota = io.readInt();

  const aluno = {
    nome,
    matricula,
    nota,
  };

  alunos.push(aluno);
}

console.log(alunos);

alunos.forEach((aluno) => {
  if (aluno.matricula > 1000) {
    return aluno.nota = aluno.nota * 1.1;
  }
});

console.log(alunos);
