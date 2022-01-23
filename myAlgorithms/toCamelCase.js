'use strict';
/*
 *
 */
function toCamelCase(str) {
  const [first, ...arr] = str.split(/-|_/g);

  return arr.reduce(
    (acc, word) => (acc += word.charAt(0).toUpperCase() + word.slice(1)),
    first,
  );
}

const toCamelCase1 = str =>
  str.replace(/[-|_]\w/gi, match => match.charAt(1).toUpperCase());

console.log(toCamelCase1('the_stealth_warrior'));
console.log(toCamelCase1('The-Stealth-Warrior'));
