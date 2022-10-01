let logs = []
console.log = param => logs.push(param)
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

        let myEmitter;
        try {
            myEmitter = appModule.__get__("myEmitter");
        } catch (e) {
            expect(true, 'Did you create a `myEmitter` variable?').to.equal(false);
        }
        let test = myEmitter instanceof require("events").EventEmitter

        expect(test, 'Did you assign `myEmitter` to be a `new` instance of `events.EventEmitter()`?').to.be.true
    });
});
