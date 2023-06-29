// Function Compares Primitive Values
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😊 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😒 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function compares arrays
const eqArrays = function (arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Function returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  const objectKeyArr1 = Object.keys(object1);
  const objectKeyArr2 = Object.keys(object2);
  // Check if length is same
  if (objectKeyArr1.length !== objectKeyArr2.length) {
    return false;
  }
  for (const key of objectKeyArr1) {
    // If both values are arrays pass them to eqArrays
    if (Array.isArray(object1[key]) & Array.isArray(object2[key])) {
      return (eqArrays(object1[key], object2[key]));
      // If not compare as primitive
    } else if ((object1[key] !== object2[key])) {
      return false;
    }
  }
  return true;
};

// Test
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true
// assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject); // => false
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

// Test for array
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false

