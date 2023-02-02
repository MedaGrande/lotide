const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  const noHeadArray = array.slice(1);
  return noHeadArray;
};

console.log(tail([5, 6, 7, 8]));
console.log(tail([5]));
console.log(tail([]));

const test1 = [1, 2, 3];
tail(test1);
assertEqual(test1.length, 3);
