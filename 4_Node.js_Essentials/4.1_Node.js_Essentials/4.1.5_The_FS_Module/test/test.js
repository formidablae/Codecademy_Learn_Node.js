console.log = function () { }
const { expect } = require('chai');
const rewire = require('rewire');

describe('', function () {
    it('', function () {
        let appModule;
        try {
            appModule = rewire("../app.js")
        } catch (e) {
            expect(true, 'Try checking your code again. You likely have a syntax error.').to.equal(false);
        }

        let secretWord;
        try {
            secretWord = appModule.__get__("secretWord");
        } catch (e) {
            expect(true, 'Did you accidentally delete `secretWord`?').to.equal(false);
        }

        expect(secretWord, 'Did you figure out the secret word and assign it to the `secretWord` variable in app.js?').to.equal('cheeseburgerpizzabagels')
    });
});
