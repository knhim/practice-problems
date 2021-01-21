// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//solution 2 (using the .sort method);

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

}

// solution 1
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// function buildCharMap(str) {
//   const charMap = {};

//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }

// my solution (when iterating over an object use for in)
// function anagrams(stringA, stringB) {
//   const strA = stringA.replace(/[^\w]/g, "").toLowerCase();
//   const strB = stringB.replace(/[^\w]/g, "").toLowerCase();
//   const charMap1 = {};
//   const charMap2 = {};

//   if (strA.length < strB.length || strA.length > strB.length) {
//     return false;
//   }

//   for (let char of strA) {
//     if (!charMap1[char]) {
//       charMap1[char] = 1;
//     } else {
//       charMap1[char]++;
//     }
//   }

//   for (let char of strB) {
//     if (!charMap2[char]) {
//       charMap2[char] = 1;
//     } else {
//       charMap2[char]++;
//     }
//   }

//   for (let chars in charMap1) {

//     if (charMap1[chars] !== charMap2[chars]) {
//       return false;
//     }
//   }
//   return true;

// }
