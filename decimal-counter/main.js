function decimalPlaceCounter (stringNumber) {
  var counter = 0;
  for (var i = 0; i < stringNumber.length; i++){
    if (stringNumber[i] === '.') {
      for (var j = i + 1; j < stringNumber.length; j++){
        counter++;
      }
    }
  }
  return counter;
}

console.log(decimalPlaceCounter("127.245"));
console.log(decimalPlaceCounter("145"));
console.log(decimalPlaceCounter("23.00"));
console.log(decimalPlaceCounter('123.2454'));
