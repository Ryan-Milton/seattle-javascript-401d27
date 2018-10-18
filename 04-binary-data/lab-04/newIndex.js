'use strict';

const fs = require('fs');

class Bitmap{
  constructor(filePath) {
    this.path = filePath;
  }

  //buffer is a data type that is retrieved from using the fs.readFile()
  //parse() is intended to parse on the type of the file
  parse(buffer) {
    this.type = buffer.toString('utf-8',0,2);
  }

  //transform creates a new file path 
  transform(callback) {
    transformDictionary[callback](this);
    this.newFile = this.file.replace(/\.bmp/, `.${callback}.bmp`);
  }
}

//an object containing different methods for transformation
const transformDictionary = {
  //TODO: Make a greyscale transformation function in the future
  greyscale: transformGreyscale
};

const transformGreyscale = (bmp) => {
  console.log('Transforming bitmap into greyscale.', bmp);
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