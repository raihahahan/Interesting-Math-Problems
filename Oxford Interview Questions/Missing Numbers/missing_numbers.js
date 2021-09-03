// in a sorted sequence of slightly less than n numbers, define a procedure to search for the missing numbers in the sequence
function missing_numbers(arr, max) {
    let len = arr.length,
        result = [];
    for (let i = 0; i < max; i++) {
        if (!binary_search(arr, i, len)) result.push(i);
    }

    return result;
}

function binary_search(arr, toSearch, len) {
    let midIndex = Math.ceil(len / 2) - 1;

    if (len == 1 && arr[midIndex] != toSearch) return false;

    if (arr[midIndex] == toSearch) return true;

    if (arr[midIndex] > toSearch) {
        let truncArr = truncateArr(arr, 0, midIndex),
            newLen = truncArr.length;
        return binary_search(truncArr, toSearch, newLen);
    }

    if (arr[midIndex] < toSearch) {
        let truncArr = truncateArr(arr, midIndex+1, len-1),
            newLen = truncArr.length;
        return binary_search(truncArr, toSearch, newLen);
    }

    return false;
}

function truncateArr(arr, startIndex, endIndex) {
    let result = [];
    for (let i = startIndex; i <= endIndex; i++) {
        result.push(arr[i]);
    }
    return result;
}   

let array = [3,4, 5, 12, 343, 1212, 343, 1212, 4,12, 1334],
    len = array.length;
let r = missing_numbers(array, 1000000);

console.log(r);

/*
[
    0,   1,   2,   6,  7,  8,  9, 10, 11, 12, 13, 14,
   15,  16,  17,  18, 19, 20, 21, 22, 23, 24, 25, 26,
   27,  28,  29,  30, 31, 32, 33, 34, 35, 36, 37, 38,
   39,  40,  41,  42, 43, 44, 45, 46, 47, 48, 49, 50,
   51,  52,  53,  54, 55, 56, 57, 58, 59, 60, 61, 62,
   63,  64,  65,  66, 67, 68, 69, 70, 71, 72, 73, 74,
   75,  76,  77,  78, 79, 80, 81, 82, 83, 84, 85, 86,
   87,  88,  89,  90, 91, 92, 93, 94, 95, 96, 97, 98,
   99, 100, 101, 102,
   ... 999897 more items
 ]
 */
