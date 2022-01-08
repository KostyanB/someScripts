// Проверка слов на анаграмму
const checkAnagram = (a, b) =>
  [...a.toLowerCase()].sort().toString() !==
  [...b.toLowerCase()].sort().toString();

console.log('friend', 'Finder', checkAnagram('friend', 'Finder'));
console.log('Buy', 'hello', checkAnagram('Buy', 'hello'));

const createCharObj = str => {
  const obj = {};
  // убираем небуквенные символы
  str = str.toLowerCase().replace(/[^\w]/g);
  for (let char of str) {
    obj[char] = obj[char] + 1 || 1;
  }
  return obj;
};

const checkAnagram2 = (str1, str2) => {
  const str1Obj = createCharObj(str1);
  const str2Obj = createCharObj(str2);

  if (Object.keys(str1Obj).length !== Object.keys(str2Obj).length) return false;

  for (const char in str1Obj) {
    if (str1Obj[char] !== str2Obj[char]) return false;
  }
  return true;
};

console.log('friend', 'Finder', checkAnagram2('friend', 'Finder'));
console.log('Buy', 'hello', checkAnagram2('Buy', 'hello'));
