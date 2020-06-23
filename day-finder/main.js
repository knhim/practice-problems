/*
- define a function named dayFinder
- has a string as its parameter
- string is in (MM/DD/YYYY) format
-returns a string which will be the day of the week

new Date()? to create
Date.prototype.getDay() returns an integer, where 0 is Sunday
*/

function dayFinder(stringDate) {
  const date = new Date(stringDate);
  const number =  date.getDay();

  switch(number) {
    case 0:
      console.log('Sunday');
      break;
    case 1:
      console.log('Monday');
      break;
    case 2:
      console.log('Tuesday');
      break;
    case 3:
      console.log('Wednesday');
      break;
    case 4:
      console.log('Thursday');
      break;
    case 5:
      console.log('Friday');
      break;
    case 6:
      console.log('Saturday');
      break;
  }
}

console.log(dayFinder("05/22/1946"));
console.log(dayFinder("01/20/2001"));
console.log(dayFinder("03/15/1988"));
console.log(dayFinder("06/23/2020"));
