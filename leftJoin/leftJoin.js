'use strict';

function leftJoin(table1, table2) {
    let results = [];
    let left = Object.keys(table1);
    let right = Object.keys(table2);
    left.forEach((val, i) => {
        if (right.includes(val)) {
            results.push([val, table1[val], table2[val]]);
        }
        else {
            results.push([val, table1[val], null])
        }
    })
    return results;
}

module.exports = leftJoin;