const http = require('http');
const https = require('https');

const handleGetRequest = (req, res) => {
    // Write external API request code here
    const options = {
        hostname: 'static-assets.codecademy.com',
        path: '/Courses/Learn-Node/http/data.json',
        method: 'GET'
    };
    const request = https.request(options, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            res.writeHeader(200, { 'Content-Type': 'application/json' });
            res.write(data);
            res.end();
        });
    }).end(console.log('Request sent'));
}

// Creates server instance
const server = http.createServer((req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            return handleGetRequest(req, res);
        default:
            throw new Error(`Unsupported request method: ${method}`);
    }
});

// Starts server listening on specified port
server.listen(4001, () => {
    const { address, port } = server.address();
    console.log(`Server is listening on: http://${address}:${port}`);
});
