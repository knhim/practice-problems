// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// using the every() array helper
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}




// most direct solution
// function palindrome(str) {
//   const reversed = str
//     .split('')
//     .reverse()
//     .join('');
//   return reversed === str;
// }

// for loop
// function palindrome(str) {
//   let newStr = '';

//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }
//   return newStr === str;
// }



// using a for of loop
// function palindrome(str) {
//   let reversed = '';
//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed === str;


// }
