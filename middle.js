const eqArrays = function(array1, array2) {
  let check;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      } else {
        check = true;
      }
    }
    return check;
  }
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} ===  ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const middle = function(array) {
  if (array.length > 2) {
    const newArray = [];
    let i;
    let m;
    if (array.length % 2 !== 0) {
      i = Math.floor(array.length / 2);
      newArray.push(array[i]);
      return newArray;
    } else {
      i = array.length / 2;
      m = i - 1;
      newArray.push(array[m]);
      newArray.push(array[i]);
      return newArray;
    }
  } else {
    return [];
  }
};

const test1 = middle([1, 2, 3, 4, 5, 6]);
assertArraysEqual(test1, [3, 4]);
const test2 = middle([1, 2, 3, 4, 5, 6, 7]);
assertArraysEqual(test2, [4]);
const test3 = (middle([1, 2, 3]));
assertArraysEqual(test3, [2]);