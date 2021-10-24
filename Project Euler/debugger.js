/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function main() {
  let l1 = make_list(
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1
  );
  let l2 = make_list(5, 6, 4);
  print_list(addTwoNumbers(l1, l2));
  return addTwoNumbers(l1, l2);
}

main();

function addTwoNumbers(l1, l2) {
  let lenA = length(l1),
    lenB = length(l2);

  if (lenA == lenB || (lenA < 21 && lenB < 21)) {
    let a = toNum(reverse(l1)),
      b = toNum(reverse(l2));
    let sum = a + b;
    let numArr = intToArr(sum);

    let res = reverse(make_list(...numArr));

    return res;
  }

  let reqLen = Math.min(lenA, lenB);
  let shorterLS = reqLen == lenA ? l1 : l2;
  let longerLS = reqLen == lenA ? l2 : l1;

  let firstLongLS = reverse(slice_list(longerLS, 0, reqLen - 1));
  let secondLongLS = reverse(slice_list(longerLS, reqLen));

  let longerNum = toNum(firstLongLS);
  let shorterNum = toNum(reverse(shorterLS));

  let sum = longerNum + shorterNum;
  let numArr = intToArr(sum);
  let result_1 = make_list(...numArr);

  let result = append(reverse(result_1), secondLongLS);

  return result;
}

function cons(a, b) {
  return { val: a, next: b };
}

function car(pair) {
  return pair.val;
}

function cdr(pair) {
  return pair.next;
}

function make_list(...args) {
  let l = args.length;
  function recur(count) {
    if (count == l) return null;
    return cons(args[count], recur(count + 1));
  }
  return recur(0);
}

function append(l1, l2) {
  if (l1 == null) return l2;
  return cons(car(l1), append(cdr(l1), l2));
}

function reverse(list) {
  if (list == null) return null;
  return append(reverse(cdr(list)), cons(car(list), null));
}

function toNum(list) {
  function iter(list, result) {
    if (list == null) return result / 10;
    return iter(cdr(list), result + 10 ** length(list) * car(list));
  }

  return iter(list, 0);
}

function length(list) {
  if (list == null) return 0;
  return 1 + length(cdr(list));
}

function intToArr(num) {
  let str = num.toString();
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    str[i] = +str[i];
  }
  return str;
}

function print_list(list) {
  if (list == null) return;
  process.stdout.write(car(list).toString());
  process.stdout.write(" ");
  print_list(cdr(list));
}

function slice_list(list, start, end = length(list) - 1) {
  function iter(ls, count, result) {
    if (ls == null) return result;
    if (count < start) {
      return iter(cdr(ls), count + 1, result);
    }
    if (count == end + 1) {
      return result;
    }
    if (count == start && end == length(list) - 1) {
      return ls;
    }
    return iter(cdr(ls), count + 1, cons(car(ls), result));
  }
  return reverse(iter(list, 0, null));
}
