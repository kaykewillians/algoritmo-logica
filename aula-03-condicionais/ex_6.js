// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// Aula 03 — Condicionais
// Exercício 6 — Média Escolar com Situação

console.log("--- Controle de Notas ---");
console.log("");

// Entrada de dados
let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let nota3 = parseFloat(prompt("Digite a terceira nota: "));

// Processamento
let media = (nota1 + nota2 + nota3) / 3;

// Saída e verificação de condição
// Utilizamos o if...else if...else — equivalente ao se encadeado do VisualG
console.log("-----------------------------");
console.log("Média Final: " + media.toFixed(1));

if (media >= 7) {
    console.log("Situação: ALUNO APROVADO");
} else if (media >= 4) {
    console.log("Situação: ALUNO EM RECUPERAÇÃO");
} else {
    console.log("Situação: ALUNO REPROVADO");
}
