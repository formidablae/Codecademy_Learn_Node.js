console.log = function () { }
const { expect } = require('chai');
const rewire = require('rewire');
const sinon = require('sinon');
const readline = require('readline')
const fs = require('fs')
let readlineSpy = sinon.spy(readline, 'createInterface')
let fsSpy = sinon.spy(fs, 'createReadStream')

describe('', function () {
    it('', function () {
        try {
            var appModule = rewire("../app.js");
        } catch (e) {
            expect(true, 'Double check your code. It likely has a syntax error.').to.equal(false);
        }

        let myInterface
        try {
            myInterface = appModule.__get__("myInterface");
        } catch (e) {
            expect(true, 'Did you declare a `myInterface` variable?').to.equal(false);
        }

        expect(readlineSpy.called, 'Did you invoke `readline.createInterface()`?').to.be.true;

        expect(fsSpy.called, 'Did you invoke `fs.createReadStream()`?').to.be.true;

        expect(fsSpy.args[0][0].includes('shoppingList.txt'), "Did you set the `input` to be `fs.createReadStream()` invoked with 'shoppingList.txt'?").to.be.true
    });
});
