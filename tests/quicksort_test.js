const assert = require('chai').assert;
const quicksort = require('../src/quicksort');

describe('Quicksort', () => {
  it('should return the word quicksort', () => {
    assert.equal(quicksort(), 'quicksort');
  });
});
