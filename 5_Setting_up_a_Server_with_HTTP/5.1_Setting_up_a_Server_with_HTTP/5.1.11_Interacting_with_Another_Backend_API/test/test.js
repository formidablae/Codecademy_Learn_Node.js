console.log = function () { };
const { expect } = require('chai');
const rewire = require('rewire');

describe('', function (done) {
    it('', function () {
        const logged = [];
        const consoleMock = {
            console: {
                log: (...args) => logged.push(...args)
            }
        };

        let appModule;
        try {
            appModule = rewire('../app.js');
        } catch (e) {
            expect(true, 'Try checking your code again. You likely have a syntax error.').to.equal(false);
        }

        appModule.__set__(consoleMock);

        let functionThatLogs;
        let learnerFunctionName = 'handleGetRequest';
        try {
            functionThatLogs = appModule.__get__(learnerFunctionName);
        } catch (e) {
            expect(true, `Did you declare a \`${learnerFunctionName}\` function?`).to.equal(false);
        }
        functionThatLogs();
        setTimeout(() => {
            expect(logged, 'Did you log ...?' + logged[0]).to.include('<Logged message>');
            done();
        }, 3000);
        // expect(logged[0], 'Did you log ...?').to.include('<Logged message>');
    });
});
