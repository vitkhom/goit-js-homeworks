'use strict';

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// let counterValue = 0;

// function increment() {
//   counterValue += 1;
// }

// function decrement() {
//   counterValue -= 1;
// }

// function updateValue(value) {
//   value.textContent = counterValue;
// }

// const decrementButton = document.querySelector(
//   'button[data-action="decrement"]',
// );

// const incrementButton = document.querySelector(
//   'button[data-action="increment"]',
// );

// const value = document.querySelector('#value');

// decrementButton.addEventListener('click', () => {
//   decrement();
//   updateValue(value);
// });

// incrementButton.addEventListener('click', () => {
//   increment();
//   updateValue(value);
// });

const refs = {
  counter: document.querySelector('#counter'),
  value: document.querySelector('#value'),
};

const actions = {
  state: {
    value: 0,
  },
  decrement() {
    this.state.value -= 1;
  },
  increment() {
    this.state.value += 1;
  },
};

const changeValue = ({ target }) => {
  actions[target.dataset.action]();
  refs.value.textContent = actions.state.value;
};

refs.counter.addEventListener('click', changeValue);
