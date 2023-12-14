const io = require("../io/io");

// Faça um programa para receber nome, preço e ano de lançamento de
// 10 carros utilizando de uma classe Carro. Depois inclua na classe um
// método que aumente o preço do carro em R$5.000. Chame o método
// para cada carro e mostre os dados atualizados.

class Carro {
  constructor(nome, preco, ano) {
    this.nome = nome;
    this.preco = preco;
    this.ano = ano;
  }
  aumentarPreco() {
    this.preco += 5000;
  }
  mostrarDados() {
    return `Nome: ${this.nome} | Preço: R$${this.preco.toFixed(2)} | Ano: ${
      this.ano
    }`;
  }
}

const precosAntes = [];
const precosDepois = [];

for (let i = 1; i <= 3; i++) {
  io.write(`Digite o nome do ${i}º carro:`);
  const nome = io.read();
  io.write(`Digite o preço do ${i}º carro:`);
  const preco = io.readFloat();
  precosAntes.push(preco);
  io.write(`Digite o ano do ${i}º carro:`);
  const ano = io.read();

  const carro = new Carro(nome, preco, ano);
  carro.aumentarPreco();
  precosDepois.push(carro.preco);
  io.write(carro.mostrarDados());
}

io.write(`\n R$${precosAntes.join(", R$")}`);
io.write(`Preços depois: R$${precosDepois.join(", R$")}`);
