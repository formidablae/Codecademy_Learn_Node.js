console.log = function () { };
const { expect } = require('chai');
const rewire = require('rewire');
const URL = require('url');

describe('', function () {
    it('', function () {
        let appModule;
        try {
            appModule = rewire('../app.js');
        } catch (e) {
            expect(true, 'Try checking your code again. You likely have a syntax error.').to.equal(false);
        }

        let varLearnerDeclares;
        let learnerVariableName = 'url';
        try {
            varLearnerDeclares = appModule.__get__(learnerVariableName);
        } catch (e) {
            expect(true, `Did you declare a \`${learnerVariableName}\` variable?`).to.equal(false);
        }

        const url = URL.parse(varLearnerDeclares);

        const pathParts = url.pathname.slice(1).split('/');

        if (pathParts.length === 2) {
            expect(pathParts[1], 'Did you add the path parameter of `25` to the end of the url?').to.equal('25');
        } else {
            expect(pathParts.length, 'Did you add the path parameter to the end of the url?').to.equal(2);
        }

    });
});
