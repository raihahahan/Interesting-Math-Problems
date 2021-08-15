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

function subtract_rat(q1, q2) {
  let n1 = numer(q1),
    n2 = numer(q2),
    d1 = denom(q1),
    d2 = denom(q2);

  let new_numer = n1 * d2 - n2 * d1,
    new_denom = d1 * d2;

  return simplify(make_rat(new_numer, new_denom));
}

function friendly_form(q) {
  if (numer(q) == 1) return [q];
  let r = greatest_rat_smaller_than(q);
  let q2 = subtract_rat(q, r);
  return [r, ...friendly_form(q2)];
}

function greatest_rat_smaller_than(q) {
  let n = numer(q);
  let d = denom(q);
  let frac = (i) => 1 / (2 + i);

  if (n / d > 1 / 2) return make_rat(1, 2);

  function iter(i) {
    if (n / d - frac(i) > 0) return make_rat(1, 2 + i);
    return iter(i + 1);
  }
  return iter(1);
}

// TEST
let q = make_rat(23, 701);
console.log(friendly_form(q));

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
