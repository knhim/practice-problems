// An isogram is a word that has no repeating letters, consecutive or non - consecutive.Implement a function that determines whether a string that contains only letters is an isogram.Assume the empty string is an isogram.Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

// my solution
function isIsogram(str) {
  let lowerCasedStr = str.toLowerCase();

  for (let i = 0; i < lowerCasedStr.length; i++) {
    let temp = 0;
    if (lowerCasedStr[temp] === lowerCasedStr[i + 1]) {
      return false;
    }
    for (let j = 1; j < i; j++) {
      if (lowerCasedStr[j] === lowerCasedStr[i]) {
        return false;
      }
    }
  }
  return true;
}

//this is a cleaner version of my solution and one that I tried to attempt to do
function isIsogram2(str) {

  var i, j;
  str = str.toLowerCase();
  for (i = 0; i < str.length; ++i)
    for (j = i + 1; j < str.length; ++j)
      if (str[i] === str[j])
        return false;
  return true;

}

console.log(isIsogram2('godiva'));
