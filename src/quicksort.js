const quicksort = (arr) => {
  let pivot = arr[arr.length - 1];
  let sortedArray = sortIt(arr, pivot);
  return sortedArray;
};

const sortIt = (currentArr, pivot) => {
  // Right side of pivot first
  let pivotIndex = currentArr.findIndex(pivot)
  console.log(pivotIndex);
  let right = currentArr.slice(pivotIndex);
  console.log(right)
  // Left side of pivot next
  // Base Case: If all on right is greater than pivot AND all on left is greater than pivot
  // Else call function again
};

module.exports = quicksort;
