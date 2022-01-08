// пересечение массивов
const arr1 = [1, 2, 2, 1];
const arr2 = [2, 2];
//out [2,2]
const arr3 = [4, 9, 5];
const arr4 = [9, 4, 9, 8, 4];
//out [4,9] or [9,4]

const intersect = (nums1, nums2) => {
  const map = {},
    res = [];

  nums1.forEach(num => (map[num] = map[num] ? map[num] + 1 : 1));

  nums2.forEach(num => {
    if (map[num] && map[num] > 0) {
      res.push(num);
      map[num] -= 1;
    }
  });

  return res;
};
console.log(intersect(arr1, arr2));
console.log(intersect(arr4, arr3));
