console.log = function () { };
const { expect } = require('chai');
const rewire = require('rewire');

describe('', function () {
    it('', function () {
        let appModule;
        try {
            appModule = rewire('../app.js');
        } catch (e) {
            expect(true, 'Try checking your code again. You likely have a syntax error.').to.equal(false);
        }

        let serverObject;
        let learnerVariableName = 'server';
        try {
            serverObject = appModule.__get__(learnerVariableName);
        } catch (e) {
            expect(true, `Did you declare a \`${learnerVariableName}\` variable or function?`).to.equal(false);
        }
        expect(serverObject, 'check1').to.be.a('object');
        expect(serverObject, 'Did you add a key named `type`?').to.have.property('type', 'os.type()');
        expect(serverObject, 'Did you add a key named `architecture`?').to.have.property('architecture', 'os.arch()');
        expect(serverObject, 'Did you add a key named `uptime`?').to.have.property('uptime', 'os.uptime()');
    });
});
