'use strict';

let Myfn = require('../arrayBinarySearch/array-binary-search');
describe('Binary Search', ()=> {
    it('case one (First index)', ()=> {
        let arr = [2, 5, 8, 9, 6, 4];
        expect(Myfn.BinarySearch(arr,2)).toEqual(0);
    });
});

describe('Binary Search', ()=> {
    it('case two (Middle index)', ()=> {
        let arr = [2, 5, 8, 9, 6, 4];
        expect(Myfn.BinarySearch(arr,8)).toEqual(2);
    });
});

describe('Binary Search', ()=> {
    it('case three (Last index)', ()=> {
        let arr = [2, 5, 8, 9, 6, 4];
        expect(Myfn.BinarySearch(arr,4)).toEqual(5);
    });
});

describe('Binary Search', ()=> {
    it('case four (not exist index)', ()=> {
        let arr = [2, 5, 8, 9, 6, 4];
        expect(Myfn.BinarySearch(arr,11)).toEqual(-1);
    });
});