const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
    input: fs.createReadStream('shoppingList.txt')
});

const fileStream = fs.createWriteStream('shoppingResults.txt');

/**
 * transformData should expect to receive some data (we named our parameter line)
 * and it should write() to the writable stream (fileStream) in the format
 * They were out of: [line]\n,
 * where [line] is the argument passed into the function.
 * 
 * @param {string} line
 */
function transformData(line) {
    fileStream.write(`They were out of: ${line}\n`);
}

myInterface.on('line', transformData);
