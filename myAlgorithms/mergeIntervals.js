"use strict";

const int1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
// out [[1, 6], [8, 10], [15, 18]]
const int2 = [
  [6, 8],
  [1, 4],
  [11, 14],
  [2, 3],
  [5, 7],
  [1, 4],
  [8, 10],
];
// out [[1, 4], [5, 10], [11, 14]]
const int3 = [
  [1, 4],
  [4, 5],
];
// out [[1, 5]]
const int4 = [[1, 4]];
// out [[1, 4]]

const merge = intervals => {
  if (intervals.length < 2) return intervals;

  intervals.sort((prev, next) => prev[0] - next[0]);

  // merge through for-of
  // const result = [intervals[0]];
  // for (let interval of intervals) {
  //   const lastResult = result.at(-1);

  //   if (lastResult[1] >= interval[0]) {
  //     lastResult[1] = Math.max(lastResult[1], interval[1]);
  //   } else {
  //     result.push(interval);
  //   }
  // }

  // merge through reduce
  const result = intervals.reduce(
    (acc, item) => {
      const last = acc.at(-1);
      const isDuplicate = last[0] === item[0] && last[1] === item[1];

      if (isDuplicate) {
        return acc;
      } else if (last[1] >= item[0]) {
        last[1] = Math.max(last[1], item[1]);
        return acc;
      } else {
        return [...acc, item];
      }
    },
    [intervals[0]],
  );

  return result;
};

console.log("merge(int1): ", merge(int1));
console.log("merge(int2): ", merge(int2));
console.log("merge(int3): ", merge(int3));
console.log("merge(int4): ", merge(int4));
