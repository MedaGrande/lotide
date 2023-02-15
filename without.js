const without = function(array1, array2) {
  const newArray = array1.slice(0, array1.length);
  for (let i = 0; i < array2.length; i++) {
    for (let j = 0; j < newArray.length; j++) {
      if (array2[i] === newArray[j]) {
        newArray.splice(j, 1);
      }
    }
  }
  return newArray;
};
module.exports = without;
