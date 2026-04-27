// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// Aula 03 — Condicionais
// Exercício 5 — Validação de Senha

console.log("--- Sistema de Login ---");
console.log("");

// Entrada de dados
let nome  = prompt("Informe o nome do usuário: ");
let senha = prompt("Digite a senha de acesso: ");

// Processamento e Saída
// Comparamos a variável 'senha' com o texto fixo "acb23"
// No JavaScript, utilizamos === para comparar textos (strings)
if (senha === "acb23") {
    console.log("");
    console.log("Olá, " + nome + "! Acesso concedido.");
} else {
    console.log("");
    console.log("Atenção, " + nome + "! Senha incorreta. Acesso negado.");
}
