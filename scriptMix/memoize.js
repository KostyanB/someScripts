'use strict'
// memoize - кэширование
// Вариант для нечисловых данных (объекты, не примитивы)
const ctrKey = item => JSON.stringify(item) + '(' + typeof item + ')';
const generateKey = args => args.map(strKey).join(',');

const memoize = (fn, length) => {
    const cache = new Map;

    return (...args) => {
        const key = generateKey(args);
        if(cache.has(key)) return cache.get(key);
        const res = fn(...args);
        if(cache.size >= length) {
            const firstKey = cache.keys().next().value;
            //console.log('удаляем', firstKey);
            cache.delete(firstKey);
        }
        cache.set(key, res);
        return res;
    };
};

const nameFn = () => {}; // fn которую кэшируем
const nameMem = memoize(nameFn, length); // передаем fn и размер кэша
nameMem(arg1);
nameMem(arg2);
nameMem(argN);
// для числовых даных (примитивы)
const strKey1 = item => item.toString() + '(' + typeof item + ')';