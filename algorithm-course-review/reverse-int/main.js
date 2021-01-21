// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


// have to make sure if you are assigning a variable to do all the work in it. here I'm just returning the string back
//into an int without doing any work
function reverseInt(n) {
  let reversed = n.toString().split('').reverse().join('');
  return Math.sign(n) * parseInt(reversed);
}
