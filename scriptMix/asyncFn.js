// sleep
const sleep1 = ms => {
  // блокирует работу скрипта на время
  const end = new Date().getTime() + ms;
  while (end > new Date().getTime()) {}
};
// не блокирует - надо then
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

console.log('Старт1: ', new Date().toLocaleString());
// sleep1(3000);
sleep(3000).then(() => {
  console.log('Стоп1: ', new Date().toLocaleString());
});

(async () => {
  // каждый async работает отдельно
  console.log('Старт2: ', new Date().toLocaleString());
  await sleep(5000);
  console.log('Стоп2: ', new Date().toLocaleString());
})();

(async () => {
  // каждый async работает отдельно
  console.log('Старт3: ', new Date().toLocaleString());
  const a = await sleep(2000);
  console.log('a: ', a); // undefined сразу -> присваив после sleep
  console.log('Стоп3: ', new Date().toLocaleString());
})();
//
const fn = async (a, b) => {
  return a * b;
};

console.log(fn(2, 3)); //promise

(async () => {
  console.log(await fn(3, 4)); // 12
})();
