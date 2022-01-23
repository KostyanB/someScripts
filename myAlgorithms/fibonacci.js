'use strict';
const num = 7;
// recursion
const fibRecursion = n =>
  n <= 0 ? 0 : n <= 2 ? 1 : fibRecursion(n - 1) + fibRecursion(n - 2);

// classic cycle
const fibClassic = n => {
  if (n <= 0) return 0;

  const res = [0, 1];

  for (let i = 2; i <= n; i++) {
    const prev = res[i - 2],
      next = res[i - 1];

    res.push(prev + next);
  }

  return res.at(-1);
};
// ! optimal cycle without recursion
const fibCycle = n => {
  if (n <= 0) return 0;

  let a = 1,
    b = 1;

  for (let i = 3; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
};

console.log('fibRecursion: ', fibRecursion(num));
console.log('fibClassic: ', fibClassic(num));
console.log('fibCycle: ', fibCycle(num));
