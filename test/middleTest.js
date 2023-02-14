const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns the middle values [3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  }),
    
  it("returns the middle values [4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  }),

  it("returns the middle value [2]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});

