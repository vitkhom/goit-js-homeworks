'use strict';

const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
  timer: document.querySelector('#timer-1'),
};

const targetDate = new Date('May 13, 2020').getTime();

const intervalId = setInterval(function () {
  const currentDate = Date.now();

  const time = targetDate - currentDate;

  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;

  if (time < 0) {
    clearInterval(intervalId);
    refs.timer.innerHTML = '<p class="timer_finished">COUNTDOWN IS OVER!</p>';
  }
}, 1000);

function pad(value) {
  return String(value).padStart(2, '0');
}
