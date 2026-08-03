# 🏆 Desafios Finais — Lógica de Programação e Algoritmos

## 📋 Sobre os Desafios

Os desafios finais têm como objetivo integrar **alguns dos principais conceitos** vistos ao longo do curso.

---

## 📌 Desafio 1 — Dados de Pessoas

### Enunciado

Desenvolva um programa em JavaScript que realize as seguintes etapas:

**Etapa 1 — Entrada de dados:**
- Receba o **nome** e a **idade** de **3 pessoas**
- Armazene os dados em **vetores** (arrays)
- Use um laço `Loop apropriado` para as entradas

**Etapa 2 — Confirmação do usuário:**
- Após a entrada, pergunte: *"Deseja visualizar os dados? (sim/não)"*
- Use um laço `Loop apropriado` para garantir que o usuário informe uma resposta válida
- Se a resposta for inválida, exiba `"Resposta inválida! Tente novamente!"` e repita a pergunta

**Etapa 3 — Saída condicional:**
- Se a resposta for **"sim"**: exiba os dados das 3 pessoas com nome, idade e **classificação etária**:
  - Abaixo de 18 anos → `"Menor de idade"`
  - De 18 a 59 anos → `"Maior de idade"`
  - 60 anos ou mais → `"Idoso"`
- Se a resposta for **"não"**: exiba `"Programa finalizado com sucesso!"`

### Conceitos aplicados

- Vetores (arrays)
- Laço `Loop` (entrada e exibição)
- Laço `Loop` (validação de resposta)
- Condicional encadeada `se...senão` (classificação etária)
- Operadores lógicos `E` e `OU` (validação da resposta)

### Exemplo de saída esperada (resposta "sim")

```
--- Pessoa 1 ---
Nome:           Ana
Idade:          17 anos
Classificação:  Menor de idade

--- Pessoa 2 ---
Nome:           Carlos
Idade:          35 anos
Classificação:  Maior de idade

--- Pessoa 3 ---
Nome:           Dona Maria
Idade:          72 anos
Classificação:  Idoso(a)
```

---

## 📌 Desafio 2 — Sistema de Cadastro de Alunos

### Enunciado

Desenvolva um programa em JavaScript para gerenciar o boletim de uma turma:

**Etapa 1 — Cadastro:**
- Permita o cadastro de até **3 alunos**
- Para cada aluno, receba: **nome**, **nota 1**, **nota 2** e **frequência (%)**
- Use **vetores** para armazenar todos os dados

**Etapa 2 — Cálculo (use funções com retorno):**
- Uma **função** `calculaMedia(nota1, nota2)` deve calcular e retornar a média das duas notas
- Uma **função** `verificaSituacao(media, frequencia)` deve retornar a situação do aluno:
  - Média ≥ 7,0 **e** frequência ≥ 75% → `"Aprovado"`
  - Média ≥ 4,0 **e** frequência ≥ 75% → `"Recuperação"`
  - Qualquer outro caso → `"Reprovado"`

**Etapa 3 — Exibição (use procedimentos):**
- Um **procedimento** `exibeBoletim(...)` deve exibir os dados completos de cada aluno
- Um **procedimento** `exibeResumo(...)` deve exibir ao final:
  - Total de alunos aprovados
  - Total em recuperação
  - Total reprovados

### Conceitos aplicados

- Vetores paralelos (arrays)
- Laço `Loop` (entrada, exibição e contadores)
- Funções com `return` (calcular média e situação)
- Procedimentos sem `return` (exibir boletim e resumo)
- Operadores lógicos `E` (verificação de situação)
- Condicional encadeada `se...senão`
- Contadores acumulados no loop

### Exemplo de saída esperada

```
 BOLETIM — Aluno 1          

  Nome:        Ana           
  Nota 1:      8.0           
  Nota 2:      7.5           
  Frequência:  80%           
  Média:       7.8           
  Situação:    Aprovado      

==========================================
RESUMO GERAL DA TURMA

  Aprovados:       3
  Recuperação:     1
  Reprovados:      1

```


