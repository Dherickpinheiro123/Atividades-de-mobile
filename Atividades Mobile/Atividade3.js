// Programa para calcular a quantidade de descidas

let jardas = Number(prompt("Digite a quantidade de jardas até o touchdown:"));

if (jardas <= 0) {
    alert("Digite uma quantidade de jardas válida.");
} else {
    let descidas = Math.ceil(jardas / 4);

    alert("Serão necessárias " + descidas + " descidas para fazer o touchdown.");
}