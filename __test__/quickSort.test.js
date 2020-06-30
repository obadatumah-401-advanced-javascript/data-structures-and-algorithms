'use strict';

const sort = require('../quickSort/quickSort');

describe('Quick sort', () => {
    it('nearly sorting', () => {
        const expected = [ 2, 3, 5, 7, 11, 13 ];
        const value = [2,3,5,7,13,11];
        expect(sort.QuickSort(value,0,value.length-1)).toEqual(expected);
    });

    it('reverse sorting', () => {
        const expected = [ -2, 5, 8, 12, 18, 20 ];
        const value = [20,18,12,8,5,-2];
        expect(sort.QuickSort(value,0,value.length-1)).toEqual(expected);
    });
    it('quick sort for Few uniques array', ()=> {
        let arr = [5,12,7,5,5,7];
        expect(sort.QuickSort(arr,0,arr.length-1)).toEqual([5, 5, 5, 7, 7, 12]);
    });
    it('quick sort for sorted array', ()=> {
        let arr = [0, 9, 10, 12, 18, 33];
        expect(sort.QuickSort(arr,0,arr.length-1)).toEqual([0, 9, 10, 12, 18, 33]);
    });
    it('quick sort for empty array', ()=> {
        let arr = [];
        expect(sort.QuickSort(arr,0,arr.length-1)).toEqual(undefined);
    });
    it('quick sort for one index array', ()=> {
        let arr = [5];
        expect(sort.QuickSort(arr,0,arr.length-1)).toEqual(undefined);
    });
})