// Rodar (Pacote para funcionar no terminal)
// npm install prompt-sync

// importar modulo
const prompt = require ('prompt-sync')();

//logica
let nomeUsuario = prompt("informe o nome do usuário: ");
let senha = prompt("informe a senha: ");
console.log("")

// Simulando dados referência (Normalmente seriam trazidos do BD)
let loginBanco = "Kayke";
let SenhaBanco = "0903";

// Condicional SE + E 
if (nomeUsuario === loginBanco && senha === senhaBanco) {
    console.log("Acesso autorizal");
} else {
    console.log("acesso negado");
}