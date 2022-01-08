'use strict';

//вывод в консоль данных
let showTypeOf = function (data) {
  console.log(data, typeof data);
};

// передача cookie
let setCookie = function (key, value, year, month, day, path, domain, secure) {
  let cookieStr = encodeURI(key) + '=' + encodeURI(value); //encode кодируем в utf8
  if (year) {
    const expires = new Date(year, month - 1, day);
    cookieStr += '; expires=' + expires.toGMTString();
  }
  cookieStr += path ? '; path=' + encodeURI(path) : '';
  cookieStr += domain ? '; domain=' + encodeURI(domain) : '';
  cookieStr += secure ? '; secure=' : ''; //знач не пишем - boolean

  document.cookie = cookieStr;
};

// eacher - перебор массива с учетом занятости браузера
// для больших массивов []
const eacher = function (arr, callback) {
  let count = 0;
  const timer = setInterval(function () {
    callback(arr[count++]);
    if (count >= arr.lenght) clearInterval(timer);
  }, 0); // запускается когда свободен браузер
};

const names = ['Максим', 'Андрей', 'Кирилл', 'Анна', 'Мария', 'Вероника'];

const named = function (name) {
  console.log(`Имя: ${name}`);
};

// eacher(names, named);
