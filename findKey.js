const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//The function accepts an object and a callback funcion as parameters
//and parses over the object and if the callback function returns true
//it returns the key.
const findKey = function (object, callback) {
  for (const property in object) {
    if (callback(object[property])) {
      return property;
    }
  }
};
module.exports = findKey;

//Running the function
const object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

findKey(object1, x => x.stars === 2);

//Testing using our assertEqual function
assertEqual(findKey(object1, x => x.stars === 2), "noma");
assertEqual(findKey(object1, x => x.stars === 3), "Akaleri");
assertEqual(findKey(object1, x => x.stars === 1), "Blue Hill");