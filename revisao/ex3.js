const entrada = require('readline-sync');

const nomes = [];

for (let i = 0; i < 5; i++) {
    const nome = entrada.question(`Digite o nome ${i + 1}: `);
    nomes.push(nome);
}

for (let i = 0; i < nomes.length; i++) {
    console.log(`${i + 1} - ${nomes[i]}`);
} 