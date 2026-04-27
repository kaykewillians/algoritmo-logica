# 📚 Lógica de Programação e Algoritmos
### Curso Técnico em Desenvolvimento de Sistemas — SENAI "A. Jacob Lafer"

---

## 🧭 Sobre este Repositório

Este repositório reúne os exercícios resolvidos em **JavaScript** de todas as aulas do componente curricular **Lógica de Programação e Algoritmos**.

A proposta da disciplina é construir o raciocínio lógico de forma progressiva, usando quatro ferramentas em paralelo:

| Ferramenta | Finalidade |
|---|---|
| **Draw\.io** | Criação de fluxogramas visuais |
| **Flowgorithm** | Fluxograma executável — testa a lógica antes do código |
| **VisualG** | Pseudocódigo em português — escrever algoritmos sem se preocupar com sintaxe |
| **JavaScript** | Linguagem de programação real, executada no **Node.js** |

> 💡 **Neste repositório você encontrará apenas os arquivos `.js`.**  
> Os demais formatos (`.drawio`, `.fprg`, `.alg`, `.docx`, `.pdf`) são de uso local em sala e estão listados no `.gitignore`.

---

## 🗂️ Estrutura de Pastas

```
📦 logica-programacao-algoritmos
 ├── 📁 aula-01-introducao-logica/
 ├── 📁 aula-02-fluxogramas/
 ├── 📁 aula-03-condicionais/
 ├── 📁 aula-04-git-github/
 ├── 📁 aula-05-operadores-logicos/
 ├── 📁 aula-06-estruturas-repeticao/
 ├── 📁 aula-07-vetores-matrizes/
 ├── 📁 aula-08-procedimentos-funcoes/
 ├── 📁 aula-09-git-avancado/
 ├── 📁 desafio-final/
 ├── .gitignore
 └── README.md
```

---

## 🚀 Como Executar os Exercícios

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (versão 18 ou superior recomendada)
- Terminal (Prompt de Comando, PowerShell ou Git Bash)

### Executando um arquivo

```bash
# 1. Acesse a pasta da aula desejada
cd aula-05-operadores-logicos

# 2. Instale a dependência de entrada de dados (apenas uma vez por pasta)
npm install prompt-sync

# 3. Execute o exercício
node ex_1.js
```

> 📦 O pacote `prompt-sync` é usado para ler dados digitados pelo usuário no terminal — equivalente ao `leia()` do VisualG.

---

## 📖 Conteúdo por Aula

### 🟡 Aula 01 — Introdução à Lógica de Programação
> *Ferramentas utilizadas: Word (teoria)*

Conceitos fundamentais: o que é lógica, o que é algoritmo, sequência lógica de passos, entrada → processamento → saída.

📂 Sem arquivos JS nesta aula — base teórica.

---

### 🟡 Aula 02 — Fluxogramas, Variáveis e Operadores
> *Ferramentas utilizadas: Draw\.io + VisualG*

Símbolos de fluxograma, declaração de variáveis, tipos de dados (inteiro, real, literal), operadores aritméticos.

📂 [`aula-02-fluxogramas/`](./aula-02-fluxogramas/)

> Os arquivos JS desta aula foram criados como **versão de referência** para o repositório — em sala, esta aula usou Draw\.io e VisualG.

| Arquivo | Descrição |
|---|---|
| `ex_1.js` | Soma de dois números |
| `ex_2.js` | Média de 3 notas |
| `ex_3.js` | Área do trapézio |
| `ex_4.js` | Cálculo do IMC |
| `ex_5.js` | Conversor Celsius → Fahrenheit |
| `ex_6.js` | Área de um terreno retangular |
| `exemplo_faltas.js` | Exemplo do professor — Limite de faltas |
| `exemplo_desconto.js` | Exemplo do professor — Cálculo de desconto |

---

### 🟠 Aula 03 — Condicionais
> *Ferramentas utilizadas: Draw\.io + VisualG + Flowgorithm*

Estruturas `SE...ENTÃO...SENÃO` simples, composta e encadeada. `ESCOLHA...CASO` (switch).

📂 [`aula-03-condicionais/`](./aula-03-condicionais/)

**Exemplos do Professor:**

