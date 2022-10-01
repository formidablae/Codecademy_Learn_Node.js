const fs = require('fs');

let secretWord = null;

let readDataCallback = (err, data) => {
    if (err) {
        console.log(`Something went wrong: ${err}`);
    } else {
        console.log(`Provided file contained: ${data}`);
    }
}; 

fs.readFile('./fileOne.txt', 'utf-8', readDataCallback);
fs.readFile('./anotherFile.txt', 'utf-8', readDataCallback);
fs.readFile('./finalFile.txt', 'utf-8', readDataCallback);
secretWord = 'cheeseburgerpizzabagels';
