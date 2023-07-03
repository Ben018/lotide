// Function Calculates Primitive Values
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😊 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😒 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function finds key that has argument value
const findKeyByValue = function (object, shows) {
  const keys = Object.keys(object);
  // Search all keys for shows
  for (const element of keys) {
    if (object[element] === shows) {
      return element;
    }
  }
}

// Test
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;