| Arquivo | Descrição |
|---|---|
| `exemplo_1_reajuste_SE.js` | Reajuste salarial — 2 faixas (SE simples) |
| `exemplo_2_reajuste_SE_aninhado.js` | Reajuste salarial — 3 faixas (SE aninhado) |
| `exemplo_3_corrida_SE_encadeado.js` | Classificação de atleta — corrida 100m (SE encadeado) |
| `exemplo_3_corrida_SWITCH_CASE.js` | Mesma classificação, versão Switch Case |

**Exercícios da Lista** *(versão de referência JS — em sala foram feitos em Draw\.io e VisualG)*:

| Arquivo | Descrição |
|---|---|
| `ex_1.js` | Soma de três números |
| `ex_2.js` | Volume de um paralelepípedo |
| `ex_3.js` | Comissão de vendedor (condicional simples) |
| `ex_4.js` | Verificar maioridade e habilitação |
| `ex_5.js` | Validação de senha (condicional simples) |
| `ex_6.js` | Média escolar com situação (condicional encadeada) |
| `ex_7.js` | Verificar obrigatoriedade do voto por idade |

---

### 🔵 Aula 04 — Git e GitHub
> *Ferramentas utilizadas: Git (terminal) + GitHub Desktop + GitHub + Node.js (primeiro contato com JS)*

Controle de versão local e na nuvem. Fluxo completo pelo terminal e pelo GitHub Desktop. Desfazer erros com `git restore`, `git reset --soft` e `git revert`. Criação deste repositório!

📂 [`aula-04-git-github/`](./aula-04-git-github/)

| Arquivo | Descrição |
|---|---|
| `index.js` | Sistema de controle de estacionamento (menu interativo) |

---

### 🔵 Aula 05 — Operadores Lógicos
> *Ferramentas utilizadas: Draw\.io + VisualG + Flowgorithm + **JavaScript***

Operadores `&&` (E), `||` (OU), `!` (NÃO). Expressões compostas e prioridade dos operadores.

📂 [`aula-05-operadores-logicos/`](./aula-05-operadores-logicos/)

| Arquivo | Descrição |
|---|---|
| `exemplo_senha.js` | Exemplo do professor — sistema de login com `&&` |
| `ex_1.js` | Sistema escolar — nota e frequência (`&&`) |
| `ex_2.js` | Bilheteria do parque — entrada gratuita (`\|\|`) |
| `ex_3.js` | Controle de estoque — produto esgotado (`!`) |
| `ex_4.js` | Seleção de emprego — idade e linguagens (`&&` com `\|\|`) |
| `ex_5.js` | Análise de empréstimo — Serasa + fiador (`!`, `&&` e `\|\|`) |
| `bonus.js` | Super Desconto — prioridade completa dos operadores |

---

### 🔵 Aula 06 — Estruturas de Repetição
> *Ferramentas utilizadas: Draw\.io + VisualG + Flowgorithm + **JavaScript***

Laços `for`, `while` e `do...while`. Contadores, acumuladores e sentinelas.

📂 [`aula-06-estruturas-repeticao/`](./aula-06-estruturas-repeticao/)

| Arquivo | Descrição |
|---|---|
| `exemplo_versos.js` | Exemplo do professor — repetição de versos com `for` |
| `ex1_for.js` | Contagem crescente de 1 até 10 (`for`) |
| `ex2_for_de.js` | Contagem regressiva de 10 até 1 (`for` com decremento) |
| `ex3_while_soma.js` | Soma até valor digitado (`while`) |
| `ex4_do_while.js` | Validação de senha (`do...while`) |
| `ex5_while_m.js` | Média de vários alunos com sentinela (`while`) |
| `ex6_for_tabuada.js` | Tabuada de um número (`for`) |

---

### 🔵 Aula 07 — Vetores e Matrizes
> *Ferramentas utilizadas: Draw\.io + VisualG + Flowgorithm + **JavaScript***

Arrays (vetores), percorrer com `for`, lógica de índice, dois vetores paralelos.

📂 [`aula-07-vetores-matrizes/`](./aula-07-vetores-matrizes/)

| Arquivo | Descrição |
|---|---|
| `exemplo_filmes.js` | Exemplo do professor — cadastro e exibição de 5 filmes |
| `ex1.js` | Lista de compras — vetor de strings |
| `ex2.js` | Maior e menor preço — vetor de reais |
| `ex3.js` | Invertendo um vetor — lógica de índice com decremento |
| `ex4.js` | Placar do campeonato — vetor com contadores |
| `ex5.js` | Cardápio do restaurante — dois vetores paralelos |

