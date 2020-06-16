/*

-create a function that takes in one parameter(a number), and adds a free cup for every 6 cups a customer buys
- maybe something to do with % or division?
- 13 / 6 = 2

*/

function freeCoffeeCups (number) {
  var remainder = 0;
  if (number < 6) {
    return number;
  } else if (number === 6) {
    return number + 1;
  } else {
    remainder = Math.floor(number / 6); //use math.round to get a whole number
    return number + remainder;
  }
}

console.log('freeCoffeeCups(13)', freeCoffeeCups(13));
console.log('freeCoffeeCups(6)', freeCoffeeCups(6));
console.log('freeCoffeeCups(5)', freeCoffeeCups(5));
console.log('freeCoffeeCups(28)', freeCoffeeCups(28)); // Answer:32
