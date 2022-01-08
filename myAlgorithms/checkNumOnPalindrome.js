// Проверка числа - палиндром?
const num1 = 12321; //true
const num2 = -121; //false
const num3 = 100; //false

const isPalindrome = num => {
  if (num < 0 || num % 10 === 0) return false;
  if (num < 10) return true;

  let reverse = 0;

  while (num > reverse) {
    reverse *= 10;
    reverse += num % 10;
    num = Math.trunc(num / 10);
  }

  return num === reverse || num === Math.trunc(reverse / 10);
};

console.log(num1, isPalindrome(num1));
console.log(num2, isPalindrome(num2));
console.log(num3, isPalindrome(num3));
