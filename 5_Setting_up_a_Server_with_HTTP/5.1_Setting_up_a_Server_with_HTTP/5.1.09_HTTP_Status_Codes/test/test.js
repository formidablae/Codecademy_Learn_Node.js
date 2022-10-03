console.log = function () { };
const { expect } = require('chai');
const rewire = require('rewire');
const http = require('http');

function http_call() {
    const options = {
        hostname: 'localhost',
        port: 4001,
        path: '/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return new Promise((resolve, reject) => {
        const req = http.request(options);

        req.on('response', res => {
            resolve(res.statusCode);
        });

        req.on('error', err => {
            reject(err);
        });

        req.end();
    });
}

describe('Make GET request', function (done) {
    it('should have a statusCode of 500', async () => {
        const targetStatusCode = 500;
        const statusCode = await http_call();

        expect(statusCode, `Did you return a statusCode of ${targetStatusCode} from your ${`POST`} request handler?`).to.equal(targetStatusCode);

    });
});
