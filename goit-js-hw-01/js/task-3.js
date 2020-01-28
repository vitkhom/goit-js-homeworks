'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const logInn = prompt('Введите пароль');

if (logInn === null) {
  message = `Отменено пользователем!`;
} else if (logInn === ADMIN_PASSWORD) {
  message = `Добро пожаловать!`;
} else {
  message = `Доступ запрещен, неверный пароль!`;
}

console.log(message);
