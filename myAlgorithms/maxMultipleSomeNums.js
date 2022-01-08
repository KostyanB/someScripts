/*Max произведение n последовательных чисел в строке
 */
const n = 5;
const str1 = '25767898846639255489962447852191458';
const str2 = '6879431564632165466513544131';

const maxMultiple = (str, count) => {
  let res = 0;
  str = str.split('');

  for (let i = 0; i <= str.length - 5; i++) {
    const currRes = str
      .slice(i, i + count)
      .reduce((acc, num) => (acc *= num), 1);
    res = Math.max(res, currRes);
  }

  return res;
};
console.log(maxMultiple(str1, n));
console.log(maxMultiple(str2, n));
