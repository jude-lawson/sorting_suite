const bubbleSort = (arr) => {
  let wasSwapped = false;

  arr.forEach((currentNumber, index, numbers) => {
    if(currentNumber > numbers[index + 1]) {
      numbers[index] = numbers[index + 1];
      numbers[index + 1] = currentNumber;
      wasSwapped = true;
    }
  });

  if (wasSwapped === true) {
    bubbleSort(arr);
  }

  return arr;
};

module.exports = bubbleSort;
