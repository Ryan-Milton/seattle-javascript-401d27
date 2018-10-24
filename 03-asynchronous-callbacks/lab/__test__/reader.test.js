'use strict';

const reader = require('./../lib/reader.js');

describe('A function called "reader" will take in an array of file paths and and resolve the array as strings from those files from the array in the order that they are passed in.', () => {
  const pathwayOne = ['../data/mpe.txt', '../data/meenie.txt', '../data/eenie.txt'];
  const pathwayTwo = ['../data/meenie.txt', '../data/moe.txt', '../data/eenie.txt'];
  const contentsOfPathwayOne = [];

  describe('The reader function must return the contents of the file paths in the order that they are passed in.', () => {
    test('The function works properly', (done) => {

      function fileContents(err, contents) {
        console.log(contents);
        expect(contents).toBe(contentsOfPathwayOne);
        done();
      }

      reader(pathwayOne, fileContents);
      reader(pathwayTwo, fileContents);

    });
  });
});