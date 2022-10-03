console.log = function () { };
const { expect } = require('chai');
const rewire = require('rewire');
const http = require('http');

dbData = [
    {
        "id": 1,
        "firstName": "Arnold",
        "lastName": "Schwarzeneggar",
        "created": "01-07-1985",
        "updated": "05-07-2021"
    },
    {
        "id": 2,
        "firstName": "Jon",
        "lastName": "Bonjovi",
        "created": "03-01-1992",
        "updated": "12-08-2007"
    },
    {
        "id": 3,
        "firstName": "Abraham",
        "lastName": "Lincoln",
        "created": "01-02-1839",
        "updated": "15-04-1865"
    }
];

function http_call(url) {
    return new Promise((resolve, reject) => {
        http.get('http://localhost:4001/users', (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                resolve(data);
            })
        });
    });
}

describe('Make GET request', function (done) {
    it('should return data', async () => {
        const targetData = JSON.stringify(dbData);
        const response = await http_call();

        expect(response, `Did you return the data from your ${`GET`} request handler?`).to.equal(dbData);

    });
});
