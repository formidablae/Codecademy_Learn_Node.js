setTimeout(() => {
    const buffer1 = Buffer.from('Hello');
    const buffer2 = Buffer.from('learner');
    const bufferArray = [buffer1, buffer2];
    const bufferConcat = Buffer.concat(bufferArray);

    console.log(bufferConcat.toString());
}, 3000);
