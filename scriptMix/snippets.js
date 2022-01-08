'use strict';
//#1
const n1 = 445.67;
console.log(Math.floor(n1));
console.log(~~n1);

//#2
const n2 = 3;
console.log(Math.pow(n2, 4));
console.log(n2 ** 4);

//#3
const n3_1 = '3',
    n3_2 = '3a',
    n3_3 = 'a3';
console.log(parseInt(n3_1)); // 3
console.log(+n3_1); // 3
console.log(parseInt(n3_2)); // 3
console.log(+n3_2); // Nan
console.log(parseInt(n3_3)); // Nan
console.log(+n3_3); // Nan

//#5
const n5 = 5;
console.log(n5.toString());
console.log(`${n5}`);

//#6 вызов fn по условию
function f6_1() {
    console.log('6_1');
}
function f6_2() {
    console.log('6_2');
}
const n6 = 6;
if (n6 === 6) {
    f6_1();
} else {
    f6_2();
}
(n6 === 6 ? f6_1 : f6_2)();

//#7 задание default значения
function f7(param) {
    if (param === undefined) {
        throw new Error('problem');
    }
    return param;
}
//console.log(f7());
console.log(f7('valid_param'));
// fn на весь код для check param
let checkParam = () => {
    throw new Error('problem');
};
// anyFunc (a = 5) => {}
const f7_1 = (param = checkParam()) => {
    return param;
}
console.log(f7_1(777));
//console.log(f7_1());

//#8 символ из строки как из массива
const n8 = 'sample string'
console.log(n8.charAt(8));
console.log(n8[8]);

//#9
const n9 = `hello
hi
test`;
console.log(n9);

//#10 default value
let n10;
let result = n10 || false;
console.log(result);
n10 = 10;
let result1 = n10 || false;
console.log(result1);
n10 = undefined;
let result2 = n10 || false;
console.log(result2);

//#4 провверка на true
const n4_1 = true; // можно число/строка
if (n4_1 === true) {
    console.log('#4_1');
}
n4_1 && console.log('#4_1');
// no work false, 0, NaN, undefined
const n4_2 = false;
n4_2 && console.log('#4_2');
const n4_3 = 0;
n4_3 && console.log('#4_3');

//#11 провверка на false
const n11_1 = false; // false, 0, NaN, undefined
if (n11_1 === false) {
    console.log('#11_1');
}
n11_1 || console.log('#11_1');
// no work - true, num, string
const n11_2 = true;
n11_2 || console.log('#11_2');
const n11_3 = 1;
n11_3 || console.log('#11_3');

// #12 проверка на null || undefined
const n12 = null;
if (n12 === null || n12 === undefined) {
    console.log('#12');
}
n12 ?? console.log('#12');
