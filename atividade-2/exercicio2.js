const entrada = require('readline-sync');

 console.log("=== Monitoramento de temperatura ===")

 const temp = entrada.questionFloat("Digite a Temperatura: ");

 let Situação;

 if (temp <= 60) {
    Situação = "NORMAL";
} else if ( temp >= 61 && temp <= 80){
    Situação = "ATENCAO";
} else if (temp >= 81 ){
    Situação = "CRITICO";
};

console.log(`Temperatura: ${temp} °C`);
console.log(`Situação: ${Situação}`);