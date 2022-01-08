//попрошайка рандомных чисел в промежутке
const randomInteger = (min, max) => {
  //получить рандом от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};
const createBeggar = () => {
  let s = 0;
  return function beggar() {
    s += randomInteger(0, 100);
    console.log('s: ', s);
    if (s >= 250) return;
    beggar();
  };
};
const begg1 = createBeggar();
const begg2 = createBeggar();
begg1();
console.log('***************');
begg2();
