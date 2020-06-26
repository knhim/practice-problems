/*
-define a function named accountNumberProtector
-has 1 parameter, a string
-string contains 16 digit numbers
-need to return only last 4 numbers with ** as a prefix


-need to return ** + 4 numbers
maybe convert string to an array, and grab last 4 numbers?
array.length - 4 to start, then grab it till the end, which would be array.length ? need to include last index

const arrayLastFourNums = [];

*/


function accountNumberProtector(cardNumberString) {
  const arrayLastFourNums = [];
  let newString = '';
  for (let i = cardNumberString.length - 4; i < cardNumberString.length; i++) {
    arrayLastFourNums.push(cardNumberString[i]);
  }
  for (let j = 0; j < arrayLastFourNums.length; j++){
    newString += arrayLastFourNums[j];
  }
  return '**' + newString;
}

console.log(accountNumberProtector("5543223485638832"));
console.log(accountNumberProtector("8934235477210943"));
console.log(accountNumberProtector("7513635499320192"));
