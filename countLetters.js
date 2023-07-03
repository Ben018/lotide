// Function Calculates Primitive Values
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😊 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😒 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function Counts Letter in Sentence
const countLetters = function (arr) {
  const results = {};
  for (const letter of arr) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
}

// // Test
// console.log(countLetters("LHL"));
// console.log(countLetters("LHL LHL"));
// console.log(countLetters("Commit and push the new file within your git repository"));

module.exports = countLetters;