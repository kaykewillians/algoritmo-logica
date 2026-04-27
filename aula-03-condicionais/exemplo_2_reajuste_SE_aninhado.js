// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// Aula 03 — Condicionais
// Exemplo do Professor 2 — Reajuste Salarial (SE aninhado / encadeado)

console.log("--- Reajuste Salarial (SE Aninhado) ---");
console.log("");

// Entrada de dados
let salarioAtual = parseFloat(prompt("Digite seu salário atual (R$): "));

// Processamento com SE aninhado — 3 faixas de reajuste
// No JavaScript utilizamos else if para encadear as condições
let aumento;

if (salarioAtual <= 2000) {
    aumento = salarioAtual * 0.15;          // 15% para até R$ 2.000
} else if (salarioAtual <= 5000) {
    aumento = salarioAtual * 0.10;          // 10% para R$ 2.001 até R$ 5.000
} else {
    aumento = salarioAtual * 0.05;          // 5% para acima de R$ 5.000
}

// Calculando salário reajustado
let novoSalario = salarioAtual + aumento;

// Saída de dados
console.log("");
console.log("Valor do aumento (R$): " + aumento.toFixed(2));
console.log("Salário anterior (R$): " + salarioAtual.toFixed(2));
console.log("Salário com reajuste (R$): " + novoSalario.toFixed(2));
