const entrada = require('readline-sync');

const temp = entrada.questionFloat(`Digite a temperatura: `)


if (temp <= 60){
    console.log(`temperatura de ${temp} C esta NORMAL` );
} else if ( temp <= 80){
    console.log(`A temperatura de ${temp} C esta num nivel de ATENÇÂO`);
} else {
    console.log(`A temperatura ${temp} C esta num nivel CRITICO`);
};

