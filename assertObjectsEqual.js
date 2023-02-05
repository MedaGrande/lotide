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


const eqObjects = function (object1, object2) {
  const arrayObject1 = Object.keys(object1);
  const arrayObject2 = Object.keys(object2);

  if (arrayObject1.length !== arrayObject2.length) {
    return false;
  }

  for (const element of arrayObject1) {
    if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
      return eqArrays(object1[element], object2[element]);
    }
    if (object1[element] === object2[element]) {
      return true;
    } else {
      return false;
    }
  }
};

const assertObjectsEqual = function (object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
      
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
    }
};
  

//Testing objects with primitive values only:
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject, anotherShirtObject);


const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject, longSleeveShirtObject);
/************************************************************************/

//Testing objects that include arrays:
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);