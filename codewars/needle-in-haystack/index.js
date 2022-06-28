// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

function findNeedle(haystack) {
  // iterate through array and find the string 'needle' (maybe findIndex?)
  // return a string at that index

  let match = (element) => element === 'needle';
  let index = haystack.findIndex(match);
  let returnMessage = `found the needle at position ${index}`;
  return returnMessage;
}
// better solution
function findNeedle(haystack) {
  return 'found the needle at position ' + haystack.indexOf('needle');
}
