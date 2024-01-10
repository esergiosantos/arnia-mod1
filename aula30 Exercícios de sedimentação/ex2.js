const io = require("../io/io");

// Dado o seguinte array de objetos que representa produtos em um e-commerce:
// Escreva uma função chamada calcularTotal que recebe esse array de produtos e retorna o valor total da compra, somando o preço de cada produto.

let total = 0;

const produtos = [
  { id: 1, nome: "Camiseta", preco: 29.9 },
  { id: 2, nome: "Calça", preco: 59.9 },
  { id: 3, nome: "Tênis", preco: 99.9 },
];

const calcularTotal = (produtos) => {
  return produtos.reduce((acumulador, produto) => {
    return acumulador + produto.preco;
  }, 0);
};

console.log(calcularTotal(produtos));
