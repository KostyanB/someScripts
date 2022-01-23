'use strict';
/*
 * Сортировка нечетных в массиве
 */
const arr1 = [7, 1];
//[1, 7]
const arr2 = [5, 8, 6, 3, 4];
//[3, 8, 6, 5, 4]
const arr3 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
//[1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
const arr4 = [12, 13, 17, -11, -9, -27, 39, 6, -24, 49];
//[ 12, -27, -11, -9, 13, 17, 39, 6, -24, 49 ]

const sortOddNum = arr => {
  const isOdd = num => num % 2 !== 0;

  const checkRest = pos => {
    for (let j = pos + 1; j <= arr.length - 1; j++) {
      if (isOdd(arr[j]) && arr[j] < arr[pos]) {
        [arr[pos], arr[j]] = [arr[j], arr[pos]];
      }
    }
  };

  arr.forEach((item, i) => {
    if (isOdd(item)) checkRest(i);
  });

  return arr;
};
// console.log(sortOddNum(arr1));
// console.log(sortOddNum(arr2));
// console.log(sortOddNum(arr3));
console.log(sortOddNum(arr4));
