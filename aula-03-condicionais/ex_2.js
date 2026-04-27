// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// Aula 03 — Condicionais
// Exercício 2 — Volume de um Paralelepípedo

console.log("--- Cálculo de Volume ---");
console.log("");

// Entrada de dados
let base    = parseFloat(prompt("Digite o valor da base: "));
let altura  = parseFloat(prompt("Digite o valor da altura: "));
let largura = parseFloat(prompt("Digite o valor da largura: "));

// Processamento
// Fórmula: Volume = Base × Altura × Largura
let volume = base * altura * largura;

// Saída de dados
console.log("");
console.log("O volume do paralelepípedo é: " + volume.toFixed(2));
