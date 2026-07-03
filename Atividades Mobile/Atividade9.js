// Programa para calcular o reajuste salarial

let salario = Number(prompt("Digite o salário do colaborador:"));

let percentual;
let aumento;
let novoSalario;

if (salario <= 280) {
    percentual = 20;
} else if (salario <= 700) {
    percentual = 15;
} else if (salario <= 1500) {
    percentual = 10;
} else {
    percentual = 5;
}

aumento = salario * (percentual / 100);
novoSalario = salario + aumento;

alert("Salário antes do reajuste: R$ " + salario.toFixed(2));
alert("Percentual de aumento: " + percentual + "%");
alert("Valor do aumento: R$ " + aumento.toFixed(2));
alert("Novo salário: R$ " + novoSalario.toFixed(2));