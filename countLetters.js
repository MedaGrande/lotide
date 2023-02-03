const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (str) {
  const counts = {};
  const newStr = str.split('');
  for (const letter of newStr) {
    if (counts[letter] !== ' ') {
      if (counts[letter]) {
        counts[letter] += 1;
      } else {
        counts[letter] = 1;
      }
    }
  }
  console.log(counts);
      
};

countLetters("test for today");