'use strict';
/*
 * Вернуть индексы чисел, дающих в сумме target
 * Исходный массив отсортирован
 */

const sumTwo = (arr, target = 0) => {
  const res = [];

  if (arr.length < 2) return res;

  const hash = {};

  arr.forEach((item, i) => (hash[item] = i));

  for (let i = 0; i < arr.length; i++) {
    const rest = target - arr[i];

    if (hash[rest] && hash[rest] > i) {
      res.push([i, hash[rest]]);
    }
  }

  return res;
};

const sumTwo2 = (arr, target = 0) => {
  const res = [];

  if (arr.length < 2) return res;

  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] === target) break;

    if (i > 0 && arr[i] === arr[i - 1]) continue;

    let j = arr.length - 1;

    while (i < j) {
      const sum = arr[i] + arr[j];

      if (sum === target) {
        res.push([i, j]);
        j--;
        break;
      }

      if (sum > target) {
        j--;
        continue;
      }

      if (sum < target) break;
    }
  }

  return res;
};

const target = 17;
const nums = [2, 3, 6, 7, 10, 11, 15];

console.log(sumTwo(nums, target));
console.log(sumTwo2(nums, target));
