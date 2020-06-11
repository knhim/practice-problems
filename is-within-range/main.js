/*
  -create a function named isWithinRange
  -this function takes two parameters, a number, and a rangeObject
  if statement with conditional comparing number to rangeObject.min and rangeObject.max
  -if number is between rangeObject, return true
  else return false

*/

function isWithinRange(number, rangeObject) {
  if (number >= rangeObject.min && number <= rangeObject.max ) {
    return true;
  } else {
    return false;
  }
}

console.log(isWithinRange(5, { min: 1, max: 9 }));
console.log(isWithinRange(12, { min: 15, max: 29 }));
console.log(isWithinRange(9, { min: 0, max: 9 }));
