// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// Aula 03 — Condicionais
// Exemplo Extra 3 — Classificação de Corrida 100m (SWITCH CASE)
// Versão com switch — equivalente ao ESCOLHA...CASO do VisualG
// Obs: switch em JS compara valores exatos, por isso usamos Math.floor para inteiros

console.log("=== Avaliação de Corrida 100m ===");
console.log("(Informe o tempo em segundos inteiros, ex: 9, 11, 14)");
console.log("");

// Entrada de dados
let nome  = prompt("Nome do atleta: ");
let tempo = parseInt(prompt("Tempo da corrida (segundos): "));

// Processamento com SWITCH CASE
// No JavaScript utilizamos switch...case, equivalente ao escolha...caso do VisualG
let classificacao;

switch (true) {
    case (tempo < 10):
        classificacao = "Elite";
        break;
    case (tempo <= 12):
        classificacao = "Avançado";
        break;
    case (tempo <= 15):
        classificacao = "Intermediário";
        break;
    case (tempo <= 20):
        classificacao = "Iniciante";
        break;
    default:
        classificacao = "Tempo inválido";
}

// Saída de dados
console.log("");
console.log(`Atleta: ${nome}  |  Tempo: ${tempo}s  |  Classificação: ${classificacao}`);
