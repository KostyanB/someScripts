'use strict';
/*
 *
 */
function narcissistic(value) {
  const arr = value.toString().split('');
  const exp = arr.length;
  console.log('exp: ', exp);

  const res = arr.reduce((acc, num) => (acc += num ** exp), 0);
  console.log('res: ', res);

  return res === value;
}
console.log('123: ', narcissistic(123));
console.log('28740: ', narcissistic(28740));
console.log('10036794: ', narcissistic(10036794));
