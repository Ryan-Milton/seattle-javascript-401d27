'use strict';

const greet = require('./lib/greet.js');
const arithmetic = require('./lib/arithmetic.js');

describe('Testing the greet function', () => {
  test('If a string is not entered null should be returned', () => {
    expect(greet(18)).toBe(null);
  });
  test('If nothing is passed in as an argument then hello world should be returned', () => {
    expect(greet()).toBe('hello world');
  });
  test('If a string is passed as an argument then hello + that string should be returned', () => {
    expect(greet('world')).toBe('hello world');
  });
});


describe('Testing to see if you can add and/or subtract', () => {
  test('Are both parameters numbers?', () => {
    expect(arithmetic.add('1',2)).toBe(null);
  });
  test('Are both parameters numbers?', () => {
    expect(arithmetic.add(1,'2')).toBe(null);
  });
  test('Are both parameters numbers?', () => {
    expect(arithmetic.sub('1',2)).toBe(null);
  });
  test('Are both parameters numbers?', () => {
    expect(arithmetic.sub(1,'2')).toBe(null);
  });
  test('Add both numbers', () => {
    expect(arithmetic.add(2,2)).toBe(4);
  });
  test('Subtract both numbers', () => {
    expect(arithmetic.sub(4,2)).toBe(2);
  });
});