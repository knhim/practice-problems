// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
  let avg = 0;
  for (let i = 0; i < array.length; i++) {
    avg += array[i];
  }
  if (array.length === 0) {
    return 0;
  }
  return avg / array.length;
}
