'use strict';
// chaning - вызов fn лесенкой (следующий запрос к результатам предыдущего)

// самый простой
const foo = function (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
};
foo(1)(2)(3);
const foo1 = a => b => c => a + b + c; // ES6

// prototype
{
  const Race = function (count) {
    this.count = count; // кол членов команды
    this.racer = []; // список команды
  };
  Race.prototype.addRacer = function (name) {
    if (this.count <= 0) {
      console.log('в команду больше не принимаем');
      return this; // возвращает объект и позволяет чейнить
    }
    this.racer.push(name);
    this.count--;
    console.log(this.racer);
    return this;
  };
  const maximum = new Race(2);
  maximum.addRacer('Вася').addRacer('Петя').addRacer('Коля'); // чейнинг
}
// class - ООП
{
  class Racing {
    constructor(count) {
      this.count = count; // кол членов команды
      this.racer = []; // список команды
    }
    addRacer(name) {
      if (this.count <= 0) {
        console.log('в команду больше не принимаем');
        return this; // возвращает объект и позволяет чейнить
      }
      this.racer.push(name);
      this.count--;
      console.log(this.racer);
      return this;
    }
  }
  const maximum2 = new Racing(3);
  maximum2.addRacer('Вася').addRacer('Петя').addRacer('Коля').addRacer('Гоги'); // чейнинг
}
// функтор (не гуд - каждый раз создается новый объект и он хранится в памяти)
{
  const race3 = (count = 0, racer = []) => ({
    addRacer: name => {
      if (count <= 0) {
        console.log('в команду больше не принимаем');
        return race3(count, racer); // возвращает объект и позволяет чейнить
      }
      racer.push(name);
      count--;
      console.log(racer);
      return race3(count, racer);
    },
  });
  const maximum3 = race3(4);
  maximum3
    .addRacer('Вася')
    .addRacer('Петя')
    .addRacer('Коля')
    .addRacer('Гоги')
    .addRacer('Ирина'); // чейнинг
}
//комбинация ООП и функционального прогр-я (каждый раз вызывается fn и возвращается объект)
{
  const race4 = (
    count = 0,
    racer = [],
    obj = {
      addRacer: name => {
        if (count <= 0) {
          console.log('в команду больше не принимаем');
          return race4(count, racer, obj); // возвращает объект и позволяет чейнить
        }
        racer.push(name);
        count--;
        console.log(racer);
        return race4(count, racer, obj);
      },
      removeRacer: name => {
        const exist = racer.indexOf(name);
        if (exist === -1) {
          console.log('такого участвника нет');
          return race4(count, racer, obj);
        }
        racer.splice(exist, 1);
        count++;
        console.log(racer);
        return race4(count, racer, obj);
      },
    },
  ) => obj;
  const maximum4 = race4(3);
  maximum4
    .addRacer('Вася')
    .addRacer('Петя')
    .removeRacer('Витя')
    .addRacer('Коля')
    .addRacer('Ирина')
    .addRacer('Максим')
    .removeRacer('Коля')
    .addRacer('Илья'); // чейнинг
}

{
  // объект функционального типа
  function Foo(x) {
    this.x = x;
  }
  Foo.prototype.map = function (fn) {
    return new Foo(fn(this.x));
  };
  new Foo(5).map(a => console.log(a + a));
  new Foo('Привет').map(console.log);

  // функтор
  function foo(x) {
    return function (fn) {
      return foo(fn(x));
    };
  }
  foo(5)(a => console.log(a + a));
  foo('Привет')(console.log);
}
