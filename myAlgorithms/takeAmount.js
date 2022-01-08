// банкомат v2
/*
 * Минимально возможный набор
 * Заданы лимиты
 * Запрос 0 коррктен
 */
const limits = { 1000: 5, 500: 2, 100: 5, 50: 100, 30: 6 };

const takeAmount = (amount = 0, limits = {}) => {
  const nominals = Object.keys(limits)
    .map(Number)
    .sort((a, b) => b - a);

  const collect = (amount, nominals) => {
    if (amount === 0) return {};
    if (!nominals.length) return;

    const current = nominals[0],
      available = limits[current],
      needed = Math.trunc(amount / current),
      count = Math.min(available, needed);

    for (let i = count; i >= 0; i--) {
      const result = collect(amount - i * current, nominals.slice(1));

      if (result) {
        return i ? { [current]: i, ...result } : result;
      }
    }
  };

  return collect(amount, nominals) || 'Сумма не может быть набрана';
};
console.log(takeAmount(0, limits));
console.log(takeAmount(230, limits));
console.log(takeAmount(1000, limits));
console.log(takeAmount(200, limits));
console.log(takeAmount(150, limits));
console.log(takeAmount(275, limits));
console.log(takeAmount(6380, limits));
console.log(takeAmount(50000, limits));
console.log(takeAmount(120, limits));
console.log(takeAmount(3570, limits));

// банкомат
/*
 * Min набор из 10,50,100,500
 * Всегда есть нужный набор, общее количество и запрос м/быть infinity
 */
const require = 5870;

const takeAmount2 = amount => {
  const available = [500, 100, 50, 10];
  const result = [];

  if (!amount || amount === 0) {
    console.log('Введите сумму');
  } else if (amount % 10 !== 0) {
    console.log('Введите кратно 10');
  } else {
    available.forEach(item => {
      let count = Math.trunc(amount / item);

      while (count > 0) {
        result.push(item);
        count--;
      }

      amount = amount % item;
    });
  }
  return result;
};
console.log(takeAmount2(require));
