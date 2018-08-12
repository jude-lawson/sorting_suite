const assert = require('chai').assert;
const bubbleSort = require('../src/bubble_sort');
describe('Bubble Sort', () => {
  it('should return a simple string for now', () => {
    assert.equal(bubbleSort(), 'Bubble Sort');
  });
});
