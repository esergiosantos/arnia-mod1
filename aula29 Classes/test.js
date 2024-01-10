const io = require("../io/io");

// Faça um programa para receber nome, preço e ano de lançamento de
// 3 carros utilizando de uma classe Carro. Depois inclua na classe um
// método que aumente o preço do carro em R$5.000. Chame o método
// para cada carro e mostre os dados atualizados.

// Define a classe Carro
class Carro {

  // Construtor
  constructor(nome, preco, anoLancamento) {
    this.nome = nome;
    this.preco = preco;
    this.anoLancamento = anoLancamento;
  }

  // Método para aumentar o preço do carro
  aumentarPreco() {
    this.preco += 5000;
  }
}

// Cria um array para armazenar os carros
const carros = [];

// Lê os dados dos carros
for (let i = 0; i < 2; i++) {
  console.log('Digite o nome do carro:');
  const nome = io.read();
  console.log('Digite o preço do carro:');
  const preco = io.readFloat();
  console.log('Digite o ano de lançamento do carro:');
  const anoLancamento = io.readInt();

  // Cria uma nova instância da classe Carro
  const carro = new Carro(nome, preco, anoLancamento);

  // Adiciona o carro ao array
  carros.push(carro);
}

// Chama o método aumentarPreco para cada carro
carros.forEach(carro => carro.aumentarPreco());

// Exibe os dados atualizados dos carros
carros.forEach(carro => console.log(carro));