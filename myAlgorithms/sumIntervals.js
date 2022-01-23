'use strict';
'use strict';

const int1 = [
  [1, 2],
  [6, 10],
  [11, 15],
]; // => 9

const int2 = [
  [1, 4],
  [7, 10],
  [1, 4],
  [3, 5],
]; // => 7

const int3 = [
  [1, 5],
  [10, 20],
  [1, 6],
  [16, 19],
  [5, 11],
]; // => 19

const sumIntervals = intervals =>
  intervals
    .sort((prev, next) => prev[0] - next[0])
    .reduce(
      (acc, arr) => {
        const last = acc[acc.length - 1];
        const isDuplicate = last[0] === arr[0] && last[1] === arr[1];

        if (isDuplicate) {
          return acc;
        } else if (last[1] >= arr[0]) {
          last[1] = Math.max(last[1], arr[1]);
          return acc;
        } else {
          return [...acc, arr];
        }
      },
      [intervals[0]],
    )
    .reduce((acc, arr) => (acc += arr[1] - arr[0]), 0);

// console.log(int1, sumIntervals(int1));
// console.log('************');
console.log(int2, sumIntervals(int2));
// console.log(int3, sumIntervals(int3));
