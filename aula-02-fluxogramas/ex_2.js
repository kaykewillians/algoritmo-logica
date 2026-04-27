// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// Aula 02 — Fluxogramas, Variáveis e Operadores
// Exercício 2 — Média de 3 notas

console.log("--- Média de 3 Notas ---");
console.log("");

// Entrada de dados
let n1 = parseFloat(prompt("Digite a primeira nota: "));
let n2 = parseFloat(prompt("Digite a segunda nota: "));
let n3 = parseFloat(prompt("Digite a terceira nota: "));

// Processamento
let media = (n1 + n2 + n3) / 3;

// Saída de dados
console.log("");
console.log("A média das notas é: " + media.toFixed(2));
