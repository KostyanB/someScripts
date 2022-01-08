// Binary search
const nums = [-1, 0, 3, 5, 7, 9, 12];

const binSearch = (arr, target) => {
  let left = 0,
    right = arr.length - 1,
    mid;

  while (left <= right) {
    mid = Math.round((right - left) / 2) + left;

    if (target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
console.log(binSearch(nums, 9));
console.log(binSearch(nums, 3));
console.log(binSearch(nums, 6));
