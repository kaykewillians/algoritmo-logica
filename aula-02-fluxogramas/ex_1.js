// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// Aula 02 — Fluxogramas, Variáveis e Operadores
// Exercício 1 — Soma de dois números

console.log("--- Soma de Dois Números ---");
console.log("");

// Entrada de dados — equivalente ao leia() do VisualG
let n1 = parseFloat(prompt("Digite o primeiro número: "));
let n2 = parseFloat(prompt("Digite o segundo número: "));

// Processamento
let soma = n1 + n2;

// Saída de dados — equivalente ao escreva() do VisualG
console.log("");
console.log("A soma dos números é: " + soma);
