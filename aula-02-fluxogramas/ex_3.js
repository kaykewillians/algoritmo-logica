// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// Aula 02 — Fluxogramas, Variáveis e Operadores
// Exercício 3 — Área do Trapézio

console.log("--- Área do Trapézio ---");
console.log("");

// Entrada de dados
let baseMaior = parseFloat(prompt("Digite a base maior do trapézio: "));
let baseMenor = parseFloat(prompt("Digite a base menor do trapézio: "));
let altura    = parseFloat(prompt("Digite a altura do trapézio: "));

// Processamento
// Fórmula: Área = (base maior + base menor) × altura ÷ 2
let area = (baseMaior + baseMenor) * altura / 2;

// Saída de dados
console.log("");
console.log("A área do trapézio é: " + area.toFixed(2));
