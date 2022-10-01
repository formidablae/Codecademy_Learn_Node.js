console.log = function () { }
const { expect } = require('chai');
const rewire = require('rewire');
const sinon = require('sinon');
const readline = require('readline')
const fs = require('fs')
let fsSpy = sinon.spy(fs, 'createWriteStream')

describe('', function () {
    it('', function () {
        try {
            var appModule = rewire("../app.js");
        } catch (e) {
            expect(true, 'Double check your code. It likely has a syntax error.').to.equal(false);
        }

        let fileStream
        try {
            fileStream = appModule.__get__("fileStream");
        } catch (e) {
            expect(true, 'Did you declare a `fileStream` variable?').to.equal(false);
        }
        expect(fsSpy.called, 'Did you invoke `fs.createWriteStream()`?').to.be.true;
        expect(fsSpy.args[0][0].includes('shoppingResults.txt'), "Did you invoke `fs.createWriteStream()` with `'shoppingResults.txt'`?").to.be.true
    });
});
