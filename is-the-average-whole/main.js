function isTheAverageWhole(numbersArray) {
  var sum = 0;
  var avg = 0;
  for (var i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }
  avg = (sum / numbersArray.length)
  if (sum % numbersArray.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log('[1, 3, 4, 4]:', isTheAverageWhole([1, 3, 4, 4]));
console.log('[3, 4]:', isTheAverageWhole([3, 4]));
console.log('[5, 5, 5]:', isTheAverageWhole([5, 5, 5]));
