'use strict';

function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length; i > 0; i--) {
        newArr.push(arr[i - 1]);
    }
    return newArr;
}

module.exports.reverseArray = reverseArray;
