const eqArrays = require('./eqArrays');

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
module.exports = eqObjects;

