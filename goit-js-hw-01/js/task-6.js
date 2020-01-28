'use strict';

let input;
let total = 0;

do {
  input = prompt('Enter number');
  total += Number(input);
  console.log(input);
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);
