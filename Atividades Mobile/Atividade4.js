// Programa para comparar a média de pontuação por minuto

let pontosNBA = 200;
let tempoNBA = 4 * 12; // 48 minutos

let golsFutebol = 2.53;
let tempoFutebol = 96; // 90 + 6 minutos de acréscimos

let mediaNBA = pontosNBA / tempoNBA;
let mediaFutebol = golsFutebol / tempoFutebol;

let diferenca = mediaNBA - mediaFutebol;

alert("Média de pontos por minuto na NBA: " + mediaNBA.toFixed(2));
alert("Média de gols por minuto no futebol: " + mediaFutebol.toFixed(2));
alert("A NBA marca, em média, " + diferenca.toFixed(2) + " pontos a mais por minuto.");