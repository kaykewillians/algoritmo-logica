// Rodar: npm install prompt-sync
const prompt = require("prompt-sync")();

let senha;

// Estrutura DO...WHILE
do {
    senha = prompt("Digite a senha: ");

    if (senha !== "1234") {
        console.log("Senha incorreta! Tente novamente.");
    }

} while (senha !== "1234");

// Mensagem final
console.log("Acesso permitido!");