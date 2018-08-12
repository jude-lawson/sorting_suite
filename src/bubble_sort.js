const bubbleSort = (arr) => {
  let previousIndex = 0
  let nextIndex = 1
  let previousNumber = arr[previousIndex];
  let nextNumber = arr[nextIndex];

  console.log(arr);

  if (previousNumber > nextNumber) {
    arr[previousIndex] = nextNumber;
    arr[nextIndex] = previousNumber;
    bubbleSort(arr);
  }

  return arr;
};

module.exports = bubbleSort;
