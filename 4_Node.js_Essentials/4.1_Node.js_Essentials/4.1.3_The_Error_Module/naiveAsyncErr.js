const api = require('./api.js');

// Not an error-first callback
let callbackFunc = (data) => {
    console.log(`Something went right. Data: ${data}\n`);
};

try {
    api.naiveErrorProneAsyncFunction('problematic input', callbackFunc);
} catch (err) {
    console.log(`Something went wrong. ${err}\n`);
}
