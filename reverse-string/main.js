// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//my solution

function reverse(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

/*
same way but with a for of loop

function reverse(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}
*/


/*
using built in javascript methods:
use split() to turn string into an array
use reverse() to reverse elements in array
use join() to bring the array back into a string

*/
function reverse1(str) {
  const arr = str.split('');
  arr.reverse();
  return arr.join('');
}

/* shorter way
function reverse(str) {
  return str.split('').reverse().join('');
}
*/

function reverse2(str) {
  str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');
}

/*
-symplify syntax
  return str.split('').reduce((rev,char) => char + rev, '');
 */
