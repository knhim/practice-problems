function removeNullValues(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === null) {
      array.splice(i,1);
      i--;
    }
  }
  return array;
}

console.log(removeNullValues([3, 5, null, null, 87, "hello", "goodbye"]))
console.log(removeNullValues([true, null, false, {}, null, 43, "node"]))
console.log(removeNullValues([null, null, null, 7, null, "eight"]))
