'use strict';

function insertShiftArray(arr, value) {
    arr.splice(Math.ceil(arr.length / 2), 0, value);
    return arr;
}

var list = [1, 2, 3, 4, 5, 6, 7, 8];

insertShiftArray(list,10);

// console.log(insertShiftArray(list,10));