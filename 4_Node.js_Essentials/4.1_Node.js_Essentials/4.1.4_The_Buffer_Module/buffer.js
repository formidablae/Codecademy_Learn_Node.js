// Allocate buffer of size 15 filled with 'b'
const bufferAlloc = Buffer.alloc(15, 'b');

// Create buffer1 with 'hello' and buffer2 with 'world'
const buffer1 = Buffer.from('hello');
const buffer2 = Buffer.from('world');
  
// Combine buffer1 and buffer2
const bufferArray = [buffer1, buffer2];
const bufferConcat = Buffer.concat(bufferArray);

// Translate buffer to string
const bufferString = bufferConcat.toString();

// Uncomment the apropriate `console.log()` to ouput to console
console.log(bufferAlloc);
console.log('Buffer 1:', buffer1, 'Buffer 2:', buffer2)
console.log(bufferConcat);
console.log(bufferString);
