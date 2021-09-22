// Recursive procedure
// Base case: if n == 1, return ["T", "F"];
// Recursive case:
//      Notice that the truth table for n is equal to the combination of:
//            - truth table of (n-1) where for each element, we adjoin "T"
//            - truth table of (n-1) where for each element, we adjoin "F"

function truth_table(n) {
  if (n < 1) {
    console.log("Error: n must be >= 1.");
    return;
  }

  if (n == 1) {
    return ["T", "F"];
  }

  let first = truth_table(n - 1).map((item) => {
    return [...item, "T"];
  });

  let second = truth_table(n - 1).map((item) => {
    return [...item, "F"];
  });

  return [...first, ...second];
}

function print_result(n) {
  let result = truth_table(n);
  if (!Array.isArray(result)) return;
  console.log(result);
  console.log("Length: ", result.length);
}

// TEST
print_result(3);
// [
//   ["T", "T", "T", "T"],
//   ["F", "T", "T", "T"],
//   ["T", "F", "T", "T"],
//   ["F", "F", "T", "T"],
//   ["T", "T", "F", "T"],
//   ["F", "T", "F", "T"],
//   ["T", "F", "F", "T"],
//   ["F", "F", "F", "T"],
//   ["T", "T", "T", "F"],
//   ["F", "T", "T", "F"],
//   ["T", "F", "T", "F"],
//   ["F", "F", "T", "F"],
//   ["T", "T", "F", "F"],
//   ["F", "T", "F", "F"],
//   ["T", "F", "F", "F"],
//   ["F", "F", "F", "F"],
// ];
// Length: 16;

// print_result(1);
// // ["T", "F"];
// // Length: 2;

