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
    if (object1[element] === object2[element]) {
      return true;
    } else {
      return false;
    }
  }
};


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject, anotherShirtObject)); // => true
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);


const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
