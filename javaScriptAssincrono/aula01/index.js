// promisses
function rand(mim, max) {
    mim *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - mim) + mim);
}
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('Bad value');
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi(2222, rand(1, 5));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch(e => {
        console.log('ERRO:', e);
    });
