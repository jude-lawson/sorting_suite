const assert = require('chai').assert;
const bubbleSort = require('../src/bubble_sort');


describe('Bubble Sort', () => {
  it('should be able to sort a simple array in ascending order', () => {
    assert.deepEqual(bubbleSort([2,1]), [1,2])
  })
});
