// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// Aula 03 — Condicionais
// Exercício 4 — Verificar Maioridade e Habilitação

console.log("--- Verificação de Maioridade ---");
console.log("");

// Entrada de dados
let idade = parseInt(prompt("Digite a idade da pessoa: "));

// Processamento e Saída com estrutura condicional SE...SENÃO
// A condição verifica se a idade atingiu o critério de 18 anos
if (idade >= 18) {
    console.log("Resultado: Maior de idade.");
    console.log("Status: Pode dirigir.");
} else {
    console.log("Resultado: Menor de idade.");
    console.log("Status: Não pode dirigir.");
}
