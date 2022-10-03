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

        let varLearnerDeclares;
        let learnerVariableName = 'querystring';
        try {
            varLearnerDeclares = appModule.__get__(learnerVariableName);
        } catch (e) {
            expect(true, `Did you import the \`${learnerVariableName}\` module?`).to.equal(false);
        }

    });
});
