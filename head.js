//Function compares two values - primitive data
const assertEqual = require('./assertEqual');

const head = function (actual) {
  if (actual !== null) {
    return actual[0];
  } else {
    return undefined;
  }
};

module.exports = head;