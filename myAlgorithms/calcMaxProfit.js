// v2 лучшее время покупки акций (много покупок и продаж)
{
  const prices1 = [7, 1, 5, 3, 6, 4]; //7
  const prices2 = [7, 6, 4, 3, 1]; //0
  const prices3 = [7, 0, 1, 5, 2, 6, 4]; //9
  const prices4 = [5, 1, 2, 3, 4, 7]; //6

  const maxProfit = prices =>
    prices.reduce((total, price, i) => {
      if (price > prices[i - 1]) {
        total += price - prices[i - 1];
      }
      return total;
    }, 0);

  console.log('1: ', maxProfit(prices1));
  console.log('2: ', maxProfit(prices2));
  console.log('3: ', maxProfit(prices3));
  console.log('4: ', maxProfit(prices4));
}
// v1 лучшее время покупки акций (1 покупка и 1 продажа)
{
  const prices1 = [7, 1, 5, 2, 6, 4]; //5
  const prices2 = [7, 6, 4, 3, 1]; //0
  const prices3 = [7, 0, 1, 5, 2, 6, 4]; //6
  const prices4 = [8, 2, 6, 2, 1]; //4

  const calcMaxProfit = prices => {
    let maxProfit = 0,
      minPrice = prices[0];

    prices.forEach(price => {
      minPrice = Math.min(minPrice, price);

      maxProfit = Math.max(maxProfit, price - minPrice);
    });

    return maxProfit;
  };

  console.log('1: ', calcMaxProfit(prices1));
  console.log('2: ', calcMaxProfit(prices2));
  console.log('3: ', calcMaxProfit(prices3));
  console.log('4: ', calcMaxProfit(prices4));
}
