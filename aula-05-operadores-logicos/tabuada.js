// Rodar: npm install prompt-sync
const prompt = require('prompt-sync')()

// Título
console.log('--- números de 1 até 10 ---')
console.log("")

// Pergunta (Quer gerar os números?)
let numero = Number(prompt("Quer gerar os números? : "))
console.log("")

// Loop de 1 até 10 com incremento de 1 em 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}