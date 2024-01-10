const io = require("../io/io");


// Faça um programa para receber modelo, marca e valor de 5
// smartphones utilizando de uma classe Celular. Depois inclua na classe
// método que mostre os dados de cada um nesse formato: Modelo:
// [modelo] | Marca: [marca] | Valor: [valor]. Chame o método
// para cada smartphone.

class Celular {
  constructor(modelo, marca, valor) {
    this.modelo = modelo;
    this.marca = marca;
    this.valor = valor;
  }

  mostrarDados() {
    return `Modelo: ${this.modelo} | Marca: ${this.marca} | Valor: ${this.valor}`;
  }
}

for (let i = 1; i <= 2; i++) {
  io.write(`Digite o modelo do ${i}º celular:`);
  const modelo = io.read();
  io.write(`Digite a marca do ${i}º celular:`);
  const marca = io.read();
  io.write(`Digite o valor do ${i}º celular:`);
  const valor = io.readFloat();

  const celular = new Celular(modelo, marca, valor);
  io.write(celular.mostrarDados());
}