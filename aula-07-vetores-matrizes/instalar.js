// Não esquecer de instalar:
// npm install prompt-sync

const prompt = require('prompt-sync')();

// Vetores para armazenar os dados
const nomes = [];
const idades = [];

// ==========================================
// Etapa 1 — Entrada de dados
// ==========================================
console.log("=== CADASTRO DE PESSOAS ===");

for (let i = 0; i < 3; i++) {
    console.log(`\nDigite os dados da ${i + 1}ª pessoa:`);

    let nome = prompt("Nome: ");
    let idade = parseInt(prompt("Idade: "), 10);

    // Validação simples para garantir que a idade é válida
    while (isNaN(idade) || idade < 0) {
        console.log("Por favor, insira uma idade válida (número maior ou igual a 0).");
        idade = parseInt(prompt("Idade: "), 10);
    }

    nomes.push(nome);
    idades.push(idade);
}

// ==========================================
// Etapa 2 — Confirmação do usuário
// ==========================================
let resposta;
let loopConfirmacao = true;

while (loopConfirmacao) {
    resposta = prompt("\nDeseja visualizar os dados? (sim/não): ").toLowerCase().trim();

    if (resposta === "sim" || resposta === "não" || resposta === "nao") {
        loopConfirmacao = false;
    } else {
        console.log("Resposta inválida! Tente novamente!");
    }
}

// ==========================================
// Etapa 3 — Saída condicional
// ==========================================
if (resposta === "sim") {
    console.log("\n=== DADOS CADASTRADOS ===");

    for (let i = 0; i < 3; i++) {
        let classificacao = "";

        if (idades[i] < 18) {
            classificacao = "Menor de idade";
        } else if (idades[i] <= 59) {
            classificacao = "Maior de idade";
        } else {
            classificacao = "Idoso(a)";
        }

        console.log(`\n--- Pessoa ${i + 1} ---`);
        console.log(`Nome:           ${nomes[i]}`);
        console.log(`Idade:          ${idades[i]} anos`);
        console.log(`Classificação:  ${classificacao}`);
    }
} else {
    console.log("\nPrograma finalizado com sucesso!");
}