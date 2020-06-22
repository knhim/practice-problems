/*
-define a function named payscale Analyzer
-takes an array of hourly wages
-returns the difference between the highest and lowest wages

-need a for loop to iterate through an array
store 2 variables, lowest number, and highest number?

at the end of the function return highest num - lowest num

*/

function payscaleAnalyzer (payList) {
  let lowestNumb = payList[0];
  let highestNumb = payList[1];
  for (let i = 0; i < payList.length; i++){
    if (lowestNumb > payList[i]) {
      lowestNumb = payList[i];
    }
    if (highestNumb < payList[i]) {
      highestNumb = payList[i];
    }

  }
  return highestNumb - lowestNumb;
}

console.log(payscaleAnalyzer([28, 34, 21, 39]));
console.log(payscaleAnalyzer([18, 22, 19, 26]));
console.log(payscaleAnalyzer([41.50, 27.25, 32.50, 29.60]));
