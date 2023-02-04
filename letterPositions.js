const letterPositions = function (sentence) {
  const results = {};
  const newSentence = sentence.split('');
  
  for (let i = 0; i < newSentence.length; i++) {
    if (!results[newSentence[i]]) {
      results[newSentence[i]] = [];
    }
    if (results[newSentence[i]]) {
      results[newSentence[i]].push(i);
    }

    delete results[' '];
  }
  return results;
};


const eqArrays = function (array1, array2) {
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

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} ===  ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};


assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);