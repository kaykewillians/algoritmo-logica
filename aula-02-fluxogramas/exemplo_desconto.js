// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// Aula 02 — Fluxogramas, Variáveis e Operadores
// Exemplo do Professor — Cálculo de Desconto

console.log("--- Cálculo de Desconto ---");
console.log("");

// Entrada de dados
let produto      = prompt("Informe o nome do produto: ");
let valorInicial = parseFloat(prompt("Digite o preço inicial (R$): "));
let desconto     = parseFloat(prompt("Quanto de desconto deseja dar (R$): "));

// Processamento
let valorFinal = valorInicial - desconto;

// Saída de dados
console.log("");
console.log("Produto informado: " + produto);
console.log("Preço final com o desconto: R$ " + valorFinal.toFixed(2));
