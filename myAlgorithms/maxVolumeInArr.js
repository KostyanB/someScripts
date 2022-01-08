'use strict';

/*
 * Найти максимальный объем контейнера между двумя линиями
 * В массиве высоты
 * Расстояние между линиями 1
 * Max длина массива 2-100k, max высота 0-10k
 */

const input1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]; //49
const input2 = [1, 1]; //1
const input3 = [4, 3, 2, 1, 4]; //16
const input4 = [1, 2, 2]; // 2
const input5 = [0, 0, 100]; // 0

const calcMaxArea = arr => {
  let maxArea = 0;
  // через перемещение 2-х указателей O(n)
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const volume = Math.min(arr[left], arr[right]) * (right - left);

    maxArea = Math.max(volume, maxArea);

    arr[left] < arr[right] ? left++ : right--;
  }

  // перебор всех пар O(n^2)
  // for (let i = 0; i < arr.length; i++) {
  //   for (let k = 0; k < arr.length; k++) {
  //     const volume = Math.min(arr[i], arr[k]) * Math.abs(i - k);
  //     maxArea = Math.max(volume, maxArea);
  //   }
  // }

  return maxArea;
};

console.log(input1, calcMaxArea(input1));
console.log(input2, calcMaxArea(input2));
console.log(input3, calcMaxArea(input3));
console.log(input4, calcMaxArea(input4));
console.log(input5, calcMaxArea(input5));
