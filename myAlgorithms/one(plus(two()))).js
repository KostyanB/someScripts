'use strict';
/*
 * one(plus(two())))
 */

const constant = num => arg => arg ? arg(num) : num;

const zero = constant(0);
const one = constant(1);
const two = constant(2);
const three = constant(3);
const four = constant(4);
const five = constant(5);
const six = constant(6);
const seven = constant(7);
const eight = constant(8);
const nine = constant(9);

const plus = arg => num => num + arg;
const minus = arg => num => num - arg;
const times = arg => num => num * arg;
const dividedBy = arg => num => Math.trunc(num / arg);

console.log('1+7=', one(plus(seven())));
console.log('3-5=', three(minus(five())));
console.log('6-0=', six(minus(zero())));
console.log('8/4=', eight(dividedBy(four())));
console.log('9/2=', nine(dividedBy(two())));
console.log('1+6/3=', one(plus(six(dividedBy(three())))));

// function constant(arg) {
//   return function () {
//     if (typeof arguments[0] === 'function') {
//       return arguments[0](arg);
//     } else {
//       return arg;
//     }
//   };
// }

// function plus() {
//   return num => num + arguments[0];
// }
// function minus() {
//   return num => num - arguments[0];
// }
// function times() {
//   return num => num * arguments[0];
// }
// function dividedBy() {
//   return num => Math.trunc(num / arguments[0]);
// }
