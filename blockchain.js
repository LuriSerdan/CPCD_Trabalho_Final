const crypto = require('crypto');
const { Worker } = require('worker_threads');

class Bloco {
    constructor(index, timestamp, dados, hashAnterior = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.dados = dados;
        this.hashAnterior = hashAnterior;
        this.hash = this.calcularHash();
    }

    calcularHash() {
        return crypto
            .createHash('sha256')
            .update(
                this.index +
                this.timestamp +
                JSON.stringify(this.dados) +
                this.hashAnterior
            )
            .digest('hex');
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.criarBlocoGenesis()];
    }

    criarBlocoGenesis() {
        return new Bloco(
            0,
            new Date().toISOString(),
            "Bloco Genesis",
            "0"
        );
    }

    obterUltimoBloco() {
        return this.chain[this.chain.length - 1];
    }

    adicionarBloco(novoBloco) {
        novoBloco.hashAnterior = this.obterUltimoBloco().hash;
        novoBloco.hash = novoBloco.calcularHash();
        this.chain.push(novoBloco);
    }

    validarBlockchain() {
        for (let i = 1; i < this.chain.length; i++) {

            const blocoAtual = this.chain[i];
            const blocoAnterior = this.chain[i - 1];

            if (
                blocoAtual.hash !== blocoAtual.calcularHash()
            ) {
                return false;
            }

            if (
                blocoAtual.hashAnterior !== blocoAnterior.hash
            ) {
                return false;
            }
        }

        return true;
    }
}

function validarParalelo(transacoes) {

    return Promise.all(

        transacoes.map(transacao => {

            return new Promise((resolve, reject) => {

                const worker = new Worker('./worker.js', {
                    workerData: transacao
                });

                worker.on('message', resultado => {
                    resolve(resultado);
                });

                worker.on('error', reject);
            });
        })
    );
}

async function executar() {

    console.log("\n=== BLOCKCHAIN DISTRIBUÍDA ===\n");

    const blockchain = new Blockchain();

    blockchain.adicionarBloco(
        new Bloco(
            1,
            new Date().toISOString(),
            {
                remetente: "Alice",
                destinatario: "Bob",
                valor: 100
            }
        )
    );

    blockchain.adicionarBloco(
        new Bloco(
            2,
            new Date().toISOString(),
            {
                remetente: "Carlos",
                destinatario: "Maria",
                valor: 250
            }
        )
    );

    console.log("Blockchain criada com sucesso.\n");

    console.log(
        "Blockchain válida:",
        blockchain.validarBlockchain()
    );

    const transacoes = [
        "Alice->Bob:100",
        "Carlos->Maria:250",
        "Pedro->Ana:300",
        "João->Lucas:50"
    ];

    console.log("\nValidando transações em paralelo...\n");

    const hashes = await validarParalelo(transacoes);

    hashes.forEach((hash, indice) => {
        console.log(
            `Nó ${indice + 1} validou: ${hash}`
        );
    });

    console.log("\nProcessamento paralelo concluído.");
}

executar();