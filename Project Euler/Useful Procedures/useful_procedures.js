// will be implementing data structure as linked list
// will mostly use iteration instead of recursion

export function cons(a, b) {
  return { value: a, next: b };
}

export function car(pair) {
  return pair.value;
}

export function cdr(pair) {
  return pair.next;
}

export function make_list(...args) {
  // automatically generates a singly-linked list
  let len = args.length;
  let a = { value: args[len - 1], next: null }; // last item of list
  let b = { value: args[len - 2], next: a }; // 2nd last item of list
  for (; len > 2; a = b, b = { value: args[len - 3], next: a }, len--); // keep going down the list. the next of b is the previous b value
  return b;
}

export function make_list_recur(...args) {
  let l = args.length;
  function recur(count) {
    if (count == l) return null;
    return cons(args[count], recur(count + 1));
  }
  return recur(0);
}

export function print_list(list) {
  let arr = [];
  for (; list != null; list = list.next) {
    if (list.value == null || list.value == undefined) continue;
    arr.push(list.value);
  }
  console.log(JSON.stringify(arr));
}

export function length(list) {
  // returns the lenght of a singly-linked list
  let j = 0;
  for (; list != null; list = list.next, j++);
  return j;
}

export function accumulate(list, f, initial) {
  let result = initial;
  for (; list != null; result = f(result, list.value), list = list.next);
  return result;
}

export function enumerate(n) {
  // enumerates a singly-linked list from 1 to n
  let a = { value: n, next: null }; // last item of list
  let b = { value: n - 2, next: a }; // 2nd last item of list
  for (; n > 3; a = b, b = { value: n - 3, next: a }, n--); // keep going down the list. the next of b is the previous b value
  return b;
}

export function map_list(list, p) {
  if (list == null) return null;
  return cons(p(list.value), map_list(list.next, p));
}

export function filter(list, predicate) {
  function returnNull(item) {
    return !predicate(item) ? null : item;
  }
  let l1 = map_list(list, returnNull);
  let arr = [];
  for (; l1 != null; l1 = l1.next) {
    if (l1.value == null) continue;
    arr.push(l1.value);
  }
  return make_list(...arr);
}
