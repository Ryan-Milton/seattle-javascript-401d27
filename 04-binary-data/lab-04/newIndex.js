'use strict';

// console.log('inside the filez');
// console.log(process.argv);

const fs = require('fs');

class Bitmap{
  constructor(filePath) {
    this.path = filePath;
  }

  //buffer is a data type that is retrieved from using the fs.readFile()
  //parse() is intended to parse on the type of the file
  parse(buffer) {
    this.type = buffer.toString('utf-8',0,2);
    this.buffer = buffer;
  }

  //transform creates a new file path 
  transform(callback) {
    transformDictionary[callback](this);
    this.newFile = this.path.replace(/\.bmp/, `.${callback}.bmp`);
  }
}

const copyPaste = (bmp) => {
  console.log('Copy Pasta! Hot and ready!.');
};

const overCast = (bmp) => {
  console.log('This is how you look on a typical Seattle day.');
  for(let i = 122; i < 1146; i += 4) {
    let avg = (bmp.buffer[i] + bmp.buffer[i + 1] + bmp.buffer[i + 2]) / 3;
    bmp.buffer[i] = avg;
    bmp.buffer[i +1] = avg;
    bmp.buffer[i +2] = avg;
  }
};

const overWrite = (bmp) => {
  console.log('The pen is mighty!');
  // bmp.buffer.write('I\'m overwriting your file.');
  bmp.buffer = Buffer.from('You\'re file has been overwritten!');
};

//an object containing different methods for transformation
const transformDictionary = {
  //TODO: Make a greyscale transformation function in the future
  copy: copyPaste,
  write: overWrite,
  seattle: overCast,
};

function readFileAndTransform() {
  
  fs.readFile(file, (err, buffer) => {
    if(err) throw err;

    baldy.parse(buffer);

    //callback still needs to be created, refer back to transformDictionary
    baldy.transform(callback);
    
    fs.writeFile(baldy.newFile, baldy.buffer, (err, out) => {
      if(err) throw err;
      console.log(`Bitmap Transformed: ${baldy.newFile}`);
    });
  });
}

const [file, callback] = process.argv.slice(2);

let baldy = new Bitmap(file);

readFileAndTransform();