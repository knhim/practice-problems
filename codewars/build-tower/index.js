// Description:
// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// C#: returns a string[];
// PHP: returns an array;
// C++: returns a vector<string>;
// Haskell: returns a [String];
// Ruby: returns an Array;
// Lua: returns a Table;
// Have fun!

function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}

function towerBuilder2(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
             + "*".repeat((i * 2)+ 1)
             + " ".repeat(nFloors - i - 1));
  }
  return tower;
}

// my attempted solution (did not finish)

function towerBuilder3(nFloors) {
  const towerArr = [];

  for (let i = 0; i < nFloors; i++) {
    const asterisks = (nFloors * 2 - 1)
    towerArr[i] = (nFloors * 2 - 1);
  }
  console.log(towerArr);
  return towerArr;
}
