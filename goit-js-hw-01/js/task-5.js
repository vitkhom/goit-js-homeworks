'use strict';

const CHINA = 'Китай';
const CHILI = 'Чили';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAIKA = 'Ямайка';
const userChoice = prompt(`Укажите название страны`);
let message;

switch (userChoice.toUpperCase()) {
  case CHINA.toUpperCase():
    message = `Доставка в Китай стоит 100 кредитов`;
    break;
  case CHILI.toUpperCase():
    message = `Доставка в Чили стоит 250 кредитов`;
    break;
  case AUSTRALIA.toUpperCase():
    message = `Доставка в Австралию стоит 170 кредитов`;
    break;
  case INDIA.toUpperCase():
    message = `Доставка в Индию стоит 80 кредитов`;
    break;
  case JAMAIKA.toUpperCase():
    message = `Доставка на Ямайку стоит 120 кредитов`;
    break;
  default:
    alert(`В вашей стране доставка не доступна`);
}

console.log(message);
