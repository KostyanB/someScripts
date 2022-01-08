// сбор воды (алгоритм 2-х указателей)
const arr1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]; //6
const arr2 = [4, 2, 0, 3, 2, 5]; //9

const trap = height => {
  let maxLeft = height[0],
    maxRight = height.at(-1);

  let left = 1,
    right = height.length - 2,
    total = 0;

  while (left <= right) {
    if (maxLeft <= maxRight) {
      maxLeft = Math.max(maxLeft, height[left]);
      total += maxLeft - height[left];
      left++;
    } else {
      maxRight = Math.max(maxRight, height[right]);
      total += maxRight - height[right];
      right--;
    }
  }

  return total;
};

console.log('1 :', trap(arr1));
console.log('2 :', trap(arr2));
