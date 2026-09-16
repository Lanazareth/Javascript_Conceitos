const entrada = require('readline-sync');

console.log("=== INSPECAO DE PECAS ===");

const peso = entrada.questionFloat("Digite o peso da peca: ");

 if (peso >= 95 && peso <= 105) {
    console.log("PEÇA APROVADA");
 } else {
    console.log("PEÇA REPROVADA");
 };