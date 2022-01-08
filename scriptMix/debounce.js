'use strict';
// debounce
// игнор частых fetch при вводе текста в поиск
const debounce = (fn, msec) => {
  let timeout;

  return function () {
    const fnCall = () => fn.apply(this, arguments);
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, msec);
  };
};

const onChange = e => {
  // handle input text for search
};

const onChangeDebounce = debounce(onChange, 200);

someInput.addEventListener('keyup', onChangeDebounce);