---

### 🔵 Aula 08 — Procedimentos e Funções
> *Ferramentas utilizadas: Draw\.io + VisualG + Flowgorithm + **JavaScript***

Funções com `return` (funções) e sem `return` (procedimentos). Modularização e reutilização de código.

📂 [`aula-08-procedimentos-funcoes/`](./aula-08-procedimentos-funcoes/)

| Arquivo | Descrição |
|---|---|
| `exemplo_desconto.js` | Exemplo do professor — desconto por faixa de preço (1 função + 1 procedimento) |
| `ex1.js` | Consumo de combustível — 1 função + 1 procedimento |
| `ex2.js` | Cálculo de frete — 1 função com condicional + 1 procedimento |
| `ex3.js` | Controle de produção — 1 função + 2 procedimentos |
| `ex4.js` | Simulador de viagem — 3 funções + 1 procedimento |

---

## 🛠️ Tecnologias Utilizadas

- **JavaScript** — Linguagem de programação principal
- **Node.js** — Ambiente de execução do JavaScript no terminal
- **prompt-sync** — Biblioteca para leitura de dados no terminal
- **Git** — Controle de versão
- **GitHub** — Hospedagem do repositório

---

### 🔴 Aula 09 — Git Avançado: Branches, Pull Requests e Conflitos
> *Ferramentas utilizadas: Git (branches, merge, conflitos) + GitHub (Pull Requests)*

Branches, fluxo completo de Pull Request e resolução de conflitos de merge — passo a passo.

📂 [`aula-09-git-avancado/`](./aula-09-git-avancado/)

---

### 🏆 Desafio Final
> *Integração de todos os conceitos do curso*

Dois desafios completos que combinam vetores, laços, condicionais, operadores lógicos, funções e procedimentos. Cada desafio deve ser entregue via **Pull Request** em uma branch própria.

📂 [`desafio-final/`](./desafio-final/)

| Arquivo | Descrição |
|---|---|
| `resolucao_desafio_1.js` | Dados de 3 pessoas — vetores, `for`, `do...while`, condicionais encadeadas |
| `resolucao_desafio_2.js` | Cadastro de alunos — vetores paralelos, funções, procedimentos, resumo final |

> 📖 Leia o [`desafio-final/README.md`](./desafio-final/README.md) para os enunciados completos.

---

## 📋 Comandos Git Utilizados no Curso

```bash
# Configuração
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
git config --list

# Iniciar e conectar
git init                    # Inicializar repositório local
git branch -M main          # Renomear branch para main
git remote add origin <url> # Vincular ao repositório remoto
git push -u origin main     # Primeiro envio ao GitHub

# Ciclo diário
git status                  # Ver arquivos modificados
git add .                   # Adicionar todos os arquivos
git add nome_arquivo.js     # Adicionar um arquivo específico
git commit -m "mensagem"    # Salvar uma versão
git push                    # Enviar para o GitHub
git pull                    # Atualizar repositório local

# Histórico
git log                     # Histórico completo de commits
git log --oneline           # Histórico resumido

# Desfazer erros
git restore .               # Descarta alterações locais (sem commit)
git reset --soft HEAD~1     # Desfaz último commit, mantém o código
git revert <hash>           # Desfaz commit mantendo histórico (seguro para equipes)

# Branches e Pull Requests (Aula 09)
git checkout -b feature/nome    # Cria e entra em uma nova branch
git checkout main               # Volta para a main
git branch                      # Lista as branches locais
git push origin feature/nome    # Envia a branch para o GitHub
git merge feature/nome          # Une a branch na branch atual
git branch -d feature/nome      # Deleta a branch local após merge
```

---

## 👥 Autor

- **[Seu Nome Aqui]** — Aluno(a) do Curso Técnico em Desenvolvimento de Sistemas

---

## 👨‍🏫 Professor

- **Ignacio Neto** — Componente Curricular: Lógica de Programação e Algoritmos

---

## 🏫 Instituição

**SENAI "A. Jacob Lafer"** — Unidade UFP 1.18  
Curso Técnico em Desenvolvimento de Sistemas

---

> *"Todo especialista já foi um iniciante. O que diferencia é a consistência."* 🚀
