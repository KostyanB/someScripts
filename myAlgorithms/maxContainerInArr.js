// max контейнер с водой между элементами массива
const arr1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]; //49
const arr2 = [1, 1]; //1
const arr3 = [4, 3, 2, 1, 4]; //16
const arr4 = [1, 2, 1]; //2

const maxContainer = arr => {
  let left = 0,
    right = arr.length - 1,
    volume = 0;

  while (left < right) {
    volume = Math.max(volume, Math.min(arr[left], arr[right]) * (right - left));

    arr[left] <= arr[right] ? left++ : right--;
  }

  return volume;
};

console.log('1 :', maxContainer(arr1));
console.log('2 :', maxContainer(arr2));
console.log('3 :', maxContainer(arr3));
console.log('4 :', maxContainer(arr4));
