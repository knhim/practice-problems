var sum = 0;
function sumArray(numbersArray) {
  for (var i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }
  return sum;
}
console.log(sumArray([5, 3, 7, 4]));
