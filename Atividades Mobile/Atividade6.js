// Programa para calcular o fatorial de um número

let numero = Number(prompt("Digite um número:"));

let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial = fatorial * i;
}

alert("O fatorial de " + numero + " é " + fatorial);