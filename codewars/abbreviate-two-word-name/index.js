// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// my solution
function abbrevName(name) {
  let initials = name[0].toUpperCase();

  for (let i = 0; i < name.length; i++) {
    if (name[i] === ' ') {
      initials += '.' + name[i + 1].toUpperCase();
    }
  }

  return initials;
}

// alternative solution

function abbrevName1(name) {
  var nameArray = name.split(' ');
  return (nameArray[0][0] + '.' + nameArray[1][0]).toUpperCase();
}

function abbrevName2(name) {
  return name
    .split(' ')
    .map((i) => i[0].toUpperCase())
    .join('.');
}
