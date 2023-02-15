//The function accepts an object and a callback funcion as parameters
//and parses over the object and if the callback function returns true
//it returns the key.
const findKey = function (object, callback) {
  for (const property in object) {
    if (callback(object[property])) {
      return property;
    }
  }
};
module.exports = findKey;
