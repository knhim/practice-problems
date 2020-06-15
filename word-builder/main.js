/*
-create a function named wordBuilder
-takes a string as an argument
-returns an array, where each index is a character of the word + previous
-eventually creates entire word

need an empty array, with a string.length;
iterate through each index, such as i += i;

*/

function wordBuilder(wordToSpell) {
  var wordArray = [];
  var wordByCharacters = '';
  for (var i = 0; i < wordToSpell.length; i++) {
    wordByCharacters += wordToSpell[i];
    wordArray.push(wordByCharacters);
  }
  return wordArray;
}

console.log(wordBuilder("JavaScript"));
console.log(wordBuilder("Moon"));
console.log(wordBuilder("Stars"));
