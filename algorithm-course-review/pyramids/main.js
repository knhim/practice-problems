// non recursive solution
// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);
//   for (let rows = 0; rows < n; rows++) {
//     let level = '';

//     for (let columns = 0; columns < n * 2 - 1; columns++) {
//       if (midpoint - rows <= columns && midpoint + rows >= columns) {
//         level += '#'
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

//recursive solution

function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2*n-1)/2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' '
  }

  pyramid (n, row, level + add);
}
