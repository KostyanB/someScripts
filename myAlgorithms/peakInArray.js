// пик массива
const arr1 = [1, 2, 3, 4, 5, 4, 3, 1];
const arr2 = [11, 13, 14, 15, 4, 3, 1];
const arr3 = [10, 9, 8, 7, 3, 1];

const peakIndexInArray = arr => {
  let start = 0,
    end = arr.length - 1;

  while (start < end) {
    const middle = Math.floor((start + end) / 2);

    if (arr[middle] < arr[middle + 1]) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }

  return start;
};

console.log(peakIndexInArray(arr1));
console.log(peakIndexInArray(arr2));
console.log(peakIndexInArray(arr3));
