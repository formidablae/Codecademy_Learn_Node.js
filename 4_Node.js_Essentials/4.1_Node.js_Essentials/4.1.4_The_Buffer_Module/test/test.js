console.log = function () { };
const { expect } = require('chai');
const rewire = require('rewire');

describe('', function () {
    it('', function () {
        let appModule;
        try {
            appModule = rewire('../buffer.js');
        } catch (e) {
            expect(true, 'Try checking your code again. You likely have a syntax error.').to.equal(false);
        }

        let varLearnerDeclares;
        let bufferAlloc = 'bufferAlloc';
        try {
            varLearnerDeclares = appModule.__get__(bufferAlloc);
        } catch (e) {
            expect(true, `Did you declare a \`${bufferAlloc}\` variable?`).to.equal(false);
        }

        expect(varLearnerDeclares, 'Did you save a `Buffer` to `bufferAlloc` ?').to.be.an.instanceOf(Buffer);
        expect(varLearnerDeclares, 'Did you pass a size of `15` and a fill of `b` to `Buffer.alloc()`?').to.have.lengthOf(15);
    });
});
