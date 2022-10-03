const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Incoming request');
    console.log(`Request method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);
    res.end('Hello World');
});

server.listen(4001);
