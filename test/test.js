// jshint esversion:6
const chai = require('chai');
chai.should();
chai.expect();
const bs = require('../index.js');

let unsortedArr = [8, 6, 7, 5, 3, 0, 9];
let sortedArr = [0, 3, 5, 6, 7, 8, 9];

describe('index', () => {
  it('should be a function', () => {
    bs.should.be.a.function;
  });
  it('should be an array', () => {
    bs(unsortedArr).should.be.an('array');
  });
  it('unsortedArr should equal to sortedArr', () => {
    bs(unsortedArr).should.deep.equal(sortedArr);
  });
});