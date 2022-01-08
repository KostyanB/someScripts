'use strict';

const getName = person => person.name;
const uppercase = string => string.toUpperCase();
const get6Characters = string => string.substring(0, 6);
const reverse = str => str.split('').reverse().join('');

const res = reverse(get6Characters(uppercase(getName({ name: 'Buckethead' }))));
console.log('res: ', res);

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const pipeRes = pipe(
    getName,
    uppercase,
    get6Characters,
    reverse
)({ name: 'Buckethead' });
console.log('pipeRes: ', pipeRes);

// example not work -> not split(Object)
// const reverseRes = pipe(
//     reverse,
//     get6Characters,
//     uppercase,
//     getName
// )({ name: 'Buckethead' });

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const compose2 = (...fns) => x => fns.reverse.reduce((v, f) => f(v), x);

const composeRes = compose(
    getName,
    uppercase,
    get6Characters,
    reverse
)({ name: 'Buckethead' });
console.log('composeRes: ', composeRes);