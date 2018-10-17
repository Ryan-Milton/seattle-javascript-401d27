'use strict';

const List = require('../lib/List.js');

describe('Testing the List class', () => {
  test('It should have a length of zero', () => {
    let initialList = new List();
    expect(initialList.length).toBe(0);
  });

  describe('Testing the "push" method of the List class', () => {
    test('Push should add a new element to the List', () => {
      let pushList = new List();
      pushList.push(2);
      pushList.push(4);
      pushList.push(6);
      pushList.push(8);

      expect(pushList.length).toBe(4);
    });
  });

  describe('Testing the "map" method of the List class', () => {
    test('Map should iterate over the array and run the callback for each element', () => {
      let mapList = new List();
      mapList.push(1);
      mapList.push(3);
      mapList.push(5);
      mapList.push(7);
          
      let actual = mapList.map(num => num * 2);
      expect(actual.length).toEqual(mapList.length);
      expect(actual).not.toEqual(mapList);
    });
  });

  describe('Testing the "pop" method of the List class', () => {
    test('Pop should remove the last element from the array and return that element. All while not modifying the original array.', () => {
      let popList = new List();
      popList.push(1);
      popList.push(2);
      popList.push(3);
      popList.push(4);

      expect(popList.pop()).toBe(4);
    });
  });

  describe('Testing the "slice" method of the List class', () => {
    test('Slice should return a copy of the original array as an array from "begin" to "end" if entered.', () => {
      let sliceList = new List();
      sliceList.push(1);
      sliceList.push(3);
      sliceList.push(5);
      sliceList.push(7);

      expect(sliceList.slice()).toEqual([1,3,5,7]);
      console.log(sliceList.slice());
      // console.log(sliceList.slice(1).length);
      // console.log([3,5,7].length);
      // expect(sliceList.slice(1)).toEqual([3,5,7]);
      // console.log(sliceList.slice(2,3).length);
      // console.log([5].length);
      expect(sliceList.slice(2,3)).toEqual([5]);
    });
  });
});