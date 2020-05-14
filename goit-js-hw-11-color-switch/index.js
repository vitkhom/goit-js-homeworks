'use strict';

const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorSwitch = {
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    this.intervalId = setInterval(() => {
      const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
      refs.body.setAttribute('style', `background-color: ${color};`);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};

refs.start.addEventListener('click', colorSwitch.start.bind(colorSwitch));
refs.stop.addEventListener('click', colorSwitch.stop.bind(colorSwitch));
