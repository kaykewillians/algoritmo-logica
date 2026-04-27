// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// Aula 03 — Condicionais
// Exercício 3 — Comissão de Vendedor

console.log("--- Cálculo de Comissão ---");
console.log("");

// Entrada de dados
let valorProduto = parseFloat(prompt("Digite o valor do produto: R$ "));

// Processamento com estrutura condicional SE...SENÃO
// No JavaScript utilizamos if...else, equivalente ao se...senão do VisualG
let comissao;

if (valorProduto <= 5000) {
    comissao = valorProduto * 0.05;   // 5% de comissão
} else {
    comissao = valorProduto * 0.10;   // 10% de comissão
}

// Saída de dados
console.log("-----------------------------");
console.log("Valor do Produto: R$ " + valorProduto.toFixed(2));
console.log("Comissão Calculada: R$ " + comissao.toFixed(2));
