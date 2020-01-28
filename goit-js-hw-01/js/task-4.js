'use strict';

const credits = 23580;
const pricePerDroid = 3000;
const numberOfDroids = prompt(`Введите число дроидов`);
let message;

if (numberOfDroids === null) {
  message = `Отменено пользователем!`;
  console.log(message);
} else {
  const totalPrice = pricePerDroid * numberOfDroids;
  const creditsBalance = credits - totalPrice;
  if (totalPrice > credits) {
    message = `Недостаточно средств на счету!`;
  } else {
    message = `Вы купили ${numberOfDroids} дроидов, на счету осталось ${creditsBalance} кредитов.`;
  }
  console.log(message);
}
