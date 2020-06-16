

function isSantaComing (dateObject) {
  return (dateObject.getMonth() === 11 && dateObject.getDate() === 24)
}

console.log(isSantaComing(new Date(2001, 11, 24)));
console.log(isSantaComing(new Date(2018, 7, 4)));
console.log(isSantaComing(new Date(1995, 11, 23, 23, 59, 59)));
