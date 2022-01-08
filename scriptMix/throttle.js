'use strict';
// пропуск срабатываний mousemove при перемещении
// но обработка последнего события
const throttle = (fn, msec) => {
  let isThrottled = false;
  let savedArgs, savedThis;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    fn.apply(this, arguments);

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;

      if (savedArgs) {
        wrapper.apply(savedArgs, savedThis);
        savedArgs = savedThis = null;
      }
    }, msec);
  }

  return wrapper;
};

//use throttle
const handleMove = e => {
  // handle move events
};
const throttleMove = throttle(handleMove, 200);

window.addEventListener('mousemove', throttleMove);
