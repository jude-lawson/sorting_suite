const bubbleSort = (originalArr) => {
  // let previousNumber = arr[previousIndex];
  // let nextNumber = arr[nextIndex];

  // console.log(arr);

  // if (previousNumber > nextNumber) {
  //   arr[previousIndex] = nextNumber;
  //   arr[nextIndex] = previousNumber;
  //   bubbleSort(arr);
  // }

  let result = sortIt(originalArr);

  console.log(result);

  return result[1];
};

function sortIt(arr, previousIndex = 0, nextIndex = 1) {
  let previousNumber = arr[previousIndex];
  let nextNumber = arr[nextIndex];

  console.log(arr);

  if (previousNumber > nextNumber) {
    arr[previousIndex] = nextNumber;
    arr[nextIndex] = previousNumber;
    sortIt(arr);
  }

  return [false, arr];
}

module.exports = bubbleSort;
