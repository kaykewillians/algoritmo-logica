# Aula 03 — Condicionais

## 📋 Conteúdo da Aula

- Estrutura condicional **SE simples** — executa apenas se a condição for verdadeira
- Estrutura condicional **SE composto** — `SE...ENTÃO...SENÃO`
- Estrutura condicional **SE encadeado** — múltiplas condições aninhadas
- Estrutura **ESCOLHA...CASO** (switch/case) — para múltiplos valores fixos

Correspondência com JavaScript:

| VisualG | JavaScript |
|---|---|
| `se ... entao` | `if (...) {` |
| `senao` | `} else {` |
| `fimse` | `}` |
| `se...senão se...senao` | `if...else if...else` |
| `escolha ... caso` | `switch ... case` |

## 🛠️ Ferramentas Utilizadas

- **Draw\.io** — Fluxogramas das estruturas condicionais
- **VisualG** — Pseudocódigo
- **Flowgorithm** — Fluxograma executável (introduzido nesta aula)

## 📂 Exemplos do Professor

> Arquivos desenvolvidos ao vivo em aula para explicar cada estrutura condicional.

| Arquivo | Descrição | Estrutura |
|---|---|---|
| `exemplo_1_reajuste_SE.js` | Reajuste salarial — 2 faixas de aumento | SE simples |
| `exemplo_2_reajuste_SE_aninhado.js` | Reajuste salarial — 3 faixas de aumento | SE aninhado |
| `exemplo_3_corrida_SE_encadeado.js` | Classificação de atleta na corrida de 100m | SE encadeado |
| `exemplo_3_corrida_SWITCH_CASE.js` | Mesma classificação da corrida, versão Switch | SWITCH CASE |

## 📂 Exercícios da Lista

> Nesta aula ainda não usávamos JS em sala. Os arquivos abaixo foram criados como referência para o repositório.

| Arquivo | Descrição |
|---|---|
| `ex_1.js` | Soma de três números |
| `ex_2.js` | Volume de um paralelepípedo |
| `ex_3.js` | Comissão de vendedor (condicional simples) |
| `ex_4.js` | Verificar maioridade e habilitação |
| `ex_5.js` | Validação de senha (condicional simples) |
| `ex_6.js` | Média escolar com situação (condicional encadeada) |
| `ex_7.js` | Verificar obrigatoriedade do voto por idade |

## ▶️ Como executar

```bash
npm install prompt-sync
node exemplo_1_reajuste_SE.js
node ex_3.js
```
