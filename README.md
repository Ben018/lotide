# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ben013/lotide`

**Require it:**

`const _ = require('@ben013/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  * 'head()': returns the first element from an array
  * 'tail()': returns all elements of an array except the first (head)
  * 'middle()': returns the middle element on an array
  * 'assertArraysEqual()': asserts if two arrays are equal
  * 'assertEqual()': asserts if two primitive values are equal
  * 'assertObjectsEqual()': asserts if two objects are equal
  * 'countLetters()': counts the number of letters in a string
  * 'countOnly()': counts the number of times the key is in the object
  * 'eqArrays()': compares if two arrays are equal
  * 'eqObjects()': compares if two objects are equal
  * 'findKey()': returns the first key in the object that contains the value
  * 'findKeyByValue()': returns the first key in the object that contains the inputted value
  * 'letterPosition()': returns an array of the indexes of that letter
  * 'map()': return the first letter of every element of an array
  * 'takeUntil()': return a slice of the array with elements taken from the beginning - until it reachers callBack parameter
  * 'without()': removes an elements from an array