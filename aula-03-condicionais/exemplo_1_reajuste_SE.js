// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// Aula 03 — Condicionais
// Exemplo do Professor 1 — Reajuste Salarial (SE simples)

console.log("--- Reajuste Salarial ---");
console.log("");

// Entrada de dados
let salarioAtual = parseFloat(prompt("Digite o seu salário atual (R$): "));

// Processamento com SE simples
// Salário até R$ 2.000 recebe 15% de aumento, acima recebe 10%
let aumento;

if (salarioAtual <= 2000) {
    aumento = salarioAtual * 0.15;
} else {
    aumento = salarioAtual * 0.10;
}

// Calculando novo salário com reajuste
let novoSalario = salarioAtual + aumento;

// Saída de dados
console.log("");
console.log("Valor do aumento (R$): " + aumento.toFixed(2));
console.log("Seu salário anterior (R$): " + salarioAtual.toFixed(2));
console.log("Novo salário reajustado (R$): " + novoSalario.toFixed(2));
