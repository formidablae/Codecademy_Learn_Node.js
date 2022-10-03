const http = require('http');

const handleGetRequest = (req, res) => {
    const pathname = req.url;
    if (pathname === '/users') {
        res.end(JSON.stringify([]));
    }
}

// Creates server instance
const server = http.createServer((req, res) => {
    // Write server code here
    switch(req.method) {
        case 'GET':
            handleGetRequest(req, res);
            break;
        case 'POST':
            res.end('POST request received');
            break;
        default:
            res.end('Other request received');
    }
});

// Starts server listening on specified port
server.listen(4001, () => {
    const { address, port } = server.address();
    console.log(`Server is listening on: http://${address}:${port}`);
});
