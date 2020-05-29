'use strict';

function BinarySearch(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            return i;
        }
    }
    return -1;
}

module.exports.BinarySearch = BinarySearch;

// let arr = [2, 5, 8, 9, 6, 4];
// BinarySearch(arr, 8); 
// BinarySearch(arr, 2);
// BinarySearch(arr, 4);
// BinarySearch(arr, 10);