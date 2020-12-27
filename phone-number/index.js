// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

// my solution

function createPhoneNumber(numbers) {
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}

//good solution

function createPhoneNumber2(numbers) {
  const firstThree = numbers.slice(0, 3).join('');
  const secondThree = numbers.slice(3, 6).join('');
  const lastFour = numbers.slice(6, 11).join('');
  return `(${firstThree}) ${secondThree}-${lastFour}`;
}
