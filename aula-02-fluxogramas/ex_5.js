// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// Aula 02 — Fluxogramas, Variáveis e Operadores
// Exercício 5 — Conversão Celsius para Fahrenheit

console.log("--- Conversor de Temperatura ---");
console.log("");

// Entrada de dados
let celsius = parseFloat(prompt("Digite a temperatura em graus Celsius: "));

// Processamento
// Fórmula: Fahrenheit = (Celsius × 9 / 5) + 32
let fahrenheit = (celsius * 9 / 5) + 32;

// Saída de dados
console.log("");
console.log("A temperatura em Fahrenheit é: " + fahrenheit.toFixed(2));
