const io = require("../IO/io");

//Faça um programa de computador para calcular o quanto gastou um fumante com seu vício. O usuário deverá informar o número de anos que fuma, o número de cigarros por dia e o preço do maço de cigarro. Considere o maço com 20 unidades (considere o ano com 365 dias)

let anos = 0;
let cigarros = 0;
let preco = 0;

io.write("Quantos anos você fuma? ");

anos = io.readInt();

io.write("Quantos cigarros você gasta por dia? ");

cigarros = io.readInt();

io.write("Qual o preço do maço de cigarro? ");

preco = io.readFloat();

io.write("Você gastou " + ((anos * 365 * cigarros) / 20) + " reais");

    