function make_rat(numer, denom) {
  return [numer, denom];
}

function numer(rat) {
  return rat[0];
}

function denom(rat) {
  return rat[1];
}

function simplify(q) {
  let n = numer(q);
  let d = denom(q);
  let g = gcd(n, d);
  if (g == 1) return q;
  return make_rat(n / g, d / g);
}

function gcd(x, y) {
  if (typeof x !== "number" || typeof y !== "number") return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  // gcd(x, y) == gcd(y, x % y) ; x > y
  // gcd(x, 0) == abs(x);
  return x;
}

function subtract_rat(q1, q2) {
  let n1 = numer(q1),
    n2 = numer(q2),
    d1 = denom(q1),
    d2 = denom(q2);

  let new_numer = n1 * d2 - n2 * d1,
    new_denom = d1 * d2;

  return simplify(make_rat(new_numer, new_denom));
}

// Recursive
function friendly_form(q) {
  if (numer(q) == 1) return [q];
  let r = greatest_rat_smaller_than(q);
  let q2 = subtract_rat(q, r);
  return [r, ...friendly_form(q2)];
}

function greatest_rat_smaller_than(q) {
  let n = numer(q);
  let d = denom(q);

  let m = Math.floor(d / n);

  let frac = (i) => 1 / (2 + i + m);

  function iter(i) {
    if (n / d - frac(i) > 0) return make_rat(1, 2 + i + m);
    return iter(i + 1);
  }
  return iter(0);
}

// Iterative
function friendly_form_iter(q) {
  let result = [];
  do {
    let r = greatest_rat_smaller_than_iter(q);
    let q2 = subtract_rat(q, r);
    result.push(r);
    q = q2;
  } while (numer(q) != 1);
  result.push(q);
  return result;
}

function greatest_rat_smaller_than_iter(q) {
  let n = numer(q);
  let d = denom(q);
  let m = Math.floor(d / n);

  let frac = (i) => 1 / (2 + i + m);
  let j = 0;
  while (n / d - frac(j) <= 0) {
    j++;
  }

  return make_rat(1, 2 + j + m);
}

// TEST
let q = make_rat(4312321, 1223123131312);
//console.log(friendly_form(q));
console.log(friendly_form_iter(q));
console.log(Math.ceil(11 / 3));

// OUTPUT
// Recursive: Maximum call stack size exceeded
// Iterative:
/*
[
  [ 1, 283636 ],
  [ 1, 54651902675 ],
  [ 1, 1.6819999343507174e+21 ],
  [ 1, 1.450216927620742e+37 ]
]

[Done] exited with code=0 in 0.149 seconds

*/
