'use strict';

let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt('Enter number');
  numbers.push(Number(input));
  console.log(numbers);
}

for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}
console.log(`Total sum is ${total}`);
