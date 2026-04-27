// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// Aula 02 — Fluxogramas, Variáveis e Operadores
// Exemplo do Professor — Limite de Faltas

console.log("--- Curso e Limite de Faltas ---");
console.log("");

// Entrada de dados
let nomeCurso    = prompt("Informe o nome do curso: ");
let cargaHoraria = parseFloat(prompt("Informe a carga horária total do curso: "));

// Processamento
// O limite de faltas corresponde a 25% da carga horária
let limiteFaltas = cargaHoraria * 0.25;

// Saída de dados
console.log("");
console.log("Nome do curso: " + nomeCurso + ".");
console.log("Carga horária: " + cargaHoraria + " Horas.");
console.log("Limite de faltas: " + limiteFaltas + " Horas.");
