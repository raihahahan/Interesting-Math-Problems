function make_table(n) {
  let arr = [];
  let col, // columns
    row, // rows
    j, // to skip over the columns
    k = n, // the power of 2
    m = true; // truth value

  for (row = 0; row < 2 ** n; row++) {
    // to populate array into an array of arrays
    arr.push([]);
  }

  row = 0;
  for (col = 0; col < n; col++) {
    for (j = 0; j < 2 ** n; j += 2 ** (k - 1)) {
      for (let l = 0; l < 2 ** (k - 1); l++, row++) {
        arr[row].push(m);
      }
      m = !m;
    }
    k--;
    row = 0;
  }
  return arr;
}

//console.log(make_table(1));
// [[true], [false]];

console.log(make_table(2));
/*
[
  [true, true],
  [true, false],
  [false, true],
  [false, false],
];
*/

console.log(make_table(3));
/*
[
  [true, true, true],
  [true, true, false],
  [true, false, true],
  [true, false, false],
  [false, true, true],
  [false, true, false],
  [false, false, true],
  [false, false, false],
];
*/

console.log(make_table(4));
/*
[
  [true, true, true, true],
  [true, true, true, false],
  [true, true, false, true],
  [true, true, false, false],
  [true, false, true, true],
  [true, false, true, false],
  [true, false, false, true],
  [true, false, false, false],
  [false, true, true, true],
  [false, true, true, false],
  [false, true, false, true],
  [false, true, false, false],
  [false, false, true, true],
  [false, false, true, false],
  [false, false, false, true],
  [false, false, false, false],
];
*/

console.log(make_table(10));
/*
[
  [true, true, true, true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true, true, true, false],
  [true, true, true, true, true, true, true, true, false, true],
  [true, true, true, true, true, true, true, true, false, false],
  [true, true, true, true, true, true, true, false, true, true],
  [true, true, true, true, true, true, true, false, true, false],
  [true, true, true, true, true, true, true, false, false, true],
  [true, true, true, true, true, true, true, false, false, false],
  [true, true, true, true, true, true, false, true, true, true],
  [true, true, true, true, true, true, false, true, true, false],
  [true, true, true, true, true, true, false, true, false, true],
  [true, true, true, true, true, true, false, true, false, false],
  [true, true, true, true, true, true, false, false, true, true],
  [true, true, true, true, true, true, false, false, true, false],
  [true, true, true, true, true, true, false, false, false, true],
  [true, true, true, true, true, true, false, false, false, false],
  [true, true, true, true, true, false, true, true, true, true],
  [true, true, true, true, true, false, true, true, true, false],
  [true, true, true, true, true, false, true, true, false, true],
  [true, true, true, true, true, false, true, true, false, false],
  [true, true, true, true, true, false, true, false, true, true],
  [true, true, true, true, true, false, true, false, true, false],
  [true, true, true, true, true, false, true, false, false, true],
  [true, true, true, true, true, false, true, false, false, false],
  [true, true, true, true, true, false, false, true, true, true],
  [true, true, true, true, true, false, false, true, true, false],
  [true, true, true, true, true, false, false, true, false, true],
  [true, true, true, true, true, false, false, true, false, false],
  [true, true, true, true, true, false, false, false, true, true],
  [true, true, true, true, true, false, false, false, true, false],
  [true, true, true, true, true, false, false, false, false, true],
  [true, true, true, true, true, false, false, false, false, false],
  [true, true, true, true, false, true, true, true, true, true],
  [true, true, true, true, false, true, true, true, true, false],
  [true, true, true, true, false, true, true, true, false, true],
  [true, true, true, true, false, true, true, true, false, false],
  [true, true, true, true, false, true, true, false, true, true],
  [true, true, true, true, false, true, true, false, true, false],
  [true, true, true, true, false, true, true, false, false, true],
  [true, true, true, true, false, true, true, false, false, false],
  [true, true, true, true, false, true, false, true, true, true],
  [true, true, true, true, false, true, false, true, true, false],
  [true, true, true, true, false, true, false, true, false, true],
  [true, true, true, true, false, true, false, true, false, false],
  [true, true, true, true, false, true, false, false, true, true],
  [true, true, true, true, false, true, false, false, true, false],
  [true, true, true, true, false, true, false, false, false, true],
  [true, true, true, true, false, true, false, false, false, false],
  [true, true, true, true, false, false, true, true, true, true],
  [true, true, true, true, false, false, true, true, true, false],
  [true, true, true, true, false, false, true, true, false, true],
  [true, true, true, true, false, false, true, true, false, false],
  [true, true, true, true, false, false, true, false, true, true],
  [true, true, true, true, false, false, true, false, true, false],
  [true, true, true, true, false, false, true, false, false, true],
  [true, true, true, true, false, false, true, false, false, false],
  [true, true, true, true, false, false, false, true, true, true],
  [true, true, true, true, false, false, false, true, true, false],
  [true, true, true, true, false, false, false, true, false, true],
  [true, true, true, true, false, false, false, true, false, false],
  [true, true, true, true, false, false, false, false, true, true],
  [true, true, true, true, false, false, false, false, true, false],
  [true, true, true, true, false, false, false, false, false, true],
  [true, true, true, true, false, false, false, false, false, false],
  [true, true, true, false, true, true, true, true, true, true],
  [true, true, true, false, true, true, true, true, true, false],
  [true, true, true, false, true, true, true, true, false, true],
  [true, true, true, false, true, true, true, true, false, false],
  [true, true, true, false, true, true, true, false, true, true],
  [true, true, true, false, true, true, true, false, true, false],
  [true, true, true, false, true, true, true, false, false, true],
  [true, true, true, false, true, true, true, false, false, false],
  [true, true, true, false, true, true, false, true, true, true],
  [true, true, true, false, true, true, false, true, true, false],
  [true, true, true, false, true, true, false, true, false, true],
  [true, true, true, false, true, true, false, true, false, false],
  [true, true, true, false, true, true, false, false, true, true],
  [true, true, true, false, true, true, false, false, true, false],
  [true, true, true, false, true, true, false, false, false, true],
  [true, true, true, false, true, true, false, false, false, false],
  [true, true, true, false, true, false, true, true, true, true],
  [true, true, true, false, true, false, true, true, true, false],
  [true, true, true, false, true, false, true, true, false, true],
  [true, true, true, false, true, false, true, true, false, false],
  [true, true, true, false, true, false, true, false, true, true],
  [true, true, true, false, true, false, true, false, true, false],
  [true, true, true, false, true, false, true, false, false, true],
  [true, true, true, false, true, false, true, false, false, false],
  [true, true, true, false, true, false, false, true, true, true],
  [true, true, true, false, true, false, false, true, true, false],
  [true, true, true, false, true, false, false, true, false, true],
  [true, true, true, false, true, false, false, true, false, false],
  [true, true, true, false, true, false, false, false, true, true],
  [true, true, true, false, true, false, false, false, true, false],
  [true, true, true, false, true, false, false, false, false, true],
  [true, true, true, false, true, false, false, false, false, false],
  [true, true, true, false, false, true, true, true, true, true],
  [true, true, true, false, false, true, true, true, true, false],
  [true, true, true, false, false, true, true, true, false, true],
  [true, true, true, false, false, true, true, true, false, false],
  // ... 924 more items
];
*/
