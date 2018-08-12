const assert = require('chai').assert;
const bubbleSort = require('../src/bubble_sort');


describe('Bubble Sort', () => {
  it('should be able to sort a simple array in ascending order', () => {
    assert.deepEqual(bubbleSort([2,1]), [1,2])
  });

  it('should be able to sort a three item array', () => {
    assert.deepEqual(bubbleSort([2,1,3]), [1,2,3]);
  }); 

  it('should be able to sort an array sorted in descending order back to ascending order', () => {
    assert.deepEqual(bubbleSort([4,3,2,1]), [1,2,3,4])
  });

  it('should support sorting neighboring numbers that equal each other', () => {
    // assert.deepEqual(bubbleSort([3,2,1,1]), [1,1,2,3]);
    // assert.deepEqual(bubbleSort([2,1,1,3]), [1,1,2,3]);
    // assert.deepEqual(bubbleSort([4,2,1,1,3]), [1,1,2,3,4]);
    assert.deepEqual(bubbleSort([1,1,3,2]), [1,1,2,3]);
  });

  it('should be able to sort a large and complex array', () => {
    let largeAndComplexArray = [
      1, 234, 5, 7, 29, 0, 1, 87, 23, 54, 23, 12345, 1, 2, 3, 4, 5, 6, 7, 9, 10,
      4, 5, 6, 7, 8, 9, 1, 11, 12, 13, 14, 15, 16, 17, 21, 2, 22, 23, 24, 25, 26, 27, 28, 29, 30
    ];

    let sortedLargeAndComplexArray = [
      0, 1, 1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 6, 6, 7, 7, 7, 8, 9, 9, 10, 11, 12, 13, 14, 15, 16, 17,
      21, 22, 23, 23, 23, 24, 25, 26, 27, 28, 29, 29, 30, 54, 87, 234, 12345
    ];
    assert.deepEqual(bubbleSort(largeAndComplexArray), sortedLargeAndComplexArray)
  });
});
