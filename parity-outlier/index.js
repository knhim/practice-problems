// You are given an array(which will have a length of at least 3, but could be very large) containing integers.The array is either entirely
// comprised of odd integers or entirely comprised of even integers except for a single integer N.Write a method that takes the array as an
// argument and returns this "outlier" N.

// my solution

function findOutlier(integers) {
  let numOfEven = 0;

  for (let i = 0; i < 3; i++) {
    if (integers[i] % 2 === 0) {
      numOfEven++;
    }
  }

  if (numOfEven >= 2) {
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 !== 0) {
        return integers[i];
      }
    }
  } else {
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 === 0) {
        return integers[i];
      }
    }
  }
}

// thought this solution was interesting and similar to mine

function findOutlier2(integers) {
  //your code here
  var len = integers.length;
  var first = Math.abs(integers[0]) % 2,
    second = Math.abs(integers[1]) % 2,
    third = Math.abs(integers[2]) % 2,
    base = (first + second + third) >= 2 ? 1 : 0;

  for (var i = 0; i < len; i++) {
    if (Math.abs(integers[i] % 2) != base) {
      return integers[i];
    }
  }
}
