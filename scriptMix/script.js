'use strict';

const url1 = 'http://google.com';
const url2 = 'http://google.co.jp';
const url3 = 'www.xakep.ru';
const url4 = 'https://youtube.com',
    url5 = "www.textwww.com";

// const domainName = url => {
//     [`'`, `"`, 'http://', 'https://', 'ftp://'].map(item => url = url.replaceAll(item, ''));
//     return url.replace(/^www./, '').split('.')[0];
// };

const domainName = url =>
    url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];


console.log(domainName(url1));
console.log(domainName(url2));
console.log(domainName(url3));
console.log(domainName(url4));
console.log(domainName(url5));
