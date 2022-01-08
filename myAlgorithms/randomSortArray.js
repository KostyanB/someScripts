// случайная sort array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// O(n log n)
const shuffle1 = arr => [...arr].sort(() => 0.5 - Math.random());
// Fisher-Yates shuffle - O(n)
const shuffle = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[random]] = [arr[random], arr[i]];
  }
  return arr;
};

// run
for (let i = 0; i < 10; i++) {
  console.log(shuffle(arr).join(','));
}
for (let i = 0; i < 10; i++) {
  console.log(shuffle1(arr).join(','));
}
