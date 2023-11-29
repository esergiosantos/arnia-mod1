const io = require("../IO/io");
//Faça um programa para imprimir os múltiplos de 5 menores ou igual a n, sendo n fornecido pelos usuários. Não use comando de decisão.

let n = 50;

while (n < 100) {
    if (n % 5 == 0) {
        console.log(n);
    }
    n++;
}