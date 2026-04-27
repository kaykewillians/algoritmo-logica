// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// Aula 03 — Condicionais
// Exemplo Extra 3 — Classificação de Corrida 100m (SE encadeado)

console.log("=== Avaliação de Corrida 100m ===");
console.log("");

// Entrada de dados
let nome  = prompt("Nome do atleta: ");
let tempo = parseFloat(prompt("Tempo da corrida (segundos): "));

// Processamento — cadeia de SE encadeado
// Cada else if é um novo SE dentro do SENÃO
let classificacao;

if (tempo < 10) {
    classificacao = "Elite";
} else if (tempo <= 12) {
    classificacao = "Avançado";
} else if (tempo <= 15) {
    classificacao = "Intermediário";
} else {
    classificacao = "Iniciante";
}

// Saída de dados
console.log("");
console.log(`Atleta: ${nome}  |  Tempo: ${tempo.toFixed(2)}s  |  Classificação: ${classificacao}`);
