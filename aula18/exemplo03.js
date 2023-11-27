const io = require("../IO/io");

// Faça um programa que escreva o dobro de um número que foi fonrcido pelo usuario

//Mostrar uma mensagem para o usuário
io.write("Digite o número para multiplica-lo por 2:");

//Receber o número do usuario

const numero = io.readInt();

//Feedback para o usuario
io.write(`O número informado foi: ${numero}`);

//Dobrar o número digitado
const dobro = numero * 2;
//Mostrar o resultado do cálculo (numero dobrado)

io.write(`O dobro de ${numero} é: ${dobro}`);
