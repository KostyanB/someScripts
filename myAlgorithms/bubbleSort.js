'use strict';
/*
 * one(plus(two())))
 */
const nums = [1, 7, 5, 13, 8, -7, 25, 2, 17, 9, -5, 32];

const bubbleSort = arr => {
  const count = arr.length - 1;

  for (let i = 0; i < count; i++) {
    for (let j = 0; j < count - i; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }

  return arr;
};

// console.log('bubbleSort(nums): ', bubbleSort(nums));

const shakerSort = arr => {
  const count = arr.length - 1;

  for (let i = 0; i < count; i++) {
    for (let j = 0; j < count - i; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }

    for (let k = count - i - 1; k > i; k--) {
      if (arr[k] < arr[k - 1]) [arr[k], arr[k - 1]] = [arr[k - 1], arr[k]];
    }
  }

  return arr;
};
console.log('shakerSort(nums2): ', shakerSort(nums));
