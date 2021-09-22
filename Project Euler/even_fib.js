import {
  accumulate,
  filter,
  cons,
} from "./Useful Procedures/useful_procedures.js";

function fib_iter(n) {
  // returns the nth fibonacci number iteratively
  let a = 1,
    b = 2;
  for (let i = 0; i < n; a = a + b, b = a, i++);
  return a;
}

function fib_list(n) {
  // returns fibonacci numbers until the nth number as a linked list
  function iter(count, a, b) {
    if (count == 0) return null;
    return cons(a, iter(count - 1, a + b, a));
  }
  return iter(n, 1, 1);
}

function even_fib_numbers(n) {
  return filter(fib_list(n), (item) => {
    return item % 2 == 0 ? item : null;
  });
}

function sum_even_fib(n) {
  return accumulate(
    even_fib_numbers(n),
    (a, b) => {
      return a + b;
    },
    0
  );
}

function sum_smaller_than(m) {
  function iter(count, a, b) {
    if (count == 0 || a > m) return null;
    return cons(a, iter(count - 1, a + b, a));
  }

  let even_list = filter(iter(m, 1, 1), (item) => {
    return item % 2 == 0 ? item : null;
  });

  return accumulate(
    even_list,
    (a, b) => {
      return a + b;
    },
    0
  );
}

console.log(sum_smaller_than(4000000));

// 4613732
