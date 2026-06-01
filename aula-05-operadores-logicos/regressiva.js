// Rodar: npm install prompt-sync
const prompt = require('prompt-sync')()

// Título
console.log('--- contagem regressiva ---')
console.log("")

// Pergunta (Quer começar a contagem regressiva?)
let numero = Number(prompt("Quer começar a contagem regressiva? : "))
console.log("")

// Contagem regressiva de 10 até 1

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("FOGO!");