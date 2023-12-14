const io = require("../io/io")

// Escreva uma função que transforme cada elemento de um array qualquer em texto. Dica: todas as variáveis javascript possuem uma função .toString()

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arrayTexto = array.map((elemento) => elemento.toString())

io.write(arrayTexto)
