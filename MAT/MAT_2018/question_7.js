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
); // duplicate copy of 7) (ii)

//console.log(path_copy_iii);

function fillPath(p, i, j) {
  p[j][i] = "x";
  while (i > 0 && j > 0) {
    if (p[j][i - 1] == p[j - 1][i]) {
      p[j][i - 1] = "x";
      p[j - 1][i] = "x";
      fillPath(p, i - 1, j);
      fillPath(p, i, j - 1);
    }
    if (max(p[j - 1][i], p[j][i - 1]) == p[j - 1][i]) {
      p[j - 1][i] = "x";
      j--;
    } else {
      p[j][i - 1] = "x";
      i--;
    }
  }
  p[0][0] = "x";

  for (let j = 0; j < p.length; j++) {
    for (let i = 0; i < p.length; i++) {
      if (p[j][i] != "x") p[j][i] = "o";
    }
  }
}

//fillPath(path_copy_iii, 7, 7);
console.log(path_copy_iii);
/*
[
  ["x", "x", "o", "o", "o", "o", "o", "o"],
  ["x", "x", "o", "o", "o", "o", "o", "o"],
  ["x", "x", "o", "o", "o", "o", "o", "o"],
  ["x", "x", "o", "o", "o", "o", "o", "o"],
  ["x", "x", "x", "o", "o", "o", "o", "o"],
  ["x", "x", "x", "x", "o", "o", "o", "o"],
  ["o", "o", "x", "x", "x", "x", "o", "o"],
  ["o", "o", "o", "x", "x", "x", "x", "x"],
];
*/
/*
["x", "o", "o", "o", "o", "o", "o", "o"],
["x", "o", "o", "o", "o", "o", "o", "o"],
["x", "o", "o", "o", "o", "o", "o", "o"],
["x", "x", "x", "o", "o", "o", "o", "o"],
["x", "x", "x", "o", "o", "o", "o", "o"],
["x", "x", "x", "x", "o", "o", "o", "o"],
["o", "o", "x", "x", "x", "x", "o", "o"],
["o", "o", "o", "x", "x", "x", "x", "x"],
*/
