const io = require("../io/io")

/** Faça um programa que receba os dados de 3 alunos e mostre esses dados */

const alunos = [
  // { nome: "João", nota: 9.5 },
  // { nome: "Maria", nota: 8.5 },
  // { nome: "Pedro", nota: 7.5 },
];

for (let i = 0; i < 3; i++) {
io.write("Informe o nome: ")
const nome = io.read()
io.write("Informe a nota: ")
const nota = io.readFloat()

const aluno = {
  nome: nome,
  nota, //nota: nota
}

alunos.push(aluno)

}

console.log(alunos)
// console.log(alunos[1])
// console.log(alunos[1].nome)

alunos.forEach(aluno => {
console.log(`O aluno ${aluno.nome} tirou a nota ${aluno.nota}`)
})

constAlunosAtualizados = alunos.map(aluno => {
  aluno.nota = aluno.nota + 1
  return aluno  
})

console.log(alunos)

const alunosAprovrados = alunos.filter((aluno) => {
return aluno.nota > 7
})

console.log(alunosAprovrados)

const somaNotas = aluinos.reduce ((acumulador, aluno) => {
  return acumulador + aluno.nota
}, 0)
console.log(somaNotas)
