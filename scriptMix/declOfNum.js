// склонение существительных от числа

function declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

//use:
//declOfNum(count, ['найдена', 'найдено', 'найдены']);
console.log(declOfNum(2, ['найдена', 'найдено', 'найдены']));
console.log(declOfNum(123, ['час', 'часа', 'часов']));