const { pbkdf2 } = require('crypto');
const { createServer } = require('http');

const start = Date.now();
const hash = () => {
    pbkdf2('myPass', 'verySecretString', 10000, 1000, 'sha256', () => {
        console.log('Hash', Date.now() - start);
    });
};
const lis = () => {
    createServer().listen(3000, () => {
        console.log("listen", Date.now() - start);
    });
};

hash();
hash();
hash();
hash();
lis();