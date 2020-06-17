/*
-define a function named oddUpEvenDown
-take an array of numeric values
-if value at array is odd, increment by 1
-if value at array is even, decrement by 1
-need to copy the array and create a new one
-will need mod operator to check if even or odd

*/

function oddUpEvenDown(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newArray.push(array[i] - 1);
    } else {
      newArray.push(array[i] + 1);
    }
  }
  return newArray;
}

console.log(oddUpEvenDown([1, 2, 3, 4, 5])); // -> [2, 1, 4, 3, 6]
console.log(oddUpEvenDown([23, 15, 18, 14, 32])); // -> [24, 16, 17, 13, 31]
console.log(oddUpEvenDown([72, 212, 77, 124, 53])); // -> [71, 211, 78, 123, 54]
