# Blockchain Distribuída com Processamento Paralelo

## Trabalho Final – Computação Paralela e Distribuída

### Autor(es)

* Nome: Luri Serdan Asano

Instituto Federal de São Paulo (IFSP)

---

## Descrição do Projeto

Este projeto foi desenvolvido como trabalho final da disciplina de Computação Paralela e Distribuída.

O objetivo é demonstrar, de forma prática, a aplicação dos conceitos de processamento paralelo e distribuído através da implementação de um protótipo de Blockchain. A solução simula uma rede de nós validadores que executam operações de validação de transações em paralelo utilizando a tecnologia Worker Threads do Node.js.

Além disso, o projeto aborda conceitos relacionados à computação heterogênea, escalabilidade de sistemas distribuídos e arquiteturas modernas de datacenters.

---

## Objetivos

* Demonstrar o funcionamento básico de uma Blockchain.
* Implementar a geração de hashes utilizando SHA-256.
* Simular uma rede distribuída de validação.
* Aplicar processamento paralelo com múltiplos workers.
* Relacionar os conceitos estudados em sala com uma aplicação prática.

---

## Tecnologias Utilizadas

* Node.js
* JavaScript
* Worker Threads
* Crypto (SHA-256)
* Git
* GitHub

---

## Estrutura do Projeto

```text
CPCD_Trabalho_Final/
│
├── blockchain.js
├── worker.js
├── package.json
└── README.md
```

### Arquivos

**blockchain.js**

* Implementa a Blockchain.
* Cria blocos.
* Realiza validações.
* Distribui tarefas para os workers.

**worker.js**

* Simula um nó da rede.
* Processa transações em paralelo.
* Calcula hashes SHA-256.

---

## Pré-requisitos

Antes de executar o projeto, instale:

### Node.js

Verifique a instalação:

```bash
node -v
npm -v
```

Caso não esteja instalado, faça o download em:

https://nodejs.org

---

## Como Executar

### 1. Clonar o repositório

```bash
git clone https://github.com/SEU-USUARIO/SGSI_Trabalho_Final.git
```

### 2. Entrar na pasta do projeto

```bash
cd CPCD_Trabalho_Final
```

### 3. Executar o programa

```bash
node blockchain.js
```

Ou:

```bash
npm start
```

---

## Saída Esperada

```text
=== BLOCKCHAIN DISTRIBUÍDA ===

Blockchain criada com sucesso.

Blockchain válida: true

Validando transações em paralelo...

Nó 1 validou:
5a3d4...

Nó 2 validou:
8d4f1...

Nó 3 validou:
c71e2...

Nó 4 validou:
f9a21...

Processamento paralelo concluído.
```

---

## Conceitos Aplicados

### Computação Paralela

As transações são processadas simultaneamente por diferentes workers.

### Computação Distribuída

Cada worker representa um nó da rede distribuída.

### Blockchain

Os blocos são encadeados por meio de hashes criptográficos.

### Computação Heterogênea

A arquitetura proposta pode ser expandida para utilização de CPUs, GPUs e aceleradores especializados em ambientes reais.

---

## Resultados Obtidos

O protótipo demonstrou:

* Funcionamento correto da Blockchain.
* Encadeamento dos blocos por hashes SHA-256.
* Processamento paralelo através de múltiplos workers.
* Simulação de uma arquitetura distribuída de validação.

Os testes realizados apresentaram resultados compatíveis com os conceitos estudados na disciplina.

---

## Referências Bibliográficas

TANENBAUM, Andrew S.; VAN STEEN, Maarten. Sistemas Distribuídos: Princípios e Paradigmas. Pearson, 2007.

COULOURIS, George; DOLLIMORE, Jean; KINDBERG, Tim. Sistemas Distribuídos: Conceitos e Projeto. Bookman, 2013.

NAKAMOTO, Satoshi. Bitcoin: A Peer-to-Peer Electronic Cash System. 2008.

STALLINGS, William. Arquitetura e Organização de Computadores. Pearson, 2018.

PATTERSON, David; HENNESSY, John. Computer Organization and Design. Morgan Kaufmann, 2014.

Documentação Oficial Node.js: https://nodejs.org

Documentação Oficial GitHub: https://github.com
