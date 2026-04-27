// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// Aula 03 — Condicionais
// Exercício 1 — Soma de Três Números

console.log("--- Calculadora de Soma ---");
console.log("");

// Entrada de dados
let n1 = parseFloat(prompt("Digite o primeiro número: "));
let n2 = parseFloat(prompt("Digite o segundo número: "));
let n3 = parseFloat(prompt("Digite o terceiro número: "));

// Processamento
let soma = n1 + n2 + n3;

// Saída de dados
console.log("");
console.log("A soma dos três números inseridos é: " + soma);
