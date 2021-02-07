// Description:
// There is an array with some numbers.All numbers are equal except for one.Try to find it!

// findUniq([1, 1, 1, 2, 1, 1]) === 2
// findUniq([0, 0, 0.55, 0, 0]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.


// fastest performance
function findUniq3(arr) {
  let [a, b, c] = arr.slice(0, 3);
  if (a != b && a != c) return a;
  for (let x of arr) if (x != a) return x
}

//using sort (very slow)
function findUniq2(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0]
}


// my solution (pretty fast actually)
function findUniq(arr) {
  let commonNumber = arr[0];
  let uniqueNumber = arr[1]


  if (commonNumber === uniqueNumber) {
    for (let i = 0; i < arr.length; i++) {
      if (commonNumber !== arr[i]) {
        uniqueNumber = arr[i];
        return uniqueNumber;
      }
    }
  }

  // check to see if first or second number is unique
  if (commonNumber === arr[2]) {
    return uniqueNumber;
  } else {
    return commonNumber;
  }
}
