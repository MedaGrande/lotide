const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

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

describe("#findKeyByValue", () => {
  it("returns 'drama' for bestTVShowsByGenre, 'The Wire'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  }),
  
  it("returns 'undefined' for bestTVShowsByGenre, 'That '70s Show'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  }),

  it("returns 'elementary' for schoolsAttended, 'St James", () => {
    assert.strictEqual(findKeyByValue(schoolsAttended, "St James"), "elementary");
  });

  it("returns 'University' for schoolsAttended, 'Campo", () => {
    assert.strictEqual(findKeyByValue(schoolsAttended, "Campo"), "University");
  });
    
});


// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(schoolsAttended, "St James"), "elementary");
// assertEqual(findKeyByValue(schoolsAttended, "Campo"), "University");
