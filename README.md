# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @medagrande/lotide`

**Require it:**

`const _ = require('@medagrande/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: compares two arrays and prints a  message
* `assertEqual(...)`: compares two value and prints a message
* `assertObjectsEqual(...)`: compares two objects and prints a message
* `countLetters(...)`: takes in a string and returns a count of all the letters
* `countOnly(...)`: takes in an array and an object and returns an object with the count of items which are true in the object given
* `eqArrays(...)`: checks if two arrays are perfectly equal
* `eqObjects(...)`: checks if two objects are equal and returns true or false
* `findKey(...)`: takes in an object and a callback function and returns the first key where the callback has a truthy value otherwise returns undefined
* `findKeyByValue(...)`: takes in an object and a value and returns the first key that has the value
* `flatten(...)`: flattens one level an array of array
* `head(...)`: returns the first element of an array
* `letterPositions(...)`: takes in a string and returns the index position/s of each letter
* `map(...)`: takes an array and a callback function and returns an array dependent on the outcome of the callback
* `middle(...)`: returns the middle value/s of an array
* `tail(...)`: returns the tail of an array
* `takeUntil(...)`: takes in an array and a callback function and returns a part of the arrays until the outocome of the callback is truthy
* `without(...)`: receives two arrays and returns the first array without the contents included in the second array