const entrada = require('readline-sync');

const produto = entrada.question("digite o nome do produto:");
const qntdd = entrada.questionInt("digite a quantidade produzida por horas: ");
const horas = entrada.questionInt("digite a quantidade de horas trabalhadas: ");

const producao = qntdd * horas;

console.log("=== Relatorio de produção");
console.log(`Produto: ${produto}`);
console.log(`Produção por hora: ${qntdd}`);
console.log(`Horas Trabalhadas: ${horas}`);
console.log(`Total de pças produzidas: ${producao}`);

