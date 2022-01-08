// валидация скобок в строке
const str1 = '()'; //true
const str2 = '()[]{}'; //true
const str3 = '(]'; //false
const str4 = '{[]}'; //true
const str5 = '([)]'; //false
const str6 = '{[[]{}]}()()'; //true

const validateBrackets = str => {
  const stack = [];

  const brackets = {
    ']': '[',
    ')': '(',
    '}': '{',
  };

  const isClosedBracket = char => [']', ')', '}'].includes(char);

  for (const current of str) {
    if (isClosedBracket(current)) {
      if (brackets[current] !== stack.pop()) return false;
    } else {
      stack.push(current);
    }
  }

  return !stack.length;
};

console.log(str1, validateBrackets(str1));
console.log(str2, validateBrackets(str2));
console.log(str3, validateBrackets(str3));
console.log(str4, validateBrackets(str4));
console.log(str5, validateBrackets(str5));
console.log(str6, validateBrackets(str6));
