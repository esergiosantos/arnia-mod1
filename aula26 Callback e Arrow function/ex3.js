// Faça um programa que receba do usuário um array de números. Faça
// uma função que recebe o array de números e retorna a soma desses
// números. A média deve ser mostrada ao usuário.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const soma = numeros.reduce((acumulador, numero) => {
  return acumulador + numero
}, 0)

const media = soma / numeros.length

console.log("A média é " + media)