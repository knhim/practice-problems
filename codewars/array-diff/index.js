// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  // if value in b matches value in a, remove that value in a every time
  // there can be multiple values in b , so need to iterate through that

  const arr = [...a];
  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < a.length; j++) {
      let index = arr.indexOf(b[i]);
      if (index !== -1) {
        arr.splice(index, 1);
      }
    }
  }
  return arr;
}

//alt solutions

function array_diff(a, b) {
  return a.filter((e) => !b.includes(e));
}
