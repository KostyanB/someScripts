//проверка на число
const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n);

// проверка на фразу
const isWord = n =>
  !(/^\d+$/.test(n) || n === null || n === '' || !/\S/.test(n));

// блокировка ввода нецифр в поле input по событию е
if (e && e.target === 'someElement') {
  e.target.value = e.target.value.replace(/[^0-9]/g, '');
}

//регулярка на e-mail и моб телефон
const string =
  'какой-то текст с мейлами gdhf@anymail.com и номерами 8-(932) 568-24-85 телефонов';
const email = string.match(/\w+@\w+\.\w{2,3}/g); //email
const mobile = string.match(/\+?[78]([-()]*\d){10}/g); // mobile phone
const hiddenMobile = string.replace(/\+?[78]([-()]*\d){10}/g, '***'); // скрыли mobile phone
const splitStr = string.split(/[\s,]+/); // строку в массив без пробелов, зпт и табов

const correctNumber = /^\d+$/;
const correctMail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const correctEMail2 = /[\w-\.\!\~\*\']+@[\w-\.\!\~\*\']+(\.[a-z]{2,})$/;
const correctName = /[а-яА-ЯёЁ-\s]+/;
const correctMessage = /[а-яА-ЯёЁ09-\s]+/;
const correctPhone = /^(?:\+|\d)[\d-\(\) ]{9,}\d/;
const color = /#([a-f0-9]{3}){1,2}/; //цвет в формате #ABCDEF или #ABC
const longLink =
  /http:\/{2}w{3}\.[a-z]*\.[a-z]{2,}(\/[a-z_-]*){2}\/([a-z]*\.html)*/gim; //http://site.ru/aaaa/bbbb.html
const shortLink = /http:\/{2}[^w{3}][a-z]*\.[a-z]{2,}/gim; //http://site.ru
const phoneRu = /^\+?[78]([-()]*\d){10}$/;
const phoneUA = /^\+380([-()]*\d){7}$/;
const mail = /^\w+@\w+\.\w{2,}$/;

let regexp = /[-.\w]+@([\w-]+\.)+[\w-]+/g; //email
