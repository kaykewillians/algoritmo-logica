// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// Aula 02 — Fluxogramas, Variáveis e Operadores
// Exercício 4 — Cálculo do IMC (Índice de Massa Corpórea)

console.log("--- Cálculo do IMC ---");
console.log("");

// Entrada de dados
let peso   = parseFloat(prompt("Digite o peso (em kg): "));
let altura = parseFloat(prompt("Digite a altura (em metros): "));

// Processamento
// Fórmula: IMC = peso ÷ (altura × altura)
let imc = peso / (altura * altura);

// Saída de dados
console.log("");
console.log("O IMC calculado é: " + imc.toFixed(2));
