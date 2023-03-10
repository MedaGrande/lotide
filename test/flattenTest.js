const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  }),
    
  it("returns [1, 2, 3, 4] for [[1], 2, [3, 4]]", () => {
    assert.deepEqual(flatten([[1], 2, [3, 4]]), [1, 2, 3, 4]);
  }),

  it("returns [1, 2, 3, 4] for [[1, 2,] [3, 4]]", () => {
    assert.deepEqual(flatten([[1, 2], [3, 4]]), [1, 2, 3, 4]);
  }),

  it("returns ['a', 'b', 'c', 'd'] for [['a', 'b'], ['c', 'd']]", () => {
    assert.deepEqual(flatten([['a', 'b'], ['c', 'd']]), ['a', 'b', 'c', 'd']);
  });
});

