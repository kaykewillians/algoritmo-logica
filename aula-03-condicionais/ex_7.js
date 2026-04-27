// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// Aula 03 — Condicionais
// Exercício 7 — Verificar Obrigatoriedade do Voto

console.log("--- Sistema Eleitoral ---");
console.log("");

// Entrada de dados
let idade = parseInt(prompt("Informe a idade do cidadão: "));

// Processamento e Saída com condicional encadeada (se...senão encadeado)
// Condição 1: Entre 16 e 17 anos (Opcional)
if (idade >= 16 && idade <= 17) {
    console.log("Status: Voto Opcional.");

// Condição 2: Entre 18 e 70 anos (Obrigatório)
} else if (idade >= 18 && idade <= 70) {
    console.log("Status: Voto Obrigatório.");

// Condição 3: Acima de 70 anos (Opcional)
} else if (idade > 70) {
    console.log("Status: Voto Opcional.");

// Caso a idade seja menor que 16
} else {
    console.log("Status: Não possui idade mínima para votar.");
}
