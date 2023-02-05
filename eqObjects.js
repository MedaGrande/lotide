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

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function returns true if both objects have identical keys and values
//Else returns false
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


//Testing objects with primitive values only:
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);


const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
/************************************************************************/

//Testing objects that include arrays:
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);