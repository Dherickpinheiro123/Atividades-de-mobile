// Programa para gerar uma Progressão Aritmética (PA)

let inicio = Number(prompt("Digite o número inicial:"));
let razao = Number(prompt("Digite a razão da PA:"));
let limite = Number(prompt("Digite o limite:"));

// Validação
if (limite <= inicio) {
    alert("Erro! O limite deve ser maior que o número inicial.");
} else {
    let termo = inicio;

    document.write("Progressão Aritmética:<br>");

    while (termo <= limite) {
        document.write(termo + "<br>");
        termo = termo + razao;
    }
}