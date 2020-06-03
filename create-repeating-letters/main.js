

function createRepeatingLetters(word, numOfRepeats) {
  var newString = '';
  for (var i = 0; i < word.length; i++) {
    for (var j = 0; j < numOfRepeats; j++ ) {
      newString += word[i];
    }
  }
  return newString;
}

console.log(createRepeatingLetters("John", 3));
console.log(createRepeatingLetters("car", 4));
console.log(createRepeatingLetters("howdy", 1));