// print_result(10);
// // [
// //   ["T", "T", "T", "T", "T", "T", "T", "T", "T", "T"],
// //   ["F", "T", "T", "T", "T", "T", "T", "T", "T", "T"],
// //   ["T", "F", "T", "T", "T", "T", "T", "T", "T", "T"],
// //   ["F", "F", "T", "T", "T", "T", "T", "T", "T", "T"],
// //   ["T", "T", "F", "T", "T", "T", "T", "T", "T", "T"],
// //   ["F", "T", "F", "T", "T", "T", "T", "T", "T", "T"],
// //   ["T", "F", "F", "T", "T", "T", "T", "T", "T", "T"],
// //   ["F", "F", "F", "T", "T", "T", "T", "T", "T", "T"],
// //   ["T", "T", "T", "F", "T", "T", "T", "T", "T", "T"],
// //   ["F", "T", "T", "F", "T", "T", "T", "T", "T", "T"],
// //   ["T", "F", "T", "F", "T", "T", "T", "T", "T", "T"],
// //   ["F", "F", "T", "F", "T", "T", "T", "T", "T", "T"],
// //   ["T", "T", "F", "F", "T", "T", "T", "T", "T", "T"],
// //   ["F", "T", "F", "F", "T", "T", "T", "T", "T", "T"],
// //   ["T", "F", "F", "F", "T", "T", "T", "T", "T", "T"],
// //   ["F", "F", "F", "F", "T", "T", "T", "T", "T", "T"],
// //   ["T", "T", "T", "T", "F", "T", "T", "T", "T", "T"],
// //   ["F", "T", "T", "T", "F", "T", "T", "T", "T", "T"],
// //   ["T", "F", "T", "T", "F", "T", "T", "T", "T", "T"],
// //   ["F", "F", "T", "T", "F", "T", "T", "T", "T", "T"],
// //   ["T", "T", "F", "T", "F", "T", "T", "T", "T", "T"],
// //   ["F", "T", "F", "T", "F", "T", "T", "T", "T", "T"],
// //   ["T", "F", "F", "T", "F", "T", "T", "T", "T", "T"],
// //   ["F", "F", "F", "T", "F", "T", "T", "T", "T", "T"],
// //   ["T", "T", "T", "F", "F", "T", "T", "T", "T", "T"],
// //   ["F", "T", "T", "F", "F", "T", "T", "T", "T", "T"],
// //   ["T", "F", "T", "F", "F", "T", "T", "T", "T", "T"],
// //   ["F", "F", "T", "F", "F", "T", "T", "T", "T", "T"],
// //   ["T", "T", "F", "F", "F", "T", "T", "T", "T", "T"],
// //   ["F", "T", "F", "F", "F", "T", "T", "T", "T", "T"],
// //   ["T", "F", "F", "F", "F", "T", "T", "T", "T", "T"],
// //   ["F", "F", "F", "F", "F", "T", "T", "T", "T", "T"],
// //   ["T", "T", "T", "T", "T", "F", "T", "T", "T", "T"],
// //   ["F", "T", "T", "T", "T", "F", "T", "T", "T", "T"],
// //   ["T", "F", "T", "T", "T", "F", "T", "T", "T", "T"],
// //   ["F", "F", "T", "T", "T", "F", "T", "T", "T", "T"],
// //   ["T", "T", "F", "T", "T", "F", "T", "T", "T", "T"],
// //   ["F", "T", "F", "T", "T", "F", "T", "T", "T", "T"],
// //   ["T", "F", "F", "T", "T", "F", "T", "T", "T", "T"],
// //   ["F", "F", "F", "T", "T", "F", "T", "T", "T", "T"],
// //   ["T", "T", "T", "F", "T", "F", "T", "T", "T", "T"],
// //   ["F", "T", "T", "F", "T", "F", "T", "T", "T", "T"],
// //   ["T", "F", "T", "F", "T", "F", "T", "T", "T", "T"],
// //   ["F", "F", "T", "F", "T", "F", "T", "T", "T", "T"],
// //   ["T", "T", "F", "F", "T", "F", "T", "T", "T", "T"],
// //   ["F", "T", "F", "F", "T", "F", "T", "T", "T", "T"],
// //   ["T", "F", "F", "F", "T", "F", "T", "T", "T", "T"],
// //   ["F", "F", "F", "F", "T", "F", "T", "T", "T", "T"],
// //   ["T", "T", "T", "T", "F", "F", "T", "T", "T", "T"],
// //   ["F", "T", "T", "T", "F", "F", "T", "T", "T", "T"],
// //   ["T", "F", "T", "T", "F", "F", "T", "T", "T", "T"],
// //   ["F", "F", "T", "T", "F", "F", "T", "T", "T", "T"],
// //   ["T", "T", "F", "T", "F", "F", "T", "T", "T", "T"],
// //   ["F", "T", "F", "T", "F", "F", "T", "T", "T", "T"],
// //   ["T", "F", "F", "T", "F", "F", "T", "T", "T", "T"],
// //   ["F", "F", "F", "T", "F", "F", "T", "T", "T", "T"],
// //   ["T", "T", "T", "F", "F", "F", "T", "T", "T", "T"],
// //   ["F", "T", "T", "F", "F", "F", "T", "T", "T", "T"],
// //   ["T", "F", "T", "F", "F", "F", "T", "T", "T", "T"],
// //   ["F", "F", "T", "F", "F", "F", "T", "T", "T", "T"],
// //   ["T", "T", "F", "F", "F", "F", "T", "T", "T", "T"],
// //   ["F", "T", "F", "F", "F", "F", "T", "T", "T", "T"],
// //   ["T", "F", "F", "F", "F", "F", "T", "T", "T", "T"],
// //   ["F", "F", "F", "F", "F", "F", "T", "T", "T", "T"],
// //   ["T", "T", "T", "T", "T", "T", "F", "T", "T", "T"],
// //   ["F", "T", "T", "T", "T", "T", "F", "T", "T", "T"],
// //   ["T", "F", "T", "T", "T", "T", "F", "T", "T", "T"],
// //   ["F", "F", "T", "T", "T", "T", "F", "T", "T", "T"],
// //   ["T", "T", "F", "T", "T", "T", "F", "T", "T", "T"],
// //   ["F", "T", "F", "T", "T", "T", "F", "T", "T", "T"],
// //   ["T", "F", "F", "T", "T", "T", "F", "T", "T", "T"],
// //   ["F", "F", "F", "T", "T", "T", "F", "T", "T", "T"],
// //   ["T", "T", "T", "F", "T", "T", "F", "T", "T", "T"],
// //   ["F", "T", "T", "F", "T", "T", "F", "T", "T", "T"],
// //   ["T", "F", "T", "F", "T", "T", "F", "T", "T", "T"],
// //   ["F", "F", "T", "F", "T", "T", "F", "T", "T", "T"],
// //   ["T", "T", "F", "F", "T", "T", "F", "T", "T", "T"],
// //   ["F", "T", "F", "F", "T", "T", "F", "T", "T", "T"],
// //   ["T", "F", "F", "F", "T", "T", "F", "T", "T", "T"],
// //   ["F", "F", "F", "F", "T", "T", "F", "T", "T", "T"],
// //   ["T", "T", "T", "T", "F", "T", "F", "T", "T", "T"],
// //   ["F", "T", "T", "T", "F", "T", "F", "T", "T", "T"],
// //   ["T", "F", "T", "T", "F", "T", "F", "T", "T", "T"],
// //   ["F", "F", "T", "T", "F", "T", "F", "T", "T", "T"],
// //   ["T", "T", "F", "T", "F", "T", "F", "T", "T", "T"],
// //   ["F", "T", "F", "T", "F", "T", "F", "T", "T", "T"],
// //   ["T", "F", "F", "T", "F", "T", "F", "T", "T", "T"],
// //   ["F", "F", "F", "T", "F", "T", "F", "T", "T", "T"],
// //   ["T", "T", "T", "F", "F", "T", "F", "T", "T", "T"],
// //   ["F", "T", "T", "F", "F", "T", "F", "T", "T", "T"],
// //   ["T", "F", "T", "F", "F", "T", "F", "T", "T", "T"],
// //   ["F", "F", "T", "F", "F", "T", "F", "T", "T", "T"],
// //   ["T", "T", "F", "F", "F", "T", "F", "T", "T", "T"],
// //   ["F", "T", "F", "F", "F", "T", "F", "T", "T", "T"],
// //   ["T", "F", "F", "F", "F", "T", "F", "T", "T", "T"],
// //   ["F", "F", "F", "F", "F", "T", "F", "T", "T", "T"],
// //   ["T", "T", "T", "T", "T", "F", "F", "T", "T", "T"],
// //   ["F", "T", "T", "T", "T", "F", "F", "T", "T", "T"],
// //   ["T", "F", "T", "T", "T", "F", "F", "T", "T", "T"],
// //   ["F", "F", "T", "T", "T", "F", "F", "T", "T", "T"],
// //   //... 924 more items
// // ];
// // Length: 1024;

