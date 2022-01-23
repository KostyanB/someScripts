'use strict';
/*
 * построить башню из '*'
 * задано количество этажей > 0
 */
// function towerBuilder(nFloors) {
//   return [...Array(nFloors)].map((_, i) => {
//     const spaces = ' '.repeat(nFloors - 1 - i);
//     return spaces + '*'.repeat(i * 2 + 1) + spaces;
//   });
// }

// function towerBuilder(nFloors) {
//   const res = [];

//   for (let i = 0; i < nFloors; i++) {
//     const spaces = ' '.repeat(nFloors - 1 - i);
//     res.push(spaces + '*'.repeat(i * 2 + 1) + spaces);
//   }
//   return res;
// }

function towerBuilder(nFloors) {
  let block = '*';
  let spaces = ' '.repeat(nFloors - 1);

  const createFloor = () => spaces + block + spaces;

  const res = [createFloor()];

  for (let i = 1; i < nFloors; i++) {
    spaces = spaces.slice(1);
    block += '**';
    res.push(createFloor());
  }
  return res;
}
console.log(towerBuilder(3));
console.log(towerBuilder(8));
