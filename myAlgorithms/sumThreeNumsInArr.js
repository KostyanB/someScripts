'use strict';
/*
 * В результирующем массиве д/быть уникальные комбинации
 */

const nums = [-1, 0, 1, 2, -1, -4];
// expected [[-1,-1,2], [-1,0,1]]

const sumThree = (arr, target = 0) => {
  const res = [];

  if (arr.length < 3) return res;

  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] === target) break;

    if (i > 0 && arr[i] === arr[i - 1]) continue;

    let j = i + 1,
      k = arr.length - 1;

    while (j < k) {
      const sum = arr[i] + arr[j] + arr[k];

      if (sum === target) {
        res.push([arr[i], arr[j], arr[k]]);

        while (arr[j] === arr[j + 1]) j++;
        while (arr[k] === arr[k + 1]) k++;

        j++;
        k--;
        continue;
      }

      if (sum < target) {
        j++;
        continue;
      }

      if (sum > target) {
        k--;
        continue;
      }
    }
  }

  return res;
};

console.log(sumThree(nums));
