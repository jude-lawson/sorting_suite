const bubbleSort = (arr) => {
  let result = swapIt(arr);

  if (result[0] === true) {
    bubbleSort(result[1]);
  }

  console.log(result);

  return result[1];
};

function swapIt(arr, previousIndex = 0, nextIndex = 1) {
  let previousNumber = arr[previousIndex];
  let nextNumber = arr[nextIndex];
  let wasSwapped;

  console.log(previousIndex, nextIndex)
  console.log(arr);

  if (previousNumber > nextNumber && (wasSwapped === true || wasSwapped === undefined)) {
    wasSwapped = true;
    arr[previousIndex] = nextNumber;
    arr[nextIndex] = previousNumber;
    newPreviousIndex = previousIndex += 1;
    newNextIndex = nextIndex += 1;
    swapIt(arr, newPreviousIndex, newNextIndex);
  } else {
    wasSwapped = false;
  }

  return [wasSwapped, arr];
}

module.exports = bubbleSort;
