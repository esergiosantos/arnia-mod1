//criando um objeto que representa uma pessoa

const pessoa = {
  nome: "Pedro",
  idade: 25,
  peso: 70,
  altura: 1.80,
};

const pessoa1 = {
    nome: "João da Silva",
    dataNascimento: "05/09/1998",
    profissao: "Médico",
  };
const pessoa2 = {
    nome: "Leticia",
    dataNascimento: "05/09/1995",
    profissao: "Professora",
  };

console.log(pessoa1);
console.log(pessoa2);

//acessando os dados de objeto

console.log(pessoa1.nome);
console.log(pessoa1.dataNascimento);
console.log(pessoa1.profissao);

//incluir nova propriedade no objeto
pessoa2.idade = 35

//alterando o valor de uma propriedade do objeto
pessoa2.nome = "João da Silva Santos"
console.log(pessoa2)

//deletando uma propriedade do objeto
delete pessoa2.dataNascimento
console.log(pessoa2)