// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  const strToArray = s.split(' ');
  let shortestWord = strToArray[0].length;

  for (let i = 1; i < strToArray.length; i++) {
    if (strToArray[i].length < shortestWord) {
      shortestWord = strToArray[i].length;
    }
  }

  return shortestWord;
}

function findShort2(s) {
  return Math.min(...s.split(' ').map(s => s.length));
}
