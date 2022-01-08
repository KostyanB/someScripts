// Поиск max палиндрома в строке
const str1 = 'babad'; // 'bab' | 'aba'
const str2 = 'cbbd'; // 'bb'
const str3 = 'mississippi'; // ''ississi
const str4 = 'ac'; // 'a' | 'c'

const longestPalindrom = str => {
  let start = 0,
    end = 0;

  const expandFromCenter = (str, left, right) => {
    while (left >= 0 && right <= str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };

  for (let i = 0; i < str.length; i++) {
    // длина для начальной позиции на букве
    const length1 = expandFromCenter(str, i, i);
    // длина для начальной позиции между буквами
    const length2 = expandFromCenter(str, i, i + 1);

    const currLength = Math.max(length1, length2);

    if (currLength > end - start) {
      start = Math.ceil(i - (currLength - 1) / 2);
      end = Math.floor(i + currLength / 2);
    }
  }

  return str.substring(start, end + 1);
};

console.log(longestPalindrom(str1));
console.log(longestPalindrom(str2));
console.log(longestPalindrom(str3));
console.log(longestPalindrom(str4));
