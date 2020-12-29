// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these 
// multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0
// (for languages that do have them)

//solution from codewars
function solution(number){
    var sum = 0;
    
    for(var i = 1;i< number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
  }

  // my unfinished solution

  function solution(number){
    const multiplesOfThree = [];
    const multiplesOfFive = [];
    let sum1 = 0;
    let sum2 = 0;
    let totalSum = sum1 + sum2;
    
    for (let i = 3; i < number; i += 3) {
      if (number / i === 0 || number % i !== 0) {
        sum1 += i;
      }
    }
    
    for (let i = 5; i < number; i += 5) {
      if (number / i === 0 || number % i !== 0) {
        sum2 += i;
      }
    }
    return totalSum;
  }
