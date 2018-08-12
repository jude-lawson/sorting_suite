const assert = require('chai').assert;
const quicksort = require('../src/quicksort');

describe('Quicksort', () => {
  it('should be able to sort a simple array of numbers', () => {
    assert(quicksort([2,1]), [1,2]);
  });
});
