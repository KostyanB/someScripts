'use strict';
/*
 * CesarsShifre буквы в сообщении сдвинуты на 13 позиций
 */
const rot13 = message => {
  let res = '';

  const shiftChar = char => {
    if (/[a-z]/i.test(char)) {
      const code = char.charCodeAt(0);
      const isUpper = code >= 65 && code <= 90;
      const isLower = code >= 97 && code <= 122;

      let newCode = code + 13;

      if ((isUpper && newCode > 90) || (isLower && newCode > 122)) {
        newCode = newCode - 26;
      }
      char = String.fromCharCode(newCode);
    }
    return char;
  };

  for (let i = 0; i < message.length; i++) {
    res += shiftChar(message[i]);
  }
  return res;
};
console.log('shiftChar: ', rot13('tesT-736'));
