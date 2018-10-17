'use strict';

class List {
  constructor() {
    this.length = 0;
  }

  push(value) {
    this[this.length] = value;
    this.length++;
    return this.length;
  }

  map(callback) {
    let newList = new List();
    for(let i = 0; i < this.length; i++) {
      newList.push( callback( this[i] ) );
    }
    return newList;
  }

  pop() {
    // removes the last element from an array
    // modifies the length of the array
    // returns that element

    // +++++++ FIRST ATTEMPT ++++++++

    let lastElement = 0;
    for(let i = 0; i <= this.length; i++) {
      if(i === this.length) {
        console.log(i);
        lastElement = this[this.length -1];
        delete this[i];
        console.log(lastElement);
      }
    }
    console.log(this.length);
    return lastElement;
  }

  slice(beg, end) {
    // returns a new array based on the passed in value for the beggining and the end (if given)
    // does not modify the original array
  }
}

module.exports = List;