// print_result(3);
// // [
// //   ["T", "T", "T"],
// //   ["F", "T", "T"],
// //   ["T", "F", "T"],
// //   ["F", "F", "T"],
// //   ["T", "T", "F"],
// //   ["F", "T", "F"],
// //   ["T", "F", "F"],
// //   ["F", "F", "F"],
// // ];
// // Length: 8;

// print_result(2);
// // [
// //   ["T", "T"],
// //   ["F", "T"],
// //   ["T", "F"],
// //   ["F", "F"],
// // ];
// // Length: 4;

// print_result(20);
// //   [
// //     [
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'T', 'F', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'T', 'F', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'F', 'F', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'F', 'F', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'T', 'T', 'F', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'T', 'T', 'F', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'F', 'T', 'F', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'F', 'T', 'F', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'T', 'F', 'F', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'T', 'F', 'F', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'F', 'F', 'F', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'F', 'F', 'F', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'T', 'T', 'T', 'F',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'T', 'T', 'T', 'F',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'F', 'T', 'T', 'F',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'F', 'T', 'T', 'F',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'T', 'F', 'T', 'F',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'T', 'F', 'T', 'F',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'F', 'F', 'T', 'F',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'F', 'F', 'T', 'F',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'T', 'T', 'F', 'F',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'T', 'T', 'F', 'F',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'F', 'T', 'F', 'F',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'F', 'T', 'F', 'F',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'T', 'F', 'F', 'F',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'T', 'F', 'F', 'F',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'F', 'F', 'F', 'F',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'F', 'F', 'F', 'F',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'T', 'T', 'T', 'T',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'T', 'T', 'T', 'T',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'F', 'T', 'T', 'T',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'F', 'T', 'T', 'T',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'T', 'F', 'T', 'T',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'T', 'F', 'T', 'T',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'F', 'F', 'T', 'T',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'F', 'F', 'T', 'T',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'T', 'T', 'F', 'T',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'T', 'T', 'F', 'T',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'F', 'T', 'F', 'T',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'F', 'T', 'F', 'T',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'T', 'F', 'F', 'T',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'T', 'F', 'F', 'T',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'F', 'F', 'F', 'T',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'F', 'F', 'F', 'T',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'T', 'T', 'T', 'F',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'T', 'T', 'T', 'F',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'F', 'T', 'T', 'F',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'F', 'T', 'T', 'F',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'T', 'F', 'T', 'F',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'T', 'F', 'T', 'F',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'F', 'F', 'T', 'F',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'F', 'F', 'T', 'F',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'T', 'T', 'F', 'F',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'T', 'T', 'F', 'F',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'F', 'T', 'F', 'F',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'F', 'T', 'F', 'F',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'T', 'F', 'F', 'F',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'T', 'F', 'F', 'F',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'F', 'F', 'F', 'F',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'F', 'F', 'F', 'F',
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'T', 'T', 'T', 'T',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'F', 'T', 'T', 'T',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'T', 'F', 'T', 'T',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'T', 'F', 'T', 'T',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'F', 'F', 'T', 'T',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'F', 'F', 'T', 'T',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'T', 'T', 'F', 'T',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'T', 'T', 'F', 'T',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'F', 'T', 'F', 'T',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'F', 'T', 'F', 'T',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'T', 'F', 'F', 'T',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'T', 'F', 'F', 'T',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'F', 'F', 'F', 'T',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'F', 'F', 'F', 'T',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'T', 'T', 'T', 'F',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'T', 'T', 'T', 'F',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'F', 'T', 'T', 'F',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'F', 'T', 'T', 'F',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'T', 'F', 'T', 'F',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'T', 'F', 'T', 'F',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'F', 'F', 'T', 'F',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'F', 'F', 'T', 'F',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'T', 'T', 'F', 'F',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'T', 'T', 'F', 'F',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'F', 'T', 'F', 'F',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'F', 'T', 'F', 'F',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'T', 'F', 'F', 'F',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'T', 'F', 'F', 'F',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'F', 'F', 'F', 'F',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'F', 'F', 'F', 'F',
// //       'T', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'T', 'T', 'T', 'T',
// //       'F', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'T', 'T', 'T', 'T',
// //       'F', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'T', 'F', 'T', 'T', 'T',
// //       'F', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //     [
// //       'F', 'F', 'T', 'T', 'T',
// //       'F', 'F', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T',
// //       'T', 'T', 'T', 'T', 'T'
// //     ],
// //   //  ... 1048476 more items
// //   ]
// //Length:  1048576

// //[Done] exited with code=0 in 7.299 seconds
