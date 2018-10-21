'use strict';

const overCast = (bmp) => {
  console.log('This is how you look on a typical Seattle day.');
  for(let i = 122; i < 1146; i += 4) {
    let avg = (bmp.buffer[i] + bmp.buffer[i + 1] + bmp.buffer[i + 2]) / 3;
    bmp.buffer[i] = avg;
    bmp.buffer[i +1] = avg;
    bmp.buffer[i +2] = avg;
  }
};

module.exports = overCast;