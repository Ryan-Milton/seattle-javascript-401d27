'use strict';

const overWrite = (bmp) => {
  console.log('The pen is mighty!');
  bmp.buffer = Buffer.from('You\'re file has been overwritten!');
};

module.exports = overWrite;