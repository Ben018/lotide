const tail = function (actual) {
  if (actual !== null) {
    return actual.slice(1);
  } else {
    return undefined;
  }
};

module.exports = tail;