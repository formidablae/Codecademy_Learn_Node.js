const fs = require('fs');
// TODO: Require the http module
const http = require('http');

// TODO: Create a server
const server = http.createServer((req, res) => {
    // TODO: Create a url object with request url and host name
    // const url = new URL('http://localhost:4001');
    const url = new URL(req.url, `http://${req.headers.host}`);


    // TODO: Create a switch statement based on pathname of url
    switch (url.pathname) {
        case '/':
            // TODO: Check if request method is GET
            if (req.method === 'GET') {
                // TODO: Get value of 'name' query
                const name = url.searchParams.get('name');
                console.log(name);

                // TODO: Write response header
                res.writeHead(200, { 'Content-Type': 'text/html' });
                // TODO: Pipe index.html to response
                fs.createReadStream('index.html').pipe(res);

            } else if (req.method === 'POST') {
                // TODO: Check if request is POST and if so, run handlePostResponse()
                handlePostResponse(req, res);
            }
            break;
        default:
            // TODO: Write response header
            res.writeHead(404, { 'Content-Type': 'text/html' });
            // TODO: Pipe 404.html to response
            fs.createReadStream('404.html').pipe(res);
            break;
    }
});


// TODO: Have server listen at port 4001
server.listen(4001);

// Function for handling POST responses
function handlePostResponse(request, response) {
    request.setEncoding('utf8');

    // Receive chunks on 'data' event and concatenate to body variable
    let body = '';
    request.on('data', function (chunk) {
        body += chunk;
    });

    // When done receiving data, select a random choice for server
    // Compare server choice with player's choice and send an appropriate message back
    request.on('end', function () {
        const choices = ['rock', 'paper', 'scissors'];
        const randomChoice = choices[Math.floor(Math.random() * 3)];

        const choice = body;

        let message;

        const tied = `Aww, we tied! I also chose ${randomChoice}.`;
        const victory = `Dang it, you won! I chose ${randomChoice}.`;
        const defeat = `Ha! You lost. I chose ${randomChoice}.`;

        if (choice === randomChoice) {
            message = tied;
        } else if (
            (choice === 'rock' && randomChoice === 'paper') ||
            (choice === 'paper' && randomChoice === 'scissors') ||
            (choice === 'scissors' && randomChoice === 'rock')
        ) {
            message = defeat;
        } else {
            message = victory;
        }
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end(`You selected ${choice}. ${message}`);
    });
}
