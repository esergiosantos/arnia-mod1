const io = require("../IO/io");

function calculaRaizes(a, b, c) {
  // Calcula o discriminante
  const delta = b ** 2 - 4 * a * c;

  // Verifica se o discriminante é positivo
  if (delta > 0) {
    // A equação tem duas raízes reais
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return [x1, x2];
  } else if (delta === 0) {
    // A equação tem uma única raiz real
    const x = -b / (2 * a);
    return [x];
  } else {
    // A equação não tem raízes reais
    return [];
  }
}

function main() {
  // Solicita os valores dos coeficientes
  const a = parseFloat(prompt("Digite o coeficiente a: "));
  const b = parseFloat(prompt("Digite o coeficiente b: "));
  const c = parseFloat(prompt("Digite o coeficiente c: "));

  // Calcula as raízes da equação
  const raizes = calculaRaizes(a, b, c);

  // Imprime as raízes da equação
  if (raizes.length > 0) {
    // A equação tem raízes reais
    const s = raizes.join(", ");
    console.log(`As raízes da equação são: ${s}`);
  } else {
    // A equação não tem raízes reais
    console.log("A equação não possui raízes reais.");
  }
}

main();