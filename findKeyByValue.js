const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (object, value) {
  for (const property in object) {
    if (object[property] === value) {
      return property;
    }
  }
};
module.exports = findKeyByValue;

//Testing the funtion:
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

const schoolsAttended = {
  elementary: "St James",
  junior: "The Ridge",
  senior: "Brasla"
};

schoolsAttended["University"] = "Campo";

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(schoolsAttended, "St James"), "elementary");
assertEqual(findKeyByValue(schoolsAttended, "Campo"), "University");
 