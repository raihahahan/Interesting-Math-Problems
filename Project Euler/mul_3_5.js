import {
  enumerate,
  filter,
  accumulate,
} from "./Useful Procedures/useful_procedures.js";

function mul_3_5(n) {
  let enum_list = enumerate(n - 1), // enumerates a list from 1 to n - 1
    filtered_list = filter(enum_list, (item) => {
      return item % 3 == 0 || item % 5 == 0 ? item : null;
    }), // filters the list according to the 2nd arg predicate
    result = accumulate(
      filtered_list,
      (a, b) => {
        return a + b;
      },
      0
    ); // accumulate the result by adding the items up
  return result;
}

console.log(mul_3_5(1000));
// 233169
