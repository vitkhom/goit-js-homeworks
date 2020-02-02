'use strict';

const checkForSpam = function(message) {
  const messageNew = message.toLowerCase();
  const answer = messageNew.includes('spam') || messageNew.includes('sale');
  return answer;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
