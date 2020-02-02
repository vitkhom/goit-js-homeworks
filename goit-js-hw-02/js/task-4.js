'use strict';

const formatString = function(string) {
  let message;
  const originalString = string.split('');
  const normalString = originalString.slice(0, 40);

  if (originalString <= normalString) {
    message = `${originalString.join('')}`;
  } else {
    message = `${normalString.join('')}...`;
  }

  return message;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
