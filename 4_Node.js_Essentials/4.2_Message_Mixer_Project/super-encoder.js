// Import the encryptors functions here.
const { caesarCipher, symbolCipher, reverseCipher } = require('./encryptors.js');

const encodeMessage = (str, amount) => {
    // Use the encryptor functions here.
    return reverseCipher(symbolCipher(caesarCipher(str, amount)));
}

const decodeMessage = (str, amount) => {
    // Use the encryptor functions here.
    return caesarCipher(reverseCipher(symbolCipher(str)), -amount);
}

// User input / output.

const handleInput = (userInput) => {
    const str = userInput.toString().trim();
    let amount = Number(process.argv[3]);
    amount = isNaN(amount) ? 6 : amount
    let output;
    if (process.argv[2] === 'encode') {
        output = encodeMessage(str, amount);
    }
    if (process.argv[2] === 'decode') {
        output = decodeMessage(str, amount);
    }

    process.stdout.write(output + '\n');
    process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);
