'use strict';
// значение в границах

const set = val => {
    const newVal = Math.min(Math.max(val, min), max);
    setCnt({ newVal });
};

