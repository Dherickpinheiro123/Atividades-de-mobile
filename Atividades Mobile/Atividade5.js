// Programa para gerar a tabuada de um número

let numero = Number(prompt("Digite o número da tabuada:"));
let limite = Number(prompt("Digite até qual número deseja ver a tabuada:"));

document.write("<h3>Tabuada do " + numero + "</h3>");

for (let i = 1; i <= limite; i++) {
    document.write(numero + " x " + i + " = " + (numero * i) + "<br>");
}