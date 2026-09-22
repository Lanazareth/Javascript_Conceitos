const entrada = require('readline-sync');

const materiais = [];
 
for (let i = 0 ; i < 4; i++) {
  const nome = entrada.question(`Digite o nome do material ${i+1}: `);
  const quantidade = entrada.questionInt(`Digite a quantidade de ${nome}: `);
  const estoqueMinimo = entrada.questionInt(`Digite o estoque mínimo de ${nome}: `);

    materiais.push({ nome, quantidade, estoqueMinimo });
};
console.log("=== RELATORIO DE ESTOQUE ===");

let situacao;
for (let i = 0; i < materiais.length; i++) {
  const material = materiais[i]; 
  if (material.quantidade < material.estoqueMinimo) {
    situacao = "ESTOQUE BAIXO";
  } else {
    situacao = "ESTOQUE OK";
  }
  console.log(`material: ${material.nome}`);
  console.log(`quantidade: ${material.quantidade}`);
  console.log(`estoque mínimo: ${material.estoqueMinimo}`);
  console.log(`situacao: ${situacao}`);
  console.log("-".repeat(20));
}
