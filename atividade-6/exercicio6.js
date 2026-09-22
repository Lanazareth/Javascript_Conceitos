const entrada = require('readline-sync');

console.log("=== Media de Producao ===");

const producao = 5;
let somaProducao = 0;        

for (let i = 1; i <= producao; i++) {
  const qntddProducao = entrada.questionInt(`Digite o valor da producao ${i}  `);
  somaProducao += qntddProducao;
};

const media = somaProducao / producao;

console.log("===RELATORIO DA PRODUCAO===")
console.log(`A soma da producao e: ${somaProducao}`);
console.log(`A media da producao foi de: ${media}`);