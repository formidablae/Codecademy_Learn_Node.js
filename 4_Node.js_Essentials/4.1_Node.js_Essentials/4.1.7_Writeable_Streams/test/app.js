const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
    input: fs.createReadStream('shoppingList.txt')
});
