const io = require("../io/io");

// Dado o seguinte array de objetos que representa estudantes:

// Escreva uma função chamada aplicarDesconto que recebe esse array de estudantes e uma função de callback. A função aplicarDesconto deve aplicar a função de callback a cada estudante, modificando o objeto para incluir uma propriedade "desconto" com base na idade do estudante.

// A função passada como callback deve se chamar calcularDesconto . O desconto deve ser calculado da seguinte forma: se a idade do estudante for menor que 20, o desconto é de 10%; caso contrário, o desconto é de 5%. A função deve retornar o array de estudantes modificado.

const estudantes = [
{ nome: 'João', idade: 20 },
{ nome: 'Maria', idade: 22 },
{ nome: 'Pedro', idade: 18 },
{ nome: 'Ana', idade: 21 }
]

const aplicarDesconto = (estudantes, callback) => {
    return estudantes.map((estudante) => {
        estudante.desconto = callback(estudante);
        return estudante;
    })
}

const calcularDesconto = (estudante) => {
    if (estudante.idade < 20) {
        return 10;
    } else {
        return 5;
    }
}

console.log(aplicarDesconto(estudantes, calcularDesconto));