let path = []; // create global path instance

function returnEmptyPath(p, size) {
  // returns empty path template
  for (let i = 0; i < size; i++) {
    p.push([]);
  }
  return p;
}

returnEmptyPath(path, 8); // returns an empty 8*8 path

function fillEmptyPath(arrayOfPositions, p) {
  // fills path with values
  // fill with 0's
  for (let j = 0; j < p.length; j++) {
    for (let i = 0; i < p.length; i++) {
      p[j][i] = 0;
    }
  }

  // fill with coins
  for (let item of arrayOfPositions) {
    p[item[1]][item[0]] = 1;
  }

  return p;
}

posArr = [
  // positions of coins
  [3, 0],
  [5, 0],
  [6, 1],
  [3, 2],
  [0, 3],
  [1, 3],
  [4, 4],
  [0, 5],
  [2, 5],
  [6, 5],
  [3, 6],
  [5, 7],
];

fillEmptyPath(posArr, path);

/* Resulting path: 
- left to right: 1 <= i <= n
- top to bottom: 1 <= j <= n

[
  [0, 0, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
];
*/

// 7) (i)
function c(i, j) {
  return path[j][i];
}

function m(i, j) {
  let my_next = (x) => x + 1;
  let term_i = (y) => c(0, y);
  let term_j = (z) => c(z, 0);

  if (i == 0) {
    return summation(term_i, 0, my_next, j);
  }

  if (j == 0) {
    return summation(term_j, 0, my_next, i);
  }
  return c(i, j) + max(m(i - 1, j), m(i, j - 1));
}

// Helper functions for 7) (i)
function summation(term, a, next, b) {
  // summation function
  // initial value: a
  // final value: b
  // next: procedure which will be applied for each sum (eg. +, *)
  // term: the identity of the summation (eg. x, x^3, x^n)
  if (a > b) return 0;
  return term(a) + summation(term, next(a), next, b);
}

function max(a, b) {
  return a > b ? a : b;
}

// Test for 7) (i)
// console.log(m(7, 7)); // OUTPUT: 5;

// 7) (ii)
let path_copy = fillEmptyPath(posArr, returnEmptyPath([], 8)); // duplicate copy

function fillMaxValues(p) {
  for (let j = 0; j < p.length; j++) {
    for (let i = 0; i < p.length; i++) {
      p[j][i] = m(i, j);
    }
  }
  return p;
}

path_copy = fillMaxValues(path_copy);
//console.log(path_copy);

/* OUTPUT
again, for this quesiton, j is inverted vertically.
[
  [0, 0, 0, 1, 1, 2, 2, 2],
  [0, 0, 0, 1, 1, 2, 3, 3],
  [0, 0, 0, 2, 2, 2, 3, 3],
  [1, 2, 2, 2, 2, 2, 3, 3],
  [1, 2, 2, 2, 3, 3, 3, 3],
  [2, 2, 3, 3, 3, 3, 4, 4],
  [2, 2, 3, 4, 4, 4, 4, 4],
  [2, 2, 3, 4, 4, 5, 5, 5],
];
*/

// 7) (iii)
// For this question, I will 'draw' a path by indicating it with a '1', while the rest are '0's.

// For the explanation below, I will be referencing my own array where the j is inverted.
// Explanation: From end point (i,j), look directly above or to the left. If m(i-1, j) == m(i,j-1), then choose any of the two points. Else, choose max(m(i-1,j), m(i,j-1)).

// From end point, look directly above
let path_copy_iii = fillMaxValues(
  fillEmptyPath(posArr, returnEmptyPath([], 8))
).map((item) => {
  // return an object with property max for the max value, and tag to indicate if that position is part of the path
  return item.map((inner) => {
    return {
      max: inner,
      tag: 0,
      isMeet: false,
    };
  });
}); // duplicate copy of 7) (ii)

function fillPath(p, i, j) {
  p[j][i].tag++;
  while (i != 0) {
    if (p[j][i - 1].max == p[j - 1][i].max) {
      p[j][i - 1].tag++;
      p[j - 1][i].tag++;
      fillPath(p, i - 1, j);
      fillPath(p, i, j - 1);
    }
    if (max(p[j - 1][i].max, p[j][i - 1].max) == p[j - 1][i].max) {
      p[j - 1][i].tag++;
      j--;
    } else {
      p[j][i - 1].tag++;
      i--;
    }
  }

  let m;
  for (m = j; m >= 0; m--) {
    if (p[m][0].tag == 0) continue;
    if (p[m][0].tag > 0) break;
  }

  while (m >= 0) {
    p[m][0].tag++;
    m--;
  }

  return p.map((item) => {
    return item.map((inner) => {
      return inner.tag > 0 ? "x" : "o";
    });
  });
}

// Test
// console.log(fillPath(path_copy_iii, 7, 7));

// Output: (all possible paths leading to max points upon reaching E)
/*
[
  ["x", "o", "o", "o", "o", "o", "o", "o"],
  ["x", "o", "o", "o", "o", "o", "o", "o"],
  ["x", "o", "o", "o", "o", "o", "o", "o"],
  ["x", "x", "x", "o", "o", "o", "o", "o"],
  ["x", "x", "x", "o", "o", "o", "o", "o"],
  ["x", "x", "x", "x", "o", "o", "o", "o"],
  ["o", "o", "x", "x", "x", "x", "o", "o"],
  ["o", "o", "o", "x", "x", "x", "x", "x"],
];
*/

// 7) (iv) Compute the total number of possible paths that will result in the max value upon reaching E.

//fillPath(path_copy_iii, 7, 7);
//console.log(path_copy_iii);

/*
array of tag values
[
  [135, 000, 000, 000, 000, 000, 0, 0],
  [135, 000, 000, 000, 000, 000, 0, 0],
  [135, 000, 000, 000, 000, 000, 0, 0],
  [255, 120, 090, 000, 000, 000, 0, 0],
  [015, 105, 045, 000, 000, 000, 0, 0],
  [045, 030, 015, 015, 000, 000, 0, 0],
  [000, 000, 010, 005, 005, 003, 0, 0],
  [000, 000, 000, 002, 002, 001, 1, 1],
];
*/

/*
Y indicates the position where path meets
[
  ["x", "o", "o", "o", "o", "o", "o", "o"],
  ["x", "o", "o", "o", "o", "o", "o", "o"],
  ["x", "o", "o", "o", "o", "o", "o", "o"],
  ["x", "Y", "x", "o", "o", "o", "o", "o"],
  ["x", "Y", "x", "o", "o", "o", "o", "o"],
  ["x", "x", "Y", "x", "o", "o", "o", "o"],
  ["o", "o", "x", "Y", "Y", "x", "o", "o"],
  ["o", "o", "o", "x", "x", "x", "x", "x"],
];
*/

let result;
function sumOfTag() {
  let tags = [];
  path_copy_iii.map((item) => {
    return item.map((inner) => {
      tags.push(inner.tag);
    });
  });
  result = tags.reduce((accumulate, item) => {
    return accumulate + item;
  }, 0);
}
sumOfTag();
console.log(result);

function numOfPaths(p, i, j, result) {
  while (i != 0) {}
}
