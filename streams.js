const fs = require('fs');

const readStream = fs.createReadStream ('./docs/blog2.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream ('./docs/blog3.txt');


// Pass data from one file to another using stream
// readStream.on('data', (chunk) => {
//      console.log('..............NEW CHUNK .....................', chunk);
//      console.log(chunk);
//      writeStream.write('\nNew Chunk\n');
//      writeStream.write(chunk);
// })


// Pipes for passs through passing data

readStream.pipe(writeStream);