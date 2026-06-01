// Rodar: npm install prompt-sync
const prompt = require("prompt-sync")();

// Solicita um número ao usuário
let numero = Number(prompt("Digite um número inteiro positivo: "));

let soma = 0;
let contador = 1;

// Estrutura WHILE
while (contador <= numero) {
    soma = soma + contador;
    contador++;
}

// Exibe o resultado final
console.log("A soma de 1 até " + numero + " é: " + soma);