'use strict';
/*
 *
 */
const arr1 = [
    10924, 46529, 5786, 57016, -78656, -64432, 31070, -43977, -25118, -97018,
    78636, 35624, 63477, -56885, 78283, -60592, -29345, 23425, -93296, -48755,
    95736, -47576, 8885, -25888, 5500, -15, 17805, -34481, 73951, 78608, -79995,
    -67666, -51972, 65058, -3023, 57, -78350, 81806, 9525, 81015, -34391,
    -49959, 34866,
  ],
  arr2 = [-12897, 14033, -10675, -98145, -2748, -83575];
const range1 = [
    [7, 8],
    [13, 39],
    [1, 37],
  ],
  range2 = [
    [0, 4],
    [4, 5],
    [2, 3],
    [3, 4],
    [0, 4],
  ];
function maxSum(arr, range) {
  const calcRange = border => {
    let sum = 0;
    for (let i = border[0]; i <= border[1]; i++) {
      sum += arr[i];
    }
    return sum;
  };

  let res = calcRange(range[0]);

  for (let i = 1; i <= range.length - 1; i++) {
    res = Math.max(res, calcRange(range[i]));
  }
  const res1 = Math.max(...range.map(item => calcRange(item)));
  return res1;
}

console.log('maxSum(arr1, range1): ', maxSum(arr1, range1));
console.log('maxSum(arr2, range2): ', maxSum(arr2, range2));

const maxSum2 = (arr, range) =>
  Math.max(
    ...range.map(i => arr.slice(i[0], i[1] + 1).reduce((a, b) => a + b), 0),
  );
