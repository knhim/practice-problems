function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);
  for (let rows = 0; rows < n; rows++) {
    let level = '';

    for (let columns = 0; columns < n * 2 - 1; columns++) {
      if (midpoint - rows <= columns && midpoint + rows >= columns) {
        level += '#'
      } else {
        level += ' ';
      }
    }
    console.log(level);
  }
}
