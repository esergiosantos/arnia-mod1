const io = require("../io/io")
//Faça um programa para imprimir os números pares menores que 100. Não use comando de decisão

let n = 0;

while (n < 100) {
    if (n % 2 == 0) {
        console.log(n);
    }
    n++;
}
