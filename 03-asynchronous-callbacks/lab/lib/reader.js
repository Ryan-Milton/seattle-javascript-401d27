'use strict';

const fs = require('fs');

function reader(arrOfPaths, callback) {
  // if(!Array.isArray(arrOfPaths)) throw new Error('An array must be entered.');
  // if(arrOfPaths.length < 0) throw new Error('A file path must be entered.');
  // if(callback === undefined) throw new Error('This callback is returning undefined.');

  const gotYourData = (err, contents) => {
    if(err) {
      callback(err);
      return;
    }
    callback(null, contents.toString());
  };

  for(let i = 0; i < arrOfPaths.length; i++){
    console.log(arrOfPaths[i]);
    // console.log(gotYourData);
    fs.readFile(arrOfPaths[i], gotYourData);
  }
}

module.exports = reader;