// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// Aula 02 — Fluxogramas, Variáveis e Operadores
// Exercício 6 — Área de um Terreno Retangular

console.log("--- Área do Terreno ---");
console.log("");

// Entrada de dados
let largura     = parseFloat(prompt("Digite a largura do terreno: "));
let comprimento = parseFloat(prompt("Digite o comprimento do terreno: "));

// Processamento
// Fórmula: Área = largura × comprimento
let area = largura * comprimento;

// Saída de dados
console.log("");
console.log("A área do terreno é: " + area.toFixed(2));
