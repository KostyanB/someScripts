// поиск в отсортированном и сдвинутом массиве
/*
 * на сколько сдвинут - неизвестно
 * если нет числа, то -1
 */
const arr = [4, 5, 6, 7, 0, 1, 2];

const search = (arr, target) => {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) return middle;

    //проверка, отсортирована ли половинка arr
    if (arr[left] < arr[middle]) {
      if (arr[left] <= target && target <= arr[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      if (arr[middle] <= target && target <= arr[right]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return -1;
};

console.log(search(arr, 1));
console.log(search(arr, 3));
console.log(search(arr, 5));
