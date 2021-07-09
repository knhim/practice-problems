// Description:
// Complete the solution so that the function will break up camel casing, using a
// space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
function solution(string) {
  let newStr = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i].toUpperCase() === string[i]) {
      newStr += ' ';
    }
    newStr += string[i];
  }
  return newStr;
}
