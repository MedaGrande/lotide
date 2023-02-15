const map = function (array, callback) {
  //takes an array and a callback function as parameters
  const results = [];
  for (let item of array) {
    //push item to result after it went through the callback
    results.push(callback(item));
  }
  return results;
};
module.exports = map;

