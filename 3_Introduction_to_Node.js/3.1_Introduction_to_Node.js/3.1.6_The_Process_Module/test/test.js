console.log = function () { }
const { expect } = require('chai');
const rewire = require('rewire');
var sinon = require('sinon')
var memoryUsageSpy = sinon.spy(process, "memoryUsage")

describe('', function () {
  it('', function () {
    let appModule;
    try {
        appModule = rewire("../app.js")
    } catch (e) {
        expect(true, 'Try checking your code again. You likely have a syntax error.').to.equal(false);
    }
    appModule.__set__("process.memoryUsage", () => {return {heapTotal: 89}});

    let initialMemory;
    try {
        initialMemory = appModule.__get__("initialMemory");
    } catch (e) {
        expect(true, 'Did you accidentally delete `initialMemory`?').to.equal(false);
    }

    expect(memoryUsageSpy.callCount, "Did you invoke `process.memoryUsage()` in order to get the value of the `heapUsed` property of the object returned from that method?").to.equal(3)
    expect(initialMemory, 'Did you assign to `initialMemory` the value of the `heapUsed` property?').to.be.a('number')
  });
});
