// первый уникальный символ в строке
const str1 = 'leetcode'; //0
const str2 = 'loveleetcode'; //2
const str3 = 'aabb'; //-1

const firstUniqueChar = str => {
  const map = {};

  // for (let i = 0; i < str.length; i++) {
  // map[str[i]] = map[str[i]] ? map[str[i]] + 1 : 1;
  // }

  Array.from(str).forEach(ch => (map[ch] = map[ch] ? map[ch] + 1 : 1));

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] === 1) return i;
  }

  return -1;
};

console.log(firstUniqueChar(str1));
console.log(firstUniqueChar(str2));
console.log(firstUniqueChar(str3));
