const io = require("../io/io")

// Escreva uma função que recebe como parâmetro um array de números. Dado este array, a
// função deverá:
// a. Deixar no array somente os números ímpares (utilize filter)
// b. Somar todos os números restantes (utilize reduce)
// c. Escrever a string "Javascript é muito bom" no console um número x de vezes, sendo x
// a soma dos números restantes do array

function NumerosImpares(array) {

    const numerosImpares = array.filter((numero) => numero % 2 !== 0);
  
    const somaNumerosImpares = numerosImpares.reduce((acumulador, numero) => acumulador + numero, 0);
  
    for (let i = 0; i < somaNumerosImpares; i++) {
      console.log("Javascript é muito bom");
    }
  }

  const array = [1, 2, 3, 4, 5];

  NumerosImpares(array);