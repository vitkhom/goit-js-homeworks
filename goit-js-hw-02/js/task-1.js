'use strict';

const logItems = function(array) {
  for (let i = 0; i < array.length; i += 1) {
    const elementNumber = i + 1;
    const elementTitle = array[i];
    console.log(`${elementNumber} - ${elementTitle}`);
  }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
