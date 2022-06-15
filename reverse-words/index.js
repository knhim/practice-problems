// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  return str
    .split(' ')
    .map(function (word) {
      return word.split('').reverse().join('');
    })
    .join(' ');
}

function reverseWords1(str) {
  let reversedWord = '';
  let reversedStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      reversedWord = str[i] + reversedWord;
    } else {
      reversedStr += reversedWord + ' ';
      reversedWord = '';
    }
  }

  // need to add reversedWord to get the last one b/c it won't reach another space at the end.
  return reversedStr + reversedWord;
}
