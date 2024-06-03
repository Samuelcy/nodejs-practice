/**
 * types
 * 
 * readable stream
 * writable stream
 * duplex
 */

// const { createReadStream, createWriteStream } = require('fs');
// const readStream = createReadStream('./text.txt');
// const writeStream = createWriteStream('./text2.txt');
// readStream.pipe(writeStream);

const { createServer } = require('http');

const server = createServer();

server.listen(5000);

server.on('conneciton', (socket) => {
console.log(socket);
});
