const { parentPort, workerData } = require('worker_threads');
const crypto = require('crypto');

function calcularHash(dados) {
    return crypto
        .createHash('sha256')
        .update(dados)
        .digest('hex');
}

const hash = calcularHash(workerData);

parentPort.postMessage(hash);