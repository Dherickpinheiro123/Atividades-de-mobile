// Programa para descobrir o maior entre dois números

let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));

if (numero1 > numero2) {
    alert("O maior número é: " + numero1);
} else if (numero2 > numero1) {
    alert("O maior número é: " + numero2);
} else {
    alert("Os dois números são iguais.");
}