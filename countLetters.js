const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (str) {
  str = str.replaceAll(' ', '');
  const counts = {};
  const newStr = str.split('');
  for (const letter of newStr) {
      if (counts[letter]) {
        counts[letter] += 1;
      } else {
        counts[letter] = 1;
      }
    }
  return counts;
};

const test1 = "test for today"
const result1 = countLetters(test1);

assertEqual(result1["t"], 3);
assertEqual(result1["e"], 1);
assertEqual(result1["s"], 1);
assertEqual(result1["o"], 2);