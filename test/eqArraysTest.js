const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

// Test
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 6], [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays([1, 2, 6], []), true); // => should FAIL
assertEqual(eqArrays([1, 2, 6], [1, 2, "6"]), true); // => should FAIL