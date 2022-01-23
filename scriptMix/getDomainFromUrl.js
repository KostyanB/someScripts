'use strict';

const url1 = 'http://google.com';
const url2 = 'http://google.co.jp';
const url3 = 'www.xakep.ru';
const url4 = 'https://youtube.com';

const getDomainName = url => {
    const arr = [`'`, `"`, 'http://', 'https://', 'www.'];
    arr.forEach(item => {
        url = url.replaceAll(item, '');
    });
    return url.split('.')[0];
};

console.log(domainName(url4));
