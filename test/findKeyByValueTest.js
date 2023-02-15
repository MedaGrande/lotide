const findKeyByValue = require('../findKeyByValue');
const assertEqual = require('../assertEqual');

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
